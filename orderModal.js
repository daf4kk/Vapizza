function orderModal() {

    const closeBtn = document.querySelector('.pay-modal-close');    

    closeBtn.addEventListener('click', ()=>{
        $('.pay-modal-wrapper').fadeOut('fast');
        document.body.style.overflowY = 'scroll'; 
    });


    function townModal(id = 0) {
        const fullMapList = document.querySelectorAll('.pay-map');
        fullMapList.forEach((item) => {
            item.classList.remove('activeMap');
            item.style.display = 'none';
        });
        //Очистить классы кар
        fullMapList[id].classList.add('activeMap');
        $('.activeMap').fadeIn('medium');
    }

    const allTownsLi = document.querySelectorAll('.towns-li li');


    document.querySelector('.open-pay-modal-btn').addEventListener('click', ()=>{
        allTownsLi.forEach((item,id)=>{
            if (item.classList.contains('active-town-li')){
                townModal(id);
            }
        });
        $('.basket-wrapper').fadeOut('medium');
        closeBasketFunc();
    });




    const basketWrapper = document.querySelector(".basket-wrapper");
    const basketSecondWrapper = document.querySelector('.second-basket-wrapper');

    function closeBasketFunc() {
        basketWrapper.classList.remove('active-wrapper');
        basketSecondWrapper.classList.remove('basket-transform-in');
        basketSecondWrapper.classList.add('basket-transform-out');
        document.body.style.overflowX = 'hidden';
        document.body.style.overflowY = 'auto';
    }



}

export default orderModal;