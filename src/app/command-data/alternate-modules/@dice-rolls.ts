import { CommandModule } from "../command-schema";
import { ATTACK } from "../original-modules/sheet-manager/attack";
import { CHECK } from "../original-modules/sheet-manager/check";
import { SAVE } from "../original-modules/sheet-manager/save";
import { ITERROLL } from "../original-modules/dice/iterroll";
import { MULTIROLL } from "../original-modules/dice/multiroll";
import { ROLL } from "../original-modules/dice/roll";
import { GAME_DEATHSAVE } from "../original-modules/game-track/game-deathsave";
import { CAST } from "../original-modules/game-track/cast";

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
