import {
  Command,
  PrimaryArgument,
  SecondaryArgument,
  ValueType,
} from "../command-schema";

//#region secondary arguments
const B = new SecondaryArgument({
  name: "bonus",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to the combatant's initiative roll.",
});

const N = new SecondaryArgument({
  name: "add multiple",
  cmdString: "-n",
  valueType: ValueType.NUMBER,
  desc: "Adds more than one of that monster. Supports dice.",
});

const P = new SecondaryArgument({
  name: "place at",
  cmdString: "-p",
  valueType: ValueType.NUMBER,
  desc: "Places combatant at the given modifier, instead of rolling.",
});

const NAME = new SecondaryArgument({
  name: "set name",
  cmdString: "-name",
  valueType: ValueType.NUMBER,
  desc: `Sets the combatant's name. Use "#" for auto-numbering, e.g. "Orc#"`,
});

const H = new SecondaryArgument({
  name: "unhide info",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Unhides HP, AC, and resistances.",
});

const GROUP = new SecondaryArgument({
  name: "add to group",
  cmdString: "-group",
  valueType: ValueType.STRING,
  desc: "Adds the combatant to a given group.",
});

const ROLL_HP = new SecondaryArgument({
  name: "roll hp",
  cmdString: "-rollhp",
  valueType: ValueType.TRUE,
  desc: "Rolls the monsters HP, instead of using the default value.",
});

const HP = new SecondaryArgument({
  name: "set hp",
  cmdString: "-hp",
  valueType: ValueType.NUMBER,
  desc: "Sets starting hit points.",
});

const THP = new SecondaryArgument({
  name: "set thp",
  cmdString: "-thp",
  valueType: ValueType.NUMBER,
  desc: "Sets starting temporary hit points.",
});

const AC = new SecondaryArgument({
  name: "armor class",
  cmdString: "-ac",
  valueType: ValueType.NUMBER,
  desc: "Sets the combatant's armor class (AC)",
});

const NOTE = new SecondaryArgument({
  name: "note",
  cmdString: "-note",
  valueType: ValueType.STRING,
  desc: "Sets the combatant's note.",
});
//#endregion

//#region primary arguments
const MONSTER_NAME = new PrimaryArgument({
  name: "monster name",
  signature: "monster_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "The name of the monster to add to combat.",
});
//#endregion

//#region command
export const MADD = new Command({
  name: "Add Monster",
  cmdStrings: ["init madd", "i madd"],
  shortDesc: "Adds a monster to combat.",
  primaryArgs: [MONSTER_NAME],
  secondaryArgs: [B, N, P, NAME, H, GROUP, ROLL_HP, HP, THP, AC, NOTE],
});
//#endregion
