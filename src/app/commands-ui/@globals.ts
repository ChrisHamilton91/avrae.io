import {
  CommandModule,
  Command,
  Argument,
  PrimaryArgument,
  SecondaryArgument,
  Subcommand,
} from "../schemas/Commands";

//Default styles
export const DEFAULT_ACTIVE_STYLE = "background-color:#33aa33;";
export const DEFAULT_INACTIVE_STYLE = "background-color:#0033aa;";

//Subcommand styles
export const ACTIVE_SUBCMD_STYLE = "background-color:green;";
export const INACTIVE_SUBCMD_STYLE = "background-color:#2255bb;";

//Primary Argument styles
export const ACTIVE_REQUIRED_ARG_STYLE = "background-color:#aa3333;";
export const ACTIVE_OPTIONAL_ARG_STYLE = DEFAULT_ACTIVE_STYLE;
export const INACTIVE_OPTIONAL_ARG_STYLE = DEFAULT_INACTIVE_STYLE;
// export const ACTIVE_OPTIONAL_ARG_STYLE = "background-color:green;color:black;";
// export const INACTIVE_OPTIONAL_ARG_STYLE = "background-color:#2255bb;";

/**Sorting function to sort elements by their name property */
export function sortByName(
  a: CommandModule | Command | Argument,
  b: CommandModule | Command | Argument
) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

export function sortByCategoryThenName(
  a: SecondaryArgument,
  b: SecondaryArgument
) {
  if (a.category && b.category) {
    if (a.category.index < b.category.index) return -1;
    if (a.category.index > b.category.index) return 1;
  }
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

export function getShortest(array: string[]): string {
  if (array.length == 0) throw Error("There are no items in the array!");
  let shortest = array[0];
  for (let item of array) {
    if (item.length < shortest.length) shortest = item;
  }
  return shortest;
}
