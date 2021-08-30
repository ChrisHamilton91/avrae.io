import { Command } from "../command-schema";

export const GAME_STATUS = new Command({
  name: "Status",
  cmdStrings: ["g status", "game status", "g summary", "game summary"],
  shortDesc: "Prints the status of the current active character.",
});
