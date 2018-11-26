let $liitems = document.getElementsByTagName('li');

for (i = 0; i < $liitems.length; i++) {
    const textFromli = $liitems[i].textContent;
    console.log(textFromli);
    $liitems[i].setAttribute('id', textFromli)
    console.log($liitems[i].hasAttribute('id'));
}
//zadanie 2
let array = document.getElementsByTagName('li');
let zmienna = 0;
for (i = 0; i < array.length; i++) {
    zmienna++;
    console.log(zmienna);
    if (zmienna % 2 == 0) {
        $liitems[i].setAttribute('class', 'parzysty');
    }
    else $liitems[i].setAttribute('class', 'nieparzysty');
    console.log($liitems[i].getAttribute('class'));
};
//zadanie 3

for (i = 0; i < $liitems.length; i++) {
    let array2 = Array.from($liitems[i].textContent);
    $liitems[i].setAttribute('title', array2.length);

}

//zadanie 4

for (i = 0; i < $liitems.length; i++) {
    const textFromli = $liitems[i].textContent;
    $liitems[i].textContent = (textFromli + " 2018");
}


//zadanie 5

for (i = 0; i < $liitems.length; i++) {

    $liitems[i].style.color = losowykolor();
}

function losowykolor() {
    let losowa = Math.round((Math.random() * 3) + 1);
    console.log(losowa);
    switch (losowa) {
        case 1:
            return 'red'
        case 2:
            return 'green'
        case 3:
            return 'blue'
        case 4:
            return 'orange'
            break;
        default: return 'black'

    }
}

//zadanie 6

for (i = 0; i < $liitems.length; i++) {
    $liitems[i].onclick = lewy;

    function lewy(event) {
        //zadanie 8: czyszczenie zawartości
        if (this.style.backgroundColor === 'lightblue' || this.style.backgroundColor === 'lightcyan') {
            this.style.backgroundColor = null;
        }

        else if (event.target.className === "nieparzysty") {
            this.style.backgroundColor = 'lightblue';
        }
        else this.style.backgroundColor = 'lightcyan'
    }

}


//zadanie 7

for (i = 0; i < $liitems.length; i++) {
    $liitems[i].onauxclick = prawy;

    function prawy() {

        //zadanie 8: czyszczenie zawartości     
        if (this.style.backgroundColor === 'lightpink' || this.style.backgroundColor === 'lightyellow') {
            this.style.backgroundColor = null;
        }

        else if (this.className === 'nieparzysty') {
            this.style.backgroundColor = 'lightpink'
        }
        else this.style.backgroundColor = 'lightyellow'
    }
}


//zadanie 9
let formularz1 = document.forms['myform'];
let $pole = formularz1.elements['numer'];

$pole.oninput = funkcjaforms;


function funkcjaforms() {
    let wybor = $pole.value;
    wybor = parseInt(wybor);

    if (wybor >= 1 && wybor <= 12) {
        for (const el of $liitems) {
            el.style.border = null
        }
    }
    $liitems[wybor-1].style.border='thick purple solid'


}