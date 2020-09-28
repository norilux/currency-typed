export type defaults = {
    symbol: string,
    separator: string,
    decimal: string,
    formatWithSymbol: boolean,
    errorOnInvalid: boolean,
    precision: number,
    pattern: string,
    negativePattern: string,
};

export type round = () => number;
export type pow = () => number;
export type rounding = () => number;

type parse = () => void

export class Currency
{
    // Properties
    public constructor(value: number, opts?: defaults);
    public value: number;
    public intValue: number;
    public increment: number;

    private _settings: defaults & {groups: RegExp, increment: number}
    private _precision: number

    // Methods
    public add: (number: number) => Currency;
    public subtract: (number: number) => Currency;
    public multiply: (number: number) => Currency;
    public divide: (number: number) => Currency;
    public distribute: (count: number) => Currency[];
    public dollars: () => number;
    public cents: () => number;
    public format: (useSymbol: boolean) => string;
    public toString: () => string;
    public toJSON: () => number;
}
