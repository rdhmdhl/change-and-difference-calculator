document.getElementById("getResults").onclick = function() {
    const x = document.getElementById("valueX").value;
    const y = document.getElementById("valueY").value;
    const results = ((((y - x) / x) * 100));

    document.getElementById("finalResults").innerHTML = 
    (parseFloat(results).toFixed(2)+ "%");
}

