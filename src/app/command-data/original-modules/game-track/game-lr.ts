import { Command, SecondaryArgument, ValueType } from "../../command-schema";

const H = new SecondaryArgument({
  name: "hide output",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides the character summary output.",
});

export const GAME_LR = new Command({
  name: "Long Rest",
  cmdStrings: ["g longrest", "game longrest", "g lr", "game lr"],
  shortDesc: "Performs a long rest, resetting applicable counters.",
  secondaryArgs: [H],
});
