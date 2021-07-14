import { sortByName } from "src/app/command-data/@common/@common-functions";
import { CommandModule } from "../../schemas/Commands";
import { ITERROLL } from "./iterroll";
import { MONATTACK } from "./monattack";
import { MONCAST } from "./moncast";
import { MONCHECK } from "./moncheck";
import { MONSAVE } from "./monsave";
import { MULTIROLL } from "./multiroll";
import { ROLL } from "./roll";

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
