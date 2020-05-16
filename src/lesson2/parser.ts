import { isNumber } from "./helpers";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");
  let openBracketsCounter = 0;

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const nextItem = stack[key + 1];
    const itemStr = String(item);
    const nextItemStr = String(nextItem);
    const isLastItem = key === stack.length - 1;

    /**
     * Possible items order:
     * item   | nextItem
     * number | sign, ), !
     * )      | sign, ), !
     * !      | sign, ), !
     * sign   | number, (, func
     * (      | number, (, func
     * func   | (
     */

    switch (true) {
      case /\!|\d+|\)/.test(itemStr):
        if (!isLastItem && !/\+|\-|\*|\/|\!|\^|\)/.test(nextItemStr)) {
          throw new TypeError(
            `Invalid elements order: '${nextItemStr}' can't be after '${itemStr}'`
          );
        }
        break;
      case /\+|\-|\*|\/|\^|\(/.test(itemStr):
        if (!isLastItem && !/\d+|\(|fib|sin|cos|tan/.test(nextItemStr)) {
          throw new TypeError(
            `Invalid elements order: '${nextItemStr}' can't be after '${itemStr}'`
          );
        }
        break;
      case /fib|sin|cos|tan/.test(itemStr):
        if (!isLastItem && !/\(/.test(nextItemStr)) {
          throw new TypeError(
            `Invalid elements order: '${nextItemStr}' can't be after '${itemStr}'`
          );
        }
        break;
      default:
        throw new TypeError(`Invalid element: '${itemStr}'`);
    }

    if (itemStr === ")") openBracketsCounter -= 1;
    if (itemStr === "(") openBracketsCounter += 1;

    if (openBracketsCounter < 0) {
      throw new TypeError("Invalid brackets: there are extra close brackets");
    }

    if (isLastItem === true && openBracketsCounter !== 0) {
      throw new TypeError(
        "Invalid brackets: number of close and open brackets is different"
      );
    }
    result.push(isNumber(item) ? Number(item) : item);
    return result;
  }, []);
};
