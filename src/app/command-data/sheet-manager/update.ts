import { sortByName } from "src/app/command-data/@common/@common-functions";
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

const V: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "show after update",
  cmdString: "-v",
  valueType: ValueType.TRUE,
  desc: "Shows character sheet after update is complete.",
  example: "",
  ephemeral: false,
  category: null,
};

const NOCC: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "no custom counters",
  cmdString: "-nocc",
  valueType: ValueType.TRUE,
  desc: "Do not automatically create custom counters for limited use features.",
  example: "",
  ephemeral: false,
  category: null,
};

export const UPDATE: Command = {
  name: "Update Sheet",
  cmdStrings: ["update"],
  shortDesc: "Updates the current character sheet, preserving all settings.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [V, NOCC].sort(sortByName),
  subcommands: [],
  examples: [],
};
