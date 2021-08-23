interface Iopts {
  decimal?: string, 
  errorOnInvalid?: boolean, 
  precision?: number
}

export function round(v: number): number;
export function pow(v: number): number;
export function rounding(v: number): number;
export const groupRegex: RegExp;
export const vedicRegex: RegExp;
export function parse(value: number, opts: Iopts, useRounding?:boolean): number;

declare class Currency {
  constructor(value: number, opts?: Iopts)
  add(number: number): Currency
  multiply(number: number): Currency
  divide(number: number): Currency
  distribute(number: number): Array<Currency>
  dollars(): number
  cents(): number
  format(useSymbol: number): string
  toString(): string
  toJSON(): number
}
