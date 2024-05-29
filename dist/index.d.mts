declare const dateToEpochTime: (dateInput: string) => number;

declare const datetimeToEpochTime: (datetimeInput: string) => number;

type EpochTimeResult = {
    day: number;
    month: string;
    year: number;
    date: string;
    dateTime: string;
    time: string;
};

declare const epochToDatetime: (epochInput: string) => EpochTimeResult;

export { type EpochTimeResult, dateToEpochTime, datetimeToEpochTime, epochToDatetime };
