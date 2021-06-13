import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  Category,
  ValueType,
} from "../../schemas/Commands";

const URL: PrimaryArgument = {
  name: "url",
  signature: "url",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The url of the gsheet character sheet.",
};

export const GSHEET: Command = {
  name: "Import GSheet",
  cmdStrings: ["gsheet"],
  shortDesc:
    "Loads a character sheet from http://gsheet2.avrae.io (auto) or http://gsheet.avrae.io (manual), resetting all settings.",
  longDesc:
    "Loads a character sheet from http://gsheet2.avrae.io (auto) or http://gsheet.avrae.io (manual), resetting all settings." +
    "\nThe sheet must be shared with Avrae for this to work." +
    "\nAvrae's google account is `avrae-320@avrae-bot.iam.gserviceaccount.com`.",
  primaryArgs: [URL],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
