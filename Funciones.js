/**
 * Actualiza las imágenes del auto y las llantas según lo seleccionado en LLANTAS.html y COLOR.html, además calcula y modifica el precio total del auto.
 * @method onloadFinal
 * @param {string} N/A - Esta función no recibe parámetros.
 * @return {void} - No retorna ningún valor.
 */
function onloadFinal() {
    let valor_auto;
    let valor_llantas = 1000;
    let valor_color = 25000;
    let url = new URL(window.location.href);
    let color = url.searchParams.get("color");
    let llanta = url.searchParams.get("llanta");

    if (color === '1') {
        document.getElementById("autofinal").src = "imagenes/autoblancoprecio.jpg";
    }
    if (color === '2') {
        document.getElementById("autofinal").src = "imagenes/autonegro.png";
        valor_color = 26000;
    }
    if (color === '3') {
        document.getElementById("autofinal").src = "imagenes/autorojo.jpg";
        valor_color = 27000;
    }
    if (color === '4') {
        document.getElementById("autofinal").src = "imagenes/autoazul.jpg";
        valor_color = 28000;
    }
    if (llanta === '1') {
        document.getElementById("llantafinal").src = 'imagenes/llantas1.jpg';
    }
    if (llanta === '2') {
        document.getElementById("llantafinal").src = 'imagenes/llantas2.jpg';
        valor_llantas = 1200;
    }
    if (llanta === '3') {
        document.getElementById("llantafinal").src = 'imagenes/Llantas3.jpg';
        valor_llantas = 1400;
    }
    if (llanta === '4') {
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
 * @return {void} - No retorna ningún valor.
 */
function graficoCanvas(preciototaldelauto) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var precio = 0;
    var increment = preciototaldelauto / 100;

    function precioAnimado() {
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
 * @return {void} - No retorna ningún valor.
 */
function setearLlanta(llantaElegida) {
    document.getElementById("ValorLlanta").value = llantaElegida;
    let colorElegido = document.getElementById("ValorColor").value;
    window.location.href = 'index.html?llanta=' + llantaElegida + '&color=' + colorElegido;

}

/**
 * Configura el valor del color elegido y redirige a la página principal con los valores elegidos.
 * @method setearColor
 * @param {string} colorElegido - Numero del color de auto elegido por el usuario.
 * @return {void} - No retorna ningún valor.
 */
function setearColor(colorElegido) {
    document.getElementById("ValorColor").value = colorElegido;
    let llantaElegida = document.getElementById("ValorLlanta").value;
    window.location.href = 'index.html?color=' + colorElegido + '&llanta=' + llantaElegida;
}

/**
 * Carga los valores de color y llanta desde los parámetros de la URL al cargar la página.
 * @method onloadInicio
 * @param {string} N/A - Esta función no recibe parámetros.
 * @return {void} - No retorna ningún valor.
 */
function onloadInicio() {
    let url = new URL(window.location.href);
    let color = url.searchParams.get("color");
    let llanta = url.searchParams.get("llanta");
    document.getElementById("ValorLlanta").value = llanta;
    document.getElementById("ValorColor").value = color;
}

/**
 * Carga los valores de color y llanta desde los parámetros de la URL al cargar la página de llantas.
 * @method onloadLlantas
 * @param {string} N/A - Esta función no recibe parámetros.
 * @return {void} - No retorna ningún valor.
 */
function onloadLlantas() {
    let url = new URL(window.location.href);
    let color = url.searchParams.get("color");
    let llanta = url.searchParams.get("llanta");
    document.getElementById("ValorColor").value = color;
    document.getElementById("ValorLlanta").value = llanta;
}

/**
 * Carga los valores de color y llanta desde los parámetros de la URL al cargar la página de colores.
 * @method onloadColor
 * @param {string} N/A - Esta función no recibe parámetros.
 * @return {void} - No retorna ningún valor.
 */
function onloadColor() {
    let url = new URL(window.location.href);
    let color = url.searchParams.get("color");
    let llanta = url.searchParams.get("llanta");
    document.getElementById("ValorColor").value = color;
    document.getElementById("ValorLlanta").value = llanta;
}

/**
 * Redirige a la página de selección de color con los parámetros actuales de llanta y color previamente seleccionados o ningun valor si no se seleccionó.
 * @method llamarColor
 * @param {string} N/A - Esta función no recibe parámetros.
 * @return {void} - No retorna ningún valor.
 */
function llamarColor() {
    let llantaElegida = document.getElementById("ValorLlanta").value;
    let colorElegido = document.getElementById("ValorColor").value;
    window.location.href = 'COLOR.html?llanta=' + llantaElegida + '&color=' + colorElegido;
}

/**
 * Redirige a la página de selección de llanta con los parámetros actuales de color y llanta previamente seleccionados o ningun valor si no se seleccionó.
 * @method llamarLlanta
 * @param {string} N/A - Esta función no recibe parámetros.
 * @return {void} - No retorna ningún valor.
 */
function llamarLlanta() {
    let llantaElegida = document.getElementById("ValorLlanta").value;
    let colorElegido = document.getElementById("ValorColor").value;
    window.location.href = 'LLANTAS.html?llanta=' + llantaElegida + '&color=' + colorElegido;
}

/**
 * Redirige a la página final con los parámetros actuales de llanta y color.
 * @method llamarFinal
 * @param {string} N/A - Esta función no recibe parámetros.
 * @return {void} - No retorna ningún valor.
 */
function llamarFinal() {
    var llantaElegida = document.getElementById("ValorLlanta").value;
    var colorElegido = document.getElementById("ValorColor").value;
    window.location.href = 'FIN.html?llanta=' + llantaElegida + '&color=' + colorElegido;
}

