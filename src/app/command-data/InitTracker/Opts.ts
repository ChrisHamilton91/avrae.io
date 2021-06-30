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
  desc: "Hides HP, AC, resistances.",
  example: "",
  ephemeral: false,
  category: null,
};

const P: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "place at",
  cmdString: "-p",
  valueType: ValueType.NUMBER,
  desc: "Changes the combatants' placement in the initiative. Modifies if starts with +/- or sets otherwise.",
  example: "",
  ephemeral: false,
  category: null,
};

const NAME: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "change name",
  cmdString: "-name",
  valueType: ValueType.STRING,
  desc: "Changes the combatants' name.",
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

const AC: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "armor class",
  cmdString: "-ac",
  valueType: ValueType.NUMBER,
  desc: "Changes combatants' AC. Modifies if starts with +/- or sets otherwise.",
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

const NEUTRAL: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "set neutrality",
  cmdString: "-neutral",
  valueType: ValueType.STRING,
  desc: "Removes the combatants' immunity, resistance, or vulnerability to the given damage type.",
  example: "",
  ephemeral: false,
  category: null,
};

const GROUP: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "add to group",
  cmdString: "-group",
  valueType: ValueType.STRING,
  desc: "Adds the combatant to a group. To remove them from a group, pass in 'None'.",
  example: "",
  ephemeral: false,
  category: null,
};

const MAX: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "set max hp",
  cmdString: "-max",
  valueType: ValueType.NUMBER,
  desc: "Changes current maximum HP. Modifies if starts with +/- or sets otherwise.",
  example: "",
  ephemeral: false,
  category: null,
};

const HP: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "set hp",
  cmdString: "-hp",
  valueType: ValueType.NUMBER,
  desc: "Changes current HP. Modifies if starts with +/- or sets otherwise.",
  example: "",
  ephemeral: false,
  category: null,
};
//#endregion

//#region primary arguments
const COMBATANT: PrimaryArgument = {
  name: "combatant",
  signature: "name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the combatant to edit options.",
};
//#endregion

//#region command
export const OPTS: Command = {
  name: "Combatant Options",
  cmdStrings: ["init opt", "init opts", "i opt", "i opts"],
  shortDesc: "Edits the options of a combatant.",
  longDesc: "",
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
  subcommands: [],
  examples: [],
};
//#endregion
