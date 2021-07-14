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
  desc: "Sends the list in a private message.",
  example: "",
  ephemeral: false,
  category: null,
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
