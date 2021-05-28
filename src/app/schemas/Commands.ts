/** Represent types of values that can be passed as arguments */
export enum ValueType {
  /** For arguments that implicitly have a value of 'true' (adv, nocrit etc.) */
  TRUE,
  /** For arguments that accept numbers or dice rolls */
  NUMBER,
  /** For arguments that accept strings */
  STRING,
  /** For arguments that accept 'true' or 'false' */
  BOOLEAN,
}

/** These are categories to sort out the large list of arguments that can be passed to the attack command */
export enum Category {
  TARGETING = "Targeting",
  TO_HIT = "To Hit",
  SAVES = "Saves",
  DAMAGE = "Damage",
  DAMAGE_TYPES = "Damage Types",
  EFFECTS = "Effects",
  COUNTERS = "Counters",
  OTHER = "Other",
}

/** Use these enums to check for class types at runtime - necessary for differentiating secondary arguments */
export enum ClassTypes {
  SECONDARY_ARGUMENT,
  ATTACK_ARGUMENT,
  TARGET_ARGUMENT,
}

/** Represents a collection of Avrae commands */
export class CommandModule {
  /** The name of the command module */
  name: string;
  /** A short description of the command module */
  shortDesc: string;
  /** An optional, more in-depth description */
  longDesc: string;
  /** An array of all commands within the module*/
  commands: Command[];
}

/** Represents a top level Avrae command */
export class Command {
  /** A name that lets the user recognize what the command does */
  name: string;
  /** The string needed for Avrae to execute the command */
  cmdStrings: string[];
  /** A short description of the command */
  shortDesc: string;
  /** An optional, more in-depth description */
  longDesc: string;
  /** An array of primary arguments - these must be in the proper order in the array */
  primaryArgs: PrimaryArgument[];
  /** An array of secondary arguments */
  secondaryArgs: SecondaryArgument[];
  /** An array of subcommands */
  subcommands: Subcommand[];
  /**
   * An array of examples showing the user how to use the command.
   * Should display all combinations of primary arguments.
   */
  examples: string[];
}

/**
 * Represents a command that can appear after a top-level command, or another sub-command.
 * Overrides the behaviour of the parent command.
 * This class only exists for organization.
 */
export class Subcommand extends Command {}

/** Represents all types of arguments that can be passed to a command */
export class Argument {
  /** A name that lets the user recognize what the argument is */
  name: string;
  /** A short description of the argument */
  desc: string;
  /** The type of value that is passed to the command */
  valueType: ValueType;
}

/**
 * Represents arguments that appear directly after a command or another primary argument.
 * Primary arguments require a value, but no key.
 * Avrae recognizes these arguments by the order that they appear after a command.
 */
export class PrimaryArgument extends Argument {
  /** A shortened version of the argument's name, for use in in command signatures like '![attack|a] [atk_name] [args]' */
  signature: string;
  /** Whether or not this argument is requied for the command to execute */
  required: boolean;
  /** The default value of the argument if no value is passed by the user */
  default: null | boolean | number | string;
}

/**
 * Represents arguments that appear after primary arguments, and in any order.
 * Secondary arguments are key-value pairs, or just a boolean key, which implicitly has a value of true.
 * Avrae recognizes these arguments by the their keys, which are stored in the cmdString property.
 */
export class SecondaryArgument extends Argument {
  /** For checking the class type at runtime */
  type: ClassTypes;
  /** The command string that lets Avrae recognize this argument. ie. The key of the key-value pair. */
  cmdString: string;
  /** An optional example of how to use this argument */
  example: string;
  /**
   * Whether or not the argument is ephemeral, meaning an integer can be appended to the argument's key,
   * and the argument will only apply to that many iterations.
   * For example !a dagger -rr 4 -d2 10 rolls four times and applies 10 extra damage to the first two attacks.
   */
  ephemeral: boolean;
}

/** An argument specifically for the attack command */
export class AttackArgument extends SecondaryArgument {
  /** The category of attack argument, for organization */
  category: Category;
}

/**
 * Represents the '-t' argument of the attack command,
 * where nested arguments can be passed into the value.
 * For example -t "OR1|hit" -t "OR2|crit" automatically hits OR1 and crits OR2
 */
export class TargetArgument extends AttackArgument {
  /** An array of arguments that can be passed to this argument, besides the target itself. */
  secondaryArgs: SecondaryArgument[];
}
