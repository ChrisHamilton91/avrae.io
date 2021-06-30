import { sortByName } from "../commands-ui/globals";
import { CommandModule } from "../schemas/Commands";
import { CHAR_GENERATOR } from "./CharGenerator/@CharGenerator";
import { CORE } from "./Core/@Core";
import { CUSTOMIZATION } from "./Customization/@Customization";
import { DICE } from "./Dice/@Dice";
import { GAMELOG } from "./GameLog/@GameLog";
import { GAMETRACK } from "./GameTrack/@GameTrack";
import { HOMEBREW } from "./Homebrew/@Homebrew";
import { INIT_TRACKER } from "./InitTracker/@InitTracker";
import { LOOKUP } from "./Lookup/@Lookup";
import { PBP_UTILS } from "./PBPUtils/@PBPUtils";
import { SHEET_MANAGER } from "./SheetManager/@SheetManager";
import { TUTORIALS } from "./Tutorials/@Tutorials";

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
].sort(sortByName);
