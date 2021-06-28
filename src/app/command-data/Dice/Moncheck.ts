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
import { CHECK_ARGS } from "../@Common/CheckArguments";

//#region secondary arguments
// const SECONDARY_ARG: SecondaryArgument = {
//   type: ClassTypes.SECONDARY_ARGUMENT,
//   name: "",
//   cmdString: "",
//   valueType: ValueType.STRING,
//   desc: "",
//   example: "",
// ephemeral: false,
// }
//#endregion

//#region primary arguments
const NAME: PrimaryArgument = {
  name: "monster name",
  signature: "monster_name",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The name of the monster making the check.",
};

const ABILITY: PrimaryArgument = {
  name: "ability",
  signature: "ability",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The ability being checked.",
};
//#endregion

//#region command
export const MONCHECK: Command = {
  name: "Monster Ability Check",
  cmdStrings: ["moncheck", "mc", "monster_check"],
  shortDesc: "Rolls a check for a monster.",
  longDesc: "",
  primaryArgs: [NAME, ABILITY],
  secondaryArgs: CHECK_ARGS,
  subcommands: [],
  examples: [],
};
//#endregion
