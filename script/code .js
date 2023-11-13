let output = document.getElementById('output');

function clearscreen() {
    document.getElementById("outcomes").value = "";
}

function display(value) {
    document.getElementById("outcomes").value += value;
}

function equal(){
    // displayAnswer variable
    let firstValue = document.getElementById('outcomes').value; 
    let secondValue = eval(firstValue);
    document.getElementById('outcomes').value = secondValue;
    
}