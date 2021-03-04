var domanda = prompt("Inserisci il tuo cognome");
domanda = domanda[0].toUpperCase() + domanda.substring(1)
console.log(domanda);

var cognomi = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"]
cognomi.push(domanda);
console.log(cognomi.sort());

i = 0;

while (i < cognomi.length) {
  document.getElementById('lista').innerHTML += "<li>" + cognomi[i] + "</li>";
  i++;
}
