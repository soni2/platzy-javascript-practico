//Código del cuadrado
    function perimetroCuadrado(lado){
        return lado*4;
    };
    perimetroCuadrado();

    function areaCuadrado(lado){
        return lado*lado;
    };

//Código del Triangulo


    //Perimetro del triangulo
    const perimetroTriangulo = (lado1, lado2, base) => lado1+lado2+base;

    //Obtener Altura de triangulo


    function alturaTriangulo (lado1, lado2, base){
        if(lado1 === lado2){
            return Math.sqrt((lado1*lado1)-((base/2)*(base/2)));
        }else{
            return "No es un Triangulo isóscele";
        };

    }

    //area del triangulo
    const areaTriangulo = (base, altura) => (base*altura)/2;

    
//Código del Circulo
    const diametroCirculo = (radio) => radio * 2;

    //Pi Circulo
    const pi = Math.PI;
    console.log(`PI es: ${pi}`);

    //Perimetro Circulo
    function perimetroCirculo (radio){
        const diametro = diametroCirculo(radio);
        return diametro * pi;
    };

    const areaCirculo = (radio) => (radio*radio)*pi;


//Interactuar con html
    //Cuadrado
    function calcularPerimetroCuadrado() {
        const input = document.getElementById("inputCuadrado");
        const value = input.value;
        const perimetro = perimetroCuadrado(value);
        alert(perimetro)
    };

    function calcularAreaCuadrado() {
        const input = document.getElementById("inputCuadrado");
        const value = input.value;
        const area = areaCuadrado(value);
        alert(area)
    };

    //Triangulo
    function calcularPerimetroTriangulo(){
        const input1 = document.getElementById("inputTriangulo1");
        const value1 = input1.value;
        const input2 = document.getElementById("inputTriangulo2");
        const value2 = input2.value;
        const input3 = document.getElementById("inputBase");
        const value3 = input3.value;
        const perimetro = perimetroTriangulo(parseInt(value1),parseInt(value2),parseInt(value3));
        alert(perimetro);
    };

    function calcularAreaTriangulo(){
        const input1 = document.getElementById("inputTriangulo1");
        const value1 = input1.value;
        const input2 = document.getElementById("inputBase");
        const value3 = input2.value;
        const area = areaTriangulo(value3,value1);
        alert(area);
    };

    //Circulo
    function calcularDiametroCirculo(){
        const input = document.getElementById("inputCirculo");
        const value = input.value;
        const diametro = diametroCirculo(value);
        alert(diametro);
    };

    function calcularPerimetroCirculo(){
        const input = document.getElementById("inputCirculo");
        const value = input.value;
        const perimetro = perimetroCirculo(value);
        alert(perimetro);
    };
    
    function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
        const value = input.value;
        const area = areaCirculo(value);
        alert(area);
    };
    