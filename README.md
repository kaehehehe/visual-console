# @kaehehehe/visual-console 🐰✨
Styled console logs made simple — a cute visual wrapper for your console logging with fun themes and emojis! 🎉

### Features 🌈
- Pretty themed logs: info, success, warn, error
- Default cute emojis for each theme
- Easy custom styles for your logs
- Simple API for quick & delightful debugging

### Installation 🚀

```bash
npm install @kaehehehe/visual-console
# or
pnpm add @kaehehehe/visual-console
# or
yarn add @kaehehehe/visual-console

```

### Usage 🎨

```ts
import vc from "visual-console";

// Logs with cute themed emojis
vc.logWithTheme({ message: "Success log!", theme: "success" });
vc.logWithTheme({ message: "Info log!", theme: "info" });
vc.logWithTheme({ message: "Warning log!", theme: "warn" });
vc.logWithTheme({ message: "Error log!", theme: "error" });
```

![스크린샷 2025-05-29 11 29 03](https://github.com/user-attachments/assets/ffaff57b-2b58-47f9-a67d-8c02257e9722)


```ts
// Custom colorful log 💜
vc.log({
  message: "Custom styled log 💖",
  consoleStyle: {
    color: "#FF00FF",
    background: "#FFF0FF",
    padding: "5px 10px",
    borderRadius: "5px",
  },
});
```

![스크린샷 2025-05-29 11 45 11](https://github.com/user-attachments/assets/2683f20a-846e-4afe-ac4b-6adba6942e86)


### API Summary 📚

| Method           | What it does             | Params                    |
| ---------------- | ------------------------ | ------------------------- |
| `log`            | Basic log                | `message`, `consoleStyle` |
| `logWithTheme`   | Logs with a pretty theme | `message`, `theme`        |
| `info`           | Info level log           | `message`, `consoleStyle` |
| `warn`           | Warning level log        | `message`, `consoleStyle` |
| `error`          | Error level log          | `message`, `consoleStyle` |
| `assert`         | Conditional assert log   | `message`, `consoleStyle` |
| `group`          | Start a group in console | `message`, `consoleStyle` |
| `groupCollapsed` | Start a collapsed group  | `message`, `consoleStyle` |


