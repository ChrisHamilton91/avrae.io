import { CommandModule } from "../../schemas/Commands";
import { BACKGROUND } from "./background";
import { CLASS } from "./class";
import { CLASSFEAT } from "./classfeat";
import { CONDITION } from "./condition";
import { FEAT } from "./feat";
import { ITEM } from "./item";
import { MONIMAGE } from "./monimage";
import { MONSTER } from "./monster";
import { RACE } from "./race";
import { RACEFEAT } from "./racefeat";
import { RULE } from "./rule";
import { SETTINGS } from "./settings";
import { SPELL } from "./spell";
import { SUBCLASS } from "./subclass";
import { TOKEN } from "./token";

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
  ],
};
