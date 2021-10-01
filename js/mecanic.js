let input = "";
let output
function copiadora() {
 input = document.getElementById('input').value;
 output = input;/*Guarda array en la otra variable*/
 const textArea = document.createElement('textarea');/*copia en un pre el contenido de las etiquetas*/
 document.getElementById('output').innerHTML = output;/*muestra lo copiado en la segunda etiqueta*/
 textArea.textContent = output;/*guarda el array en el contenido*/
 document.body.append(textArea);/*crea un elemento*/
 textArea.select();/*selecciona el elemento*/
 document.execCommand("copy");/*copia el texto dentro del elemento*/
 textArea.remove();//elimina elemento
}