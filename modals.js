function modals() {
    $(document).scrollTop(0);
    const modalWindow = document.querySelector('.new-user__modal');
    const townName = document.querySelectorAll('.towns-li span');
    const ourTown = document.querySelector('.town__choose');
    const lies = document.querySelectorAll('.towns-li li');
    const modalQuestion = document.querySelector('.modal-question-wrapper');
    const modalWrapper = document.querySelector('.modal-wrapper');
    const towns = document.querySelectorAll('.towns-li span');
    if (localStorage.getItem('town')) {
        ourTown.textContent = localStorage.getItem('town');
        document.querySelector('.modal-question-wrapper .town').textContent = localStorage.getItem('town');
        $('.modal-question-wrapper').fadeIn('medium');
    } else {
        modalWrapper.style.display = 'block';
        $('.modal-wrapper').fadeIn('fast');
    }
    //Question Modal
    const modalButtonYes = document.querySelector('.yes');
    const modalButtonNot = document.querySelector('.not');

    modalButtonYes.addEventListener('click', () => {
        $('.modal-question-wrapper').fadeOut('medium');

    });

    modalButtonNot.addEventListener('click', () => {
        modalQuestion.style.display = 'flex';
        $('.modal-question-wrapper').fadeOut('medium');
        $(this).scrollTop(0);
        document.body.style.overflow = 'hidden';
        $('.modal-wrapper').fadeIn('medium');
        modalWrapper.style.display = 'flex';

    });

    checkModal();  

    function townModal(id = 0) {
        const fullMapList = document.querySelectorAll('.map-list-item');
        fullMapList.forEach((item) => {
            item.style.display = 'none';
            item.classList.remove('activeMap');
        });
        //Очистить классы кар
        fullMapList[id].classList.add('activeMap');
        $('.activeMap').fadeIn('medium');
    }

    //Town choose

    towns.forEach((item, id) => {
        item.addEventListener('click', (e) => {
            if (e.target == item) {
                const spanParent = item.parentNode;
                lies.forEach((li) => {
                    li.classList.remove('active-town-li');
                    li.classList.remove('inactive-town-li');
                });
                townName.forEach((item) => {
                    item.classList.remove('active');
                });
                spanParent.classList.add('active-town-li');
            }
            townName[id].classList.add('active');
            townModal(id);
        });
    });



    // const lies = document.querySelectorAll('.towns-li li');
    //const  towns = document.querySelectorAll('.towns-li span');

    function checkModal() {
        if (!localStorage.getItem('firstModal')) {
            modalWrapper.style.display = 'block';
            document.body.style.overflow = 'hidden';
            localStorage.setItem('firstModal', true);
            townModal();
        }else{ 

            // const lies = document.querySelectorAll('.towns-li li');
            //const  towns = document.querySelectorAll('.towns-li span');

            const activeTown = document.querySelector('.town__choose').textContent;
            towns.forEach((item, id)=>{
                if (item.textContent == activeTown){
                    towns.forEach((item)=>{
                        item.classList.remove('active');
                    });
                    lies.forEach((li)=>{
                            li.classList.remove('active-town-li');
                            li.classList.remove('inactive-town-li');
                    });
                    const spanParent = item.parentNode;
                    spanParent.classList.add('active-town-li');
                    townModal(id);
                }
            });            
        }
    }





    //Choosen Town
    const closeModalButton = document.querySelector('.close-modal');
    closeModalButton.addEventListener('click', (e) => {
        if (e.target == closeModalButton) {
            $('.modal-wrapper').fadeOut('fast');
        }
        document.body.style.overflowY = 'scroll';

        townName.forEach((item) => {
            if (item.classList.contains('active')) {
                ourTown.textContent = item.innerText;
                localStorage.setItem('town', item.innerText);

            }
        });
    });
    const openModalButton = document.querySelector('.town__choose');
    openModalButton.addEventListener('click', (e) => {
        {
            if (e.target == openModalButton) {
                $('.modal-wrapper').fadeIn('fast');
                modalWrapper.style.display = 'flex';
            }
            document.body.style.overflow = 'hidden';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && window.getComputedStyle(modalWindow).display == 'block') {
            $('.modal-wrapper').fadeOut('fast');
            document.body.style.overflowY = 'scroll';
            townName.forEach((item) => {
                if (item.classList.contains('active')) {
                    ourTown.textContent = item.innerText;
                    localStorage.setItem('town', item.innerText);
                }
            });
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target == modalWrapper && window.getComputedStyle(modalWindow).display == 'block') {
            $('.modal-wrapper').fadeOut('fast');
            document.body.style.overflowY = 'scroll';
            townName.forEach((item) => {
                if (item.classList.contains('active')) {
                    ourTown.textContent = item.innerText;
                    localStorage.setItem('town', item.innerText);
                }
            });
        }
    });


    //pay modal

    const payWrapper = document.querySelector('.pay-modal-wrapper');
    const payBtn = document.querySelector('.open-pay-modal-btn');

    payBtn.addEventListener('click', (e) => {
        {
            if (e.target == payBtn) {
                $('.pay-modal-wrapper').fadeIn('fast');
                payWrapper.style.display = 'flex';
            }
            document.body.style.overflow = 'hidden';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && window.getComputedStyle(payWrapper).display == 'flex') {
            $('.pay-modal-wrapper').fadeOut('fast');
            document.body.style.overflowY = 'scroll';
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target == payWrapper && window.getComputedStyle(payWrapper).display == 'flex') {
            $('.pay-modal-wrapper').fadeOut('fast');
            document.body.style.overflowY = 'scroll';
        }
    });

}
export default modals;