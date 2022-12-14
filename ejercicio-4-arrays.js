// 1.1 Consigue el valor "HULK" del array de cars y muestralo por consola.
let avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]); // sale HULK


// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers[0] = ('IRONMAN');
console.log(avengers) // No funciona porque es una constante, para que funcione tendríamos que decir que la variable se determina a través de "let".

// 1.3 Alert numero de elementos en el array usando la propiedad correcta de Array.

console.log(avengers.length)

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 

let rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push('Morty', 'Summer') // Salen "Morty" y "Summer" en las 2 últimas posiciones
console.log(rickAndMortyCharacters.length)
console.log(rickAndMortyCharacters[4]) // Muestra "Summer" sabiendo que es la posición 5 porque empezamos contando desde 0.

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop()
console.log(rickAndMortyCharacters)// quita a Lapiz Lopez

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters) // salen todos menos "Beth" que ocupa la posición 1 sabiendo que empezamos a contar desde 0

