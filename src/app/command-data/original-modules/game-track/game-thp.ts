import { Command, PrimaryArgument, ValueType } from "../../command-schema";

const THP = new PrimaryArgument({
  name: "temporary HP",
  signature: "thp",
  required: false,
  valueType: ValueType.NUMBER,
  desc: "Amount of temporary HP. Positive numbers will set thp to the value, negative numbers will subtract the value from current thp.",
});

export const GAME_THP = new Command({
  name: "Temporary HP",
  cmdStrings: ["g thp", "game thp"],
  shortDesc: "Modifies the temporary HP of the current active character.",
  primaryArgs: [THP],
});
