const $pole = document.getElementById('pole');
const $btn = document.getElementById('btn');

const $message = document.getElementById('message');

const myArray = [1, 3, 15, 26, 100, -200];

$btn.addEventListener('click', function () {
    const valueFromField = $pole.value;
    updateMyArr(valueFromField);
});

function updateMyArr(value) {
    const $result = document.getElementById('result');
    value = parseFloat(value);

    if (isNaN(value)) {
        value = Math.floor(Math.random() * 20 + 1);
    }

    myArray.push(value);

    $result.textContent = myArray;

    showMessage(value, myArray.length)

}

function showMessage(value, index) {
    const $message = document.getElementById('message');
    const textMsg = `dodano wartość ${value} na pozycji ${index}`;
    $message.textContent = textMsg;
}

$btn2 = document.getElementById('btn2');
$btn2.addEventListener('click', function () {


    const dodajdotablicy = $pole.value;

    funkcja52(dodajdotablicy);
});

function funkcja52(value) {

    myArray.unshift(value);
    //console.log(myArray)
    const $result = document.getElementById('result');
    $result.textContent = myArray;
    const $message = document.getElementById('message');
    const textMsg = `dodano wartość ${value}`;
    $message.textContent = textMsg;
}


const $btn3 = document.getElementById('btn3');
$btn3.addEventListener('click', function () {

    const $result = document.getElementById('result');
    $result.textContent = myArray;
    const ostatnia = myArray[myArray.length - 1]
    
    myArray.pop();
    console.log(myArray);
    const $message = document.getElementById('message');
    const textMsg = `usunięto wartość na końcu ${ostatnia}`;
    $message.textContent=textMsg;
    $pole.value=ostatnia;

});





