



 multiplicar = () => {
    let number1 = parseFloat(document.getElementById("numero-1").value)
    let number2 = parseFloat(document.getElementById("numero-2").value)

    alert("Resultado: "+(number1 * number2))
}
dividir = () => {
  let num1 = document.getElementById("numero1").value;
  let num2 = document.getElementById("numero2").value;

  let dividir = num1 / num2;

  alert(dividir);
};





slc = () => {
  //    alert("formulario trabajando")

  numero1 = document.getElementById("fnumber").value;
  numero2 = document.getElementById("snumber").value;

  alert(numero1 + numero2);
};

mayor = () => {
  let dato1 = document.getElementById("dato1").value;
  let dato2 = document.getElementById("dato2").value;
  console.log(dato1, dato2);
  if (dato1 > dato2) {
    alert("el mayor es: " + dato1);
  } else if (dato2 > dato1) {
    alert("el mayor es: " + dato2);
  }
};

sumar = () => {
  let a = document.getElementById("val1").value;
  let b = document.getElementById("val2").value;
  /*console.log(a);
    console.log(b);*/
    if(!a || !b){
        alert("Ingrese ambos valores");
    } else {
        let x = parseFloat(a);
        let y = parseFloat(b);
        let res = x+y;
        //console.log(res+"");
        alert("El resultado es: "+res);
    }
    
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
