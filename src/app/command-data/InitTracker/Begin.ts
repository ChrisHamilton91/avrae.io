import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategory,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

const DYN: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "dynamic initiative",
  cmdString: "dyn",
  valueType: ValueType.TRUE,
  desc: "Rerolls all initiatives at the start of a round.",
  example: "",
  ephemeral: false,
};

const TURN_NOTIF: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "notify controller",
  cmdString: "turnnotif",
  valueType: ValueType.TRUE,
  desc: "Notifies the controller of the next combatant in initiative.",
  example: "",
  ephemeral: false,
};

const DEATH_DELETE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "disable delete",
  cmdString: "deathdelete",
  valueType: ValueType.TRUE,
  desc: "Disables deleting monsters below 0 hp.",
  example: "",
  ephemeral: false,
};

const NAME: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "instance name",
  cmdString: "-name",
  valueType: ValueType.STRING,
  desc: "Sets a name for the combat instance.",
  example: "",
  ephemeral: false,
};

export const BEGIN: Command = {
  name: "Begin Initiative",
  cmdStrings: ["init begin", "i begin"],
  shortDesc: "Begins combat.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [DYN, TURN_NOTIF, DEATH_DELETE, NAME],
  subcommands: [],
  examples: [],
};
