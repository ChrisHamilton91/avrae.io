import { CommandModule } from "../command-schema";
import { CHARACTER } from "../original-modules/sheet-manager/character";
import { CSETTINGS } from "../original-modules/sheet-manager/csettings";
import { DESC } from "../original-modules/sheet-manager/desc";
import { PORTRAIT } from "../original-modules/sheet-manager/portrait";
import { SHEET } from "../original-modules/sheet-manager/sheet";
import { UPDATE } from "../original-modules/sheet-manager/update";
import { CUSTOM_COUNTER } from "../original-modules/game-track/custom-counter";
import { GAME_DEATHSAVE } from "../original-modules/game-track/game-deathsave";
import { GAME_HP } from "../original-modules/game-track/game-hp";
import { GAME_LR } from "../original-modules/game-track/game-lr";
import { GAME_SR } from "../original-modules/game-track/game-sr";
import { GAME_SS } from "../original-modules/game-track/game-ss";
import { GAME_STATUS } from "../original-modules/game-track/game-status";
import { GAME_THP } from "../original-modules/game-track/game-thp";
import { SPELLBOOK } from "../original-modules/game-track/spellbook";

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
