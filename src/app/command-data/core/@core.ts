import { CommandModule } from "../../schemas/Commands";
import { ABOUT } from "./about";
import { CHANGELOG } from "./changelog";
import { DDB } from "./ddb";
import { INVITE } from "./invite";
import { PING } from "./ping";

export const CORE = new CommandModule({
  name: "Core",
  shortDesc: "Core utilty and general commands.",
  commands: [ABOUT, CHANGELOG, DDB, INVITE, PING],
});
