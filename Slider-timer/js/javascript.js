document.getElementById('slider-left').onclick = sliderLeft;

autoSlider();

var left = 0;

var timer;

function autoSlider(){
    timer = setTimeout(sliderLeft, 1000); 
}

function sliderLeft(){
    var polosa = document.getElementById('polosa');
    left = left - 256;
    if(left < -768)
    {
        left = 0;
    }
    polosa.style.left = left+'px';

    autoSlider();
 
}

function sliderLeftSection(){
    var polosa = document.getElementById('polosa');
    left = left + 256;

    polosa.style.left = left+'px';

    autoSlider();
}