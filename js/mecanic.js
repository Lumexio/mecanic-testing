var textoriginal = 'Codigo shift+ctrl+a'
document.getElementById('original').innerHTML = textoriginal;
function copiadora() {
 var copia = textoriginal;/*Guarda array en la otra variable*/
 const textArea = document.createElement('textarea');/*copia en un pre el contenido de las etiquetas*/
 document.getElementById('copia').innerHTML = copia;/*muestra lo piado en la segunda etiqueta*/
 textArea.textContent = copia;/*guarda el array en el contenido*/
 document.body.append(textArea);/*crea un elemento*/
 textArea.select();/*selecciona el elemento*/
 document.execCommand("copy");/*copia el texto dentro del elemento*/
 textArea.remove();//elimina elemento
}