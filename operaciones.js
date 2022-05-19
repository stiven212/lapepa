slc = () => {
  //    alert("formulario trabajando")

  numero1 = document.getElementById("fnumber").value;
  numero2 = document.getElementById("snumber").value;
numer1= parseFloat(numero1)
numer2= parseFloat(numero2)


  alert(numero1 + numero2);

};


mayor = () => {
  let dato1 = document.getElementById("dato1").value;
  let dato2 = document.getElementById("dato2").value;

  console.log(dato1 ,dato2);
  if (dato1 > dato2) {
    alert( "el mayor es: "+dato1 )
  } else if (dato2 > dato1) {
    alert( "el mayor es: "+dato2)
  }
};
