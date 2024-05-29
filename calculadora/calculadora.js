// Declaración de contadorOperaciones fuera de cualquier función
let contadorOperaciones = {
    suma: 0,
    resta: 0,
    multiplicacion: 0,
    division: 0,
    potenciacion: 0,
    radicacion: 0,
    areaTriangulo: 0,
    perimetroTriangulo: 0,
    areaCuadrado: 0,
    perimetroCuadrado: 0,
    areaRectangulo: 0,
    perimetroRectangulo: 0
};

// Evento que se ejecuta cuando se carga completamente el DOM
document.addEventListener("DOMContentLoaded", function() {
    // Agregar evento de clic al botón calculadora
    document.getElementById("calculadora").addEventListener("click", function() {
        seleccionarModo(); // Llamar a la función cuando se haga clic en el botón
    });
});

function seleccionarModo() {
    let modo = prompt("Seleccione el modo de la calculadora: normal, cientifica, especial");

    switch(modo.toLowerCase()) {
        case 'normal':
            calculadoraNormal();
            break;
        case 'cientifica':
            calculadoraCientifica();
            break;
        case 'especial':
            calculadoraEspecial();
            break;
        default:
            alert("Modo no válido. Por favor, seleccione 'normal', 'cientifica' o 'especial'.");
    }

    mostrarContadores();
}
// Añadir un evento de clic al botón
document.getElementById("calculadora").addEventListener("click", function() {
    seleccionarModo(); // Llamar a la función cuando se haga clic en el botón
});


function mostrarContadores() {
    let mensaje = "Contadores de operaciones:\n";
    for (let operacion in contadorOperaciones) {
        mensaje += `${operacion}: ${contadorOperaciones[operacion]} veces\n`;
    }
    alert(mensaje);
}

function calculadoraNormal() {
    let operacion = prompt("Seleccione una operación: suma, resta, multiplicacion, division");
    let a = parseFloat(prompt("Ingrese el primer número"));
    let b = parseFloat(prompt("Ingrese el segundo número"));
    let resultado;

    switch (operacion.toLowerCase()) {
        case 'suma':
            resultado = a + b;
            contadorOperaciones.suma++;
            break;
        case 'resta':
            resultado = a - b;
            contadorOperaciones.resta++;
            break;
        case 'multiplicacion':
            resultado = a * b;
            contadorOperaciones.multiplicacion++;
            break;
        case 'division':
            if (b !== 0) {
                resultado = a / b;
                contadorOperaciones.division++;
            } else {
                alert("No se puede dividir entre cero.");
                return;
            }
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    alert(`El resultado de la ${operacion} es: ${resultado}`);
}

function calculadoraCientifica() {
    let operacion = prompt("Seleccione una operación: suma, resta, multiplicacion, division, potenciacion, radicacion");
    let a = parseFloat(prompt("Ingrese el primer número"));
    let b;
    if (operacion !== 'radicacion') {
        b = parseFloat(prompt("Ingrese el segundo número"));
    }
    let resultado;

    switch (operacion.toLowerCase()) {
        case 'suma':
            resultado = a + b;
            contadorOperaciones.suma++;
            break;
        case 'resta':
            resultado = a - b;
            contadorOperaciones.resta++;
            break;
        case 'multiplicacion':
            resultado = a * b;
            contadorOperaciones.multiplicacion++;
            break;
        case 'division':
            if (b !== 0) {
                resultado = a / b;
                contadorOperaciones.division++;
            } else {
                alert("No se puede dividir entre cero.");
                return;
            }
            break;
        case 'potenciacion':
            resultado = Math.pow(a, b);
            contadorOperaciones.potenciacion++;
            break;
        case 'radicacion':
            if (a >= 0) {
                resultado = Math.sqrt(a);
                contadorOperaciones.radicacion++;
            } else {
                alert("No se puede calcular la raíz cuadrada de un número negativo.");
                return;
            }
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    alert(`El resultado de la ${operacion} es: ${resultado}`);
}

function calculadoraEspecial() {
    let figura = prompt("Seleccione una figura: triangulo, cuadrado, rectangulo");
    let operacion = prompt("Seleccione una operación: area, perimetro");
    let resultado;

    // Definir función de inicio
function iniciar() {
    // Añadir un evento de clic al botón
    document.getElementById("calculadora").addEventListener("click", function() {
        seleccionarModo(); // Llamar a la función cuando se haga clic en el botón
    });
}

// Llamar a la función de inicio cuando se carga la página
document.addEventListener("DOMContentLoaded", iniciar);

    switch (figura.toLowerCase()) {
        case 'triangulo':
            let base = parseFloat(prompt("Ingrese la base del triángulo"));
            let altura = parseFloat(prompt("Ingrese la altura del triángulo"));
            let lado1 = parseFloat(prompt("Ingrese el primer lado del triángulo"));
            let lado2 = parseFloat(prompt("Ingrese el segundo lado del triángulo"));
            let lado3 = parseFloat(prompt("Ingrese el tercer lado del triángulo"));
            if (operacion === 'area') {
                resultado = (base * altura) / 2;
                contadorOperaciones.areaTriangulo++;
            } else if (operacion === 'perimetro') {
                resultado = lado1 + lado2 + lado3;
                contadorOperaciones.perimetroTriangulo++;
            }
            break;
        case 'cuadrado':
            let lado = parseFloat(prompt("Ingrese el lado del cuadrado"));
            if (operacion === 'area') {
                resultado = lado * lado;
                contadorOperaciones.areaCuadrado++;
            } else if (operacion === 'perimetro') {
                resultado = 4 * lado;
                contadorOperaciones.perimetroCuadrado++;
            }
            break;
        case 'rectangulo':
            let ancho = parseFloat(prompt("Ingrese el ancho del rectángulo"));
            if (operacion === 'area') {
                resultado = largo * ancho;
                contadorOperaciones.areaRectangulo++;
            } else if (operacion === 'perimetro') {
                resultado = 2 * (largo + ancho);
                contadorOperaciones.perimetroRectangulo++;
            }
            break;
        default:
            alert("Figura no válida.");
            return;
    }

    alert(`El resultado de la ${operacion} de ${figura} es: ${resultado}`);
}

