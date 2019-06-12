//Declaración de variables
var nombreUsuario = "Giuliana Olmos";
var saldoCuenta = 5000;
var limiteExtraccion = 3000;
var cuentaAmiga1 = "1234567";
var cuentaAmiga2 = "7654321";
var codigoDeSeguridad = "1234";

//Funciones que declaro yo
function sumarDinero (dineroASumar){
    saldoCuenta += dineroASumar;
}
function restarDinero (dineroARestar){
    saldoCuenta -= dineroARestar;
}
//Tengo que retornar true o false. Usar else y no else if. 
function haySaldoEnLaCuenta (numeroDineroAExtraer){
    if(numeroDineroAExtraer<=saldoCuenta){
        return true;
    } else {
        return false;
        }
} 
//Es una forma de abreviar la funcion. 
function superaLimiteDeExtraccion (numeroDineroAExtraer) {
    return numeroDineroAExtraer>limiteExtraccion;
}
function esMultiplode100 (numeroDineroAExtraer){
    return numeroDineroAExtraer%100==0;
}
function restarServicio (servicioADescontar){
    saldoCuenta -= servicioADescontar;
}
function puedePagarElServicio (servicioADescontar){
    return servicioADescontar<saldoCuenta;
}
function descontarTransferencia (numeroMontoATransferir){
    saldoCuenta -= numeroMontoATransferir;
}
function claveDeSeguridadIncorrecta(solicitarElCodigoDeSeguridad){
    saldoCuenta -= saldoCuenta;
    actualizarSaldoEnPantalla();
}
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimiteDeExtraccion = prompt("Ingese el nuevo limite de extracción");
    var numeroLimiteDeExtraccion = parseInt(nuevoLimiteDeExtraccion);
//Para que me de "true" al comparar la variable. Necesito utilizar Number.isNanN, debido a que si comparo NaN con NaN va a dar negativo por nada no es igual a "NaN" es contradictorio pero propio de Js.
    if (Number.isNaN(numeroLimiteDeExtraccion)){return;}
    if (nuevoLimiteDeExtraccion == null || nuevoLimiteDeExtraccion == ""){return;}
    limiteExtraccion = numeroLimiteDeExtraccion;
    actualizarLimiteEnPantalla();
    var mensajeLimite = "El nuevo limite de extraccion es $ " + numeroLimiteDeExtraccion;
    alert(mensajeLimite);
    }

function extraerDinero() { 
    var dineroAExtraer = prompt("Ingrese la cantidad de dinero a extraer");
    var numeroDineroAExtraer = parseInt(dineroAExtraer);
    if (Number.isNaN(numeroDineroAExtraer)){return;}
    if (dineroAExtraer == null || dineroAExtraer == ""){return;}
    if (!haySaldoEnLaCuenta(numeroDineroAExtraer)){
        alert("No hay saldo en tu cuenta para extraer esa cantidad de dinero."); 
        return;  
    }  
    if (superaLimiteDeExtraccion(dineroAExtraer)){
        alert("La cantidad de dinero a extraer supera tu limite por transacción");
        return;
    }
    if(!esMultiplode100(dineroAExtraer)) {
        alert("Solo puede retirar en billetes de $100. Procure que el monto corresponda a uno de sus multiplos."); 
        return;
    }
    var saldoAnterior = saldoCuenta;
    restarDinero (numeroDineroAExtraer);
    actualizarSaldoEnPantalla();
    var mensajeExtraccion = "El saldo a extraer es de $ " + dineroAExtraer + "\nEl saldo anterior era de $ " + saldoAnterior + "\n El saldo actual es de $ " + saldoCuenta;
    alert(mensajeExtraccion);
}

function depositarDinero() {
    var dineroADepositar = prompt("Ingrese la cantidad de dinero a depositar")
    var numeroDineroADepositar = parseInt(dineroADepositar);
    if (Number.isNaN(numeroDineroADepositar)){return;}
    if (dineroADepositar == null || dineroADepositar == ""){return;}
    var saldoIncial = saldoCuenta;
    sumarDinero(numeroDineroADepositar);
    actualizarSaldoEnPantalla();
    var mensaje = "El saldo a depositar es de $ " + dineroADepositar + "\nEl saldo incial era de $ " + saldoIncial + "\nEl saldo final es de $ " + saldoCuenta;
    alert (mensaje);
    }

