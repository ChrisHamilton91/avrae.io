import { Command } from "../../schemas/Commands";

export const DDB = new Command({
  name: "D&D Beyond Info",
  cmdStrings: ["ddb"],
  shortDesc: "Displays information about your D&D Beyond account link.",
});
