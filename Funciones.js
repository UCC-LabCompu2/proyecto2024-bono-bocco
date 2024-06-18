/**
 * Actualiza las imágenes del auto y las llantas según lo seleccionado en LLANTAS.html y COLOR.html, además calcula y modifica el precio total del auto.
 * @method onloadFinal
 * */
//function onloadFinal() {
const onloadFinal = () => {
    let valor_auto;
    let valor_llantas = 1000;
    let valor_color = 25000;
    const url = new URL(window.location.href);
    const color = url.searchParams.get("color");
    const llanta = url.searchParams.get("llanta");

    if (color === '1') {
        document.getElementById("autofinal").src = "imagenes/autoblancoprecio.jpg";
    } else if (color === '2') {
        document.getElementById("autofinal").src = "imagenes/autonegro.png";
        valor_color = 26000;
    } else if (color === '3') {
        document.getElementById("autofinal").src = "imagenes/autorojo.jpg";
        valor_color = 27000;
    } else if (color === '4') {
        document.getElementById("autofinal").src = "imagenes/autoazul.jpg";
        valor_color = 28000;
    }
    if (llanta === '1') {
        document.getElementById("llantafinal").src = 'imagenes/llantas1.jpg';
    } else if (llanta === '2') {
        document.getElementById("llantafinal").src = 'imagenes/llantas2.jpg';
        valor_llantas = 1200;
    } else if (llanta === '3') {
        document.getElementById("llantafinal").src = 'imagenes/Llantas3.jpg';
        valor_llantas = 1400;
    } else if (llanta === '4') {
        document.getElementById("llantafinal").src = 'imagenes/Llantas4.jpg';
        valor_llantas = 1600;
    }
    valor_auto = valor_llantas + valor_color;
    document.getElementById("preciocolor").innerText = "El precio del color es $" + valor_color;
    document.getElementById("preciollanta").innerText = "El precio de la llanta es $" + valor_llantas;
    graficoCanvas(valor_auto);

}

/**
 * Realiza una animación del precio total del auto en un canvas.
 * @method graficoCanvas
 * @param {number} preciototaldelauto - El precio total del auto que se desea mostrar animado.
 */
const graficoCanvas = (preciototaldelauto) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let precio = 0;
    let increment = preciototaldelauto / 100;

    const precioAnimado = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("Precio total del auto: $" + precio.toFixed(2), 50, 100);


        if (precio < preciototaldelauto) {
            precio += increment;
            requestAnimationFrame(precioAnimado);
        } else {
            ctx.fillText("Precio total del auto: $" + preciototaldelauto.toFixed(2), 50, 100);
        }
    }

    precioAnimado();
}

/**
 * Configura el valor de la llanta elegida y redirige a la página principal con los valores elegidos.
 * @method setearLlanta
 * @param {string} llantaElegida - Numero de llanta elegida por el usuario.
 */
const setearLlanta = (llantaElegida) => {
    document.getElementById("ValorLlanta").value = llantaElegida;
    let colorElegido = document.getElementById("ValorColor").value;
    window.location.href = 'index.html?llanta=' + llantaElegida + '&color=' + colorElegido;

}

/**
 * Configura el valor del color elegido y redirige a la página principal con los valores elegidos.
 * @method setearColor
 * @param {string} colorElegido - Numero del color de auto elegido por el usuario.
 */
const setearColor = (colorElegido) => {
    document.getElementById("ValorColor").value = colorElegido;
    let llantaElegida = document.getElementById("ValorLlanta").value;
    window.location.href = 'index.html?color=' + colorElegido + '&llanta=' + llantaElegida;
}

/**
 * Carga los valores de color y llanta desde los parámetros de la URL al cargar la página.
 * @method onloadInicio
 */
const onloadInicio = () => {
    const url = new URL(window.location.href);
    const color = url.searchParams.get("color");
    const llanta = url.searchParams.get("llanta");
    document.getElementById("ValorLlanta").value = llanta;
    document.getElementById("ValorColor").value = color;
}

/**
 * Redirige a la página deseada con los parámetros actuales de llanta y color.
 * @method llamarParametros
 * @param {string} newHtml -  Esta función recibe un parametro, de a que pagina te dirige el boton pulsado.
 */
const llamarParametros = (newHtml) => {
    const llantaElegida = document.getElementById("ValorLlanta").value;
    const colorElegido = document.getElementById("ValorColor").value;
    window.location.href = newHtml + '.html?llanta=' + llantaElegida + '&color=' + colorElegido;
}
/**
 * Verifica que el usuario ponga un mail y como el mail debe tener '@' verifica que ese caracter este en el texto
 * @method validarCorreo
 */
const validarCorreo = () => {
    const correo = document.getElementById("agregatucorreo").value;
    if (correo === "") {
        alert("Por favor, ingrese su correo electrónico.");
        return false;
    } else if (!correo.includes("@")) {
        alert("Ingrese un correo electronico v'á'lido");
        return false;
    }
    return true;
}