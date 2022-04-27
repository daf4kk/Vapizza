function basket() {
    const basketWrapper = document.querySelector(".basket-wrapper");
    const basketButton = document.querySelector(".nav__item-basket");
    const basketSecondWrapper = document.querySelector('.second-basket-wrapper');
    basketButton.addEventListener("click", () => {
        $('.basket-wrapper').fadeIn('medium');
        setTimeout(() => {
            openBasketFunc();
        }, 200);
    });
    //basket close options
    const closeBasket = document.querySelector('.close-basket img');
    // const basketOther = document.querySelector('.basket-other');
    // const basketMenu = document.querySelector('.basket-menu');
    const secondWrapper = document.querySelector('.second-basket-wrapper');
    closeBasket.addEventListener('click', () => {
        $('.basket-wrapper').fadeOut('medium');
        closeBasketFunc();
    });
    //close
    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && basketWrapper.classList.contains('active-wrapper')) {
            $('.basket-wrapper').fadeOut('medium');
            closeBasketFunc();
        }
    });

    //close
    document.addEventListener('click', (e) => {
        // if (e.target == basketWrapper && (e.target != basketOther || e.target != basketMenu) && basketWrapper.classList.contains('active-wrapper')) {
        if (e.target == secondWrapper || e.target == basketWrapper && basketWrapper.classList.contains('active-wrapper')) {
            console.log(e.target);
            $('.basket-wrapper').fadeOut('medium');
            closeBasketFunc();
        }
    });

    //basket close options END

    function openBasketFunc() {
        basketWrapper.classList.add('active-wrapper');
        basketSecondWrapper.classList.add('basket-transform-in');
        basketSecondWrapper.classList.remove('basket-transform-out');
        document.body.style.overflowY = 'hidden';
    }

    function closeBasketFunc() {
        basketWrapper.classList.remove('active-wrapper');
        basketSecondWrapper.classList.remove('basket-transform-in');
        basketSecondWrapper.classList.add('basket-transform-out');
        document.body.style.overflowX = 'hidden';
        document.body.style.overflowY = 'auto';
    }
}
export default basket;