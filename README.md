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
yarn add @kaehehehe/visual-console
# or
pnpm add @kaehehehe/visual-console
```

### Usage 🎨

```ts
import vc from "visual-console";

// Logs with cute themed emojis
vc.log({ text: "✅ Success log!", theme: "success" });
vc.info({ text: "💡 Info log!", theme: "info" });
vc.warn({ text: "⚠️ Warning log!", theme: "warn" });
vc.error({ text: "🚨 Error log!", theme: "error" });
```

![스크린샷 2025-05-29 11 29 03](https://github.com/user-attachments/assets/ffaff57b-2b58-47f9-a67d-8c02257e9722)


```ts
// Custom colorful log 💜
vc.log({
  text: "Custom styled log 💖",
  style: {
    color: "#FF00FF",
    background: "#FFF0FF",
    padding: "5px 10px",
    borderRadius: "5px",
  },
});
```

![스크린샷 2025-05-29 11 45 11](https://github.com/user-attachments/assets/2683f20a-846e-4afe-ac4b-6adba6942e86)


### API Summary 📚

| Method           | What it does             | Params                                            |
| ---------------- | ------------------------ | ------------------------------------------------- |
| `log`            | Basic log                | `(text: string, options?: { theme?, style? })` |
| `info`           | Info level log           | `(text: string, options?: { theme?, style? })` |
| `warn`           | Warning level log        | `(text: string, options?: { theme?, style? })` |
| `error`          | Error level log          | `(text: string, options?: { theme?, style? })` |
| `assert`         | Conditional assert log   | `(text: string, options?: { theme?, style? })` |
| `group`          | Start a group in console | `(text: string, options?: { theme?, style? })` |
| `groupCollapsed` | Start a collapsed group  | `(text: string, options?: { theme?, style? })` |

### Important Notice for Production Builds ⚠️

- This library uses process.env.NODE_ENV to detect the environment and disable console logs in production.
- Make sure your build tool (e.g., Vite, Webpack, etc.) properly sets process.env.NODE_ENV to "production" when creating production bundles.
- If NODE_ENV is not set correctly, console logs may still appear in your production code.
- Most modern bundlers automatically handle this, but double-check your build configuration to ensure dead code elimination works as expected.
- For best results, run your production build command with environment variables properly configured, for example:

```bash
NODE_ENV=production vite build
```



