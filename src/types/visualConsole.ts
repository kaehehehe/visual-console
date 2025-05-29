export type AllowedCSSProperties = Pick<
  CSSStyleDeclaration,
  | "background"
  | "border"
  | "boxShadow"
  | "color"
  | "cursor"
  | "display"
  | "fontSize"
  | "fontWeight"
  | "borderRadius"
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
>;

export type ConsoleStyle = {
  [K in keyof AllowedCSSProperties]?: AllowedCSSProperties[K];
};
