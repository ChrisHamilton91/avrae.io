import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategories,
  ValueType,
} from "../../schemas/Commands";

//#region primary arguments
const SECONDS: PrimaryArgument = {
  name: "seconds",
  signature: "seconds",
  required: true,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "Number of seconds to show the message.",
};

const MESSAGE: PrimaryArgument = {
  name: "message",
  signature: "msg",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The message to echo.",
};
//#endregion

//#region command
export const TECHO: Command = {
  name: "Timed Echo",
  cmdStrings: ["techo"],
  shortDesc: "Echos a message, and deletes it after a given number of seconds.",
  longDesc: "",
  primaryArgs: [SECONDS, MESSAGE],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
