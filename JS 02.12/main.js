const $myform = document.forms['myform'];
const $pole = myform.pole;

$myform.onsubmit = function () {
    //sprawdzenie czy zawartość pola nie jest pusta
    if ($pole.value) {
        tworzenie();
    }
    else { alert('nieprawidłowa wartość') }

    return false;
}

function tworzenie() {
    //tworzenie listy zadań
    console.log($pole.value)
    let $todo = document.getElementById('todo');
    var noweLi = document.createElement('li');
    noweLi.innerHTML = $pole.value;
    noweLi.setAttribute('contenteditable', 'true')

    noweLi.ondblclick=function() {
        if (this.hasAttribute('data-id')){
        this.removeAttribute('data-id')
        this.setAttribute('contenteditable', 'true')
        }
        else {this.setAttribute('data-id', 'done')

    this.setAttribute('contenteditable', 'false')}


    }
    $todo.appendChild(noweLi);

    var $deletebtn = document.createElement('button');
    $deletebtn.textContent = 'usuń'
    
    noweLi.appendChild($deletebtn);
    $deletebtn.onclick = function usuwanie() {

        noweLi.parentNode.removeChild(noweLi)
    }


}







