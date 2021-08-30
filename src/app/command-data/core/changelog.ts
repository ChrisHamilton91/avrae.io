import { Command, Subcommand } from "../command-schema";

const FOLLOW = new Subcommand({
  name: "Follow",
  cmdStrings: ["follow", "subscribe"],
  shortDesc: "Subscribes to the changelog in this channel.",
  longDesc:
    "Subscribes to the changelog in this channel." +
    "You must have Manage Webhooks permissions to run this command.",
});

export const CHANGELOG = new Command({
  name: "Changelog",
  cmdStrings: ["changelog"],
  shortDesc: "Prints a link to the official changelog.",
  subcommands: [FOLLOW],
});
