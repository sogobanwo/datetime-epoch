"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  dateToEpochTime: () => dateToEpochTime,
  datetimeToEpochTime: () => datetimeToEpochTime,
  epochToDatetime: () => epochToDatetime
});
module.exports = __toCommonJS(src_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  dateToEpochTime,
  datetimeToEpochTime,
  epochToDatetime
});
