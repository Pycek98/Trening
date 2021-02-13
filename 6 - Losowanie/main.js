const btn = document.querySelector('button');
const imiona = ['źle się czuję', 'Gustaw jest chory', 'mam okres', 'jadę spotkać się ze znajomymi', 'mam szkołę', 'uczę się', 'nie ma mnie w domu'];
const div = document.querySelector('div');


const nameGenerator = () => {
let index = Math.floor(Math.random() * imiona.length);
console.log(index);
div.textContent = `Bardzo byśmy chcieli ale ${imiona[index]}!`;

  
}


btn.addEventListener('click', nameGenerator);


