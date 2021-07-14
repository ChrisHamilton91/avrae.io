import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategories,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

const PRIVATE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "private message",
  cmdString: "private",
  valueType: ValueType.TRUE,
  desc: "PMs the controller of the combatant a more detailed status.",
  example: "",
  ephemeral: false,
  category: null,
};

const NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the combatant or group.",
};

export const STATUS: Command = {
  name: "Combatant Status",
  cmdStrings: ["init status", "i status"],
  shortDesc: "Gets the status of a combatant or group.",
  longDesc: "",
  primaryArgs: [NAME],
  secondaryArgs: [PRIVATE],
  subcommands: [],
  examples: [],
};
