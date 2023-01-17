

function suma(){

    //utilizamos el parseFloat ya que esta recibiendo como texto
    
   
    let n1 = parseFloat( document.getElementById('numero1').value);
    let n2 = parseFloat( document.getElementById('numero2').value);
     let total = n1 + n2;

    resultado.innerHTML= 'la suma de:' + n1 + "+" + n2 + "es" + total;
    document.getElementById('resultadoD').value = total;
}

function resta(){
    
   
    let n1 = parseFloat( document.getElementById('numero1').value);
    let n2 = parseFloat( document.getElementById('numero2').value);
    let total = n1 - n2;

    resultado.innerHTML= 'la resta de:' + n1 + "-" + n2 + "es" + total;
    document.getElementById('resultadoD').value = total;
}


function multiplicacion(){
    

    let n1 = parseFloat( document.getElementById('numero1').value);
    let n2 = parseFloat( document.getElementById('numero2').value);

    if(isNaN(n1) || isNaN(n2)){
        resultado.innerHTML='Introduce un valor numerico';
    }
    let total = n1 * n2;

    resultado.innerHTML= 'la multiplicacion de:' + n1 + "*" + n2 + "es" + total;
    document.getElementById('resultadoD').value = total;
}


 let division =()  =>{ 
   
 
        total= parseFloat(document.getElementById('numero1').value) / parseFloat(document.getElementById('numero2').value);
        document.getElementById('resultadoD').value = total;
        
 

}
 