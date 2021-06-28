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

const PRIVATE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "private message",
  cmdString: "private",
  valueType: ValueType.TRUE,
  desc: "Sends the list in a private message.",
  example: "",
  ephemeral: false,
};

export const LIST: Command = {
  name: "List Combatants",
  cmdStrings: ["init list", "init summary", "i list", "i summary"],
  shortDesc: "Lists the combatants.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [PRIVATE],
  subcommands: [],
  examples: [],
};
