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

  const print = (
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

  const methods: ConsoleMethod[] = [
    "log",
    "info",
    "warn",
    "error",
    "assert",
    "group",
    "groupCollapsed",
  ];

  const vc = {} as Record<
    ConsoleMethod,
    // eslint-disable-next-line no-unused-vars
    (text: string, options?: VisualConsoleOptions) => void
  >;

  for (const method of methods) {
    vc[method] = (text, options) => print(method, text, options);
  }

  return vc;
};

const vc = createVisualConsole();

export default vc;
