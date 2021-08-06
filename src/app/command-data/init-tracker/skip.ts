import { Command, PrimaryArgument, ValueType } from "../../schemas/Commands";

const NUM_ROUNDS = new PrimaryArgument({
  name: "rounds",
  signature: "rounds",
  required: false,
  valueType: ValueType.NUMBER,
  desc: "Number of rounds to skip. Defaults to 1.",
});

export const SKIP = new Command({
  name: "Skip Rounds",
  cmdStrings: [
    "init skipround",
    "init round",
    "init skiprounds",
    "i skipround",
    "i round",
    "i skiprounds",
  ],
  shortDesc: "Skips one or more rounds of initiative.",
  primaryArgs: [NUM_ROUNDS],
});
