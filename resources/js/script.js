function appendDisplay(value) {
    const rs = document.getElementById('result');   
    rs.innerText += value;
}
function clearDisplay() {
    const rs = document.getElementById('result');
    rs.innerText = "";
}

function calculate() {
    const rs = document.getElementById('result');
    try {
        rs.innerText = eval(rs.innerText);
    } catch {
        rs.innerText = "Error";
    }
}




