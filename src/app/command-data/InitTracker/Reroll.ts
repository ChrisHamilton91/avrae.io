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

const RESTART: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "reset counter",
  cmdString: "",
  valueType: ValueType.TRUE,
  desc: "Resets the round counter (effectively restarting initiative).",
  example: "",
  ephemeral: false,
};

export const REROLL: Command = {
  name: "Reroll Initiative",
  cmdStrings: ["init reroll", "init shuffle", "i reroll", "i shuffle"],
  shortDesc:
    "Rerolls initiative for all combatants, and starts a new round of combat.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [RESTART],
  subcommands: [],
  examples: [],
};
