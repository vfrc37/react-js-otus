export type ScalarOperationType = (first: number, second?: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number | undefined
): number => first * (second as number);

export const div: ScalarOperationType = (
  first: number,
  second: number | undefined
): number => first / (second as number);

export const add: ScalarOperationType = (
  first: number,
  second: number | undefined
): number => first + (second as number);

export const minus: ScalarOperationType = (
  first: number,
  second: number | undefined
): number => first - (second as number);

export const factorial: ScalarOperationType = (num: number): number => {
  return num === 1 ? 1 : num * factorial(num - 1);
};

export const pow: ScalarOperationType = (
  num: number,
  power: number | undefined
): number => {
  return Math.pow(num, power as number);
};

export const sin: ScalarOperationType = (num: number): number => Math.sin(num);

export const cos: ScalarOperationType = (num: number): number => Math.cos(num);

export const tan: ScalarOperationType = (num: number): number => Math.tan(num);

export const fib: ScalarOperationType = (num: number): number => {
  let [prev, next] = [0, 1];
  for (let i = 0; i < num; i++) {
    [next, prev] = [next + prev, next];
  }
  return prev;
};

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "!": factorial,
  "^": pow,
  sin: sin,
  cos: cos,
  tan: tan,
  fib: fib,
};

export const mathPriorities: number[] = [0, 1, 2];

const [ZERO, FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "!": ZERO,
  "^": ZERO,
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
};
