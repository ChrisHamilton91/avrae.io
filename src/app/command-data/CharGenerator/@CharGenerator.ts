import { CommandModule } from "../../schemas/Commands";
import { RANDNAME } from "./Randname";
import { RANDCHAR } from "./Randchar";

export const CHAR_GENERATOR: CommandModule = {
  name: "CharGenerator",
  desc: "Random character generator",
  commands: [RANDCHAR, RANDNAME],
};
