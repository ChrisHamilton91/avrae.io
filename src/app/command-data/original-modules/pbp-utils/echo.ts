import { Command, PrimaryArgument, ValueType } from "../../command-schema";

const MESSAGE = new PrimaryArgument({
  name: "message",
  signature: "msg",
  required: true,
  valueType: ValueType.STRING,
  desc: "The message to echo.",
});

export const ECHO = new Command({
  name: "Echo",
  cmdStrings: ["echo"],
  shortDesc: "Echos a message.",
  primaryArgs: [MESSAGE],
});
