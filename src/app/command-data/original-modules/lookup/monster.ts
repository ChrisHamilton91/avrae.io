import {
  Command,
  PrimaryArgument,
  SecondaryArgument,
  ValueType,
} from "../../command-schema";

const H = new SecondaryArgument({
  name: "hide stat block",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Shows the obfuscated stat block, even if you can see the full stat block.",
});

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the monster to look up.",
});

export const MONSTER = new Command({
  name: "Lookup Monster",
  cmdStrings: ["monster"],
  shortDesc:
    "Looks up a monster. Generally requires a Game Master role to show full stat block. (Roles: GM, DM, Game Master, Dungeon Master).",
  primaryArgs: [NAME],
  secondaryArgs: [H],
});
