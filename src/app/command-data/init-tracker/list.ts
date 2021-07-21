import { Command, SecondaryArgument, ValueType } from "../../schemas/Commands";

const PRIVATE = new SecondaryArgument({
  name: "private message",
  cmdString: "private",
  valueType: ValueType.TRUE,
  desc: "Sends the list in a private message.",
  ephemeral: false,
});

export const LIST = new Command({
  name: "List Combatants",
  cmdStrings: ["init list", "init summary", "i list", "i summary"],
  shortDesc: "Lists the combatants.",
  secondaryArgs: [PRIVATE],
});
