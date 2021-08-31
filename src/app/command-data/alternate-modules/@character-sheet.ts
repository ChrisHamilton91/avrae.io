import { CommandModule } from "../command-schema";
import { CHARACTER } from "../sheet-manager/character";
import { CSETTINGS } from "../sheet-manager/csettings";
import { DESC } from "../sheet-manager/desc";
import { PORTRAIT } from "../sheet-manager/portrait";
import { SHEET } from "../sheet-manager/sheet";
import { UPDATE } from "../sheet-manager/update";
import { CUSTOM_COUNTER } from "../game-track/custom-counter";
import { GAME_DEATHSAVE } from "../game-track/game-deathsave";
import { GAME_HP } from "../game-track/game-hp";
import { GAME_LR } from "../game-track/game-lr";
import { GAME_SR } from "../game-track/game-sr";
import { GAME_SS } from "../game-track/game-ss";
import { GAME_STATUS } from "../game-track/game-status";
import { GAME_THP } from "../game-track/game-thp";
import { SPELLBOOK } from "../game-track/spellbook";

export const CHARACTER_SHEET = new CommandModule({
  name: "Character Sheet",
  shortDesc: "Commands to view or edit character stats and info.",
  commands: [
    CHARACTER,
    CSETTINGS,
    DESC,
    PORTRAIT,
    SHEET,
    UPDATE,
    CUSTOM_COUNTER,
    GAME_DEATHSAVE,
    GAME_HP,
    GAME_LR,
    GAME_SR,
    GAME_SS,
    GAME_STATUS,
    GAME_THP,
    SPELLBOOK,
  ],
});
