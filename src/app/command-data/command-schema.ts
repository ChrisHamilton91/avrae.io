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
  /** For arguments that accept code or other commands */
  CODE,
  /** For the multiline code argument */
  MULTILINE,
}

/** These are categories to sort out the list of attack arguments */
export const AttackCategories = {
  SPELLCASTING: { name: "Spellcasting", index: 0 },
  TARGETING: { name: "Targeting", index: 1 },
  TO_HIT: { name: "To Hit", index: 2 },
  SAVES: { name: "Saves", index: 3 },
  DAMAGE: { name: "Damage", index: 4 },
  DAMAGE_TYPES: { name: "Damage Types", index: 5 },
  EFFECTS: { name: "Effects", index: 6 },
  COUNTERS: { name: "Counters", index: 7 },
  OTHER: { name: "Other", index: 8 },
};

/** These are categories to sort out the list of effect arguments */
export const EffectCategories = {
  GENERAL: { name: "General", index: 0 },
  ATTACKS: { name: "Attacks", index: 1 },
  RESISTS: { name: "Resists", index: 2 },
};

/** Represents a collection of Avrae commands */
export class CommandModule {
  /** The name of the command module */
  name: string;
  /** A short description of the command module */
  shortDesc: string;
  /** An optional, more in-depth description */
  longDesc?: string;
  /** An array of all commands within the module*/
  commands: Command[];
  constructor(module: CommandModule) {
    this.name = module.name;
    this.shortDesc = module.shortDesc;
    this.longDesc = module.longDesc;
    this.commands = module.commands;
  }
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
  longDesc?: string;
  /** An array of primary arguments - these must be in the proper order in the array */
  primaryArgs?: PrimaryArgument[];
  /** An array of secondary arguments */
  secondaryArgs?: SecondaryArgument[];
  /** An array of subcommands */
  subcommands?: Subcommand[];
  constructor(command: Command) {
    this.name = command.name;
    this.cmdStrings = command.cmdStrings;
    this.shortDesc = command.shortDesc;
    this.longDesc = command.longDesc;
    this.primaryArgs = command.primaryArgs ?? [];
    this.secondaryArgs = command.secondaryArgs ?? [];
    this.subcommands = command.subcommands ?? [];
  }
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
  constructor(arg: Argument) {
    this.name = arg.name;
    this.desc = arg.desc;
    this.valueType = arg.valueType;
  }
}

/**
 * Represents arguments that appear directly after a command or another primary argument.
 * Primary arguments require a value, but no key.
 * Avrae recognizes these arguments by the order that they appear after a command.
 */
export class PrimaryArgument extends Argument {
  /**
   * A shortened version of the argument's name, for use in in command signatures like '![attack|a] [atk_name] [args]'
   * Used as a command string for arguments with valueType: TRUE
   */
  signature: string;
  /** Whether or not this argument is required for the command to execute */
  required: boolean;
  constructor(arg: PrimaryArgument) {
    super(arg);
    this.signature = arg.signature;
    this.required = arg.required;
  }
}

/** Represents the code passed to the multiline command */
export class MultilineArgument extends PrimaryArgument {}

/**
 * Represents arguments that appear after primary arguments, and in any order.
 * Secondary arguments are key-value pairs, or just a boolean key, which implicitly has a value of true.
 * Avrae recognizes these arguments by the their keys, which are stored in the cmdString property.
 */
export class SecondaryArgument extends Argument {
  /** The command string that lets Avrae recognize this argument. ie. The key of the key-value pair. */
  cmdString: string;
  /**
   * Whether or not the argument is ephemeral, meaning an integer can be appended to the argument's key,
   * and the argument will only apply to that many iterations.
   * For example !a dagger -rr 4 -d2 10 rolls four times and applies 10 extra damage to the first two attacks.
   */
  ephemeral: boolean;
  /** Optional category for organization */
  category?: { name: string; index: number };
  constructor(arg: SecondaryArgument) {
    super(arg);
    this.cmdString = arg.cmdString;
    this.ephemeral = arg.ephemeral;
    this.category = arg.category;
  }
}

/** An argument specifically for the attack command */
export class AttackArgument extends SecondaryArgument {
  /** The category of attack argument, for organization */
  category: { name: string; index: number };
}

/**
 * Represents the '-t' argument of the attack command,
 * where nested arguments can be passed into the value.
 * For example -t "OR1|hit" -t "OR2|crit" automatically hits OR1 and crits OR2
 */
export class TargetArgument extends AttackArgument {
  /** An array of arguments that can be passed to this argument, besides the target itself. */
  secondaryArgs: SecondaryArgument[];
  constructor(arg: TargetArgument) {
    super(arg);
    this.secondaryArgs = arg.secondaryArgs;
  }
}

/** An argument specifically for the effect command */
export class EffectArgument extends SecondaryArgument {
  /** The category of effect argument, for organization */
  category: { name: string; index: number };
}
