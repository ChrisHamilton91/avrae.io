import { Command, SecondaryArgument, ValueType } from "../../command-schema";

//#region secondary arguments
const ADV = new SecondaryArgument({
  name: "advantage",
  cmdString: "adv",
  valueType: ValueType.TRUE,
  desc: "Give advantage to the initiative roll.",
});

const DIS = new SecondaryArgument({
  name: "disadvantage",
  cmdString: "dis",
  valueType: ValueType.TRUE,
  desc: "Give disadvantage to the initiative roll.",
});

const B = new SecondaryArgument({
  name: "bonus",
  cmdString: "-b",
  valueType: ValueType.NUMBER,
  desc: "Adds a bonus to the combatants' Initiative roll.",
});

const PHRASE = new SecondaryArgument({
  name: "flavor text",
  cmdString: "-phrase",
  valueType: ValueType.STRING,
  desc: "Adds flavor text.",
});

const THUMB = new SecondaryArgument({
  name: "thumbnail",
  cmdString: "-thumb",
  valueType: ValueType.STRING,
  desc: "Pass in a url to add a thumbnail to the initiative roll.",
});

const P = new SecondaryArgument({
  name: "place at",
  cmdString: "-p",
  valueType: ValueType.NUMBER,
  desc: "Places combatant at the given value, instead of rolling.",
});

const H = new SecondaryArgument({
  name: "hide roll",
  cmdString: "-h",
  valueType: ValueType.TRUE,
  desc: "Hides HP, AC, Resists, etc.",
});

const GROUP = new SecondaryArgument({
  name: "add to group",
  cmdString: "-group",
  valueType: ValueType.STRING,
  desc: "Adds the combatant to a group.",
});

const NOTE = new SecondaryArgument({
  name: "add note",
  cmdString: "-note",
  valueType: ValueType.STRING,
  desc: "Sets the combatant's note.",
});
//#endregion

//#region command
export const JOIN = new Command({
  name: "Join Combat",
  cmdStrings: [
    "init join",
    "init cadd",
    "init dcadd",
    "i join",
    "i cadd",
    "i dcadd",
  ],
  shortDesc:
    "Adds the current active character to combat. A character must be loaded through the SheetManager module first.",
  secondaryArgs: [ADV, DIS, B, PHRASE, THUMB, P, H, GROUP, NOTE],
});
//#endregion
