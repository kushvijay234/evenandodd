function even() {
    // Get the input values
    let evenNumber = parseInt(document.getElementById("firstNumber").value);

    // Check no Even or odd
    if (evenNumber  % 2 === 0 ) {
        document.getElementById("result").textContent= "Even";
    }
    else {
        document.getElementById("result").textContent= "odd";
    }
}