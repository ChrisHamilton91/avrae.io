import { Command, PrimaryArgument, ValueType } from "../../command-schema";

const RACE = new PrimaryArgument({
  name: "race",
  signature: "race",
  required: false,
  valueType: ValueType.STRING,
  desc: "Race of the random name",
});

const OPTION = new PrimaryArgument({
  name: "option",
  signature: "option",
  required: false,
  valueType: ValueType.STRING,
  desc: "Specify an option for the given race name. (eg. Male, Female, Clan)",
});

export const RANDNAME = new Command({
  name: "Random Name",
  cmdStrings: ["randname", "name"],
  shortDesc: "Generates a random name, optionally from a given race.",
  primaryArgs: [RACE, OPTION],
});
