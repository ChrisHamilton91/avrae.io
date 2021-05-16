import { Command, Subcommand } from "../../schemas/Commands";

const FOLLOW: Subcommand = {
  name: "Follow",
  cmdStrings: ["follow", "subscribe"],
  shortDesc: "Subscribes to the changelog in this channel.",
  longDesc:
    "Subscribes to the changelog in this channel." +
    "You must have Manage Webhooks permissions to run this command.",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};

export const CHANGELOG: Command = {
  name: "Changelog",
  cmdStrings: ["changelog"],
  shortDesc: "Prints a link to the official changelog.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [FOLLOW],
  examples: [],
};
