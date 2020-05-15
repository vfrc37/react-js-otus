export const format = (str: string): string =>
  str
    .trim()
    .replace(/(fib|cos|sin|tan)/g, " $1 ")
    .replace(/(\(|\)|!|\^)/g, " $1 ")
    .replace(/\*{2}\s*(\d+)/g, " ^ $1") // ** number === ^ number
    .replace(/\*{2}/g, " ^ 2") // alias to power of 2
    .split(/\s+/g)
    .filter((symbol) => symbol !== "")
    .join(" ");
