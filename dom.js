
// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
 var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME // 
var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
items[3].style.backgroundColor = 'yellow';

//Para mudar aparencia de todos precisamos fazer um loop
// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND"

 var item = document.querySelector('.list-group-item');
 item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

//---------------------------------------------------

//Caminhando pelo DOM (parent nodes, siblings, child)
let itemList = document.querySelector('#items');
//parentNode (arvore pai ao qual o elemento pertence) parentElement funciona igual
// console.log(itemList.parentNode);
// //mudar o background color da arvore pai para rosa
// itemList.parentNode.style.backgroundColor = '#fe4fe4';
// //Selecionar o pai do pai (avô) do elemento
// console.log(itemList.parentNode.parentNode);

//childNodes, children  (filhos)
//preferivel usar children pois o childNodes tbm seleciona elementos que quebram linha
// console.log(itemList.childNodes);
// //seleciona de fato apenas os elementos filhos
// console.log(itemList.children);
// itemList.children[2].textContent = 'Item 3 selecionado pelo children';
// console.log(itemList.firstElementChild);//primeiro elemento filho
// console.log(itemList.lastElementChild);//ultimo elemento filho

//nextSibling, nextElementSibling
// console.log(itemList.nextSibling);//prefirar usar o nextElementSibling
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);//elemento irmão anterior

//---------------------------------------------------

//Criando elementos
let newDiv = document.createElement('div');
newDiv.className = 'hello';//adiciona a classe hello ao elemento
newDiv.id = 'hello1'; //adiciona um id

//Adicionar um atributo, 1 o atributo, 2 o valor
newDiv.setAttribute('title', 'Minha Div');
//Adicionar um text node
let newDivText = document.createTextNode('Olá Mundão');
//Adicionar o texto ao elemento
newDiv.appendChild(newDivText);//podemos adicionar elementos assim tbm
//console.log(newDiv);

//adicionando o elemento criado ou html
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
//tbm podemos usar o insert para adicionar o elemento antes ou depois de outro
container.insertBefore(newDiv, h1);//1 elemento a ser adicionado, 2 antes de que elemento ele vai entrar