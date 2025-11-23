<script>

function showCalculator() {
    document.getElementById("calculator").style.display = "block";

    document.getElementById("openBtn").style.display = "none";
}

let display = document.getElementById("display");

/*  
   APPEND BUTTON VALUES
   % is converted to /100 so 50% = 0.5
*/
function append(value) {

    if (value === "%") {
        display.innerText += "/100";
        return;
    }

    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearAll() {
    display.innerText = "0";
}

function backspace() {
    display.innerText = display.innerText.slice(0, -1) || "0";
}

function square() {
    let num = parseFloat(display.innerText);
    display.innerText = num * num;
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = "Error";
    }
}

</script>
