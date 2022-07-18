const outputScreen = document.getElementById("output-screen")
const btn = document.querySelectorAll('.btn')


for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        outputScreen.value += btntext;
    });
}


// function display(num) {
//     outputScreen.value += num
// }

function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value)
    } catch (error) {
        alert("Invalid")
    }
}

function allClear() {
    outputScreen.value = ""
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1)
}

function pow() {
    outputScreen.value = Math.pow(outputScreen.value, 2)
}

function sin() {
    outputScreen.value = Math.sin(outputScreen.value);
}

function cos() {
    outputScreen.value = Math.cos(outputScreen.value);
}

function tan() {
    outputScreen.value = Math.tan(outputScreen.value);
}

function sqrt() {
    outputScreen.value = Math.sqrt(outputScreen.value, 2);
}

function log() {
    outputScreen.value = Math.log(outputScreen.value);
}

function pi() {
    outputScreen.value = 3.14159265359;
}

function e() {
    outputScreen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = outputScreen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    outputScreen.value = f;
}

function backspc() {
    outputScreen.value = outputScreen.value.substr(0, outputScreen.value.length - 1);
}
