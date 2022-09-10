document.getElementById("getDifferenceResults").onclick = function() {
    const x = document.getElementById("valueX").value;
    const y = document.getElementById("valueY").value;
    const differenceResults = ((x - y) / ((x + y) / 2)) * 100 

    document.getElementById("differenceResults").innerHTML = 
    (parseFloat(differenceResults).toFixed(2)+ "%");
}

