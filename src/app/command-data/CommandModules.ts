import { CommandModule } from "../schemas/Commands";
import { CHAR_GENERATOR } from "./CharGenerator/@CharGenerator";
import { CORE } from "./Core/@Core";
import { SHEET_MANAGER } from "./SheetManager/@SheetManager";

export const CUSTOMIZATION: CommandModule = {
  name: "Customization",
  desc: "Commands to help streamline using the bot.",
  commands: [],
};

export const DICE: CommandModule = {
  name: "Dice",
  desc: "Dice and math related commands.",
  commands: [],
};

export const GAMELOG: CommandModule = {
  name: "GameLog",
  desc: "Link your D&D Beyond campaign to a Discord channel to see players' rolls in real time!",
  commands: [],
};

export const GAMETRACK: CommandModule = {
  name: "GameTrack",
  desc: "Commands to help track game resources.",
  commands: [],
};

export const HOMEBREW: CommandModule = {
  name: "Homebrew",
  desc: "Commands to manage homebrew in Avrae.",
  commands: [],
};

export const INIT_TRACKER: CommandModule = {
  name: "InitTracker",
  desc:
    `Initiative tracking commands. Use !help init for more details.` +
    `\nTo use, first start combat in a channel by saying "!init begin".` +
    `\nThen, each combatant should add themselves to the combat with "!init add <MOD> <NAME>".` +
    `\nTo hide a combatant's HP, add them with "!init add <MOD> <NAME> -h".` +
    `\nOnce every combatant is added, each combatant should set their max hp with "!init hp <NAME> max <MAXHP>".` +
    `\nThen, you can proceed through combat with "!init next".` +
    `\nOnce combat ends, end combat with "!init end".` +
    `\nFor more help, the !help command shows applicable arguments for each command.`,
  commands: [],
};

export const LOOKUP: CommandModule = {
  name: "Lookup",
  desc: "Commands to help look up items, status effects, rules, etc.",
  commands: [],
};

export const PBP_UTILS: CommandModule = {
  name: "PBPUtils",
  desc: "Commands to help streamline playing-by-post over Discord.",
  commands: [],
};

export const TUTORIALS: CommandModule = {
  name: "Tutorials",
  desc: "Commands to help learn how to use the bot.",
  commands: [],
};

export const COMMAND_MODULES: CommandModule[] = [
  CHAR_GENERATOR,
  CORE,
  CUSTOMIZATION,
  DICE,
  GAMELOG,
  GAMETRACK,
  HOMEBREW,
  INIT_TRACKER,
  LOOKUP,
  PBP_UTILS,
  SHEET_MANAGER,
  TUTORIALS,
];
