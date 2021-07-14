import { sortByName } from "src/app/commands-ui/@common-functions";
import { CommandModule } from "../../schemas/Commands";
import { ABOUT } from "./about";
import { CHANGELOG } from "./changelog";
import { DDB } from "./ddb";
import { INVITE } from "./invite";
import { PING } from "./ping";

export const CORE: CommandModule = {
  name: "Core",
  shortDesc: "Core utilty and general commands.",
  longDesc: "",
  commands: [ABOUT, CHANGELOG, DDB, INVITE, PING].sort(sortByName),
};
