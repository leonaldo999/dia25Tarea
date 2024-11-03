/*

Ahora que sabes como funcionan los bucles, condiciones y casos. Realiza una calculadora usando puro JavaScript en donde se deberá ingresar los valores por teclado y ver el resultado en consola o por la misma pagina. Para la calculadora deberá sumar, restar, multiplicar y dividir.

Para tener un orden, tu proyecto deberá estar en un nuevo repositorio. Además de crear un readme explicando el uso de las propiedades que has utilizado en tu pagina web, como adicional a esto en el propio readme adjuntar captura de pantalla de la pagina.

*/


function calcular() {
  let info = "==========[CALCULADORA]==========" +
    "[1] Sumar\n" +
    "[2] Restar\n" +
    "[3] Multiplicar\n" +
    "[4] Dividir\n" +
    "[0] Salir\n";

  let opcion = 0;

  do {
    opcion = parseInt(prompt(info));

    if (isNaN(opcion)) {
      alert("Por favor, ingrese un número válido.");
      continue; // Vuelve al inicio del bucle
    }

    if (opcion !== 0) {
      let num1 = parseFloat(prompt("Ingrese el primer número:"));
      let num2 = parseFloat(prompt("Ingrese el segundo número:"));

      if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese números válidos.");
        continue; // Vuelve al inicio del bucle
      }

      switch (opcion) {
        case 1:
          alert("La suma es: " + (num1 + num2));
          break;
        case 2:
          alert("La resta es: " + (num1 - num2));
          break;
        case 3:
          alert("La multiplicación es: " + (num1 * num2));
          break;
        case 4:
          if (num2 === 0) {
            alert("Error: No se puede dividir por cero.");
          } else {
            alert("La división es: " + (num1 / num2));
          }
          break;
        default:
          alert("Opción no válida. Por favor, elija una opción del 0 al 4.");
      }
    }
  } while (opcion !== 0);
}

calcular();