import {
  Command,
  Subcommand,
  PrimaryArgument,
  SecondaryArgument,
  AttackArgument,
  TargetArgument,
  Category,
  ValueType,
  ClassTypes,
} from "../../schemas/Commands";

//#region secondary arguments
const COLOR: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "embed color",
  cmdString: "color",
  valueType: ValueType.STRING,
  desc: "Colors all embeds this color. Pass in a hex color like #ec1c24",
  example: "",
  ephemeral: false,
};

const CRITON: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "crit on",
  cmdString: "criton",
  valueType: ValueType.NUMBER,
  desc: "Makes attacks crit on something other than a 20.",
  example: "",
  ephemeral: false,
};

const REROLL: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "re-roll",
  cmdString: "reroll",
  valueType: ValueType.NUMBER,
  desc: "Defines a number that a check will automatically reroll on, for cases such as Halfling Luck.",
  example: "",
  ephemeral: false,
};

const SRSLOTS: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "short rest spells",
  cmdString: "srslots",
  valueType: ValueType.BOOLEAN,
  desc: "Enables / disables whether spell slots reset on a Short Rest.",
  example: "",
  ephemeral: false,
};

const EMBEDIMAGE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "embed image",
  cmdString: "embedimage",
  valueType: ValueType.BOOLEAN,
  desc: "Enables / disables whether a character's image is automatically embedded.",
  example: "",
  ephemeral: false,
};

const CRITDICE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "add crit dice",
  cmdString: "critdice",
  valueType: ValueType.NUMBER,
  desc: "Adds additional damage dice to roll on critical attacks, on top of the doubled dice.",
  example: "",
  ephemeral: false,
};

const TALENT: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "reliable talent",
  cmdString: "talent",
  valueType: ValueType.BOOLEAN,
  desc: "Enables / disables whether to apply a rogue's Reliable Talent on checks you're proficient with.",
  example: "",
  ephemeral: false,
};
//#endregion

//#region command
export const CSETTINGS: Command = {
  name: "Character Settings",
  cmdStrings: ["csettings"],
  shortDesc:
    "Updates personalization settings for the currently active character.",
  longDesc: "",
  primaryArgs: [],
  secondaryArgs: [COLOR, CRITON, REROLL, SRSLOTS, EMBEDIMAGE, CRITDICE, TALENT],
  subcommands: [],
  examples: [],
};
//#endregion
