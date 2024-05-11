const datetimeToEpochTime= (datetimeInput)=>{
    const epochTime = new Date(datetimeInput).getTime() / 1000;
    console.log(epochTime);
    return epochTime
}

const epochToDatetime=(epochInput) =>{
    // Convert epoch time to local date
    const localDate = new Date(parseFloat(epochInput)*1000) 


    {/* Time */}

    const hours = localDate.getHours();
    const minutes = localDate.getMinutes();
    const seconds = localDate.getSeconds();

    const time = hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');

    {/* Time */}


    {/* Day */}

    // Get the day from the local date
    const day = localDate.getDate();

    {/* Day */}


    {/* Month */}

    // Get the month from the local date
    const monthIndex = localDate.getMonth()
    
    // Array to map month index to month name
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Get the month name from the array
    const monthName = monthNames[monthIndex];

    {/* Month */}


    {/* Year */}

    // Get the year from the local date
    const year = localDate.getFullYear();

    {/* Year */}


    {/* Date */}

    const date = localDate.toLocaleDateString();

    {/* Date */}


    {/* DateTime */}

    const dateTime = localDate.toLocaleString();

    {/* DateTime */}


    const result = {
        day: day, 
        month: monthName,
        year: year,
        date: date,
        dateTime: dateTime,
        time: time
    }
    return result
}


module.exports = {datetimeToEpochTime, epochToDatetime}