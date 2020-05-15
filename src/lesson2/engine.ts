import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
} from "./mathOperators";

const [, FIRST, SECOND] = mathPriorities;

export const zeroPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (nextItem === "!" && isNumber(String(item))) {
      result = [...result.slice(0, -1), mathOperators[nextItem](Number(item))];
    } else if (
      item === "^" &&
      isNumber(String(prevItem)) &&
      isNumber(String(nextItem))
    ) {
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (
      !isNumber(String(item)) &&
      isNumber(String(nextItem)) &&
      isNumber(String(prevItem)) &&
      mathOperatorsPriorities[item] === FIRST
    ) {
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem, key) => {
    const prevItem = result[result.length - 2];
    const item = stack[key - 1];

    if (
      !isNumber(String(item)) &&
      isNumber(String(nextItem)) &&
      isNumber(String(prevItem)) &&
      mathOperatorsPriorities[item] === SECOND
    ) {
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const thirdPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (isNumber(String(item)) && prevItem === "(" && nextItem === ")") {
      result = [...result.slice(0, -2), item];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);
