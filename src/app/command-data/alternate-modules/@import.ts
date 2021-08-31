import { CommandModule } from "../command-schema";
import { BEYOND } from "../sheet-manager/beyond";
import { DICECLOUD } from "../sheet-manager/dicecloud";
import { GSHEET } from "../sheet-manager/gsheet";
import { TRANSFERCHAR } from "../sheet-manager/transfer-char";
import { CAMPAIGN } from "../game-log/campaign";
import { BESTIARY } from "../homebrew/bestiary";
import { PACK } from "../homebrew/pack";
import { TOME } from "../homebrew/tome";

export const IMPORT = new CommandModule({
  name: "Import",
  shortDesc:
    "Commands to import characters and homebrew, as well as link a D&D beyond campaign.",
  commands: [
    BEYOND,
    DICECLOUD,
    GSHEET,
    TRANSFERCHAR,
    CAMPAIGN,
    BESTIARY,
    PACK,
    TOME,
  ],
});
