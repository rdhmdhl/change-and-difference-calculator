document.getElementById("getDifferenceResults").onclick = function() {
    
    let valueOne = document.getElementById("valueOne").value;
        if (valueOne.includes('$')){
            const firstCharOne = valueOne[0];

            const replaceValueOneDollarSign = valueOne.replace(firstCharOne, '');

            valueOne = parseFloat(replaceValueOneDollarSign);
        }


    let valueTwo = document.getElementById("valueTwo").value;
        if(valueTwo.includes('$')){
            const firstCharTwo = valueTwo[0]

            const replaceValueTwoDollarSign = valueTwo.replace(firstCharTwo, '');

            valueTwo = parseFloat(replaceValueTwoDollarSign);
        }
        
 

    const topValue = (valueOne) - (valueTwo);

    const bottomValue = ((valueOne) + (valueTwo)) / 2;
 
    const differenceResults = Math.abs((topValue / bottomValue) * 100);

    document.getElementById("insertDifferenceResults").innerHTML = 
    (parseFloat(differenceResults).toFixed(2)+ "%");
}

