const parentListP = document.getElementById('parental-element');

for (let i = 0; i < 3; i++) {
    const newP = document.createElement('p');
    const newPText = document.createTextNode(`jakiś tekst ${i + 1}`);
    newP.appendChild(newPText);
    newP.setAttribute('id', 'test');



    parentListP.appendChild(newP);

}


//zadanie 1:

let arr = ['ala', 'ma', 'kota', 'a', 'kot', 'ma', 'alę'];

const $paragrafy = document.getElementById('paragrafy');
for (let i = 0; i < arr.length; i++) {

    //zadanie 2

    const naglowek = document.createElement('h2');
    const naglowekText = document.createTextNode(i + 1);
    naglowek.appendChild(naglowekText)
    $paragrafy.appendChild(naglowek);


    //zadanie 1
    const noweP = document.createElement('p');
    const nowyText = document.createTextNode(arr[i])
    noweP.appendChild(nowyText)

    $paragrafy.appendChild(noweP);

    naglowek.onclick = function () {

        if (noweP.classList.contains('hide')) {
            noweP.classList.remove('hide')
        }
        else { noweP.classList.add('hide') }
    }
    //zadanie 4
    const formularz = document.forms['myform'];
    const $pole = formularz.pole;
    formularz.onsubmit = function () {
        console.log($pole.value)

        
        console.log(arr)
const newh2form=document.createTextNode(`${i=arr.length+1}`)
const newh2=document.createElement('h2');
newh2.appendChild(newh2form);
$paragrafy.appendChild(newh2)
        

        let kolejnep = document.createElement('p');
        kolejnep.innerHTML = $pole.value;


        $paragrafy.appendChild(kolejnep);

        arr.push($pole.value)
        



        return false;
    }

    //zadanie 5
    
    

    //dodatkowe

    noweP.onmousedown=function() {
        this.style.background='red'
    }

    noweP.onmouseup=function() {
        this.style.background=null
    }

}


