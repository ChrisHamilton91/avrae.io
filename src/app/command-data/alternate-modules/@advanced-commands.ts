import { CommandModule } from "../command-schema";
import { ALIAS } from "../customization/alias";
import { CHARACTER_VAR } from "../customization/character-var";
import { GLOBAL_VAR } from "../customization/global-var";
import { MULTILINE } from "../customization/multiline";
import { SERVER_ALIAS } from "../customization/server-alias";
import { SERVER_SNIPPET } from "../customization/server-snippet";
import { SERVER_VAR } from "../customization/server-var";
import { SNIPPET } from "../customization/snippet";
import { TEMBED } from "../customization/tembed";
import { TEST } from "../customization/test";
import { USER_VAR } from "../customization/user-var";

export const ADVANCED_COMMANDS = new CommandModule({
  name: "Advanced Commands",
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
