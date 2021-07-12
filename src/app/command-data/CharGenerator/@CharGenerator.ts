import { CommandModule } from "../../schemas/Commands";
import { RANDNAME } from "./Randname";
import { RANDCHAR } from "./Randchar";
import { sortByName } from "src/app/commands-ui/@commonFunctions";

export const CHAR_GENERATOR: CommandModule = {
  name: "CharGenerator",
  shortDesc: "Random character generator",
  longDesc: "",
  commands: [RANDCHAR, RANDNAME].sort(sortByName),
};
