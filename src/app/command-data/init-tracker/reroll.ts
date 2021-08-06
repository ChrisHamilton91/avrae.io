import { Command, SecondaryArgument, ValueType } from "../../schemas/Commands";

const RESTART = new SecondaryArgument({
  name: "reset counter",
  cmdString: "-restart",
  valueType: ValueType.TRUE,
  desc: "Resets the round counter (effectively restarting initiative).",
  ephemeral: false,
});

export const REROLL = new Command({
  name: "Reroll Initiative",
  cmdStrings: ["init reroll", "init shuffle", "i reroll", "i shuffle"],
  shortDesc:
    "Rerolls initiative for all combatants, and starts a new round of combat.",
  secondaryArgs: [RESTART],
});
