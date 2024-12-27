const fs = require ('fs');


const content = fs.readFileSync('README.md', 'utf-8');


const wordCount = content.split(/\s+/).length;

const reactWordCount = (content.match(/react/gi) || []).length;


console.log('Palabras',wordCount)

console.log('Palabras React:', reactWordCount); // case-insensitive


/* 1-->fs.readFileSync('README.md', 'utf-8'): Lee el archivo README.md como una cadena de texto.

2-->content.split(/\s+/).length: Divide la cadena en palabras y devuelve un array con ellas. La expresión regular \s+ significa que busca cualquier espacio en blanco.

3-->const reactWordCount = (content.match(/react/gi) || []).length: Busca todas las coincidencias de la palabra 'react' en mayúscula y minúscula (gi) y devuelve un array con ellas. Si no hay coincidencias, devuelve un array vacío. La función Array.prototype.length devuelve el número de elementos en el array.

La salida muestra el número de palabras en el README.md y el número de ocurrencias de la palabra 'React' en mayúscula y minúscula. La expresión regular /react/gi es utilizada para buscar todas las coincidencias de la palabra 'react' en el texto.  */

