import { Command } from "../../command-schema";

export const SHEET = new Command({
  name: "Sheet",
  cmdStrings: ["sheet"],
  shortDesc: "Prints the embed sheet of your currently active character.",
});
