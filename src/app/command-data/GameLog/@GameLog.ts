import { CommandModule } from "../../schemas/Commands";
import { CAMPAIGN } from "./Campaign";

export const GAMELOG: CommandModule = {
  name: "GameLog",
  shortDesc:
    "Link your D&D Beyond campaign to a Discord channel to see players' rolls in real time!",
  longDesc: "",
  commands: [CAMPAIGN],
};
