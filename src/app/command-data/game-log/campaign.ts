import {
  Command,
  PrimaryArgument,
  Subcommand,
  ValueType,
} from "../../schemas/Commands";

//#region primary arguments
const CAMPAIGN_LINK = new PrimaryArgument({
  name: "campaign link",
  signature: "campaign_link",
  required: false,
  valueType: ValueType.STRING,
  desc: "The link to a D&D Beyond campaign.",
});
//#endregion

//#region subcommands
const LIST = new Subcommand({
  name: "List Campaigns",
  cmdStrings: ["list"],
  shortDesc: "Lists all campaigns connected to this channel.",
});

const REMOVE_NAME = new PrimaryArgument({
  name: "campaign name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name of the campaign to remove.",
});

const REMOVE = new Subcommand({
  name: "Remove Campaign",
  cmdStrings: ["remove"],
  shortDesc: "Unlinks a campaign from this channel.",
  longDesc:
    "Unlinks a campaign from this channel." +
    "\nYou must be the DM of the campaign or have Manage Server permissions to remove it from a channel.",
  primaryArgs: [REMOVE_NAME],
});
//#endregion

//#region command
export const CAMPAIGN = new Command({
  name: "Link Campaign",
  cmdStrings: ["campaign"],
  shortDesc:
    "Links a D&D Beyond campaign to this channel, displaying rolls made on players' character sheets in real time.",
  longDesc:
    "Links a D&D Beyond campaign to this channel, displaying rolls made on players' character sheets in real time." +
    "\nYou must be the DM of the campaign to link it to a channel." +
    "\nNot seeing a player's rolls? Link their D&D Beyond and Discord accounts at https://www.dndbeyond.com/account, and check with the `!ddb` command!",
  primaryArgs: [CAMPAIGN_LINK],
  subcommands: [LIST, REMOVE],
});
//#endregion
