// Promedio

const lista1 = [
    100,
    200,
    300,
    500,
];

let sumaLista1 = 0;
for (let i = 0; i < lista1.length; i++) {
    sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length;

// Promedio funcion

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;

        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Mediana

const lista2 = [
    100,
    200,
    500,
    1000000,
];

const mitadLista2 = parseInt(lista2.length / 2);

function esPar(numero) {
    if(numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if(esPar(lista2.length)) {
    const elemento1 = lista2[mitadLista2];
    const elemento2 = lista2[mitadLista2-1];

    const promedioElementos = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElementos;

} else {
        mediana = lista2[mitadLista2];
}

// Moda

const lista3 = [
    1,
    2,
    3,
    1,
    3,
    2,
    1,
    4,
];

const lista3Count = {};

lista3.map(
    function(elemento) {
        if(lista3Count[elemento]) {
           lista3Count[elemento] += 1; 
        } else{
            lista3Count[elemento] = 1;
        }
    }
);

const lista3Array = Object.entries(lista3Count).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
);

const moda =lista3Array[lista3Array.length - 1]

