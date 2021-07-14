import { CommandModule } from "../../schemas/Commands";
import { RANDNAME } from "./randname";
import { RANDCHAR } from "./randchar";
import { sortByName } from "src/app/command-data/@common/@common-functions";

export const CHAR_GENERATOR: CommandModule = {
  name: "CharGenerator",
  shortDesc: "Random character generator",
  longDesc: "",
  commands: [RANDCHAR, RANDNAME].sort(sortByName),
};
