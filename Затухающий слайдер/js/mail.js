//выбираем объект слайдера 
var slides = document.querySelectorAll('#slides .slide');
//переменная текущего слайда
var currentSlide = 0;
//функция сладера
var slideInterval = setInterval(nextSlide,2000);
 
function nextSlide() {
    //меняем класс, чтобы спрятать слайд
    slides[currentSlide].className = 'slide';
    //1%5=1, 2%5=2, 3%5=3, 4%5=4, and 5%5=0 чтобы вернуться к последнему 
    currentSlide = (currentSlide+1)%slides.length;
    //показываем слайд
    slides[currentSlide].className = 'slide showing';
    //анимация отрабатывает с помощью transition
}