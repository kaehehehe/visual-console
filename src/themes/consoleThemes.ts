import { ConsoleStyle } from "../types/visualConsole";

export type ConsoleTheme = "info" | "success" | "warn" | "error";

export const consoleThemes: Record<ConsoleTheme, ConsoleStyle> = {
  info: {
    color: "#1E90FF",
    background: "#E6F0FF",
    padding: "6px 12px",
    fontSize: "16px",
    borderRadius: "4px",
  },
  success: {
    color: "#2E8B57",
    background: "#E0FFE6",
    padding: "6px 12px",
    fontSize: "16px",
    borderRadius: "4px",
  },
  warn: {
    color: "#663300",
    background: "#FFF3CC",
    padding: "6px 12px",
    fontSize: "16px",
    borderRadius: "4px",
  },
  error: {
    color: "#FF0000",
    background: "#FFE5E5",
    padding: "6px 12px",
    fontSize: "16px",
    borderRadius: "4px",
  },
};
