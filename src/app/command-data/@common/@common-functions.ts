import {
  CommandModule,
  Command,
  Argument,
  SecondaryArgument,
} from "../../schemas/Commands";

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
