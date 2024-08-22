export type AllowedCSSProperties = Pick<
  CSSStyleDeclaration,
  | "background"
  | "border"
  | "borderRadius"
  | "boxShadow"
  | "clear"
  | "float"
  | "color"
  | "cursor"
  | "display"
  | "font"
  | "lineHeight"
  | "margin"
  | "outline"
  | "padding"
  | "textAlign"
  | "textDecoration"
  | "textTransform"
  | "whiteSpace"
  | "wordSpacing"
  | "wordBreak"
  | "writingMode"
>;

export type ConsoleStyle = {
  [K in keyof AllowedCSSProperties]?: AllowedCSSProperties[K];
};
