const chars = 'ABCDEFGHIJKLMNOPRSTUWXVT0123456789';
const btn = document.querySelector('button');

const section = document.querySelector('section');

const codesNumber = 10;
const charsNumber = 24;
let code = '';

const codesGenerator = function() {
  for (let i = 0; i < codesNumber; i++) {
    let code = "";
    for (let i = 0; i < charsNumber; i++) {
      let index = Math.floor(Math.random() * chars.length);
      code += chars[index];
    }
    const div = document.createElement('div');
    const hr = document.createElement('hr');
    div.textContent = code;
    section.appendChild(div);
    section.appendChild(hr);
  }
}

btn.addEventListener('click', codesGenerator);
