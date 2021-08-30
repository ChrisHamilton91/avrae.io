import { Command, SecondaryArgument, ValueType } from "../command-schema";

const V = new SecondaryArgument({
  name: "show after update",
  cmdString: "-v",
  valueType: ValueType.TRUE,
  desc: "Shows character sheet after update is complete.",
});

const NOCC = new SecondaryArgument({
  name: "no custom counters",
  cmdString: "-nocc",
  valueType: ValueType.TRUE,
  desc: "Do not automatically create custom counters for limited use features.",
});

export const UPDATE = new Command({
  name: "Update Sheet",
  cmdStrings: ["update"],
  shortDesc: "Updates the current character sheet, preserving all settings.",
  secondaryArgs: [V, NOCC],
});
