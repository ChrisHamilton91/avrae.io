import { sortByName } from "src/app/commands-ui/@globals";
import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategories,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

//#region secondary arguments
const H: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "hide info",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides HP, AC, resistances, and attack list.",
  example: "",
  ephemeral: false,
  category: null,
};

const P: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "place at",
  cmdString: "-p",
  valueType: ValueType.TRUE,
  desc: "Places combatant at the given modifier, instead of rolling.",
  example: "",
  ephemeral: false,
  category: null,
};

const CONTROLLER: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "assign controller",
  cmdString: "-controller",
  valueType: ValueType.STRING,
  desc: "Pings a different person on turn.",
  example: "",
  ephemeral: false,
  category: null,
};

const GROUP: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "add to group",
  cmdString: "-group",
  valueType: ValueType.STRING,
  desc: "Adds the combatant to a given group.",
  example: "",
  ephemeral: false,
  category: null,
};

const HP: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "set hp",
  cmdString: "-hp",
  valueType: ValueType.NUMBER,
  desc: "Sets starting hit points.",
  example: "",
  ephemeral: false,
  category: null,
};

const THP: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "set thp",
  cmdString: "-thp",
  valueType: ValueType.NUMBER,
  desc: "Sets starting temporary hit points.",
  example: "",
  ephemeral: false,
  category: null,
};

const AC: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "armor class",
  cmdString: "-ac",
  valueType: ValueType.NUMBER,
  desc: "Sets the combatant's armor class (AC)",
  example: "",
  ephemeral: false,
  category: null,
};

const RESIST: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "set resistance",
  cmdString: "-resist",
  valueType: ValueType.STRING,
  desc: "Gives the combatant resistance to the given damage type.",
  example: "",
  ephemeral: false,
  category: null,
};

const IMMUNE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "set immunity",
  cmdString: "-immune",
  valueType: ValueType.STRING,
  desc: "Gives the combatant immunity to the given damage type.",
  example: "",
  ephemeral: false,
  category: null,
};

const VULN: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "set vulnerability",
  cmdString: "-vuln",
  valueType: ValueType.STRING,
  desc: "Gives the combatant vulnerability to the given damage type.",
  example: "",
  ephemeral: false,
  category: null,
};

const ADV: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "advantage",
  cmdString: "adv",
  valueType: ValueType.TRUE,
  desc: " Rolls the initiative check with advantage.",
  example: "",
  ephemeral: false,
  category: null,
};

const DIS: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "disadvantage",
  cmdString: "dis",
  valueType: ValueType.TRUE,
  desc: " Rolls the initiative check with disadvantage.",
  example: "",
  ephemeral: false,
  category: null,
};

const NOTE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "note",
  cmdString: "-note",
  valueType: ValueType.STRING,
  desc: "Sets the combatant's note.",
  example: "",
  ephemeral: false,
  category: null,
};
//#endregion

//#region primary arguments
const MODIFIER: PrimaryArgument = {
  name: "modifier",
  signature: "modifier",
  required: true,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "Initiative modifier.",
};

const NAME: PrimaryArgument = {
  name: "name",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Combatant's name.",
};
//#endregion

//#region command
export const ADD: Command = {
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
  ].sort(sortByName),
  subcommands: [],
  examples: [],
};
//#endregion
