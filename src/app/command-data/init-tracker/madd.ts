import { sortByName } from "src/app/commands-ui/@common-functions";
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
const B: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "bonus",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to the combatant's initiative roll.",
  example: "",
  ephemeral: false,
  category: null,
};

const N: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "add multiple",
  cmdString: "-n",
  valueType: ValueType.NUMBER,
  desc: "Adds more than one of that monster. Supports dice.",
  example: "",
  ephemeral: false,
  category: null,
};

const P: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "place at",
  cmdString: "-p",
  valueType: ValueType.NUMBER,
  desc: "Places combatant at the given modifier, instead of rolling.",
  example: "",
  ephemeral: false,
  category: null,
};

const NAME: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "set name",
  cmdString: "-name",
  valueType: ValueType.NUMBER,
  desc: `Sets the combatant's name. Use "#" for auto-numbering, e.g. "Orc#"`,
  example: "",
  ephemeral: false,
  category: null,
};

const H: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "unhide info",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Unhides HP, AC, and resistances.",
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

const ROLL_HP: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "roll hp",
  cmdString: "-rollhp",
  valueType: ValueType.TRUE,
  desc: "Rolls the monsters HP, instead of using the default value.",
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
const MONSTER_NAME: PrimaryArgument = {
  name: "monster name",
  signature: "monster_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the monster to add to combat.",
};
//#endregion

//#region command
export const MADD: Command = {
  name: "Add Monster",
  cmdStrings: ["init madd", "i madd"],
  shortDesc: "Adds a monster to combat.",
  longDesc: "",
  primaryArgs: [MONSTER_NAME],
  secondaryArgs: [B, N, P, NAME, H, GROUP, ROLL_HP, HP, THP, AC, NOTE].sort(
    sortByName
  ),
  subcommands: [],
  examples: [],
};
//#endregion
