import { ConsoleStyle } from "../types/visualConsole";

const objectToCSSStyleString = (styleObject: ConsoleStyle): string => {
  return Object.entries(styleObject)
    .map(([key, value]) => (value ? `${key}: ${value};` : ""))
    .join(" ");
};

export default objectToCSSStyleString;
