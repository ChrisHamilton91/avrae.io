import { OG_COMMAND_MODULES } from "../command-data/original-modules/original-modules";
import { ALT_COMMAND_MODULES } from "../command-data/alternate-modules/alternate-modules";
import {
  Argument,
  Command,
  CommandModule,
  SecondaryArgument,
} from "../command-data/command-schema";
import { commandsUiSettings } from "./@settings";

export function getShortest(array: string[]): string {
  if (array.length == 0) throw Error("There are no items in the array!");
  let shortest = array[0];
  for (let item of array) {
    if (item.length < shortest.length) shortest = item;
  }
  return shortest;
}

export function getCommandModules(): CommandModule[] {
  return commandsUiSettings.altModules
    ? ALT_COMMAND_MODULES
    : OG_COMMAND_MODULES;
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
  command.secondaryArgs.sort(sortByCategoryThenName);
  for (const subcommand of command.subcommands) {
    sortCommandDataByName(subcommand);
  }
}

export function sortDataByName() {
  const modules = getCommandModules();
  if (modules !== ALT_COMMAND_MODULES) modules.sort(sortByName);
  for (const module of modules) {
    module.commands.sort(sortByName);
    for (const command of module.commands) {
      sortCommandDataByName(command);
    }
  }
}

function sortCommandDataByCmdString(command: Command) {
  command.subcommands.sort(sortByShortestCmdString);
  command.secondaryArgs.sort(sortByCategoryThenCmdString);
  for (const subcommand of command.subcommands) {
    sortCommandDataByCmdString(subcommand);
  }
}

export function sortDataByCmdString() {
  const modules = getCommandModules();
  if (modules !== ALT_COMMAND_MODULES) modules.sort(sortByName);
  for (const module of modules) {
    module.commands.sort(sortByShortestCmdString);
    for (const command of module.commands) {
      sortCommandDataByCmdString(command);
    }
  }
}
