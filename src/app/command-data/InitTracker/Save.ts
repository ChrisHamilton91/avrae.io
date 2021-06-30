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

const ABILITY: PrimaryArgument = {
  name: "ability",
  signature: "ability",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The ability of the saving throw. (ie. dexterity, strength, charisma)",
};

export const SAVE: Command = {
  name: "Saving Throw",
  cmdStrings: ["init save", "init s", "i save", "i s"],
  shortDesc: "Rolls an ability save as the current combatant.",
  longDesc: "",
  primaryArgs: [ABILITY],
  secondaryArgs: SAVE_ARGS,
  subcommands: [],
  examples: [],
};
