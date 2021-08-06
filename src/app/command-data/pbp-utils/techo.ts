import { Command, PrimaryArgument, ValueType } from "../../schemas/Commands";

//#region primary arguments
const SECONDS = new PrimaryArgument({
  name: "seconds",
  signature: "seconds",
  required: true,
  valueType: ValueType.NUMBER,
  desc: "Number of seconds to show the message.",
});

const MESSAGE = new PrimaryArgument({
  name: "message",
  signature: "msg",
  required: true,
  valueType: ValueType.STRING,
  desc: "The message to echo.",
});
//#endregion

//#region command
export const TECHO = new Command({
  name: "Timed Echo",
  cmdStrings: ["techo"],
  shortDesc: "Echos a message, and deletes it after a given number of seconds.",
  primaryArgs: [SECONDS, MESSAGE],
});
//#endregion
