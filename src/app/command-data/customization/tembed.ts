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

//#region primary arguments
const STRING: PrimaryArgument = {
  name: "test alias",
  signature: "test_alias",
  required: true,
  valueType: ValueType.STRING,
  default: null,
  desc: "The commands to test as if they were an alias.",
};
//#endregion

//#region secondary arguments
const TITLE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "title",
  cmdString: "-title",
  valueType: ValueType.STRING,
  desc: "The title of the embed.",
  example: "",
  ephemeral: false,
  category: null,
};

const DESC: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "description",
  cmdString: "-desc",
  valueType: ValueType.STRING,
  desc: "The text description of the embed.",
  example: "",
  ephemeral: false,
  category: null,
};

const THUMB: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "thumbnail url",
  cmdString: "-thumb",
  valueType: ValueType.STRING,
  desc: "The url of an image to embed as a thumbnail.",
  example: "",
  ephemeral: false,
  category: null,
};

const IMAGE: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "image url",
  cmdString: "-image",
  valueType: ValueType.STRING,
  desc: "The url of an image to embed.",
  example: "",
  ephemeral: false,
  category: null,
};

const FOOTER: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "footer",
  cmdString: "-footer",
  valueType: ValueType.STRING,
  desc: "The text of the embed footer.",
  example: "",
  ephemeral: false,
  category: null,
};

const F: SecondaryArgument = {
  type: ClassTypes.ATTACK_ARGUMENT,
  name: "create field",
  cmdString: "-f",
  valueType: ValueType.STRING,
  desc:
    `Creates a field in the embed with the given title and text. Syntax: "Field Title|Field Text[|inline]". ` +
    `(e.g. "Donuts|I have 15 donuts|inline" for an inline field, or "Donuts|I have 15 donuts" for one with its own line.)`,
  example: "",
  ephemeral: false,
  category: null,
};

const COLOR: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "color",
  cmdString: "-color",
  valueType: ValueType.STRING,
  desc: "Color of the embed. Pass in a hex color like #da291c",
  example: "",
  ephemeral: false,
  category: null,
};

const T: SecondaryArgument = {
  type: ClassTypes.SECONDARY_ARGUMENT,
  name: "timeout",
  cmdString: "-t",
  valueType: ValueType.NUMBER,
  desc: "Time to show the embed for in seconds (from 0 to 600).",
  example: "",
  ephemeral: false,
  category: null,
};
//#endregion

//#region command
export const TEMBED: Command = {
  name: "Test Embed",
  cmdStrings: ["tembed"],
  shortDesc:
    "Parses a string as if it were in an alias, for testing, then creates and prints an Embed.",
  longDesc: "",
  primaryArgs: [STRING],
  secondaryArgs: [TITLE, DESC, THUMB, IMAGE, FOOTER, F, COLOR, T].sort(
    sortByName
  ),
  subcommands: [],
  examples: [],
};
//#endregion
