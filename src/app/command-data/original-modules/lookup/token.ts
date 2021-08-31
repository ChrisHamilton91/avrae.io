import {
  Command,
  PrimaryArgument,
  SecondaryArgument,
  ValueType,
} from "../../command-schema";

const BORDER = new SecondaryArgument({
  name: "override border",
  cmdString: "-border",
  valueType: ValueType.STRING,
  desc: "(For player token only) Overrides the token border. Values: 'plain' or 'none'",
});

const NAME = new PrimaryArgument({
  name: "monster name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  desc: "Name of a monster to show their token.",
});

export const TOKEN = new Command({
  name: "Show Token",
  cmdStrings: ["token"],
  shortDesc: "Shows a monster or your character's token.",
  primaryArgs: [NAME],
  secondaryArgs: [BORDER],
});
