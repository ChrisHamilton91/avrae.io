import { CommandModule } from "../command-schema";
import { ATTACK } from "../sheet-manager/attack";
import { CHECK } from "../sheet-manager/check";
import { SAVE } from "../sheet-manager/save";
import { ITERROLL } from "../dice/iterroll";
import { MULTIROLL } from "../dice/multiroll";
import { ROLL } from "../dice/roll";
import { GAME_DEATHSAVE } from "../game-track/game-deathsave";
import { CAST } from "../game-track/cast";

export const DICE_ROLLS = new CommandModule({
  name: "Dice Rolls",
  shortDesc: "Basic dice rolls. Can be done outside of initiative.",
  commands: [
    ATTACK,
    CHECK,
    SAVE,
    ITERROLL,
    MULTIROLL,
    ROLL,
    GAME_DEATHSAVE,
    CAST,
  ],
});
