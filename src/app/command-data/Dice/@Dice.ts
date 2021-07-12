import { sortByName } from "src/app/commands-ui/@commonFunctions";
import { CommandModule } from "../../schemas/Commands";
import { ITERROLL } from "./Iterroll";
import { MONATTACK } from "./Monattack";
import { MONCAST } from "./Moncast";
import { MONCHECK } from "./Moncheck";
import { MONSAVE } from "./Monsave";
import { MULTIROLL } from "./Multiroll";
import { ROLL } from "./Roll";

export const DICE: CommandModule = {
  name: "Dice",
  shortDesc: "Dice and math related commands. Also has rolls for monsters.",
  longDesc: "",
  commands: [
    ITERROLL,
    MONATTACK,
    MONCAST,
    MONCHECK,
    MONSAVE,
    MULTIROLL,
    ROLL,
  ].sort(sortByName),
};
