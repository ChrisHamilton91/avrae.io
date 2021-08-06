import { Command, PrimaryArgument, ValueType } from "../../schemas/Commands";

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the class feature to look up.",
});

export const CLASSFEAT = new Command({
  name: "Lookup Class Feature",
  cmdStrings: ["classfeat"],
  shortDesc: "Looks up a class feature.",
  primaryArgs: [NAME],
});
