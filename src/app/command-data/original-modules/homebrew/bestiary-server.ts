import { PrimaryArgument, Subcommand, ValueType } from "../../command-schema";

//#region subcommands
const LIST = new Subcommand({
  name: "List Server Bestiaries",
  cmdStrings: ["list"],
  shortDesc: "Shows what bestiaries are currently active on the server.",
});

const DELETE_NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the bestiary to remove.",
});

const DELETE = new Subcommand({
  name: "Remove Server Bestiary",
  cmdStrings: ["remove", "delete"],
  shortDesc: "Removes a server bestiary.",
  primaryArgs: [DELETE_NAME],
});
//#endregion

//#region main subcommand
export const BESTIARY_SERVER = new Subcommand({
  name: "Server Options",
  cmdStrings: ["server"],
  shortDesc:
    `Toggles whether the active bestiary should be viewable by anyone on the server. ` +
    `Requires Manage Server permissions or a role named "Server Brewer" to run.`,
  subcommands: [LIST, DELETE],
});
//#endregion
