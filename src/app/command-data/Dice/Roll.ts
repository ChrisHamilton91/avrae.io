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

const ROLLSTR: PrimaryArgument = {
  name: "roll string",
  signature: "rollStr",
  required: true,
  valueType: ValueType.NUMBER,
  default: null,
  desc: "The roll string (ie. 1d6, 2d4+3, 2d10kh1).",
};

export const ROLL: Command = {
  name: "Dice Roll",
  cmdStrings: ["roll", "r"],
  shortDesc:
    "Roll any combination of dice in the XdY format. Multiple rolls can be added together as an equation. " +
    "Standard Math operators and Parentheses can be used: () + - / *. Roll also accepts adv and dis for Advantage and Disadvantage. " +
    "Rolls can also be tagged with [text] for informational purposes. Any text after the roll will assign the name of the roll.",
  longDesc: "",
  primaryArgs: [ROLLSTR],
  secondaryArgs: [],
  subcommands: [],
  examples: [],
};
