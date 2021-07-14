import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategories,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

const CHARS: PrimaryArgument = {
  name: "prefix",
  signature: "prefix",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "The character(s) to set the prefix to.",
};

export const PREFIX: Command = {
  name: "Set Prefix",
  cmdStrings: ["prefix"],
  shortDesc: "Sets the bot's prefix for this server.",
  longDesc:
    `Sets the bot's prefix for this server.` +
    `\nYou must have Manage Server permissions or a role called "Bot Admin" to use this command.` +
    `\nDue to a possible Discord conflict, a prefix beginning with / will require confirmation.` +
    `\nForgot the prefix? Reset it with "@Avrae#6944 prefix !".`,
  primaryArgs: [CHARS],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
