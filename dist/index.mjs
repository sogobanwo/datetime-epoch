// src/dateToEpochTime.ts
var dateToEpochTime = (dateInput) => {
  const epochTime = (/* @__PURE__ */ new Date(`${dateInput}T00:00`)).getTime() / 1e3;
  return epochTime;
};

// src/datetimeToEpochTime.ts
var datetimeToEpochTime = (datetimeInput) => {
  const epochTime = new Date(datetimeInput).getTime() / 1e3;
  console.log(epochTime);
  return epochTime;
};

// src/epochToDatetime.ts
var epochToDatetime = (epochInput) => {
  const localDate = new Date(parseFloat(epochInput) * 1e3);
  const hours = localDate.getHours();
  const minutes = localDate.getMinutes();
  const seconds = localDate.getSeconds();
  const time = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  const day = localDate.getDate();
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
    "December"
  ];
  const monthName = monthNames[monthIndex];
  const year = localDate.getFullYear();
  const date = localDate.toLocaleDateString();
  const dateTime = localDate.toLocaleString();
  const result = {
    day,
    month: monthName,
    year,
    date,
    dateTime,
    time
  };
  return result;
};
export {
  dateToEpochTime,
  datetimeToEpochTime,
  epochToDatetime
};
