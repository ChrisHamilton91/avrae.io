import { Command, SecondaryArgument, ValueType } from "../../schemas/Commands";

const H = new SecondaryArgument({
  name: "hide output",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides the character summary output.",
  ephemeral: false,
});

export const GAME_SR = new Command({
  name: "Short Rest",
  cmdStrings: ["g shortrest", "game shortrest", "g sr", "game sr"],
  shortDesc: "Performs a short rest, resetting applicable counters.",
  secondaryArgs: [H],
});
