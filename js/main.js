//DECLARO LAS VARIABLES

let seleccionarProducto;
let tamanio;
let cantidad;
let seguirComprando = 1;
let modoDeEntrega;
let total = 0;
let totalConEnvio;


//CREO LAS FUNCIONES

function opcionInvalida() {
    alert("La opción ingresada no es válida.");
}

function validacionProductos() {
    return seleccionarProducto !== 1 && seleccionarProducto !== 2 && seleccionarProducto !== 3 && seleccionarProducto !== 4;
}

function validacionTamanio() {
    return tamanio != 1 && tamanio != 2 && tamanio != 3;
}

function validacionCantidad() {
    return isNaN(cantidad) || cantidad == 0 || cantidad != Math.floor(cantidad)
}

function validacionSeguirComprando() {
    return seguirComprando != 1 && seguirComprando != 2;
}

function seleccionarTamanio(precio1, precio2, precio3) {
    do {
        tamanio = Number(prompt(`Seleccione el número correspondiente al tamaño del alimento:
        1- 3 Kg ($` + precio1.toLocaleString() + `).
        2- 7.5 Kg ($` + precio2.toLocaleString() + `).
        3- 15 Kg ($` + precio3.toLocaleString() + `).`));
        if (validacionTamanio()) {
            opcionInvalida();
        }
    } while (validacionTamanio())
}

function seleccionarCantidad() {
    do {
        cantidad = Number(prompt("Introduzca la cantidad de unidades que desea comprar:"));
        if (validacionCantidad()) {
            opcionInvalida();
        }
    } while (validacionCantidad())
}

const calcularSubtotal = (cant, precio) => {
    return cant * precio
}


//CREO EL ALGORITMO CON CICLOS, CONDICIONALES Y FUNCIONES

//Mientras la variable seguirComprando sea igual a "Sí", es decir, sea igual a 1, se repite el ciclo que empieza con un prompt donde se le pide al cliente que se seleccione un producto. La variable seguirComprando ya tiene asignado el valor de 1 para que empiece a reproducirse el ciclo.

while (seguirComprando == 1) {
    
//Se le pide al cliente que seleccione el producto que desea comprar y se realiza un condicional para que si se ingresa una opción inválida aparezca un alert advirtiéndolo. Además, si el cliente ingresa una opción inválida, se repite el ciclo. Dependiendo de la elección del cliente, se ingresa con un switch en 4 caminos posibles, donde en la opción 1 y 3 que corresponden a alimentos, se le pide que seleccione el tamaño que desea, por lo cual se vuelve a usar un switch para volver a ingresar en 3 caminos posibles. Luego, se le pide al cliente que seleccione la cantidad que desea comprar. Cada prompt que aparece tiene sus respectivas validaciones para que no se pueda ingresar una opción que no sea válida. 

    do {
        seleccionarProducto = Number(prompt(`Seleccione el número correspondiente al producto que desea agregar al carrito: 
        1- Royal Canin Gato Castrado ($15.000 - $50.000).
        2- Pipeta Frontline Gato ($6.500).
        3- Pro Plan Perro Adulto Raza Mediana ($12.000 - $45.000).
        4- Shampoo para Perro ($3.000).`));

        if (validacionProductos()) {
            opcionInvalida();
        }

        switch (seleccionarProducto) {
            case 1:
                seleccionarTamanio(15000, 30000, 50000);
                switch (tamanio) {
                    case 1:
                        seleccionarCantidad();
                        total += calcularSubtotal(cantidad, 15000);
                        break;
                    case 2:
                        seleccionarCantidad();
                        total += calcularSubtotal(cantidad, 30000);
                        break;
                    case 3:
                        seleccionarCantidad();
                        total += calcularSubtotal(cantidad, 50000);
                        break;
                }
                break;

            case 2:
                seleccionarCantidad();
                total += calcularSubtotal(cantidad, 6500);
                break;

            case 3:
                seleccionarTamanio(12000, 25000, 45000);
                switch (tamanio) {
                    case 1:
                        seleccionarCantidad();
                        total += calcularSubtotal(cantidad, 12000);
                        break;
                    case 2:
                        seleccionarCantidad();
                        total += calcularSubtotal(cantidad, 25000);
                        break;
                    case 3:
                        seleccionarCantidad();
                        total += calcularSubtotal(cantidad, 45000);
                        break;
                }
                break;

            case 4:
                seleccionarCantidad();
                total += calcularSubtotal(cantidad, 3000);
                break;
        }

    } while (validacionProductos())

    //Luego de seleccionar el producto deseado, se le pregunta al cliente si desea seguir comprando. Si la respuesta es "Sí", se vuelve a iniciar el ciclo entero que comienza con la selección de productos. Si la respuesta es "No", es decir, la opción 2, se ingresa en un condicional donde se le pregunta al cliente que modo de entrega prefiere. Si desea retirar por el local o si la compra supera los $20.000, no hay costo de envío. De lo contrario, el costo de envío es de $2000. Aquí de nuevo, realizamos las validaciones correspondientes con condicionales y alerts y ciclos que se repiten hasta que se ingrese una opción válida.  

    do {
        seguirComprando = Number(prompt(`¿Desea agregar otro producto al carrito?
       1- Sí.
       2- No.`));

        if (validacionSeguirComprando()) {
            opcionInvalida();
        } else if (seguirComprando == 2) {
            do {
                modoDeEntrega = Number(prompt(`¿Cómo querés recibir tu producto?
        1- Envío a domicilio (Costo de envío: $2.000. Envío sin costo para compras mayores a $20.000).
        2- Retiro en tienda (Sin costo).`));

                if (modoDeEntrega == 1) {
                    if (total >= 20000) {
                        alert(`El total de la compra es de $` + total.toLocaleString() + `. \nEl envío es sin costo.`);
                    } else {
                        totalConEnvio = total + 2000;
                        alert(`El total de la compra es de $` + total.toLocaleString() + `. \nEl envío es de $2.000. \nEl total con el envío es de $` + totalConEnvio.toLocaleString() + `.`);
                    }
                } else if (modoDeEntrega == 2) {
                    alert(`El total de la compra es de $` + total.toLocaleString() + `. \nPuede retirar de lunes a viernes de 10:00 a 20:00hs o sábados de 10:00 a 14:00hs.`);
                } else {
                    opcionInvalida();
                }
            } while (modoDeEntrega != 1 && modoDeEntrega != 2)
        }
    } while (validacionSeguirComprando())
}

//El subtotal se calcula con una función que multiplica los parámetros cantidad y precio. La cantidad la ingresa el usuario y el precio es fijo para cada producto. El total empieza con un valor de 0, y cada vez que se ingresa en un camino, se actualiza de la siguiente manera: total = total (0 en un inicio) + subtotal. El subtotal varía dependiendo del camino ingresado, ya que los precios son distintos para cada producto y la cantidad varía dependiendo de lo que elija el cliente. Mientras que el cliente siga agregando productos al carrito, el total se irá actualizando. El envío se le suma al final solo si la compra es menor a $20.000 y se elige envío a domicilio.  

