import { sortDataByCmdString, sortDataByName } from "./@sorting";

const keys = {
  prefix: "commands-ui-prefix",
  tooltipsEnabled: "commands-ui-enable-tooltips",
  showCommandStrings: "commands-ui-show-cmd-strings",
  altModules: "commands-ui-alt-modules",
};

const defaults = {
  prefix: "!",
  tooltipsEnabled: true,
  showCommandStrings: false,
  altModules: true,
};

class CommandsUiSettings {
  // Keep instance variables in case localStorage is disabled
  // Priority goes:
  // 1. instance variable
  // 2. localStorage
  // 3. default value
  private _prefix: string;
  private _tooltipsEnabled: boolean;
  private _showCommandStrings: boolean;
  private _altModules: boolean;

  set prefix(prefix: string) {
    this._prefix = prefix;
    localStorage.setItem(keys.prefix, prefix);
  }

  get prefix(): string {
    if (this._prefix) return this._prefix;
    const stored = localStorage.getItem(keys.prefix);
    return stored ? stored : defaults.prefix;
  }

  set tooltipsEnabled(value: boolean) {
    this._tooltipsEnabled = value;
    localStorage.setItem(keys.tooltipsEnabled, value.toString());
  }

  get tooltipsEnabled(): boolean {
    if (this._tooltipsEnabled) return this._tooltipsEnabled;
    const stored = localStorage.getItem(keys.tooltipsEnabled);
    if (stored === "true") return true;
    if (stored === "false") return false;
    return defaults.tooltipsEnabled;
  }

  set showCommandStrings(value: boolean) {
    this._showCommandStrings = value;
    localStorage.setItem(keys.showCommandStrings, value.toString());
    if (value) sortDataByCmdString();
    else sortDataByName();
  }

  get showCommandStrings(): boolean {
    if (this._showCommandStrings) return this._showCommandStrings;
    const stored = localStorage.getItem(keys.showCommandStrings);
    if (stored === "true") return true;
    if (stored === "false") return false;
    return defaults.showCommandStrings;
  }

  set altModules(value: boolean) {
    this._altModules = value;
    localStorage.setItem(keys.altModules, value.toString());
  }

  get altModules(): boolean {
    if (this._altModules) return this._altModules;
    const stored = localStorage.getItem(keys.altModules);
    if (stored === "true") return true;
    if (stored === "false") return false;
    return defaults.altModules;
  }
}

export const commandsUiSettings = new CommandsUiSettings();
