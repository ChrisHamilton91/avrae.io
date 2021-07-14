import { sortByName } from "src/app/command-data/@common/@common-functions";
import { CommandModule } from "../../schemas/Commands";
import { CAST } from "./cast";
import { CUSTOM_COUNTER } from "./custom-counter";
import { GAME_DEATHSAVE } from "./game-deathsave";
import { GAME_HP } from "./game-hp";
import { GAME_LR } from "./game-lr";
import { GAME_SR } from "./game-sr";
import { GAME_SS } from "./game-ss";
import { GAME_STATUS } from "./game-status";
import { GAME_THP } from "./game-thp";
import { SPELLBOOK } from "./spellbook";

export const GAMETRACK: CommandModule = {
  name: "GameTrack",
  shortDesc: "Commands to help track game resources.",
  longDesc: "",
  commands: [
    CAST,
    CUSTOM_COUNTER,
    GAME_DEATHSAVE,
    GAME_HP,
    GAME_LR,
    GAME_SR,
    GAME_SS,
    GAME_STATUS,
    GAME_THP,
    SPELLBOOK,
  ].sort(sortByName),
};
