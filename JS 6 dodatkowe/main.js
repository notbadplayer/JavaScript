let paragrafy = document.getElementsByTagName('p');



let arr = []
for (i = 0; i < paragrafy.length; i++) {
    let dlugosc = paragrafy[i].textContent;
    arr.push(dlugosc.length);

    paragrafy[i].setAttribute('id', dlugosc.length);

}
let min = Math.min(...arr);
console.log(min);
let max = Math.max(...arr);
console.log(max);

let najmniejsza = document.getElementById(min);
najmniejsza.style.color = 'green'

let najwieksza = document.getElementById(max);
najwieksza.style.color = 'red'


//zadanie 2
let losowa = (Math.floor(Math.random() * paragrafy.length))
console.log(losowa)
paragrafy[losowa].style.fontWeight = 'bold';

//zadanie 3
for (i = 0; i < paragrafy.length; i++) {
    if (i % 2 == 0) {
        paragrafy[i].style.fontStyle = 'italic'
    }
}

//zadanie 4
for (i = 0; i < paragrafy.length; i++) {

    paragrafy[i].onclick = styltekstu;
    paragrafy[i].onauxclick = styl2
    paragrafy[i].oncontextmenu = function (event) {
        event.preventDefault();
    }

    function styltekstu() {

        this.style.textTransform = 'uppercase'
    }
    function styl2() {
        this.style.textTransform = ''
    }

}

//zadanie 5

paragrafy[0].style.border = 'solid black'

const $next = document.getElementById('next')
const $previous = document.getElementById('previous')

$next.onclick = nastepny;

let tmp = 0
function nastepny() {
    for (const el of paragrafy) {
        el.style.border = null
    }
    tmp++;
    if (tmp == paragrafy.length) {
        tmp = 0
    }
    paragrafy[tmp].style.border = 'solid black';

}

$previous.onclick = poprzedni;

function poprzedni() {
    for (const el of paragrafy) {
        el.style.border = null
    }
    tmp--;
    if (tmp == -1) {
        tmp = paragrafy.length - 1
    }
    paragrafy[tmp].style.border = 'solid black';


}

//zadanie 6

let $myform = document.forms['myform'];
let $field = $myform.elements['field'];

$field.oninput = function () {
    this.style.backgroundColor = null
    this.style.fontSize=null
    console.log(this.value)

    this.value = parseInt(this.value)
    if (isNaN(this.value)) {
        this.style.backgroundColor = 'red'
    }
    else paragrafy[tmp].style.fontSize=this.value+'px'


}


//zadanie 7
let $hide=document.getElementById('hide');
$hide.onclick=function() {
    for(const el of paragrafy) {
        el.style.visibility=null
    }
let losowa2= Math.floor(Math.random()*paragrafy.length);
console.log(losowa2)
paragrafy[losowa2].style.visibility='hidden';
}


