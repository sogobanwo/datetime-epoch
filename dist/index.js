const datetimeToEpochTime = (datetimeInput) => {
    const epochTime = new Date(datetimeInput).getTime() / 1000;
    console.log(epochTime);
    return epochTime;
};
const epochToDatetime = (epochInput) => {
    // Convert epoch time to local date
    const localDate = new Date(parseFloat(epochInput) * 1000);
    // Time
    const hours = localDate.getHours();
    const minutes = localDate.getMinutes();
    const seconds = localDate.getSeconds();
    const time = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    // Day
    const day = localDate.getDate();
    // Month
    const monthIndex = localDate.getMonth();
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const monthName = monthNames[monthIndex];
    // Year
    const year = localDate.getFullYear();
    // Date
    const date = localDate.toLocaleDateString();
    // DateTime
    const dateTime = localDate.toLocaleString();
    const result = {
        day: day,
        month: monthName,
        year: year,
        date: date,
        dateTime: dateTime,
        time: time,
    };
    return result;
};
export { datetimeToEpochTime, epochToDatetime };
//# sourceMappingURL=index.js.map