import { Command, SecondaryArgument, ValueType } from "../../schemas/Commands";

//#region secondary arguments
const TITLE = new SecondaryArgument({
  name: "title",
  cmdString: "-title",
  valueType: ValueType.STRING,
  desc: "The title of the embed.",
  ephemeral: false,
});

const DESC = new SecondaryArgument({
  name: "description",
  cmdString: "-desc",
  valueType: ValueType.STRING,
  desc: "The text description of the embed.",
  ephemeral: false,
});

const THUMB = new SecondaryArgument({
  name: "thumbnail url",
  cmdString: "-thumb",
  valueType: ValueType.STRING,
  desc: "The url of an image to embed as a thumbnail.",
  ephemeral: false,
});

const IMAGE = new SecondaryArgument({
  name: "image url",
  cmdString: "-image",
  valueType: ValueType.STRING,
  desc: "The url of an image to embed.",
  ephemeral: false,
});

const FOOTER = new SecondaryArgument({
  name: "footer",
  cmdString: "-footer",
  valueType: ValueType.STRING,
  desc: "The text of the embed footer.",
  ephemeral: false,
});

const F = new SecondaryArgument({
  name: "create field",
  cmdString: "-f",
  valueType: ValueType.STRING,
  desc:
    `Creates a field in the embed with the given title and text. Syntax: "Field Title|Field Text[|inline]". ` +
    `(e.g. "Donuts|I have 15 donuts|inline" for an inline field, or "Donuts|I have 15 donuts" for one with its own line.)`,
  ephemeral: false,
});

const COLOR = new SecondaryArgument({
  name: "color",
  cmdString: "-color",
  valueType: ValueType.STRING,
  desc: "Color of the embed. Pass in a hex color like #ec1c24",
  ephemeral: false,
});

const T = new SecondaryArgument({
  name: "timeout",
  cmdString: "-t",
  valueType: ValueType.NUMBER,
  desc: "Time to show the embed for in seconds (from 0 to 600).",
  ephemeral: false,
});
//#endregion

//#region command
export const EMBED = new Command({
  name: "Embed",
  cmdStrings: ["embed"],
  shortDesc: "Creates and prints an Embed.",
  secondaryArgs: [TITLE, DESC, THUMB, IMAGE, FOOTER, F, COLOR, T],
});
//#endregion
