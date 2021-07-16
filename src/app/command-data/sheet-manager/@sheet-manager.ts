import { CommandModule } from "../../schemas/Commands";
import { ATTACK } from "./attack";
import { BEYOND } from "./beyond";
import { CHARACTER } from "./character";
import { CHECK } from "./check";
import { CSETTINGS } from "./csettings";
import { DESC } from "./desc";
import { DICECLOUD } from "./dicecloud";
import { GSHEET } from "./gsheet";
import { PORTRAIT } from "./portrait";
import { SAVE } from "./save";
import { SHEET } from "./sheet";
import { TRANSFERCHAR } from "./transfer-char";
import { UPDATE } from "./update";

export const SHEET_MANAGER: CommandModule = {
  name: "SheetManager",
  shortDesc:
    "Commands to load a character sheet into Avrae, supporting commands to modify the character, and basic macros.",
  longDesc: "",
  commands: [
    ATTACK,
    BEYOND,
    CHARACTER,
    CHECK,
    CSETTINGS,
    DESC,
    DICECLOUD,
    GSHEET,
    PORTRAIT,
    SAVE,
    SHEET,
    TRANSFERCHAR,
    UPDATE,
  ],
};
