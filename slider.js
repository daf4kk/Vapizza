import $ from 'jquery';
window.jQuery = $;
window.$ = $;
function sliderOptions(){

    
        $('.single-item').slick({
            dots: true,
            speed: 700,        //Скорость смены слайдера
            infinite: true,     //Бесконечность autoplay
            autoplay: true,
            autoplaySpeed: 4000, //Время для autoplay
            pauseOnFocus: false, 
            pauseOnHover: false,//Пауза при зажатий слайдера
            //pauseOnHover: true  // Пауза при наведений 
            variableWidth: true
        });
    
        const arrows = document.querySelectorAll('.slick-arrow');
        arrows.forEach((item)=>{
            item.remove();
        });
    
}

export default sliderOptions;