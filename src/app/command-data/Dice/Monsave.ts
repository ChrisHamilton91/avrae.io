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
import { SAVE_ARGS } from "../@Common/SaveArguments";

const NAME: PrimaryArgument = {
  name: "name",
  signature: "ability",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the monster making the save.",
};

const ABILITY: PrimaryArgument = {
  name: "ability",
  signature: "ability",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The ability of the saving throw. (ie. dexterity, strength, charisma).",
};

export const MONSAVE: Command = {
  name: "Monster Save",
  cmdStrings: ["monsave", "ms", "monster_save"],
  shortDesc: "Rolls a save for a monster.",
  longDesc: "",
  primaryArgs: [NAME, ABILITY],
  secondaryArgs: SAVE_ARGS,
  subcommands: [],
  examples: [],
};
