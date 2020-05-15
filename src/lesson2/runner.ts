import { parser } from "./parser";
import { format } from "./format";

import { ParsedLineType } from "./parser";

import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
} from "./engine";

const loopThroughStackRecursively = (stack: ParsedLineType): number => {
  const firstPrioritiesRes = firstPrioritiesCalc(stack);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  const res = thirdPrioritiesCalc(secondPrioritiesCalc(firstPrioritiesRes));
  if (res.length === 1) {
    return Number(res[0]);
  } else {
    return loopThroughStackRecursively(res);
  }
};

export const runner = (line: string): number => {
  const stack = parser(format(line));

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  return loopThroughStackRecursively(stack);
};
