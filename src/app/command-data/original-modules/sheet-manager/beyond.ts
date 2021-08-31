import {
  Command,
  PrimaryArgument,
  SecondaryArgument,
  ValueType,
} from "../../command-schema";

//#region secondary arguments
const NOCC = new SecondaryArgument({
  name: "no custom counters",
  cmdString: "-nocc",
  valueType: ValueType.TRUE,
  desc: "Do not automatically create custom counters for limited use features.",
});
//#endregion

//#region primary arguments
const URL = new PrimaryArgument({
  name: "url",
  signature: "url",
  required: true,
  valueType: ValueType.STRING,
  desc: "The url of the D&D beyond character sheet",
});
//#endregion

//#region command
export const BEYOND = new Command({
  name: "Import D&D Beyond",
  cmdStrings: ["beyond"],
  shortDesc:
    "Loads a character sheet from https://www.dndbeyond.com/, resetting all settings.",
  primaryArgs: [URL],
  secondaryArgs: [NOCC],
});
//#endregion
