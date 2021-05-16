import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  Category,
  ValueType,
} from "../../schemas/Commands";

const V: SecondaryArgument = {
  name: "show after update",
  cmdString: "-v",
  valueType: ValueType.TRUE,
  desc: "Shows character sheet after update is complete.",
  example: "",
  ephemeral: false,
};

const NOCC: SecondaryArgument = {
  name: "no custom counters",
  cmdString: "-nocc",
  valueType: ValueType.TRUE,
  desc: "Do not automatically create custom counters for limited use features.",
  example: "",
  ephemeral: false,
};

export const UPDATE: Command = {
  name: "Update Sheet",
  cmdStrings: ["update"],
  shortDesc: "Updates the current character sheet, preserving all settings.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [V, NOCC],
  subcommands: [],
  examples: [],
};
