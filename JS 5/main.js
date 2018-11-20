const $pole = document.getElementById('pole');
const $result = document.getElementById('result');
const $message = document.getElementById('message');

const myArray = [1, 3, 15, 26, 100, -200];
$result.textContent = myArray;

function showmessage(operator, value, index) {
    const $message = document.getElementById('message');
    const textMsg = `${operator} wartość ${value} na pozycji ${index}`
    $message.textContent = textMsg;
}

const $51 = document.getElementById('51');
$51.addEventListener('click', function () {
    const valueFromField = $pole.value;
    zadanie51(valueFromField);
});

function zadanie51(value) {
    value = parseFloat(value);

    if (isNaN(value)) {
        value = Math.floor(Math.random() * 20 + 1);
    }
    myArray.push(value);

    $result.textContent = myArray;

    showmessage('dodano', value, myArray.length);

}

const $52 = document.getElementById('52');
$52.addEventListener('click', function () {
    const valueFromField = $pole.value;
    zadanie52(valueFromField);
});

function zadanie52(value) {
    value = parseFloat(value);

    if (isNaN(value)) {
        value = Math.floor(Math.random() * 20 + 1);
    }

    myArray.unshift(value);
    $result.textContent = myArray
    showmessage('dodano', value, 1);

}

const $53 = document.getElementById('53');
$53.addEventListener('click', function () {
    zadanie53();
});

function zadanie53(value) {
    value = myArray[myArray.length - 1];
    myArray.pop();
    $result.textContent = myArray
    $pole.value = value;
    showmessage('usunięto', value, myArray.length)

}

const $54 = document.getElementById('54');
$54.addEventListener('click', function () {
    zadanie54();
})

function zadanie54(value) {
    value = myArray[0];
    myArray.shift();
    $result.textContent = myArray;
    $pole.value = value
    showmessage('usunięto', value, 0)
}


const $55 = document.getElementById('55');
$55.addEventListener('click', function () {
    const valueFromField = $pole.value
    zadanie55(valueFromField);
});

function zadanie55(value) {
    value = parseFloat(value);
    if (isNaN(value)) {
        value = Math.floor(Math.random() * 20 + 1);
    }

    const zmienna = myArray.length;
    const losowe = Math.floor(Math.random() * zmienna)
    console.log(losowe);

    myArray.splice(losowe, 0, value);
    $result.textContent = myArray

    showmessage('wstawiono', value, losowe);
}

const $56 = document.getElementById('56');
$56.addEventListener('click', function () {
    const valueFromField = $pole.value;
    zadanie56(valueFromField);
});

function zadanie56(value) {
    value = parseInt(value);
    if (isNaN(value) || value > myArray.length) {
        value = Math.floor(Math.random() * myArray.length);
    }
    myArray.splice(value, 1);
    $result.textContent = myArray;

    showmessage('usunięto', 'indexu', value);
}

const $57 = document.getElementById('57');
$57.addEventListener('click', function () {
    zadanie57();
})
function zadanie57() {
    myArray.reverse();
    $result.textContent = myArray;
}

const $58 = document.getElementById('58');
$58.addEventListener('click', function () {
    zadanie58();
})

function zadanie58() {

    let zmiana;
    do {
        zmiana = false;
        for (let i = 0; i < myArray.length - 1; i++) {
            if (myArray[i] > myArray[i + 1]) {
                let temp = myArray[i];
                myArray[i] = myArray[i + 1];
                myArray[i + 1] = temp;
                zmiana = true;
            }
        }

    }
    while (zmiana);
    $result.textContent = myArray;
    $message.textContent=`Posortowano elementy tablicy`;
    
}

const $59 = document.getElementById('59');
$59.addEventListener('click', function () {
    const valueFromField = $pole.value;
    zadanie59(valueFromField);
})

function zadanie59(value) {
    let array2 = myArray.filter(usun);

    function usun(arrliczba) {
        if (isNaN(value)) {
            return (arrliczba % 2 !== 0)
        }
        else {
            return (arrliczba % value !== 0)
        }
    }

    $result.textContent = array2;
    const $message = document.getElementById('message');
    $message.textContent = `usunięto elementy z tablicy`
    updatearr(array2);
}

