import { CommandModule } from "../../schemas/Commands";
import { ADD } from "./add";
import { AOO } from "./aoo";
import { ATTACK } from "./attack";
import { BEGIN } from "./begin";
import { CAST } from "./cast";
import { CHECK } from "./check";
import { EFFECT } from "./effect";
import { END } from "./end";
import { HP } from "./hp";
import { JOIN } from "./join";
import { LIST } from "./list";
import { MADD } from "./madd";
import { META } from "./meta";
import { MOVE } from "./move";
import { NEXT } from "./next";
import { NOTE } from "./note";
import { OPTS } from "./opts";
import { PREV } from "./prev";
import { RE } from "./re";
import { REACT_CAST } from "./react-cast";
import { REMOVE } from "./remove";
import { REROLL } from "./reroll";
import { SAVE } from "./save";
import { SKIP } from "./skip";
import { STATUS } from "./status";
import { THP } from "./thp";

export const INIT_TRACKER: CommandModule = {
  name: "InitTracker",
  shortDesc: "Initiative tracking commands. Use !help init for more details.",
  longDesc:
    `Initiative tracking commands. Use !help init for more details.` +
    `\nTo use, first start combat in a channel by saying "!init begin".` +
    `\nThen, each combatant should add themselves to the combat with "!init add <MOD> <NAME>".` +
    `\nTo hide a combatant's HP, add them with "!init add <MOD> <NAME> -h".` +
    `\nOnce every combatant is added, each combatant should set their max hp with "!init hp <NAME> max <MAXHP>".` +
    `\nThen, you can proceed through combat with "!init next".` +
    `\nOnce combat ends, end combat with "!init end".` +
    `\nFor more help, the !help command shows applicable arguments for each command.`,
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
};
