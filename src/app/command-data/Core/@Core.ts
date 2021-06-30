import { sortByName } from "src/app/commands-ui/globals";
import { CommandModule } from "../../schemas/Commands";
import { ABOUT } from "./About";
import { CHANGELOG } from "./Changelog";
import { DDB } from "./DDB";
import { INVITE } from "./Invite";
import { PING } from "./Ping";

export const CORE: CommandModule = {
  name: "Core",
  shortDesc: "Core utilty and general commands.",
  longDesc: "",
  commands: [ABOUT, CHANGELOG, DDB, INVITE, PING].sort(sortByName),
};
