document.getElementById("getChangeResults").onclick = function() {
    let x = document.getElementById("oldX").value;
        if (x.includes('$')){
            const firstXChar = x[0];

            const replaceXDollar = x.replace(firstXChar, '');
            // parseFloat() wont work with a symbol as the first character
            x = parseFloat(replaceXDollar);
        }
    


    let y = document.getElementById("newY").value;
        if (y.includes('$')){
            const firstYChar = y[0];

            const replaceYDollar = y.replace(firstYChar, '');

            y = parseFloat(replaceYDollar);
        }


    console.log(x,y);

    const changeResults = ((((y - x) / x) * 100));

    document.getElementById("changeResults").innerHTML = 
    (parseFloat(changeResults).toFixed(2)+ "%");
}

