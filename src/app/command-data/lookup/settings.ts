import { Command, SecondaryArgument, ValueType } from "../../schemas/Commands";

const REQ_DM = new SecondaryArgument({
  name: "require dm for monsters",
  cmdString: "req_dm_monster",
  valueType: ValueType.BOOLEAN,
  desc: "Requires a Game Master role to show a full monster stat block.",
  ephemeral: false,
});

const PM_DM = new SecondaryArgument({
  name: "pm the dm",
  cmdString: "pm_dm",
  valueType: ValueType.BOOLEAN,
  desc: "PMs a DM the full monster stat block instead of outputting to chat, if req_dm_monster is True.",
  ephemeral: false,
});

const PM_RESULT = new SecondaryArgument({
  name: "pm result",
  cmdString: "pm_dm",
  valueType: ValueType.BOOLEAN,
  desc: "PMs the result of the lookup to reduce spam.",
  ephemeral: false,
});

export const SETTINGS = new Command({
  name: "Change Settings",
  cmdStrings: ["lookup_settings"],
  shortDesc: "Changes settings for the lookup module.",
  secondaryArgs: [REQ_DM, PM_DM, PM_RESULT],
});
