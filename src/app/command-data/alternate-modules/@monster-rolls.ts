import { CommandModule } from "../command-schema";
import { MONATTACK } from "../original-modules/dice/monattack";
import { MONCAST } from "../original-modules/dice/moncast";
import { MONCHECK } from "../original-modules/dice/moncheck";
import { MONSAVE } from "../original-modules/dice/monsave";
import { MULTIROLL } from "../original-modules/dice/multiroll";

export const MONSTER_ROLLS = new CommandModule({
  name: "Monster Rolls",
  shortDesc: "Dice rolls for monsters. Can be done outside of initiative.",
  commands: [MONATTACK, MONCAST, MONCHECK, MONSAVE, MULTIROLL],
});
