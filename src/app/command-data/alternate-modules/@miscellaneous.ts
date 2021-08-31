import { CommandModule } from "../command-schema";
import { ABOUT } from "../original-modules/core/about";
import { CHANGELOG } from "../original-modules/core/changelog";
import { DDB } from "../original-modules/core/ddb";
import { INVITE } from "../original-modules/core/invite";
import { PING } from "../original-modules/core/ping";
import { HELP } from "../original-modules/tutorials/help";
import { TUTORIAL } from "../original-modules/tutorials/tutorial";
import { TOKEN } from "../original-modules/lookup/token";
import { PREFIX } from "../original-modules/customization/prefix";
import { RANDCHAR } from "../original-modules/char-generator/randchar";
import { RANDNAME } from "../original-modules/char-generator/randname";

export const MISCELLANEOUS = new CommandModule({
  name: "Miscellaneous",
  shortDesc: "Miscellaneous commands.",
  commands: [
    ABOUT,
    CHANGELOG,
    DDB,
    INVITE,
    PING,
    HELP,
    TUTORIAL,
    TOKEN,
    PREFIX,
    RANDCHAR,
    RANDNAME,
  ],
});
