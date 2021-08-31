import { CommandModule } from "../command-schema";
import { BEYOND } from "../original-modules/sheet-manager/beyond";
import { DICECLOUD } from "../original-modules/sheet-manager/dicecloud";
import { GSHEET } from "../original-modules/sheet-manager/gsheet";
import { TRANSFERCHAR } from "../original-modules/sheet-manager/transfer-char";
import { CAMPAIGN } from "../original-modules/game-log/campaign";
import { BESTIARY } from "../original-modules/homebrew/bestiary";
import { PACK } from "../original-modules/homebrew/pack";
import { TOME } from "../original-modules/homebrew/tome";

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
