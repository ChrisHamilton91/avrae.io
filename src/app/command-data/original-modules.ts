import { CommandModule } from "./command-schema";
import { CHAR_GENERATOR } from "./char-generator/@char-generator";
import { CORE } from "./core/@core";
import { CUSTOMIZATION } from "./customization/@customization";
import { DICE } from "./dice/@dice";
import { GAMELOG } from "./game-log/@gameLog";
import { GAMETRACK } from "./game-track/@game-track";
import { HOMEBREW } from "./homebrew/@homebrew";
import { INIT_TRACKER } from "./init-tracker/@init-tracker";
import { LOOKUP } from "./lookup/@lookup";
import { PBP_UTILS } from "./pbp-utils/@pbp-utils";
import { SHEET_MANAGER } from "./sheet-manager/@sheet-manager";
import { TUTORIALS } from "./tutorials/@tutorials";

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
