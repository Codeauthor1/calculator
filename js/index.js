let screenDisplay = document.getElementById('screen-display');
function display(num) {
    screenDisplay.value += num;
}

function calculate() {
    try {
        screenDisplay.value = eval(screenDisplay.value)
        // if( screenDisplay.value == "undefined") throw ""
    } catch (error) { 
        screenDisplay.value = "Error!";
    }
}

function clr() {
    screenDisplay.value = ""
}

function del() {
    screenDisplay.value = screenDisplay.value.slice(0, -1)
}

//============================ Theme Customization ===============//