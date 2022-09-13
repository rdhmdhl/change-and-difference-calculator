
document.getElementById("getDifferenceResults").onclick = function() {
    
    const valueOne = document.getElementById("valueOne").value;
    const valueTwo = document.getElementById("valueTwo").value;
    // valueOne = 1;
    // valueTwo = 2;

    const topValue = (parseFloat(valueOne) - parseFloat(valueTwo));


    const bottomValue = ((parseFloat(valueOne) + parseFloat(valueTwo)) / 2);
 

    const differenceResults = Math.abs((topValue / bottomValue) * 100);



    document.getElementById("insertDifferenceResults").innerHTML = 
    (parseFloat(differenceResults).toFixed(2)+ "%");

    console.log(valueOne, valueTwo);
    console.log(topValue, bottomValue);
    console.log(differenceResults);
}

