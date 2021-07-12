import { sortByName } from "src/app/commands-ui/@commonFunctions";
import { CommandModule } from "../../schemas/Commands";
import { BACKGROUND } from "./Background";
import { CLASS } from "./Class";
import { CLASSFEAT } from "./Classfeat";
import { CONDITION } from "./Condition";
import { FEAT } from "./Feat";
import { ITEM } from "./Item";
import { MONIMAGE } from "./Monimage";
import { MONSTER } from "./Monster";
import { RACE } from "./Race";
import { RACEFEAT } from "./Racefeat";
import { RULE } from "./Rule";
import { SETTINGS } from "./Settings";
import { SPELL } from "./Spell";
import { SUBCLASS } from "./Subclass";
import { TOKEN } from "./Token";

export const LOOKUP: CommandModule = {
  name: "Lookup",
  shortDesc: "Commands to help look up items, status effects, rules, etc.",
  longDesc: "",
  commands: [
    BACKGROUND,
    CLASS,
    CLASSFEAT,
    CONDITION,
    FEAT,
    ITEM,
    SETTINGS,
    MONIMAGE,
    MONSTER,
    RACE,
    RACEFEAT,
    RULE,
    SPELL,
    SUBCLASS,
    TOKEN,
  ].sort(sortByName),
};
