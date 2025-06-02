import { consoleThemes } from "./themes/consoleThemes";
import { ConsoleStyle } from "./types/visualConsole";
import objectToCSSStyleString from "./utils/objectToCSSStyleString";

type ConsoleMethod = keyof typeof console;
type LogLevel = keyof typeof consoleThemes;

interface VisualConsoleOptions {
  theme?: LogLevel;
  style?: ConsoleStyle;
}

const createVisualConsole = () => {
  const isDev = process.env.NODE_ENV === "development";

  const privateMethod = (
    method: ConsoleMethod,
    text: string,
    options?: VisualConsoleOptions,
  ) => {
    if (!isDev) return;

    const themeStyle = options?.theme ? consoleThemes[options.theme] : {};
    const customStyle = options?.style || {};
    const style = objectToCSSStyleString({ ...themeStyle, ...customStyle });

    (console[method] as any)(`%c${text}`, style);
  };

  return {
    log: (text: string, options?: VisualConsoleOptions) =>
      privateMethod("log", text, options),

    info: (text: string, options?: VisualConsoleOptions) =>
      privateMethod("info", text, options),

    warn: (text: string, options?: VisualConsoleOptions) =>
      privateMethod("warn", text, options),

    error: (text: string, options?: VisualConsoleOptions) =>
      privateMethod("error", text, options),

    assert: (text: string, options?: VisualConsoleOptions) =>
      privateMethod("assert", text, options),

    group: (text: string, options?: VisualConsoleOptions) =>
      privateMethod("group", text, options),

    groupCollapsed: (text: string, options?: VisualConsoleOptions) =>
      privateMethod("groupCollapsed", text, options),
  };
};

const vc = createVisualConsole();

export default vc;
