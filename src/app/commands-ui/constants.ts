import { CommandModule, Command, Argument } from "../schemas/Commands";

//Default styles
export const DEFAULT_ACTIVE_STYLE = "background-color:lime;color:black;";
export const DEFAULT_INACTIVE_STYLE = "background-color:blue;";

//Subcommand styles
export const ACTIVE_SUBCMD_STYLE = "background-color:yellow;color:black;";
export const INACTIVE_SUBCMD_STYLE = "background-color:dodgerblue;";

//Primary Argument styles
export const ACTIVE_REQUIRED_ARG_STYLE = "background-color:orange;color:black;";
export const ACTIVE_OPTIONAL_ARG_STYLE = "background-color:yellow;color:black;";
export const INACTIVE_OPTIONAL_ARG_STYLE = "background-color:dodgerblue;";

/**Sorting function to sort elements by their name property */
export function sortByName(
  a: CommandModule | Command | Argument,
  b: CommandModule | Command | Argument
) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}
