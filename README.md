# <h1 align="center"> datetime-epoch </h1>

## Introduction

**datetime-epoch** is a tiny JavaScript library that provides two essential functions for converting between datetime strings and Unix timestamps. With its simple and intuitive API, you can easily switch between human-readable datetime formats and machine-friendly Unix timestamps.

## Problem Statement
When working with dates and times in JavaScript (most especially solidity), you often need to convert between different formats. Datetime strings are easy for humans to read and understand, but machines/smart contracts prefer Unix timestamps, which represent the number of seconds since January 1, 1970, at 00:00:00 UTC. Converting between these formats can be cumbersome and error-prone, especially when sending and receiving dates smart contracts, working with different time zones and leap seconds.

## Solution
datetime-epoch solves this problem by providing two simple functions:
**dateToEpochTime(dateInput)**: converts a date string to a Unix timestamp (epochTime)
**datetimeToEpochTime(datetimeInput)**: converts a datetime string to a Unix timestamp (epochTime)
**epochToDatetime(epochInput):** converts a Unix timestamp to a datetime object of time, day, month, year, date and datetime
With these functions, you can easily convert between datetime & date strings and Unix timestamps, making it easier to work with dates and times in your JavaScript applications.

## Features
- Converts datetime strings to Unix timestamps
- Converts Unix timestamps to datetime objects
- Supports tree shaking with ES modules
- No external script loading, no dependencies on SDKs

## Use Cases
Convert user-inputted datetime strings to Unix timestamps for server-side processing
Convert Unix timestamps from server responses to human-readable datetime strings for display
Simplify datetime calculations and conversions in your JavaScript applications and solidity smart contracts

## Getting Started
To use datetime-epoch, simply install it via npm:

```
npm install datetime-epoch
```

Then, import the functions into your JavaScript file:

```
import React, { useState } from 'react';
const { datetimeToEpochTime, epochToDatetime, dateToEpochTime } = require('datetime-epoch');
function DatetimeEpoch() {

  const [date, setDate] = useState('')

  const [datetimeInput, setDatetimeInput] = useState('');

  const [epochInput, setEpochInput] = useState(0)

  const convertDateTimeToEpoch = () => {
    const res = datetimeToEpochTime(datetimeInput)
    console.log(res)
  //  sample res
  //  res = epochTime (e.g 12389089)
  };

  const convertDateToEpoch = () => {
    const res = dateToEpochTime(dateInput)
    console.log(res)
  //  sample res
  //  res = epochTime (e.g 12389089)
  };

  const convertToDateObject = () => {
    const response = epochToDatetime(epochInput)
    console.log(response)
    // sample response 
    // response = {
    //   day: day (e.g "1"), 
    //   month: monthName (e.g "May"),
    //   year: year (e.g 2024),
    //   date: date (e.g 1/1/2024),
    //   dateTime: dateTime (e.g 1/1/2024, 2:30:00 PM),
    //   time: time (e.g 14:30:00)}
  
  }
   return (
    <>

    <div>
      <h2>DateTime to Epoch Converter</h2>
      <label htmlFor="datetimeInput">Enter a datetime:</label>
      <input
        type="datetime-local"
        id="datetimeInput"
        value={datetimeInput}
        onChange={(e) => setDatetimeInput(e.target.value)}
      />
      <button onClick={convertDateTimeToEpoch}>Convert</button>
    </div>

   <div>
      <h2>Date to Epoch Converter</h2>
      <label htmlFor="datetimeInput">Enter a date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={convertDateToEpoch}>Convert</button>
    </div>

    <div>
        <h2>Epoch to Date Object Converter</h2>
        <label htmlFor='epochInput'>Enter Epoch time</label>
        <input
        type="number"
        id="epochInput"
        value={epochInput}
        onChange={(e) => setEpochInput(e.target.value)}
      />
      <button onClick={convertToDateObject}>Convert</button>
    </div>
    </>
  );
}
export default DatetimeEpoch;
```

Now you're ready to start converting between datetime and date strings and Unix timestamps with ease!
