import { Command, PrimaryArgument, ValueType } from "../command-schema";

const URL = new PrimaryArgument({
  name: "url",
  signature: "url",
  required: true,
  valueType: ValueType.STRING,
  desc: "The url of the gsheet character sheet.",
});

export const GSHEET = new Command({
  name: "Import GSheet",
  cmdStrings: ["gsheet"],
  shortDesc:
    "Loads a character sheet from http://gsheet2.avrae.io (auto) or http://gsheet.avrae.io (manual), resetting all settings.",
  longDesc:
    "Loads a character sheet from http://gsheet2.avrae.io (auto) or http://gsheet.avrae.io (manual), resetting all settings." +
    "\nThe sheet must be shared with Avrae for this to work." +
    "\nAvrae's google account is `avrae-320@avrae-bot.iam.gserviceaccount.com`.",
  primaryArgs: [URL],
});
