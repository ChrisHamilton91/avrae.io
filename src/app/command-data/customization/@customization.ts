import { CommandModule } from "../../schemas/Commands";
import { ALIAS } from "./alias";
import { CHARACTER_VAR } from "./character-var";
import { GLOBAL_VAR } from "./global-var";
import { MULTILINE } from "./multiline";
import { PREFIX } from "./prefix";
import { SERVER_ALIAS } from "./server-alias";
import { SERVER_SNIPPET } from "./server-snippet";
import { SERVER_VAR } from "./server-var";
import { SNIPPET } from "./snippet";
import { TEMBED } from "./tembed";
import { TEST } from "./test";
import { USER_VAR } from "./user-var";

export const CUSTOMIZATION = new CommandModule({
  name: "Customization",
  shortDesc: "Commands to help streamline using the bot.",
  commands: [
    ALIAS,
    CHARACTER_VAR,
    GLOBAL_VAR,
    MULTILINE,
    PREFIX,
    SERVER_ALIAS,
    SERVER_VAR,
    SERVER_SNIPPET,
    SNIPPET,
    TEMBED,
    TEST,
    USER_VAR,
  ],
});
