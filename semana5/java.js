// Un productor de leche lleva el registro de lo que produce en litros, pero cuando entrega le pagan  en  galones.  Realice  un  algoritmo,  y represéntelo en JS, que ayude al productor a saber cuánto recibirá por la entrega de su producción de un día (1 galón= 3.785 litros).

// cantidad de litros que produce (entero)

let cantlitros = +prompt("Cantidad de litros de leche que desea comprar");

// Precio del galon (real)

let PG = +prompt("El precio del Galon en soles");

// Cantidad de galones que produce (Real);

let TG = cantlitros/3.785;

// Ganancia por la entrega de leche (real)

let  GA = (PG * TG);

console.log(`Ganancia de leche en total es ${GA} soles`);

