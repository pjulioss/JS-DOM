//Events

let button = document.getElementById('button');
//evento de click em um elemento
//usando função anonima
button.addEventListener('click', function(){
  console.log('botão clicado')
})
//usando função existente
button.addEventListener('click', buttonClick);

function buttonClick(){
  //mudando elementos de acordo com açoes do usuario(no caso o click)
  document.getElementById('hello1').textContent = 'Tchau Mundão';
}