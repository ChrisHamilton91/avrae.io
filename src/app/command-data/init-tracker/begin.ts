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

const DYN: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "dynamic initiative",
  cmdString: "dyn",
  valueType: ValueType.TRUE,
  desc: "Rerolls all initiatives at the start of a round.",
  example: "",
  ephemeral: false,
  category: null,
};

const TURN_NOTIF: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "notify controller",
  cmdString: "turnnotif",
  valueType: ValueType.TRUE,
  desc: "Notifies the controller of the next combatant in initiative.",
  example: "",
  ephemeral: false,
  category: null,
};

const DEATH_DELETE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "disable delete",
  cmdString: "deathdelete",
  valueType: ValueType.TRUE,
  desc: "Disables deleting monsters below 0 hp.",
  example: "",
  ephemeral: false,
  category: null,
};

const NAME: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "instance name",
  cmdString: "-name",
  valueType: ValueType.STRING,
  desc: "Sets a name for the combat instance.",
  example: "",
  ephemeral: false,
  category: null,
};

export const BEGIN: Command = {
  name: "Begin Initiative",
  cmdStrings: ["init begin", "i begin"],
  shortDesc: "Begins combat.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [DYN, TURN_NOTIF, DEATH_DELETE, NAME].sort(sortByName),
  subcommands: [],
  examples: [],
};
