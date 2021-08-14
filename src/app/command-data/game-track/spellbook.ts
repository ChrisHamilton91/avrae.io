import {
  Command,
  PrimaryArgument,
  SecondaryArgument,
  Subcommand,
  ValueType,
} from "../command-schema";

//#region subcommands
//#region add
const ADD_DC = new SecondaryArgument({
  name: "set dc",
  cmdString: "-dc",
  valueType: ValueType.NUMBER,
  desc: "When cast, this spell always uses this DC.",
});

const ADD_B = new SecondaryArgument({
  name: "set bonus",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "When cast, this spell always uses this spell attack bonus.",
});

const ADD_MOD = new SecondaryArgument({
  name: "set modifier",
  cmdString: "-mod",
  valueType: ValueType.NUMBER,
  desc: "When cast, this spell always uses this as the value of its casting stat (usually for healing spells).",
});

const ADD_NAME = new PrimaryArgument({
  name: "spell name",
  signature: "spell_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the spell to add.",
});

const ADD = new Subcommand({
  name: "Add Spell",
  cmdStrings: ["add"],
  shortDesc: "Adds a spell to the spellbook override.",
  primaryArgs: [ADD_NAME],
  secondaryArgs: [ADD_DC, ADD_B, ADD_MOD],
});
//#endregion

//#region remove
const REMOVE_NAME = new PrimaryArgument({
  name: "spell name",
  signature: "spell_name",
  required: true,
  valueType: ValueType.STRING,
  desc: "Name of the spell to remove.",
});

const REMOVE = new Subcommand({
  name: "Remove Spell",
  cmdStrings: ["remove"],
  shortDesc: "Removes a spell from the spellbook override.",
  primaryArgs: [REMOVE_NAME],
});
//#endregion
//#endregion

//#region command
export const SPELLBOOK = new Command({
  name: "Spellbook",
  cmdStrings: ["spellbook", "sb"],
  shortDesc: "Commands to display a character's known spells and metadata.",
  subcommands: [ADD, REMOVE],
});
//#endregion
