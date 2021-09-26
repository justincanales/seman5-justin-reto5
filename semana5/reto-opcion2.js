// El     náufrago     satisfecho”     ofrece hamburguesas  sencillas,  dobles  y  triples,las cuales  tienen  un  costo  de  $20.00,  $25.00  y $28.00 respectivamente. La empresa acepta tarjetas de crédito con un cargo de 5 % sobre la compra.Suponiendo  que  los  clientes  adquieren  sólo un tipo de hamburguesa, realice un algoritmo para  determinar  cuánto  debe  pagar  una persona por N hamburguesas.

let hambursencilla = 20;
let hamburdoble = 25;
let  hamburtriple = 28;

let cantidadsencilla = 0;
let cantidaddoble = 0;
let cantidadtriple = 0;

let finalizar = false;

do {
    let eleccion = ("Ingrese 1.para una Sencilla, 2.para una Doble, 3. para finalizar el pedido");

    switch (eleccion) {
        case 1: 
             console.log("Deme una Sencilla");
             cantidadSencilla++;
             break;
         case 2:
         console.log("Deme una Doble");
          cantidadDoble++;
          break;
         case 3:    
              finalizar = true;
              break;
           default:
               console.log("Opcion incorrecta");  
    }
} while (finalizar = true);

let total = precioSencilla*cantidadSencilla + precioDoble*cantidadDoble + precioTriple*cantidadTriple;
    
let recargo = total + 0.05*total;

let finalizar2 = false;

do{
    let pago = +prompt("1.cancelar con tarjeta, 2.cancelar en efectivo");
    
    switch (metododepago) {
         case 1:
             console.log("Lo que tiene que pagar sera ${total} soles");
               finalizar2 = true
             break;
        case 2: 
            console.log("Y tiene el 5% al pagar con tarjeta, por lo que el total es ${recargo} soles");
             break;
          default:
              console.log("Error");   
         
    }
} while (finalizar == false);

  console.log(swich.case[2]);

