document.getElementById("getDifferenceResults").onclick = function() {
    
    let valueOne = document.getElementById("valueOne").value;
        // remove $ % and , characters
        valueOne = valueOne.replace(/\$/g, '');
        valueOne = valueOne.replace(/%/g, '');
        valueOne = valueOne.replace(/,/g, '');
        console.log(valueOne);

    let valueTwo = document.getElementById("valueTwo").value;
        // remove $ % and , characters
        valueTwo = valueTwo.replace(/\$/g, '');
        valueTwo = valueTwo.replace(/%/g, '');
        valueTwo = valueTwo.replace(/,/g, '');
        console.log(valueTwo);

    const topValue = (valueOne) - (valueTwo);
        // console.log("the top value is", topValue);

    let bottomValue = (parseFloat(valueOne) + parseFloat(valueTwo)) / 2;
        // console.log("the bottom value is", bottomValue);
 
    const differenceResults = (topValue / bottomValue) * 100;
        // console.log("the results are", differenceResults + "%");

    document.getElementById("insertDifferenceResults").innerHTML = 
    (parseFloat(differenceResults).toFixed(2)+ "%");
}

