import { ConsoleStyle } from "./types/visualConsole";
import objectToCSSStyleString from "./utils/objectToCSSStyleString";

const createVisualConsole = () => {
  const privateMethod = ({
    method,
    message,
    consoleStyle,
  }: {
    method: keyof Console;
    message: string;
    consoleStyle: ConsoleStyle;
  }) => {
    const cssStyle = objectToCSSStyleString(consoleStyle);
    (console[method] as any)(`%c${message}`, cssStyle);
  };

  return {
    log: ({
      message,
      consoleStyle,
    }: {
      message: string;
      consoleStyle: ConsoleStyle;
    }) => privateMethod({ method: "log", message, consoleStyle }),

    info: ({
      message,
      consoleStyle,
    }: {
      message: string;
      consoleStyle: ConsoleStyle;
    }) => privateMethod({ method: "info", message, consoleStyle }),

    warn: ({
      message,
      consoleStyle,
    }: {
      message: string;
      consoleStyle: ConsoleStyle;
    }) => privateMethod({ method: "warn", message, consoleStyle }),

    error: ({
      message,
      consoleStyle,
    }: {
      message: string;
      consoleStyle: ConsoleStyle;
    }) => privateMethod({ method: "error", message, consoleStyle }),

    assert: ({
      message,
      consoleStyle,
    }: {
      message: string;
      consoleStyle: ConsoleStyle;
    }) => privateMethod({ method: "assert", message, consoleStyle }),

    group: ({
      message,
      consoleStyle,
    }: {
      message: string;
      consoleStyle: ConsoleStyle;
    }) => privateMethod({ method: "group", message, consoleStyle }),

    groupCollapsed: ({
      message,
      consoleStyle,
    }: {
      message: string;
      consoleStyle: ConsoleStyle;
    }) => privateMethod({ method: "groupCollapsed", message, consoleStyle }),
  };
};

const visualConsole = createVisualConsole();

export default visualConsole;
