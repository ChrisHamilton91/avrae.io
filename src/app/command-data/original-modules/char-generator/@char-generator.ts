import { CommandModule } from "../../command-schema";
import { RANDCHAR } from "./randchar";
import { RANDNAME } from "./randname";

export const CHAR_GENERATOR = new CommandModule({
  name: "CharGenerator",
  shortDesc: "Random character generator",
  commands: [RANDCHAR, RANDNAME],
});
