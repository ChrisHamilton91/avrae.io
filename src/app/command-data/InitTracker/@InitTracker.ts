import { sortByName } from "src/app/commands-ui/@commonFunctions";
import { CommandModule } from "../../schemas/Commands";
import { ADD } from "./Add";
import { AOO } from "./AOO";
import { ATTACK } from "./Attack";
import { BEGIN } from "./Begin";
import { CAST } from "./Cast";
import { CHECK } from "./Check";
import { EFFECT } from "./Effect";
import { END } from "./End";
import { HP } from "./HP";
import { JOIN } from "./Join";
import { LIST } from "./List";
import { MADD } from "./MAdd";
import { META } from "./Meta";
import { MOVE } from "./Move";
import { NEXT } from "./Next";
import { NOTE } from "./Note";
import { OPTS } from "./Opts";
import { PREV } from "./Prev";
import { RE } from "./Re";
import { REACT_CAST } from "./ReactCast";
import { REMOVE } from "./Remove";
import { REROLL } from "./Reroll";
import { SAVE } from "./Save";
import { SKIP } from "./Skip";
import { STATUS } from "./Status";
import { THP } from "./THP";

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
  ].sort(sortByName),
};
