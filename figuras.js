//Código del cuadrado
console.group("Cuadrados");
/*const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);*/

function perimetroCuadrado(lado){
    return lado*4;
}
perimetroCuadrado();

// console.log(`el perimetro del cuadrado es: ${perimetroCuadrado}cm`);

function areaCuadrado(lado){
    return lado*lado;
};

// console.log(`el área del cuadrado es: ${areaCuadrado}cm^2`);
console.groupEnd();

//Código del Triangulo
console.group("Triángulos");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5; 
console.log(`La altura del triangulo es: ${alturaTriangulo}cm`)
// const altura = Math.sqrt((ladoTriangulo2)-);

console.log(`Los lados del triangulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);
*/
const perimetroTriangulo = (lado1, lado2, base) => lado1+lado2+base;

console.log(`el perimetro del triangulo es: ${perimetroTriangulo(6,6,4)}cm`);

const areaTriangulo = (base, altura) => (base*altura)/2;
console.log(`el área del Triangulo es: ${areaTriangulo(6,6)}cm^2`);

console.groupEnd();

//Código del Circulo
console.group("Circulo");

//Radio Circulo
// const radioCirculo = 4;
// console.log(`el radio del circulo es: ${radioCirculo}cm`);

//Diametro Circulo
// const diametroCirculo = radioCirculo *2;
// console.log(`el diametro del circulo es: ${diametroCirculo}cm`);
const diametroCirculoo = (radio) => radio * 2;

//Pi Circulo
const pi = Math.PI;
console.log(`PI es: ${pi}`);

//Perimetro Circulo
function perimetroCirculo (radio){
    const diametro = diametroCirculoo(radio);
    return diametro * pi;
}

const areaCirculo = (radio) => (radio*radio)*pi;

console.groupEnd();


//Interactuar con html

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area)
}