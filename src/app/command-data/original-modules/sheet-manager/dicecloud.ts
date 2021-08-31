import {
  Command,
  PrimaryArgument,
  SecondaryArgument,
  ValueType,
} from "../../command-schema";

const NOCC = new SecondaryArgument({
  name: "no custom counters",
  cmdString: "-nocc",
  valueType: ValueType.TRUE,
  desc: "Do not automatically create custom counters for limited use features.",
});

const URL = new PrimaryArgument({
  name: "url",
  signature: "url",
  required: true,
  valueType: ValueType.STRING,
  desc: "The url of the dicecloud character sheet.",
});

export const DICECLOUD = new Command({
  name: "Import Dicecloud",
  cmdStrings: ["dicecloud"],
  shortDesc:
    "Loads a character sheet from https://dicecloud.com/, resetting all settings.",
  primaryArgs: [URL],
  secondaryArgs: [NOCC],
});
