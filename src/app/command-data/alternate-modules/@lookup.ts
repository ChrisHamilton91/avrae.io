import { CommandModule } from "../command-schema";
import { BACKGROUND } from "../original-modules/lookup/background";
import { CLASS } from "../original-modules/lookup/class";
import { CLASSFEAT } from "../original-modules/lookup/classfeat";
import { CONDITION } from "../original-modules/lookup/condition";
import { FEAT } from "../original-modules/lookup/feat";
import { ITEM } from "../original-modules/lookup/item";
import { MONIMAGE } from "../original-modules/lookup/monimage";
import { MONSTER } from "../original-modules/lookup/monster";
import { RACE } from "../original-modules/lookup/race";
import { RACEFEAT } from "../original-modules/lookup/racefeat";
import { RULE } from "../original-modules/lookup/rule";
import { SETTINGS } from "../original-modules/lookup/settings";
import { SPELL } from "../original-modules/lookup/spell";
import { SUBCLASS } from "../original-modules/lookup/subclass";

export const LOOKUP = new CommandModule({
  name: "Lookup",
  shortDesc: "Commands to help look up items, status effects, rules, etc.",
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
  ],
});
