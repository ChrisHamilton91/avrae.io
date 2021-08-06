import { Command } from "../../schemas/Commands";

export const ABOUT = new Command({
  name: "About Avrae",
  cmdStrings: ["about", "stats", "info"],
  shortDesc: "Information about the bot",
});
