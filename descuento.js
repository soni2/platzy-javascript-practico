// const precioOriginal = 120;
// const descuento = 18;

// const porcentajePrecioConDescuento = 100-descuento;

// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;

/* console.table({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento,
}); */

function calcularPrecionConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100-descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100; 

    return precioConDescuento;
};

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const inputValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    let valorDeCupon = 0;

    switch(discountValue){
        case "cupon1":
            valorDeCupon = 5;
            break;
        case "cupon2":
            valorDeCupon = 10;
            break;
        case "cupon3":
            valorDeCupon = 15;
            break;
        case "cupon4":
            valorDeCupon = 20;
            break;
        case "cupon5":
            valorDeCupon = 25;
            break;
        case "cupon6":
            valorDeCupon = 38;
            break;
        default:
            valorDeCupon = "Ese cupon no existe";
    };

    const precioConDescuento = calcularPrecionConDescuento(inputValue,valorDeCupon);

    const resultP = document.getElementById("resultP");
    if (isNaN(valorDeCupon)){    
    resultP.innerText = valorDeCupon + `, su precio se mantiene a $${inputValue}`;
    } else{
    resultP.innerText = `El precion con descuento son: $${precioConDescuento}`;

    };
};