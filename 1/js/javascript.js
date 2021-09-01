var perem1, perem2, result;


function sum(){

    perem1 = document.getElementById('nom1').value;
    perem1 = parseInt(perem1);

    perem2 = document.getElementById('nom2').value;
    perem2 = parseInt(perem2);

    result = perem1 + perem2;

    document.getElementById('out').innerHTML = result;

    var promej = document.getElementById('result');
    promej.innerHTML = result;
}
function vich(){

    perem1 = document.getElementById('nom1').value;
    perem1 = parseInt(perem1);

    perem2 = document.getElementById('nom2').value;
    perem2 = parseInt(perem2);

    result = perem1 - perem2;

    document.getElementById('out').innerHTML = result;
    
}
function umn(){

    perem1 = document.getElementById('nom1').value;
    perem1 = parseInt(perem1);

    perem2 = document.getElementById('nom2').value;
    perem2 = parseInt(perem2);

    result = perem1 * perem2;

    document.getElementById('out').innerHTML = result;
    
}
function del(){

    perem1 = document.getElementById('nom1').value;
    perem1 = parseInt(perem1);

    perem2 = document.getElementById('nom2').value;
    perem2 = parseInt(perem2);
    
    if(perem2 == 0){
        alert('Второе число равно нулю, измените на другое...');
    }
    else{
    result = perem1 / perem2;
    document.getElementById('out').innerHTML = result;
    }
}