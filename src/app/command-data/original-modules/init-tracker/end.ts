import { Command, SecondaryArgument, ValueType } from "../../command-schema";

const FORCE = new SecondaryArgument({
  name: "force",
  cmdString: "-force",
  valueType: ValueType.TRUE,
  desc: "Forces an init to end, in case it's erroring.",
});

export const END = new Command({
  name: "End Combat",
  cmdStrings: ["init end", "i end"],
  shortDesc: "Ends combat in the channel.",
  secondaryArgs: [FORCE],
});
