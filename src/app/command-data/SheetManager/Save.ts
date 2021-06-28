import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  AttackCategory,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";
import { SAVE_ARGS } from "../@Common/SaveArguments";

//#region primary arguments
const ABILITY: PrimaryArgument = {
  name: "ability",
  signature: "ability",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The ability of the saving throw. (ie. dexterity, strength, charisma)",
};
//#endregion

//#region command
export const SAVE: Command = {
  name: "Saving Throw",
  cmdStrings: ["s", "save"],
  shortDesc: "Rolls a save for your current active character.",
  longDesc: "",
  primaryArgs: [ABILITY],
  secondaryArgs: SAVE_ARGS,
  subcommands: [],
  examples: [],
};
//#endregion
