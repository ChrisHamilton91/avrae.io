import {
  Command,
  PrimaryArgument,
  SecondaryArgument,
  ValueType,
} from "../command-schema";

const PRIVATE = new SecondaryArgument({
  name: "private message",
  cmdString: "private",
  valueType: ValueType.TRUE,
  desc: "PMs the controller of the combatant a more detailed status.",
  ephemeral: false,
});

const NAME = new PrimaryArgument({
  name: "name",
  signature: "name",
  required: false,
  valueType: ValueType.STRING,
  desc: "Name of the combatant or group.",
});

export const STATUS = new Command({
  name: "Combatant Status",
  cmdStrings: ["init status", "i status"],
  shortDesc: "Gets the status of a combatant or group.",
  primaryArgs: [NAME],
  secondaryArgs: [PRIVATE],
});
