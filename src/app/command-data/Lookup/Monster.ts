import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategory,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

const H: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "hide stat block",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Shows the obfuscated stat block, even if you can see the full stat block.",
  example: "",
  ephemeral: false,
};

const NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the monster to look up.",
};

export const MONSTER: Command = {
  name: "Lookup Monster",
  cmdStrings: ["monster"],
  shortDesc:
    "Looks up a monster. Generally requires a Game Master role to show full stat block. (Roles: GM, DM, Game Master, Dungeon Master).",
  longDesc: "",
  primaryArgs: [NAME],
  secondaryArgs: [H],
  subcommands: [],
  examples: [],
};
