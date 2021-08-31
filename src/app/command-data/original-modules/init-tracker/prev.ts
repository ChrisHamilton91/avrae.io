import { Command } from "../../command-schema";

export const PREV = new Command({
  name: "Previous Turn",
  cmdStrings: [
    "init prev",
    "init previous",
    "init rewind",
    "i prev",
    "i previous",
    "i rewind",
  ],
  shortDesc: "Moves to the previous turn in initiative order.",
});
