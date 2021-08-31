import { CommandModule } from "../command-schema";
import { ADD } from "../init-tracker/add";
import { AOO } from "../init-tracker/aoo";
import { ATTACK } from "../init-tracker/attack";
import { BEGIN } from "../init-tracker/begin";
import { CAST } from "../init-tracker/cast";
import { CHECK } from "../init-tracker/check";
import { EFFECT } from "../init-tracker/effect";
import { END } from "../init-tracker/end";
import { HP } from "../init-tracker/hp";
import { JOIN } from "../init-tracker/join";
import { LIST } from "../init-tracker/list";
import { MADD } from "../init-tracker/madd";
import { META } from "../init-tracker/meta";
import { MOVE } from "../init-tracker/move";
import { NEXT } from "../init-tracker/next";
import { NOTE } from "../init-tracker/note";
import { OPTS } from "../init-tracker/opts";
import { PREV } from "../init-tracker/prev";
import { RE } from "../init-tracker/re";
import { REACT_CAST } from "../init-tracker/react-cast";
import { REMOVE } from "../init-tracker/remove";
import { REROLL } from "../init-tracker/reroll";
import { SAVE } from "../init-tracker/save";
import { SKIP } from "../init-tracker/skip";
import { STATUS } from "../init-tracker/status";
import { THP } from "../init-tracker/thp";

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