function pagarServicio() {
    var saldoPrimero = saldoCuenta;
    var serviciosAPagar = prompt( "Ingrese el numero correspondiente al servicio que quiere pagar" + "\n" + 1 + " - Agua" + "\n" + 2 + " - Luz" + "\n" + 3 + " - Internet" + "\n" + 4 + "- Teléfono");
    if (serviciosAPagar == null || serviciosAPagar == ""){return;}
    switch(serviciosAPagar){
        case "1":
        var servicioADescontar = 350;
        if(!puedePagarElServicio(servicioADescontar)){
            alert("No posee saldo para pagar este servicio."); 
            return;}
        restarServicio(servicioADescontar);
        break;
        case "2":
        var servicioADescontar = 425;
        if(!puedePagarElServicio(servicioADescontar)){
            alert("No posee saldo para pagar este servicio."); 
            return;}
        restarServicio (servicioADescontar);        
        break;
        case "3":
        var servicioADescontar = 210;
        if(!puedePagarElServicio(servicioADescontar)){
            alert("No posee saldo para pagar este servicio."); 
            return;}
        restarServicio(servicioADescontar);
        break;
        case "4":
        var servicioADescontar = 570;
        if(!puedePagarElServicio(servicioADescontar)){
            alert("No posee saldo para pagar este servicio."); 
            return;}
        restarServicio (servicioADescontar);
        break;
        default:
        alert("El servicio seleccionado no existe. ");
        return;
    }
    actualizarSaldoEnPantalla();
    var mensajePagoDeServicio = "El saldo de la cuenta era $ " + saldoPrimero + "\nEl monto del servicio que se pago es de $ " + servicioADescontar + "\nEl saldo actual de la cuenta es $ " +  saldoCuenta  ;
    alert (mensajePagoDeServicio);
}


function transferirDinero() {
    var montoATransferir = prompt("¿Cuál es el monto que desea transferir?");
    var numeroMontoATransferir = parseInt(montoATransferir);
    if (Number.isNaN(numeroMontoATransferir)){return;}
    if (montoATransferir == null || montoATransferir == ""){return;}
    if (numeroMontoATransferir>saldoCuenta){
        alert ("El saldo que tiene en la cuenta es menor al monto que desea transferir");
    } else { 
        var cualEsLaCuenta = prompt("Ingrese el numero de cuenta al cual desea transferir: ");
        switch(cualEsLaCuenta){ 
          case "1234567":
          case "7654321": 
          descontarTransferencia(numeroMontoATransferir);
          var mensajeTransferencia = "El saldo tranferido es de $" + montoATransferir + "\nSe transfirió a la cuenta: " + cualEsLaCuenta;
          alert(mensajeTransferencia); 
          break;
          default:
          alert("El numero de cuenta ingresado no corresponde a ninguna cuenta amiga. ")
        }
        actualizarSaldoEnPantalla();
    }
}


function iniciarSesion() {
    var solicitarElCodigoDeSeguridad = prompt("Ingrese el codigo de seguridad");
    if (solicitarElCodigoDeSeguridad == null || solicitarElCodigoDeSeguridad == ""){return;}
    switch(solicitarElCodigoDeSeguridad) {
        case "1234":
        var mensajeUsuario = "Bienvenido " + nombreUsuario + " ya puedes comenzar a utilizar tu cuenta.";
        alert(mensajeUsuario);
        break;
        default:
        alert ("Clave de seguridad incorrecta.");
        claveDeSeguridadIncorrecta(solicitarElCodigoDeSeguridad);
    }
}
function crearPlazoFijo(){
    alert ("La TNA es de 55%");
    var solicitarMontoAInvertir = prompt("Ingrese el monto que quiere poner en el plazo fijo.");
    var numeroMontoaInvertir = parseInt(solicitarMontoAInvertir);
    if (Number.isNaN(numeroMontoaInvertir)){return;}
    if (solicitarMontoAInvertir == null || solicitarMontoAInvertir == ""){return;};
    if (numeroMontoaInvertir<saldoCuenta){
        var diasDelPlazoFijo = prompt("Cantidad de dias a invertir (El plazo minimo es de 30 dias y el máximo es de 365");
        var numeroDiasAInvertir = parseInt(diasDelPlazoFijo);
        if (Number.isNaN(numeroDiasAInvertir)){return;}
        if (diasDelPlazoFijo == null || diasDelPlazoFijo == ""){return;};
        if(numeroDiasAInvertir>30 && numeroDiasAInvertir<365){
        var gananciaDeLaInversion = ((0.55*numeroDiasAInvertir)/365)*numeroMontoaInvertir;
        var mensajeInversion = "El monto ingresado es de $ " + numeroMontoaInvertir + "\nEl plazo elegido es de " + diasDelPlazoFijo + " días" + "\nLa ganancia es de $ " + gananciaDeLaInversion;
        alert(mensajeInversion);
        saldoCuenta -= numeroMontoaInvertir;
        actualizarSaldoEnPantalla();
        }else{ 
            alert("La fecha establecida no esta permitida")
        } 
    } else {
        alert("Usted no posee el monto para realizar esta acción.")
    }

}
function cargarCheques(){
    var solicitarNumeroDeCheque = prompt("Ingrese el numero del cheque");
    var numeroDelNumeroDeCheque = parseInt(solicitarNumeroDeCheque);
    if (Number.isNaN(numeroDelNumeroDeCheque)){return;}
    if (solicitarNumeroDeCheque == null || solicitarNumeroDeCheque == ""){return;}
    var solictarMontoDelCheque = prompt("Ingrese el monto del cheque");
    var numeroMontoDelCheque = parseInt(solictarMontoDelCheque);
    saldoCuenta += numeroMontoDelCheque;
    actualizarSaldoEnPantalla();
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
//Inicio de sesion
iniciarSesion();
