function basketHeight() {
    const basket = document.querySelector('.basket-menu');
    const sum = document.querySelector('.total-sum');
    const payBtn = document.querySelector('.open-pay-modal-btn');
    const itemField = document.querySelector('.basket-item-field');
    const itemWrapper = document.querySelector('.basket-item-wrapper');
    const basketOther = document.querySelector('.basket-other');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 1) {
            basket.classList.add('larger');
            sum.classList.add('sum-extra-top');
            payBtn.classList.add('pay-extra-top');
            itemField.classList.add('larger-field'); 
            itemWrapper.classList.add('larger-basket-item-wrapper');
            basketOther.classList.add('basket-other-items-extra-top');
        } else {
            basket.classList.remove('larger');
            sum.classList.remove('sum-extra-top');
            payBtn.classList.remove('pay-extra-top');
            itemField.classList.remove('larger-field');
            itemWrapper.classList.remove('larger-basket-item-wrapper');
            basketOther.classList.remove('basket-other-items-extra-top');
        }
    });
}
export default basketHeight;