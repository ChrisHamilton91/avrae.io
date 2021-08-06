import { Command, PrimaryArgument, ValueType } from "../../schemas/Commands";

const LEVEL = new PrimaryArgument({
  name: "character level",
  signature: "level",
  required: false,
  valueType: ValueType.NUMBER,
  desc: "Level of the rolled character. If not set, will just roll 4d6kh3 6 times.",
});

export const RANDCHAR = new Command({
  name: "Random Character",
  cmdStrings: ["randchar"],
  shortDesc: "Rolls up a random 5e character.",
  primaryArgs: [LEVEL],
});
