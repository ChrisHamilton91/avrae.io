import { Command, SecondaryArgument, ValueType } from "../../schemas/Commands";

//#region secondary arguments
const COLOR = new SecondaryArgument({
  name: "embed color",
  cmdString: "color",
  valueType: ValueType.STRING,
  desc: "Colors all embeds this color. Pass in a hex color like #ec1c24",
  ephemeral: false,
});

const CRITON = new SecondaryArgument({
  name: "crit on",
  cmdString: "criton",
  valueType: ValueType.NUMBER,
  desc: "Makes attacks crit on something other than a 20.",
  ephemeral: false,
});

const REROLL = new SecondaryArgument({
  name: "re-roll",
  cmdString: "reroll",
  valueType: ValueType.NUMBER,
  desc: "Defines a number that a check will automatically reroll on, for cases such as Halfling Luck.",
  ephemeral: false,
});

const SRSLOTS = new SecondaryArgument({
  name: "short rest spells",
  cmdString: "srslots",
  valueType: ValueType.BOOLEAN,
  desc: "Enables / disables whether spell slots reset on a Short Rest.",
  ephemeral: false,
});

const EMBEDIMAGE = new SecondaryArgument({
  name: "embed image",
  cmdString: "embedimage",
  valueType: ValueType.BOOLEAN,
  desc: "Enables / disables whether a character's image is automatically embedded.",
  ephemeral: false,
});

const CRITDICE = new SecondaryArgument({
  name: "add crit dice",
  cmdString: "critdice",
  valueType: ValueType.NUMBER,
  desc: "Adds additional damage dice to roll on critical attacks, on top of the doubled dice.",
  ephemeral: false,
});

const TALENT = new SecondaryArgument({
  name: "reliable talent",
  cmdString: "talent",
  valueType: ValueType.BOOLEAN,
  desc: "Enables / disables whether to apply a rogue's Reliable Talent on checks you're proficient with.",
  ephemeral: false,
});
//#endregion

//#region command
export const CSETTINGS = new Command({
  name: "Character Settings",
  cmdStrings: ["csettings"],
  shortDesc:
    "Updates personalization settings for the currently active character.",
  secondaryArgs: [COLOR, CRITON, REROLL, SRSLOTS, EMBEDIMAGE, CRITDICE, TALENT],
});
//#endregion
