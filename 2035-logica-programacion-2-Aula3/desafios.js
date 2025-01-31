/* 
Desafíos: Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. 
Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

Con eso en mente, hemos creado una lista de actividades (opcionales) centradas en la práctica para mejorar aún más 
tu experiencia de aprendizaje. ¡Así que vamos a practicar!

Desafíos:
1- Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, 
que se recibirán como parámetros.
2- Crea una función que calcule el valor del factorial de un número pasado como parámetro.
3- Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente 
en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la 
cotización del dólar igual a R$4,80.
4- Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
5- Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
6- Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

*/

function indiceMasaCorporal() {
  let peso = parseFloat(prompt('Ingrese su peso actual en kilogramos (ej: 75.6):'));
  let altura = parseFloat(prompt('Ingrese su altura actual en metros (ej: 1.70):'));

  return Math.round(100 * peso / altura**altura)/100;
}

alert('Su IMC actual es: ' + indiceMasaCorporal());


function tablasDeMultiplicar() {
  
  const numero = parseInt(prompt('Ingrese un número del 1 al 10 para obtener la tabla de multiplicar:'))
  let tabla = ''; 
  console.log('El número ingresado es ' + numero);

  if(numero > 10 || numero < 1) {
    alert(`El número (${numero}) ingresado es inválido. Debe ser un número del 1 al 10.`);
    
  } else {

    console.log('Tabla de multiplicar del número ' + numero + ' es:\n')
    for(let i = 1; i < 11; i++) {
      console.log(`${numero} x ${i} = ${numero*i} \n`);
      tabla = tabla + `${numero} x ${i} = ${numero*i} \n`;
    }
    alert(tabla);
  }

  return;
}

/*
# Resolución del desafío 3

Desafíos:Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

Con eso en mente, hemos creado una lista de actividades (opcionales) centradas en la práctica para mejorar aún más tu experiencia de aprendizaje.

**Sugestión de respuestas** 

1.Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

```javascript
function calcularIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
}
```

2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.

```javascript
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

```

3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales. Para esto, considera la cotización del dólar igual a R$4,80.

```js
function convertirDolaresAReales(dolares) {
  var cotizacionDolar = 4.80;
  var reales = dolares * cotizacionDolar;
  return reales;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);

```

4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

```js
function calcularAreaYPerimetroRectangular(altura, anchura) {
  var area = altura * anchura;
  var perimetro = 2 * (altura + anchura);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);

```

5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

```js
function calcularAreaYPerimetroCircular(radio) {
  var pi = 3.14;
  var area = pi * radio * radio;
  var perimetro = 2 * pi * radio;
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);

```

6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

```js
function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
// Ejemplo de uso
let numero = 7;
mostrarTablaDeMultiplicar(numero);

```

****
*/