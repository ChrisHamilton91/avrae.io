import { sortByName } from "src/app/commands-ui/@commonFunctions";
import { CommandModule } from "../../schemas/Commands";
import { CAST } from "./Cast";
import { CUSTOM_COUNTER } from "./CustomCounter";
import { GAME_DEATHSAVE } from "./GameDeathsave";
import { GAME_HP } from "./GameHp";
import { GAME_LR } from "./GameLR";
import { GAME_SR } from "./GameSR";
import { GAME_SS } from "./GameSS";
import { GAME_STATUS } from "./GameStatus";
import { GAME_THP } from "./GameTHP";
import { SPELLBOOK } from "./Spellbook";

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
