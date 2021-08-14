import { PrimaryArgument, Subcommand, ValueType } from "../command-schema";

//#region subcommands
const LIST = new Subcommand({
  name: "List Server Tomes",
  cmdStrings: ["list"],
  shortDesc: "Shows what tomes are currently active on the server.",
});

const DELETE_NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the tome to remove.",
});

const DELETE = new Subcommand({
  name: "Remove Server Tome",
  cmdStrings: ["remove", "delete"],
  shortDesc: "Removes a server tome.",
  primaryArgs: [DELETE_NAME],
});
//#endregion

//#region main subcommand
export const TOME_SERVER = new Subcommand({
  name: "Server Options",
  cmdStrings: ["server"],
  shortDesc:
    `Toggles whether the active tome should be viewable by anyone on the server. ` +
    `Requires Manage Server permissions or a role named "Server Brewer" to run.`,
  subcommands: [LIST, DELETE],
});
//#endregion
