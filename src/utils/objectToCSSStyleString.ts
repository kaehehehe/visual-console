const camelToKebab = (str: string): string =>
  str.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

const objectToCSSStyleString = (
  styleObject: Record<string, string>
): string => {
  return Object.entries(styleObject)
    .map(([key, value]) => (value ? `${camelToKebab(key)}: ${value};` : ""))
    .join(" ");
};

export default objectToCSSStyleString;
