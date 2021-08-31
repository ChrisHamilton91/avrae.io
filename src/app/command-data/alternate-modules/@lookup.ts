import { CommandModule } from "../command-schema";
import { BACKGROUND } from "../lookup/background";
import { CLASS } from "../lookup/class";
import { CLASSFEAT } from "../lookup/classfeat";
import { CONDITION } from "../lookup/condition";
import { FEAT } from "../lookup/feat";
import { ITEM } from "../lookup/item";
import { MONIMAGE } from "../lookup/monimage";
import { MONSTER } from "../lookup/monster";
import { RACE } from "../lookup/race";
import { RACEFEAT } from "../lookup/racefeat";
import { RULE } from "../lookup/rule";
import { SETTINGS } from "../lookup/settings";
import { SPELL } from "../lookup/spell";
import { SUBCLASS } from "../lookup/subclass";

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
