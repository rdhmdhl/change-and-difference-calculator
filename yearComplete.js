document.getElementById("getYearComplete").onclick = function () {
    // Get the selected year from input
    let startDateYear = document.getElementById("year").value;
    console.log("Selected year: ", startDateYear);

    // Create Date objects for January 1st and January 1st of the next year in UTC
    const dateStartOfYear = new Date(Date.UTC(startDateYear, 0, 1));
    const dateStartOfNextYear = new Date(Date.UTC(parseInt(startDateYear) + 1, 0, 1));

    // Calculate total days in the year
    let totalDays = (dateStartOfNextYear - dateStartOfYear) / (1000 * 60 * 60 * 24);
    console.log("Total days in year: ", totalDays);

    // Get the current date from input
    let currentDateInput = document.getElementById("end-date").value;
    const currentDate = new Date(currentDateInput);
    const currentDateUTC = new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate()));
    console.log("Current date (UTC): ", currentDateUTC);

    // Validate that currentDate is within the selected year
    if (currentDateUTC < dateStartOfYear || currentDateUTC >= dateStartOfNextYear) {
        alert("Please select a date within the selected year.");
        return;
    }

    // Calculate days elapsed since start of the year
    let daysElapsed = (currentDateUTC - dateStartOfYear) / (1000 * 60 * 60 * 24) + 1; // Include the current day
    console.log("Days elapsed: ", daysElapsed);

    // Calculate percentage of the year completed
    let percentage = (daysElapsed / totalDays) * 100;
    let percentageFormatted = percentage.toFixed(2);
    console.log("Percentage of year completed: ", percentageFormatted + "%");
   
    document.getElementById("insertdateCompleteResults").innerHTML = percentageFormatted + "%";


}