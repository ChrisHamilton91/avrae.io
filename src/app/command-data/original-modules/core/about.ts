import { Command } from "../../command-schema";

export const ABOUT = new Command({
  name: "About Avrae",
  cmdStrings: ["about", "stats", "info"],
  shortDesc: "Information about the bot",
});
