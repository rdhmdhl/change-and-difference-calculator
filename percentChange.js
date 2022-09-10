document.getElementById("getChangeResults").onclick = function() {
    const x = document.getElementById("oldX").value;
    const y = document.getElementById("newY").value;
    const changeResults = ((((y - x) / x) * 100));

    document.getElementById("changeResults").innerHTML = 
    (parseFloat(changeResults).toFixed(2)+ "%");
}

