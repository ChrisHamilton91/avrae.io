import { Command } from "../command-schema";

export const SHEET = new Command({
  name: "Character Sheet",
  cmdStrings: ["sheet"],
  shortDesc: "Prints the embed sheet of your currently active character.",
});
