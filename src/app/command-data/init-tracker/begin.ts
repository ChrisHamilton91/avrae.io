import { Command, SecondaryArgument, ValueType } from "../command-schema";

const DYN = new SecondaryArgument({
  name: "dynamic initiative",
  cmdString: "dyn",
  valueType: ValueType.TRUE,
  desc: "Rerolls all initiatives at the start of a round.",
});

const TURN_NOTIF = new SecondaryArgument({
  name: "notify controller",
  cmdString: "turnnotif",
  valueType: ValueType.TRUE,
  desc: "Notifies the controller of the next combatant in initiative.",
});

const DEATH_DELETE = new SecondaryArgument({
  name: "disable delete",
  cmdString: "deathdelete",
  valueType: ValueType.TRUE,
  desc: "Disables deleting monsters below 0 hp.",
});

const NAME = new SecondaryArgument({
  name: "instance name",
  cmdString: "-name",
  valueType: ValueType.STRING,
  desc: "Sets a name for the combat instance.",
});

export const BEGIN = new Command({
  name: "Begin Initiative",
  cmdStrings: ["init begin", "i begin"],
  shortDesc: "Begins combat.",
  secondaryArgs: [DYN, TURN_NOTIF, DEATH_DELETE, NAME],
});
