
const IDs = ['msTens', 'msHundreds', 'secondOnes', 'secondTens'];

const digits = IDs.map(id => {
    let digit = {
        id: id,
        div: document.getElementById(id),
        n: 0
    };

    return digit;
});

var interval10;

function increment(){

    digits.forEach((digit, index) => {
        if( index === 0 || digits[index-1].n === 10){
            if(index > 0){digits[index-1].n = 0;}
            digit.n += 1;
        }
    })

    digits.forEach(digit => digit.div.textContent = digit.n);

    if(digits[3].div.textContent === '1'){
        window.clearInterval(interval10);
        digits.forEach(digit => digit.div.classList.toggle('redDigit'));
        startButton.disabled = false;
    }
}

let startButton = document.getElementById("start");startButton.addEventListener("click", startTimer);

function startTimer(){
    if(digits[3].n !== 0){
        digits.forEach(digit => digit.div.classList.toggle('redDigit'));
    }

    digits[3].n = 0;
    interval10 = window.setInterval(increment, 5);
    startButton.disabled = true;
}

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetTimer);

function resetTimer(){
    window.clearInterval(interval10);
    startButton.disabled = false;
    digits.forEach(digit =>{
        digit.n = 0;
        digit.div.textContent = 0;
    })
}

