import { Command, SecondaryArgument, ValueType } from "../../schemas/Commands";

const DYN = new SecondaryArgument({
  name: "dynamic initiative",
  cmdString: "dyn",
  valueType: ValueType.TRUE,
  desc: "Rerolls all initiatives at the start of a round.",
  ephemeral: false,
});

const TURN_NOTIF = new SecondaryArgument({
  name: "notify controller",
  cmdString: "turnnotif",
  valueType: ValueType.TRUE,
  desc: "Notifies the controller of the next combatant in initiative.",
  ephemeral: false,
});

const DEATH_DELETE = new SecondaryArgument({
  name: "disable delete",
  cmdString: "deathdelete",
  valueType: ValueType.TRUE,
  desc: "Disables deleting monsters below 0 hp.",
  ephemeral: false,
});

const NAME = new SecondaryArgument({
  name: "instance name",
  cmdString: "-name",
  valueType: ValueType.STRING,
  desc: "Sets a name for the combat instance.",
  ephemeral: false,
});

export const META = new Command({
  name: "Combat Settings",
  cmdStrings: ["init meta", "init metaset", "i meta", "i metaset"],
  shortDesc: "Changes the settings of the active combat.",
  secondaryArgs: [DYN, TURN_NOTIF, DEATH_DELETE, NAME],
});
