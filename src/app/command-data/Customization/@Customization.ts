import { sortByName } from "src/app/commands-ui/@commonFunctions";
import { CommandModule } from "../../schemas/Commands";
import { ALIAS } from "./Alias";
import { CHARACTER_VAR } from "./CharacterVar";
import { GLOBAL_VAR } from "./GlobalVar";
import { MULTILINE } from "./Multiline";
import { PREFIX } from "./Prefix";
import { SERVER_ALIAS } from "./ServerAlias";
import { SERVER_SNIPPET } from "./ServerSnippet";
import { SERVER_VAR } from "./ServerVar";
import { SNIPPET } from "./Snippet";
import { TEMBED } from "./Tembed";
import { TEST } from "./Test";
import { USER_VAR } from "./UserVar";

export const CUSTOMIZATION: CommandModule = {
  name: "Customization",
  shortDesc: "Commands to help streamline using the bot.",
  longDesc: "",
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
  ].sort(sortByName),
};
