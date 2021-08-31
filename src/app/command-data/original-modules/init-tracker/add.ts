import {
  Command,
  PrimaryArgument,
  SecondaryArgument,
  ValueType,
} from "../../command-schema";

//#region secondary arguments
const H = new SecondaryArgument({
  name: "hide info",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides HP, AC, resistances, and attack list.",
});

const P = new SecondaryArgument({
  name: "place at",
  cmdString: "-p",
  valueType: ValueType.TRUE,
  desc: "Places combatant at the given modifier, instead of rolling.",
});

const CONTROLLER = new SecondaryArgument({
  name: "assign controller",
  cmdString: "-controller",
  valueType: ValueType.STRING,
  desc: "Pings a different person on turn.",
});

const GROUP = new SecondaryArgument({
  name: "add to group",
  cmdString: "-group",
  valueType: ValueType.STRING,
  desc: "Adds the combatant to a given group.",
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

const RESIST = new SecondaryArgument({
  name: "set resistance",
  cmdString: "-resist",
  valueType: ValueType.STRING,
  desc: "Gives the combatant resistance to the given damage type.",
});

const IMMUNE = new SecondaryArgument({
  name: "set immunity",
  cmdString: "-immune",
  valueType: ValueType.STRING,
  desc: "Gives the combatant immunity to the given damage type.",
});

const VULN = new SecondaryArgument({
  name: "set vulnerability",
  cmdString: "-vuln",
  valueType: ValueType.STRING,
  desc: "Gives the combatant vulnerability to the given damage type.",
});

const ADV = new SecondaryArgument({
  name: "advantage",
  cmdString: "adv",
  valueType: ValueType.TRUE,
  desc: " Rolls the initiative check with advantage.",
});

const DIS = new SecondaryArgument({
  name: "disadvantage",
  cmdString: "dis",
  valueType: ValueType.TRUE,
  desc: " Rolls the initiative check with disadvantage.",
});

const NOTE = new SecondaryArgument({
  name: "note",
  cmdString: "-note",
  valueType: ValueType.STRING,
  desc: "Sets the combatant's note.",
});
//#endregion

//#region primary arguments
const MODIFIER = new PrimaryArgument({
  name: "modifier",
  signature: "modifier",
  required: true,
  valueType: ValueType.NUMBER,
  desc: "Initiative modifier.",
});

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Combatant's name.",
});
//#endregion

//#region command
export const ADD = new Command({
  name: "Add Generic Combatant",
  cmdStrings: ["init add", "i add"],
  shortDesc: "Adds a generic combatant to the initiative order.",
  longDesc:
    "Adds a generic combatant to the initiative order." +
    "\nGeneric combatants have a 10 in every stat and +0 to every modifier." +
    "\nIf a character is set up with the SheetManager module, you can use !init join instead." +
    "\nIf you are adding monsters to combat, you can use !init madd instead.",
  primaryArgs: [MODIFIER, NAME],
  secondaryArgs: [
    H,
    P,
    CONTROLLER,
    GROUP,
    HP,
    THP,
    AC,
    RESIST,
    IMMUNE,
    VULN,
    ADV,
    DIS,
    NOTE,
  ],
});
//#endregion
