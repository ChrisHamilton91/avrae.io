import { CommandModule } from "../../schemas/Commands";
import { CAMPAIGN } from "./campaign";

export const GAMELOG = new CommandModule({
  name: "GameLog",
  shortDesc:
    "Link your D&D Beyond campaign to a Discord channel to see players' rolls in real time!",
  commands: [CAMPAIGN],
});
