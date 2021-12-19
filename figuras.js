//Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado*4;
console.log(`el perimetro del cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log(`el área del cuadrado es: ${areaCuadrado}cm^2`);
console.groupEnd();

//Código del Triangulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5; 
console.log(`La altura del triangulo es: ${alturaTriangulo}cm`)
// const altura = Math.sqrt((ladoTriangulo2)-);

console.log(`Los lados del triangulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log(`el perimetro del triangulo es: ${perimetroTriangulo}cm`);

const areaTriangulo = (ladoTriangulo1*baseTriangulo)/2;
console.log(`el área del Triangulo es: ${areaTriangulo}cm^2`);

console.groupEnd();

//Código del Circulo
console.group("Circulo");

//Radio Circulo
const radioCirculo = 4;
console.log(`el radio del circulo es: ${radioCirculo}cm`);

//Diametro Circulo
const diametroCirculo = radioCirculo *2;
console.log(`el diametro del circulo es: ${diametroCirculo}cm`);

//Pi Circulo
const pi = Math.PI;
console.log(`PI es: ${pi}`);

//Perimetro Circulo
const perimetroCirculo = diametroCirculo*pi;
console.log(`el perimetro del circulo es: ${perimetroCirculo}cm`); 

const areaCirculo = (radioCirculo*radioCirculo)*pi;
console.log(`el área del circulo es: ${areaCirculo}cm^2`);

console.groupEnd();