const $510 = document.getElementById('510');
$510.addEventListener('click', function () {
    const valueFromField = $pole.value;
    zadanie510(valueFromField);
})

function zadanie510(value) {
    let array2 = myArray.filter(usun1);

    function usun1(arrliczba) {
        if (isNaN(value)) {
            return (arrliczba % 2 == 0)
        }
        else {
            return (arrliczba % value == 0)
        }
    }

    $result.textContent = array2;
    const $message = document.getElementById('message');
    $message.textContent = `usunięto elementy z tablicy`
    updatearr(array2);
}


const $511 = document.getElementById('511')
$511.addEventListener('click', function () {

    zadanie511();
})

function zadanie511() {
    let array2 = myArray.reduce(max);

    function max(last, current) {
        if (last > current) {
            return last;
        }
        else return current;

    }
    $pole.value = array2;
    $message.textContent = `Znaleziono największą wartość: ${array2}`


}

const $512 = document.getElementById('512');
$512.addEventListener('click', function () {
    zadanie512();
})

function zadanie512() {
    let array2 = myArray.reduce(min);

    function min(last, current) {
        if (last < current) {
            return last
        }
        else return current;
    }
    $pole.value = array2;
    $message.textContent = `znaleziono wartość najmniejszą: ${array2}`;;
}

const $513 = document.getElementById('513');
$513.addEventListener('click', function () {
    zadanie513();
})

function zadanie513() {
    let array2 = myArray.reduce(suma);
    function suma(last, current) {
        return last + current
    }
    $pole.value = array2;
    $message.textContent = ('obliczono sumę elementów');
    $result.textContent = `suma: ${array2}`;
    updatearr(array2);
}

const $514 = document.getElementById('514');
$514.addEventListener('click', function () {
    const valueFromField = $pole.value

    zadanie514(valueFromField);
})

function zadanie514(value) {
    value = parseFloat(value);
    let array2 = myArray.map(mnozenie)

    function mnozenie(value1) {
        if (isNaN(value)) {
            return value1 * 2
        }
        return value1 * value
    }
    $result.textContent = array2;
    $message.textContent = `pomnożono elementy.`
    updatearr(array2);

}

const $515 = document.getElementById('515');
$515.addEventListener('click', function () {
    const valueFromField = $pole.value;
    zadanie515(valueFromField);
})

function zadanie515(value) {
    value = parseFloat(value);
    let array2 = myArray.map(dzielenie);

    function dzielenie(value1) {
        if (isNaN(value)) {
            return value1 / 2
        }
        else return value1 / value
    }
    $result.textContent = array2;
    $message.textContent = `podzielono elementy`
    updatearr(array2);
}

const $516 = document.getElementById('516');
$516.addEventListener('click', function () {

    const valueFromField = $pole.value;
    zadanie516(valueFromField);
})

function zadanie516(value) {
    value = parseFloat(value);
    let array2 = myArray.map(dodawanie);

    function dodawanie(value1) {
        if (isNaN(value)) {
            return (value1) + 1
        }
        else return value1 + value

    }
    
    $result.textContent = array2;
    $message.textContent = `dodano do elementów`
    updatearr(array2);

}


const $517 = document.getElementById('517');
$517.addEventListener('click', function () {

    const valueFromField = $pole.value;
    zadanie517(valueFromField);
})

function zadanie517(value) {
    value = parseFloat(value);
    let array2 = myArray.map(odejmowanie);

    function odejmowanie(value1) {
        if (isNaN(value)) {
            return (value1) - 1
        }
        else return value1 - value

    }
    
    $result.textContent = array2;
    $message.textContent = `odjęto do elementów`
   updatearr(array2);

}

const $518=document.getElementById('518');
$518.addEventListener('click', function (){
zadanie518();
})

function zadanie518(){
    let array2=myArray.map(zaokraglij);
    function zaokraglij(value){
        return Math.round(value)
    }
    $result.textContent=array2;
    $message.textContent=`zaokrąglono wszystkie wartości do liczb całkowitych`
    updatearr(array2);
}

function updatearr(value) {
    for (i=0; i<myArray.length; i++) {
        myArray[i]=value[i]
    }
}