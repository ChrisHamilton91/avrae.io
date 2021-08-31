import { CommandModule } from "../command-schema";
import { ALIAS } from "../original-modules/customization/alias";
import { CHARACTER_VAR } from "../original-modules/customization/character-var";
import { GLOBAL_VAR } from "../original-modules/customization/global-var";
import { MULTILINE } from "../original-modules/customization/multiline";
import { SERVER_ALIAS } from "../original-modules/customization/server-alias";
import { SERVER_SNIPPET } from "../original-modules/customization/server-snippet";
import { SERVER_VAR } from "../original-modules/customization/server-var";
import { SNIPPET } from "../original-modules/customization/snippet";
import { TEMBED } from "../original-modules/customization/tembed";
import { TEST } from "../original-modules/customization/test";
import { USER_VAR } from "../original-modules/customization/user-var";

export const ADVANCED = new CommandModule({
  name: "Advanced",
  shortDesc:
    "Commands to help streamline using the bot, for more advanced users.",
  commands: [
    ALIAS,
    CHARACTER_VAR,
    GLOBAL_VAR,
    MULTILINE,
    SERVER_ALIAS,
    SERVER_VAR,
    SERVER_SNIPPET,
    SNIPPET,
    TEMBED,
    TEST,
    USER_VAR,
  ],
});
