// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA', 'TRzy', 'CzteRy'];
const messages = ["super", "działa!", 'Trzeci też!', 'WOW CZWARTY?!'];
const div = document.querySelector('.message');

const showMessage = function(e) {
  passwords.forEach((password, index) => {
    password = passwords[index].toLowerCase();
    const typedInput = e.target.value.toLowerCase();
    if (typedInput === password){
      div.innerHTML = messages[index];
    }
    
    
  });
  
}

input.addEventListener("input", showMessage);


