// Código del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es " + areaCuadrado + " cm2");

console.groupEnd();

// Código del triángulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triángulo miden " 
+ ladoTriangulo1 
+ " cm, " 
+ ladoTriangulo2 
+ " cm y de base " 
+ baseTriangulo 
+ " cm" 
);

console.log("La altura del triangulo es de " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es de " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es " + areaTriangulo + " cm2");

console.groupEnd();

//Código del circulo

console.group("Circulo");
//Radio
const radioCirculo = 4;
console.log("El radio del circulo es de " + radioCirculo + " cm");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es de " + diametroCirculo + " cm");

//Pi
const PI = Math.PI;
console.log("El valor PI es de " + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es de " + perimetroCirculo + " cm");

//Area
const areaCirculo = PI * (radioCirculo * radioCirculo);
console.log("El area del circulo es de " + areaCirculo +" cm2");

console.groupEnd();