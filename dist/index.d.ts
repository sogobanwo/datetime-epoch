interface EpochTimeResult {
    day: number;
    month: string;
    year: number;
    date: string;
    dateTime: string;
    time: string;
}
declare const datetimeToEpochTime: (datetimeInput: string) => number;
declare const dateToEpochTime: (dateInput: string) => number;
declare const epochToDatetime: (epochInput: string) => EpochTimeResult;
export { datetimeToEpochTime, epochToDatetime, dateToEpochTime };
//# sourceMappingURL=index.d.ts.map