/* ALGUMAS FORMAS DE MANIPULAR O DOM (necessario descomentar tag no html)
//Selecionar 

//Single element
console.log(document.getElementById('my-form'));//passamos o id da tag html entre aspas
console.log(document.querySelector('h1'));//com o querySelector podemos pegar elementos pela classe, id ou tag


//Multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('items'));

//Alterar
const ul = document.querySelector('.items'); //selecionamos o elemento html que desejamos alterar
// ul.remove(); //podemos fazer as modificações que quisermos como remover todo o elemento (tag)
ul.lastElementChild.remove(); //remover apenas o ultimo elemento filho do elemento selecionado
ul.firstElementChild.textContent = 'Modified 1'; //alterando o texto do elemento selecionado
ul.children[1].innerText = 'Segundo'; //podemos pegar os elementos filhos pela posição, a contagem começa do 0
ul.children[3].innerHTML = "<h4>HTML Mudado</h4>";//podemos alterar a tag html (tbm podemos adicionar html dinamicamente)

*/
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === ''){
    msg.classList.add('error');
    msg.innerHTML = 'Preencha todos os campos!';

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

    userList.appendChild(li);

    //Limpar os campos
    nameInput.value = '';
    emailInput.value = '';
  }
}