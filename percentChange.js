document.getElementById("getChangeResults").onclick = function() {
    let x = document.getElementById("oldX").value;
    // remove $ % and , characters
        x = x.replace(/\$/g, '');
        x = x.replace(/%/g, '');
        x = x.replace(/,/g, '');


    let y = document.getElementById("newY").value;
    // remove $ % and , characters
        y = y.replace(/\$/g, '');
        y = y.replace(/%/g, '');
        y = y.replace(/,/g, '');


    console.log(x,y);

    const changeResults = ((((y - x) / x) * 100));

    document.getElementById("changeResults").innerHTML = 
    (parseFloat(changeResults).toFixed(2)+ "%");
}

