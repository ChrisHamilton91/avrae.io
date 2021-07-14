import {
  CommandModule,
  Command,
  Argument,
  SecondaryArgument,
} from "../schemas/Commands";

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
