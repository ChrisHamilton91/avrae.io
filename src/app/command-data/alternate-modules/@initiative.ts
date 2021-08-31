import { CommandModule } from "../command-schema";
import { ADD } from "../original-modules/init-tracker/add";
import { AOO } from "../original-modules/init-tracker/aoo";
import { ATTACK } from "../original-modules/init-tracker/attack";
import { BEGIN } from "../original-modules/init-tracker/begin";
import { CAST } from "../original-modules/init-tracker/cast";
import { CHECK } from "../original-modules/init-tracker/check";
import { EFFECT } from "../original-modules/init-tracker/effect";
import { END } from "../original-modules/init-tracker/end";
import { HP } from "../original-modules/init-tracker/hp";
import { JOIN } from "../original-modules/init-tracker/join";
import { LIST } from "../original-modules/init-tracker/list";
import { MADD } from "../original-modules/init-tracker/madd";
import { META } from "../original-modules/init-tracker/meta";
import { MOVE } from "../original-modules/init-tracker/move";
import { NEXT } from "../original-modules/init-tracker/next";
import { NOTE } from "../original-modules/init-tracker/note";
import { OPTS } from "../original-modules/init-tracker/opts";
import { PREV } from "../original-modules/init-tracker/prev";
import { RE } from "../original-modules/init-tracker/re";
import { REACT_CAST } from "../original-modules/init-tracker/react-cast";
import { REMOVE } from "../original-modules/init-tracker/remove";
import { REROLL } from "../original-modules/init-tracker/reroll";
import { SAVE } from "../original-modules/init-tracker/save";
import { SKIP } from "../original-modules/init-tracker/skip";
import { STATUS } from "../original-modules/init-tracker/status";
import { THP } from "../original-modules/init-tracker/thp";

export const INITIATIVE = new CommandModule({
  name: "Initiative",
  shortDesc: "Initiative tracking commands. Use !help init for more details.",
  commands: [
    ADD,
    AOO,
    ATTACK,
    BEGIN,
    CAST,
    CHECK,
    EFFECT,
    END,
    HP,
    JOIN,
    LIST,
    MADD,
    META,
    MOVE,
    NEXT,
    NOTE,
    OPTS,
    PREV,
    RE,
    REACT_CAST,
    REMOVE,
    REROLL,
    SAVE,
    SKIP,
    STATUS,
    THP,
  ],
});
