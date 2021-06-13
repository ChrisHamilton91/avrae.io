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

//#region subcommands
//#region add
const ADD_DC: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "set dc",
  cmdString: "-dc",
  valueType: ValueType.NUMBER,
  desc: "When cast, this spell always uses this DC.",
  example: "",
  ephemeral: false,
};

const ADD_B: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "set bonus",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "When cast, this spell always uses this spell attack bonus.",
  example: "",
  ephemeral: false,
};

const ADD_MOD: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "set modifier",
  cmdString: "-mod",
  valueType: ValueType.NUMBER,
  desc: "When cast, this spell always uses this as the value of its casting stat (usually for healing spells).",
  example: "",
  ephemeral: false,
};

const ADD_NAME: PrimaryArgument = {
  name: "spell name",
  signature: "spell_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the spell to add.",
};

const ADD: Subcommand = {
  name: "Add Spell",
  cmdStrings: ["add"],
  shortDesc: "Adds a spell to the spellbook override.",
  longDesc: "",
  primaryArgs: [ADD_NAME],
  secondaryArgs: [ADD_DC, ADD_B, ADD_MOD],
  subcommands: [],
  examples: [],
};
//#endregion

//#region remove
const REMOVE_NAME: PrimaryArgument = {
  name: "spell name",
  signature: "spell_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "Name of the spell to remove.",
};

const REMOVE: Subcommand = {
  name: "Remove Spell",
  cmdStrings: ["remove"],
  shortDesc: "Removes a spell from the spellbook override.",
  longDesc: "",
  primaryArgs: [REMOVE_NAME],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
//#endregion
//#endregion

//#region command
export const SPELLBOOK: Command = {
  name: "Spellbook",
  cmdStrings: ["spellbook", "sb"],
  shortDesc: "Commands to display a character's known spells and metadata.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [],
  subcommands: [ADD, REMOVE],
  examples: [],
};
//#endregion
