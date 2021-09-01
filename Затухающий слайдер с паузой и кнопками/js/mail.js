//выбираем объект слайдера 
var slides = document.querySelectorAll('#slides .slide');
//переменная текущего слайда
var currentSlide = 0;

var rad = document.querySelectorAll('#slides_rad .slide_rad')
//функция сладера
var slideInterval = setInterval(nextSlide,2000);
 
function nextSlide() {
  goToSlide(currentSlide+1);
}

function previousSlide() {
  goToSlide(currentSlide-1);
}
//получаем значение нужного салйда
function goToSlide(n) {
  //меняем класс, чтобы спрятать слайд
  slides[currentSlide].className = 'slide';
  //меняем класс , чтобы убрать выделение на дисках
  rad[currentSlide].className = 'slide_rad';
  //1%5=1, 2%5=2, 3%5=3, 4%5=4, and 5%5=0 чтобы вернуться к последнему 
  currentSlide = (n+slides.length)%slides.length;
  //показываем слайд
  slides[currentSlide].className = 'slide showing';
  //добавляем класс, чтобы выыделить диск
  rad[currentSlide].className = 'slide_rad active';

}
//Начало блока для кнопки "Пауза"
//пЕременная состояния слайдера
var playing = true;
//получаем элемент кнопки
var pauseButton = document.getElementById('pause');
 
//функция отработки паузы
function pauseSlideshow() {
    //меняем содержимое кнопки
    pauseButton.innerHTML = 'Play';
    //состояние слайдера
    playing = false;
    //отчищаем поток
    clearInterval(slideInterval);
}
 
function playSlideshow() {
    pauseButton.innerHTML = 'Pause';
    playing = true;
    //запуск слайдера 
    slideInterval = setInterval(nextSlide,2000);
}
//функция нажания на паузу
pauseButton.onclick = function() {
    //если переменная = true
    if(playing) {
    //То запускается функция паузы
    pauseSlideshow();
  } else {
    //Иначе запускается слайдер
    playSlideshow();
  }
};
//начало функционала перемещающих кномок 
//получение элементов кнопок 
var next = document.getElementById('next');
var previous = document.getElementById('previous');

//влево 
next.onclick = function() {
    //Функция паузы
    pauseSlideshow();
    //левый слад
    nextSlide();
};
//вправо
previous.onclick = function() {
    //функция паузы
    pauseSlideshow();
    //правый слайд 
    previousSlide();
};
var rad_dick = document.getElementsByClassName('slide_rad');

//var val = rad_dick[1].getAttribute('value');
//alert(val);
for ( var i = 0; i < rad_dick.length; i++){
  rad_dick[i].onclick = function(){
    var val = this.getAttribute('value');
    alert(val);

      //меняем класс, чтобы спрятать слайд
      slides[currentSlide].className = 'slide';
      //меняем класс , чтобы убрать выделение на дисках
      rad[currentSlide].className = 'slide_rad';
      //1%5=1, 2%5=2, 3%5=3, 4%5=4, and 5%5=0 чтобы вернуться к последнему 
      currentSlide = (val+slides.length)%slides.length;
      //показываем слайд
      slides[currentSlide].className = 'slide showing';
      //добавляем класс, чтобы выыделить диск
      rad[currentSlide].className = 'slide_rad active';
    

  };
}

/*rad_dick.onclick = function(){

    //var val = this.value;
    //alert(val);
    var val = this.getAttribute('value');
    alert(val);

};*/