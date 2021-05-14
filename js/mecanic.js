
var textoriginal = 'Codigo shift+ctrl+a'
document.getElementById('original').innerHTML = textoriginal;



function copiadora() {
 var copia = textoriginal;//Guarda array en la otra variable
 //const copyText = document.getElementById("precopia").textContent;
 const textArea = document.createElement('textarea');

 document.getElementById('copia').innerHTML = copia;

 textArea.textContent = copia;
 document.body.append(textArea);
 textArea.select();
 document.execCommand("copy");
 textArea.remove();


}










