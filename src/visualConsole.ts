import { consoleThemes } from "./themes/consoleThemes";
import { ConsoleStyle } from "./types/visualConsole";
import objectToCSSStyleString from "./utils/objectToCSSStyleString";

type ConsoleMethod = keyof typeof console;
type LogLevel = keyof typeof consoleThemes;

interface VisualConsoleOptions {
  text: string;
  theme?: LogLevel;
  style?: ConsoleStyle;
}

const createVisualConsole = () => {
  const isDev = process.env.NODE_ENV === "development";

  const print = (method: ConsoleMethod, options: VisualConsoleOptions) => {
    if (!isDev) return;

    const themeStyle = options.theme ? consoleThemes[options.theme] : {};
    const customStyle = options.style || {};
    const style = objectToCSSStyleString({ ...themeStyle, ...customStyle });

    (console[method] as any)(`%c${options.text}`, style);
  };

  const methods: ConsoleMethod[] = [
    "log",
    "info",
    "warn",
    "error",
    "assert",
    "group",
    "groupCollapsed",
  ];

  // eslint-disable-next-line no-unused-vars
  const vc: Record<ConsoleMethod, (options: VisualConsoleOptions) => void> =
    {} as any;

  for (const method of methods) {
    vc[method] = (options: VisualConsoleOptions) => print(method, options);
  }

  return vc;
};

const vc = createVisualConsole();

export default vc;
