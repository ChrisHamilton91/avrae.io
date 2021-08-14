import {
  Command,
  PrimaryArgument,
  SecondaryArgument,
  ValueType,
} from "../command-schema";

//#region secondary arguments
const H = new SecondaryArgument({
  name: "hide info",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides HP, AC, resistances.",
});

const P = new SecondaryArgument({
  name: "place at",
  cmdString: "-p",
  valueType: ValueType.NUMBER,
  desc: "Changes the combatants' placement in the initiative. Modifies if starts with +/- or sets otherwise.",
});

const NAME = new SecondaryArgument({
  name: "change name",
  cmdString: "-name",
  valueType: ValueType.STRING,
  desc: "Changes the combatants' name.",
});

const CONTROLLER = new SecondaryArgument({
  name: "assign controller",
  cmdString: "-controller",
  valueType: ValueType.STRING,
  desc: "Pings a different person on turn.",
});

const AC = new SecondaryArgument({
  name: "armor class",
  cmdString: "-ac",
  valueType: ValueType.NUMBER,
  desc: "Changes combatants' AC. Modifies if starts with +/- or sets otherwise.",
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

const NEUTRAL = new SecondaryArgument({
  name: "set neutrality",
  cmdString: "-neutral",
  valueType: ValueType.STRING,
  desc: "Removes the combatants' immunity, resistance, or vulnerability to the given damage type.",
});

const GROUP = new SecondaryArgument({
  name: "add to group",
  cmdString: "-group",
  valueType: ValueType.STRING,
  desc: "Adds the combatant to a group. To remove them from a group, pass in 'None'.",
});

const MAX = new SecondaryArgument({
  name: "set max hp",
  cmdString: "-max",
  valueType: ValueType.NUMBER,
  desc: "Changes current maximum HP. Modifies if starts with +/- or sets otherwise.",
});

const HP = new SecondaryArgument({
  name: "set hp",
  cmdString: "-hp",
  valueType: ValueType.NUMBER,
  desc: "Changes current HP. Modifies if starts with +/- or sets otherwise.",
});
//#endregion

//#region primary arguments
const COMBATANT = new PrimaryArgument({
  name: "combatant",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the combatant to edit options.",
});
//#endregion

//#region command
export const OPTS = new Command({
  name: "Combatant Options",
  cmdStrings: ["init opt", "init opts", "i opt", "i opts"],
  shortDesc: "Edits the options of a combatant.",
  primaryArgs: [COMBATANT],
  secondaryArgs: [
    H,
    P,
    NAME,
    CONTROLLER,
    AC,
    RESIST,
    IMMUNE,
    VULN,
    NEUTRAL,
    GROUP,
    MAX,
    HP,
  ],
});
//#endregion
