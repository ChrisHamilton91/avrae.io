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

const RESTART: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "reset counter",
  cmdString: "",
  valueType: ValueType.TRUE,
  desc: "Resets the round counter (effectively restarting initiative).",
  example: "",
  ephemeral: false,
  category: null,
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
