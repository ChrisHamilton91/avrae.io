const keys = {
  prefix: "commands-ui-prefix",
  enableTooltips: "commands-ui-enable-tooltips",
  showCommandStrings: "commands-ui-show-cmd-strings",
};

const defaults = {
  prefix: "!",
  enableTooltips: true,
  showCommandStrings: false,
};

class CommandsUiSettings {
  // Keep instance variables in case localStorage is disabled
  // Priority goes:
  // 1. instance variable
  // 2. localStorage
  // 3. default value
  prefix: string;
  enableTooltips: boolean;
  showCommandStrings: boolean;

  setPrefix(prefix: string) {
    this.prefix = prefix;
    localStorage.setItem(keys.prefix, prefix);
  }

  getPrefix(): string {
    if (this.prefix) return this.prefix;
    const stored = localStorage.getItem(keys.prefix);
    return stored ? stored : defaults.prefix;
  }

  setEnableTooltips(value: boolean) {
    this.enableTooltips = value;
    localStorage.setItem(keys.enableTooltips, value.toString());
  }

  getEnableTooltips(): boolean {
    if (this.enableTooltips) return this.enableTooltips;
    const stored = localStorage.getItem(keys.enableTooltips);
    if (stored === "true") return true;
    if (stored === "false") return false;
    return defaults.enableTooltips;
  }

  setShowCommandStrings(value: boolean) {
    this.showCommandStrings = value;
    localStorage.setItem(keys.showCommandStrings, value.toString());
  }

  getShowCommandStrings(): boolean {
    if (this.showCommandStrings) return this.showCommandStrings;
    const stored = localStorage.getItem(keys.showCommandStrings);
    if (stored === "true") return true;
    if (stored === "false") return false;
    return defaults.showCommandStrings;
  }
}

export const commandsUiSettings = new CommandsUiSettings();
