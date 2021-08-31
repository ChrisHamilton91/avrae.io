import { CommandModule } from "../command-schema";
import { ABOUT } from "../core/about";
import { CHANGELOG } from "../core/changelog";
import { DDB } from "../core/ddb";
import { INVITE } from "../core/invite";
import { PING } from "../core/ping";
import { HELP } from "../tutorials/help";
import { TUTORIAL } from "../tutorials/tutorial";
import { TOKEN } from "../lookup/token";
import { PREFIX } from "../customization/prefix";
import { RANDCHAR } from "../char-generator/randchar";
import { RANDNAME } from "../char-generator/randname";

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
