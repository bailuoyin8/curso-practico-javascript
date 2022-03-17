// Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
};

function areaCuadrado(lado){
    return lado * lado;
};

console.groupEnd();

// Código del triángulo
console.group("Triangulo");

function perimetroTriangulo(ladoA1, ladoA2, base){
    return ladoA1 + ladoA2 + base;  
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();

//Código del circulo

console.group("Circulo");

function diametroCirculo(radio){
    return radio * 2;
}
//Pi
const PI = Math.PI;
console.log("El valor PI es de " + PI);

//Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//Area

function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();

//Interaccion con html

function calcularPerimetroCuadrado(params) {
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(params) {
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}