import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  Category,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

const BORDER: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "override border",
  cmdString: "-border",
  valueType: ValueType.STRING,
  desc: "(For player token only) Overrides the token border. Values: 'plain' or 'none'",
  example: "",
  ephemeral: false,
};

const NAME: PrimaryArgument = {
  name: "monster name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of a monster to show their token.",
};

export const TOKEN: Command = {
  name: "Show Token",
  cmdStrings: ["token"],
  shortDesc: "Shows a monster or your character's token.",
  longDesc: "",
  primaryArgs: [NAME],
  secondaryArgs: [BORDER],
  subcommands: [],
  examples: [],
};
