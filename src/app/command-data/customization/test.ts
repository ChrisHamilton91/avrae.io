import { Command, PrimaryArgument, ValueType } from "../../schemas/Commands";

const STRING = new PrimaryArgument({
  name: "test alias",
  signature: "test_alias",
  required: true,
  valueType: ValueType.CODE,
  desc: "The commands to test as if they were an alias.",
});

export const TEST = new Command({
  name: "Test Alias",
  cmdStrings: ["test"],
  shortDesc: "Parses a string as if it were in an alias, for testing.",
  primaryArgs: [STRING],
});
