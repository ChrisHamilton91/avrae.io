import { sortByName } from "src/app/command-data/@common/@common-functions";
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

const REQ_DM: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "require dm for monsters",
  cmdString: "req_dm_monster",
  valueType: ValueType.BOOLEAN,
  desc: "Requires a Game Master role to show a full monster stat block.",
  example: "",
  ephemeral: false,
  category: null,
};

const PM_DM: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "pm the dm",
  cmdString: "pm_dm",
  valueType: ValueType.BOOLEAN,
  desc: "PMs a DM the full monster stat block instead of outputting to chat, if req_dm_monster is True.",
  example: "",
  ephemeral: false,
  category: null,
};

const PM_RESULT: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "pm result",
  cmdString: "pm_dm",
  valueType: ValueType.BOOLEAN,
  desc: "PMs the result of the lookup to reduce spam.",
  example: "",
  ephemeral: false,
  category: null,
};

export const SETTINGS: Command = {
  name: "Change Settings",
  cmdStrings: ["lookup_settings"],
  shortDesc: "Changes settings for the lookup module.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [REQ_DM, PM_DM, PM_RESULT].sort(sortByName),
  subcommands: [],
  examples: [],
};
