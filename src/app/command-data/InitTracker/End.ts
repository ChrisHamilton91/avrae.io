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

const FORCE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "force",
  cmdString: "-force",
  valueType: ValueType.TRUE,
  desc: "Forces an init to end, in case it's erroring.",
  example: "",
  ephemeral: false,
};

export const END: Command = {
  name: "End Combat",
  cmdStrings: ["init end", "i end"],
  shortDesc: "Ends combat in the channel.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [FORCE],
  subcommands: [],
  examples: [],
};
