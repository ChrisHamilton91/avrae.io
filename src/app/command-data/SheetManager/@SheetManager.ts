import { sortByName } from "src/app/commands-ui/@globals";
import { CommandModule } from "../../schemas/Commands";
import { ATTACK } from "./Attack";
import { BEYOND } from "./Beyond";
import { CHARACTER } from "./Character";
import { CHECK } from "./Check";
import { CSETTINGS } from "./CSettings";
import { DESC } from "./Desc";
import { DICECLOUD } from "./Dicecloud";
import { GSHEET } from "./GSheet";
import { PORTRAIT } from "./Portrait";
import { SAVE } from "./Save";
import { SHEET } from "./Sheet";
import { TRANSFERCHAR } from "./TransferChar";
import { UPDATE } from "./Update";

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
  ].sort(sortByName),
};
