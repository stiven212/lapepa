slc = () => {


//    alert("formulario trabajando")

    numero1 = document.getElementById("fnumber").value;
    numero2 = document.getElementById("snumber").value;

    
    alert(numero1+ numero2)



}
ejecutar = (fnOperacion) => {
    let caja1 = document.getElementById("txtValor1");
    let caja2 = document.getElementById("txtValor2");

    let max = parseInt(caja1.value);
    let duk = parseInt(caja2.value);

    fnOperacion(max, duk);

}

restar = (a, b) => {


    let resultado = a - b;

    alert("el resultado es:" + resultado);
}
