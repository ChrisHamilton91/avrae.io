import { COMMAND_MODULES } from "../command-data/command-modules";
import {
  CommandModule,
  Command,
  Argument,
  SecondaryArgument,
  PrimaryArgument,
  Subcommand,
} from "../schemas/Commands";

export function getShortest(array: string[]): string {
  if (array.length == 0) throw Error("There are no items in the array!");
  let shortest = array[0];
  for (let item of array) {
    if (item.length < shortest.length) shortest = item;
  }
  return shortest;
}

function sortByName(
  a: CommandModule | Command | Argument,
  b: CommandModule | Command | Argument
) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

function sortByCategoryThenName(a: SecondaryArgument, b: SecondaryArgument) {
  if (a.category && b.category) {
    if (a.category.index < b.category.index) return -1;
    if (a.category.index > b.category.index) return 1;
  }
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

function sortByShortestCmdString(a: Command, b: Command) {
  const cmdStringA = getShortest(a.cmdStrings);
  const cmdStringB = getShortest(b.cmdStrings);
  if (cmdStringA < cmdStringB) return -1;
  if (cmdStringA > cmdStringB) return 1;
  return 0;
}

function sortBySignature(a: PrimaryArgument, b: PrimaryArgument) {
  if (a.signature < b.signature) return -1;
  if (a.signature > b.signature) return 1;
  return 0;
}

function sortByCategoryThenCmdString(
  a: SecondaryArgument,
  b: SecondaryArgument
) {
  if (a.category && b.category) {
    if (a.category.index < b.category.index) return -1;
    if (a.category.index > b.category.index) return 1;
  }
  if (a.cmdString < b.cmdString) return -1;
  if (a.cmdString > b.cmdString) return 1;
  return 0;
}

function sortCommandDataByName(command: Command) {
  command.subcommands.sort(sortByName);
  command.primaryArgs.sort(sortByName);
  command.secondaryArgs.sort(sortByCategoryThenName);
  for (const subcommand of command.subcommands) {
    sortCommandDataByName(subcommand);
  }
}

export function sortDataByName() {
  COMMAND_MODULES.sort(sortByName);
  for (const module of COMMAND_MODULES) {
    module.commands.sort(sortByName);
    for (const command of module.commands) {
      sortCommandDataByName(command);
    }
  }
}

function sortCommandDataByCmdString(command: Command) {
  command.subcommands.sort(sortByShortestCmdString);
  command.primaryArgs.sort(sortBySignature);
  command.secondaryArgs.sort(sortByCategoryThenCmdString);
  for (const subcommand of command.subcommands) {
    sortCommandDataByCmdString(subcommand);
  }
}

export function sortDataByCmdString() {
  COMMAND_MODULES.sort(sortByName);
  for (const module of COMMAND_MODULES) {
    module.commands.sort(sortByShortestCmdString);
    for (const command of module.commands) {
      sortCommandDataByCmdString(command);
    }
  }
}
