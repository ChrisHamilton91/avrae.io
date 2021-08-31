import { CommandModule } from "../command-schema";
import { MONATTACK } from "../dice/monattack";
import { MONCAST } from "../dice/moncast";
import { MONCHECK } from "../dice/moncheck";
import { MONSAVE } from "../dice/monsave";
import { MULTIROLL } from "../dice/multiroll";

export const MONSTER_ROLLS = new CommandModule({
  name: "Monster Rolls",
  shortDesc: "Dice rolls for monsters. Can be done outside of initiative.",
  commands: [MONATTACK, MONCAST, MONCHECK, MONSAVE, MULTIROLL],
});
