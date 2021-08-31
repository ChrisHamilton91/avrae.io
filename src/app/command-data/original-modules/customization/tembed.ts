import {
  Command,
  PrimaryArgument,
  SecondaryArgument,
  ValueType,
} from "../../command-schema";

//#region primary arguments
const STRING = new PrimaryArgument({
  name: "test alias",
  signature: "test_alias",
  required: true,
  valueType: ValueType.CODE,
  desc: "The commands to test as if they were an alias.",
});
//#endregion

//#region secondary arguments
const TITLE = new SecondaryArgument({
  name: "title",
  cmdString: "-title",
  valueType: ValueType.STRING,
  desc: "The title of the embed.",
});

const DESC = new SecondaryArgument({
  name: "description",
  cmdString: "-desc",
  valueType: ValueType.STRING,
  desc: "The text description of the embed.",
});

const THUMB = new SecondaryArgument({
  name: "thumbnail url",
  cmdString: "-thumb",
  valueType: ValueType.STRING,
  desc: "The url of an image to embed as a thumbnail.",
});

const IMAGE = new SecondaryArgument({
  name: "image url",
  cmdString: "-image",
  valueType: ValueType.STRING,
  desc: "The url of an image to embed.",
});

const FOOTER = new SecondaryArgument({
  name: "footer",
  cmdString: "-footer",
  valueType: ValueType.STRING,
  desc: "The text of the embed footer.",
});

const F = new SecondaryArgument({
  name: "create field",
  cmdString: "-f",
  valueType: ValueType.STRING,
  desc:
    `Creates a field in the embed with the given title and text. Syntax: "Field Title|Field Text[|inline]". ` +
    `(e.g. "Donuts|I have 15 donuts|inline" for an inline field, or "Donuts|I have 15 donuts" for one with its own line.)`,
});

const COLOR = new SecondaryArgument({
  name: "color",
  cmdString: "-color",
  valueType: ValueType.STRING,
  desc: "Color of the embed. Pass in a hex color like #da291c",
});

const T = new SecondaryArgument({
  name: "timeout",
  cmdString: "-t",
  valueType: ValueType.NUMBER,
  desc: "Time to show the embed for in seconds (from 0 to 600).",
});
//#endregion

//#region command
export const TEMBED = new Command({
  name: "Test Embed",
  cmdStrings: ["tembed"],
  shortDesc:
    "Parses a string as if it were in an alias, for testing, then creates and prints an Embed.",
  primaryArgs: [STRING],
  secondaryArgs: [TITLE, DESC, THUMB, IMAGE, FOOTER, F, COLOR, T],
});
//#endregion
