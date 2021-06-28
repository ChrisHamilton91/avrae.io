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

//#region secondary arguments
const NOCC: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "no custom counters",
  cmdString: "-nocc",
  valueType: ValueType.TRUE,
  desc: "Do not automatically create custom counters for limited use features.",
  example: "",
  ephemeral: false,
};
//#endregion

//#region primary arguments
const URL: PrimaryArgument = {
  name: "url",
  signature: "url",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The url of the D&D beyond character sheet",
};
//#endregion

//#region command
export const BEYOND: Command = {
  name: "Import D&D Beyond",
  cmdStrings: ["beyond"],
  shortDesc:
    "Loads a character sheet from https://www.dndbeyond.com/, resetting all settings.",
  longDesc: "",
  primaryArgs: [URL],
  secondaryArgs: [NOCC],
  subcommands: [],
  examples: [],
};
//#endregion
