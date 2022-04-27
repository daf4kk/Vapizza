function navigation(){
        $('.nav__item-basket').mouseenter(function(){
                $('.basket').css({color: 'antiquewhite', transition: '.3s ease color' });           
        });

        $('.nav__item-basket').mouseout(function(){
                $('.basket').css({color: ""});
        });
}        
export default navigation;