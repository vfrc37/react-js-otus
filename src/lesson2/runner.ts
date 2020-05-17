import { parser } from "./parser";
import { format } from "./format";

import { ParsedLineType } from "./parser";

import {
  zeroPrioritiesCalc,
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  thirdPrioritiesCalc,
  forthPrioritiesCalc,
} from "./engine";

/**
 * Функция реализует рекурсивный обход стека, выполняя следующие операции в порядке приоритета:
 * - возведение в степень, факториал
 * - умножение, деление
 * - сложение, вычитание
 * - раскрытие скобок
 * - вычисление функций
 * @param stack
 * @return {number} - результат вычисления
 */
const loopThroughStackRecursively = (stack: ParsedLineType): number => {
  const zeroPrioritiesRes = zeroPrioritiesCalc(stack);

  if (zeroPrioritiesRes.length === 1) {
    return Number(zeroPrioritiesRes[0]);
  }

  const res = forthPrioritiesCalc(
    thirdPrioritiesCalc(
      secondPrioritiesCalc(firstPrioritiesCalc(zeroPrioritiesRes))
    )
  );
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
