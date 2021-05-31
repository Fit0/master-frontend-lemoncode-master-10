const team = ["john", "Lucas", "Maria"];
console.log("Array Team:", team);

/*
Implementa una función head (inmutable), tal que, dado un array 
como entrada extraiga y devuelva su primer elemento. Utiliza 
destructuring.
*/
const head = ([first]) => first;

console.log("Function Head:", head(team));

/*
Implementa una función tail (inmutable), tal que, dado un array
como entrada devuelta todos menos el primer elemento. Utiliza 
rest operator.
*/
const tail = ([first, ...rest]) => rest;

console.log("Function Tail:", tail(team));

/*
Implementa una función init (inmutable), tal que, dado un array
como entrada devuelva todos los elementos menos el último. 
Utiliza los métodos que ofrece Array.prototype.
*/
const init = (arr) => {
    const args = [...arr];

    [first, ...rest] = args.reverse();
    return rest.reverse();
};

console.log("Function init:", init(team));
/*
Implementa una función last (inmutable), tal que, dado un array
como entrada devuelva el último elemento.
*/
const last = (arr) => {
    const args = [...arr];

    [first, ...rest] = args.reverse();
    return first;
}

console.log("Function last:", last(team));

/*
Implementa una función concat (inmutable) tal que, dados 2 arrays 
como entrada, devuelva la concatenación de ambos. Utiliza 
rest / spread operators.
*/
const concat = (arr1, arr2) => [...arr1, ...arr2];

console.log("Function concat:", concat(team, ["Pablo", "Nacho"]));

/*
Implementa una versión del ejercicio anterior donde se acepten 
múltiples arrays de entrada (más de 2).
*/
const concatMultiple = (...arrays) => {
    const arrayMultiple = [];
    arrays.forEach(
        value => arrayMultiple.push(...value)
    );
    return arrayMultiple;
}

console.log("Function concatMultiple:", concatMultiple(team, ["Ana", "Alex"], ["Peter", "Fran"]));
/*
Implementa una función clone que, a partir de un objeto de entrada 
source devuelva un nuevo objeto con las propiedades de source
*/
const cloneArray = (source) => ({ ...source });

console.log("Function Clone:", cloneArray(team));

/*
Implementa una función merge que, dados dos objetos de entrada source 
y target, devuelva un nuevo objeto con todas las propiedades 
de target y de source, y en caso de propiedades con el mismo nombre, 
source sobreescribe a target.
*/
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const merge = (source, target) => ({ ...target, ...source });

console.log("Function Merge:", merge(a, b));


/*
Crea una función isBookRead que reciba una lista de libros y un título 
y devuelva si se ha leído o no dicho libro. Un libro es un 
objeto con title como string y isRead como booleano. En caso 
de no existir el libro devolver false TIP: Existe un método 
de Array.prototype que te ayudará a buscar según un patrón.
*/
function isBookRead(books, titleToSearch) {
    const result = books.find(book => book.title === titleToSearch);

    if (result === undefined) {
        return "El libro [" + titleToSearch + "] no se encuentra en la lista.";
    } else {
        return result.isRead;
    }

}

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

/*
El objetivo de este ejercicio es crear una máquina tragaperras utilizando 
clases donde cada vez que juguemos insertemos una moneda. Cada máquina 
tragaperras (instancia) tendrá un contador de monedas que automáticamente 
se irá incrementando conforme vayamos jugando.

Cuando se llame al método play el número de monedas se debe incrementar 
de forma automática y debe generar tres booleanos aleatorios que representarán 
el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres 
booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

"Congratulations!!!. You won <número de monedas> coins!!";
y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido 
de la máquina. En caso contrario deberá mostrar otro mensaje:

"Good luck next time!!".
*/

class SlotMachine {
    constructor (){
        this.monedas = 0;
    }

    play(){
        this.monedas +=1;
        const slot01 = parseInt(Math.random()*2);
        const slot02 = parseInt(Math.random()*2);
        const slot03 = parseInt(Math.random()*2);
        if (slot01 === slot02 && 
            slot02 === slot03)  
            console.log(`Congratulations!!!. You won <${this.monedas}> coins!!`);            
        else console.log("Good luck next time");
        
    }
}

const machineTragaperras = new SlotMachine();
machineTragaperras.play();
