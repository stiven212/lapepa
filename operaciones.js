slc = () => {


//    alert("formulario trabajando")

    numero1 = document.getElementById("fnumber").value;
    numero2 = document.getElementById("snumber").value;

    
    alert(numero1+ numero2)



}

sumar=()=>{
    let a = document.getElementById('val1').value;
    let b = document.getElementById('val2').value;
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
    
    }