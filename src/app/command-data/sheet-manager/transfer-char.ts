import { Command, PrimaryArgument, ValueType } from "../../schemas/Commands";

const USER = new PrimaryArgument({
  name: "user",
  signature: "user",
  required: true,
  valueType: ValueType.STRING,
  desc: "The user to transfer the character to.",
});

export const TRANSFERCHAR = new Command({
  name: "Transfer Character",
  cmdStrings: ["transferchar"],
  shortDesc: "Gives a copy of the active character to another user.",
  primaryArgs: [USER],
});
