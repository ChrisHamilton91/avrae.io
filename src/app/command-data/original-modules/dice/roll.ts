import {
  Command,
  PrimaryArgument,
  SecondaryArgument,
  ValueType,
} from "../../command-schema";

const ROLLSTR = new PrimaryArgument({
  name: "roll string",
  signature: "rollStr",
  required: true,
  valueType: ValueType.DICE,
  desc: "The roll string (ie. 1d6, 2d4+3, 2d10kh1).",
});

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  desc: "The name of the dice roll.",
});

const ADV = new SecondaryArgument({
  name: "advantage",
  cmdString: "adv",
  valueType: ValueType.TRUE,
  desc: "Give advantage to a 1d20 roll (Only valid if the first roll is 1d20)",
});

const DIS = new SecondaryArgument({
  name: "disadvantage",
  cmdString: "dis",
  valueType: ValueType.TRUE,
  desc: "Give disadvantage to a 1d20 roll (Only valid if the first roll is 1d20)",
});

export const ROLL = new Command({
  name: "Dice Roll",
  cmdStrings: ["roll", "r"],
  shortDesc:
    "Roll any combination of dice in the XdY format. Multiple rolls can be added together as an equation.",
  primaryArgs: [ROLLSTR, NAME],
  secondaryArgs: [ADV, DIS],
});
