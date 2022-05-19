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
  if (!a || !b) {
    alert("Ingrese ambos valores");
  } else {
    let x = parseFloat(a);
    let y = parseFloat(b);
    let res = x + y;
    //console.log(res+"");
    alert("El resultado es: " + res);
  }
};
