import { CommandModule } from "../command-schema";
import { CHARACTER_SHEET } from "./@character-sheet";
import { ADVANCED } from "./@advanced";
import { DICE_ROLLS } from "./@dice-rolls";
import { IMPORT } from "./@import";
import { INITIATIVE } from "./@initiative";
import { LOOKUP } from "./@lookup";
import { MONSTER_ROLLS } from "./@monster-rolls";
import { PLAY_BY_POST } from "./@play-by-post";
import { MISCELLANEOUS } from "./@miscellaneous";

export const ALT_COMMAND_MODULES: CommandModule[] = [
  DICE_ROLLS,
  CHARACTER_SHEET,
  INITIATIVE,
  LOOKUP,
  MONSTER_ROLLS,
  PLAY_BY_POST,
  ADVANCED,
  IMPORT,
  MISCELLANEOUS,
];
