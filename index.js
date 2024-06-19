const display = document.getElementById("Display");

function Appendtodisplay(input){
    if (display.value == "ERROR") {
        display.value = input;
    } else {
        display.value += input;
    }
}

function Cleardisplay(){
    display.value = ""
}

function Calculate(){
    try{
        let str = display.value.replace("÷", "/").replace("x", "*")

        display.value = eval(str)
    }
    catch(e){
        display.value = "ERROR"
    }
}