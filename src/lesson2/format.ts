export const format = (str: string): string =>
  str
    .trim()
    .replace(/(\(|\))/g, " $1 ")
    .split(/\s+/g)
    .filter((symbol) => symbol !== "")
    .join(" ");
