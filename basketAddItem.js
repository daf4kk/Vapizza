'use strict';

function basketAddItem() {


    const basketBtn = document.querySelector('.nav__item-basket');
    // const addBtns = document.querySelectorAll('.btn_add');
    const secondAddBtns = document.querySelectorAll('#add-other-product');
    // const deleteItemBtns = document.querySelectorAll('.delete-item');
    const increaseItems = document.querySelectorAll('.add-item');
    const decreaseItems = document.querySelectorAll('.decrease-item');
    const allButtons = [basketBtn, ...secondAddBtns, ...increaseItems, ...decreaseItems, ];


    allButtons.forEach((item) => {
        item.addEventListener('click', () => {
            count();
        });
    });

    const newItem = class itemAdd {
        constructor(img, name, descr, price, id ) {
            this.img = img;
            this.name = name;
            this.descr = descr;
            this.price = price;
            this.id = id;
        }

        add() {
            
            


            document.querySelector('.basket-item-wrapper').innerHTML +=
                `
            <div class='basket-item' id = ${this.id}>
            <div class='basket-item-content'>
                <img class='picture' src='${this.img}'>
                <div class='basket-item-descr'>
                    <h1 class='item-name'>${this.name}</h1>
                    <p class='item-descr'>
                    ${this.descr}
                    </p>
                </div> 
                <div class='priceNsecond'>
                    <p class='item-price'>${this.price}</p>
                    <div class='addNdecrease-item'>
                        <img class='decrease-item' src='./icons/minus.png'>
                        <p class='item-count'>1</p>
                        <img class='add-item' src='./icons/plus.png'>
                    </div>
                </div>
                <img class='delete-item' src='./icons/close01.png'>
            </div>
        </div>
            `;

        const newItemId = this.id;
        console.log(newItemId);
        const basket = document.querySelector('.basket-item-field');
        const items = basket.querySelectorAll(`#${newItemId}`);
        // item.forEach((item)=>{
        //     item.style.color = 'red';
        // });
        for (let i = 1; i < items.length; i++){
            items[i].style.display = 'none';
            items[i].classList.remove('basket-item');
        }
        // item[1].style.display = 'none';
        // item[1].remove;
        // console.log(`${item} was removed`);

        }
    }
    //same items
        //main buttons
        const btnAddItem  = document.querySelectorAll('#add_product img');
        btnAddItem.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                const newItemParentBlock = e.target.parentNode.parentNode.parentNode;
                // console.log(`newItemBlock is ${newItemParentBlock}`);
                const newItemId = newItemParentBlock.id;
                // console.log(`item id is ${newItemId}`);  //Выводит нормально
                
                const existingItems = document.querySelectorAll('.basket-item');  //existing - существующие
                
                
                    existingItems.forEach((item)=>{
                        console.log(`item is ${item}`)  
                        const oldItemId = item.id;
                        console.log(oldItemId);
                        if (oldItemId == newItemId){

                            //edit count
                            const previousCount = +item.querySelector('.item-count').textContent;
                            item.querySelector('.item-count').textContent = previousCount + 1;

                            //delete second item
                            const basketItemWrapper = document.querySelector('.basket-item-wrapper');
                            const recurring = basketItemWrapper.querySelectorAll(`#${newItemId}`);
                            // console.log(recurring);
                            // recurring[0].remove;
                            

                        }
                        
                    })
            });
        });

        //second items

        const secondBtnsAddItem  = document.querySelectorAll('#add-other-product');
        secondBtnsAddItem.forEach((item)=>{
            item.addEventListener('click', (e)=>{
                const newItemParentBlock = e.target.parentNode.parentNode;
                // console.log(`newItemBlock is ${newItemParentBlock}`);
                const newItemId = newItemParentBlock.id;
                // console.log(`item id is ${newItemId}`);  //Выводит нормально
                
                const existingItems = document.querySelectorAll('.basket-item');  //existing - существующие
                
                
                    existingItems.forEach((item)=>{
                        console.log(`item is ${item}`)  //Скорее всего тут будет какая то залупа так как он выводит айдишники не всех элементов
                        const oldItemId = item.id;
                        console.log(oldItemId);
                        if (oldItemId == newItemId){

                            //edit count
                            const previousCount = +item.querySelector('.item-count').textContent;
                            item.querySelector('.item-count').textContent = previousCount + 1;

                            //delete second item
                            const basketItemWrapper = document.querySelector('.basket-item-wrapper');
                            const recurring = basketItemWrapper.querySelectorAll(`#${newItemId}`);
                            // console.log(recurring);
                            // recurring[0].remove;
                            

                        }
                        
                    })
            });
        });


    

    //same items END
    const mainButtons = document.querySelectorAll('#add_product')
    const secondButtons = document.querySelectorAll('#add-other-product');
    mainButtons.forEach((item) => {
        item.addEventListener('click', (e) => {
            const target = e.target;
            const parent = target.parentNode.parentNode.parentNode;
            const img = parent.querySelector('img').getAttribute('src');
            const name = parent.querySelector('h1').textContent;
            const descr = parent.querySelector('.descr').textContent;
            const primaryPrice = parent.querySelector('.price').textContent.match(/\d/g);
            const itemId = parent.id;
            const finalPrice = primaryPrice.reduce((sum, count) => {
                return sum + count;
            });
            new newItem(img, name, descr, finalPrice, itemId).add();

            //showModalWindow
            const orderAlert = document.querySelector('.order-alert-wrapper');


            $('.order-alert-wrapper').fadeIn('medium');
            orderAlert.style.display = 'flex';

            setTimeout(() => {
                $('.order-alert-wrapper').fadeOut('medium');
                // orderAlert.style.display = 'none';
            }, 1000);

            //

            //delete item
            const deleteBtns = document.querySelectorAll('.delete-item');

            deleteBtns.forEach((item) => {
                item.addEventListener('click', (e) => {
                    const target = e.target;
                    const parent = target.parentNode.parentNode;
                    parent.remove();
                    count();
                });
            });
            increaseItems

            const increaseBtns = document.querySelectorAll('.add-item'); //ТОЧНО ТЕ
            increaseBtns.forEach((item) => {
                item.addEventListener('click', () => {
                    const itemPlace = item.previousElementSibling;
                    const activeFactor = Number(itemPlace.textContent);
                    itemPlace.textContent = `${activeFactor + 1}`;
                    count();
                });
            });



            decreaseItems

            const decreaseBtns = document.querySelectorAll('.decrease-item');
            decreaseBtns.forEach((item) => {
                item.addEventListener('click', () => {
                    const itemPlace = item.nextElementSibling;
                    const activeFactor = +itemPlace.textContent;
                    if (activeFactor != 1) {
                        itemPlace.textContent = `${activeFactor - 1}`;
                    }
                    count();
                });
            });
        });
    });

    secondButtons.forEach((item) => {
        item.addEventListener('click', (e) => {
            const target = e.target;
            const parent = target.parentNode.parentNode;
            const img = parent.querySelector('img').getAttribute('src');
            const name = parent.querySelector('h1').textContent;
            const primaryPrice = parent.querySelector('.price').textContent;
            const itemId = parent.id;
            console.log(`item id is ${itemId}`)
            new newItem(img, name, '', primaryPrice, itemId).add();
            // const deleteItemBtns = document.querySelectorAll('.delete-item');
            count();

            const deleteBtns = document.querySelectorAll('.delete-item');

            deleteBtns.forEach((item) => {
                item.addEventListener('click', (e) => {
                    const target = e.target;
                    const parent = target.parentNode.parentNode;
                    parent.remove();

                    count();
                });
            });

            const increaseBtns = document.querySelectorAll('.add-item');
            increaseBtns.forEach((item) => {
                // console.log('increase');
                item.addEventListener('click', () => {
                    const itemPlace = item.previousElementSibling;
                    const activeFactor = +itemPlace.textContent;
                    itemPlace.textContent = `${activeFactor + 1}`;
                    count();
                });
            });



            decreaseItems

            const decreaseBtns = document.querySelectorAll('.decrease-item');
            decreaseBtns.forEach((item) => {
                item.addEventListener('click', () => {
                    const itemPlace = item.nextElementSibling;
                    const activeFactor = +itemPlace.textContent;
                    if (activeFactor != 1) {
                        itemPlace.textContent = `${activeFactor - 1}`;
                    }
                    count();
                });
            });
        });

    });




    function count() {
        const basketItems = document.querySelectorAll('.basket-item');
        const orderCount = document.querySelector('.count');
        const orderSum = document.querySelectorAll('.sum');
        const emptyBasketBlock = document.querySelector('.empty-basket-block')

        orderCount.textContent = `${basketItems.length}`;

        const ending = document.querySelector('.word-ending');
        if (basketItems.length === 0) {
            orderCount.textContent = `0`;
            ending.textContent = 'ов';
            orderSum.forEach((item) => {
                item.textContent = '0';
            });
            emptyBasketBlock.style.display = 'flex';
        } else {
            //findOrderCount
            emptyBasketBlock.style.display = 'none';
            let countArr = [];
            basketItems.forEach((item) => {
                const factor = +item.querySelector('.item-count').textContent;
                const count = factor;
                countArr.push(count);
            });

            const finalCount = countArr.reduce((sum, current) => {
                return sum + current;
            });

            orderCount.textContent = `${finalCount}`;
            //WORD ENDING  

            //findSum
            let sumArr = [];
            basketItems.forEach((item) => {
                const interSum = +item.querySelector('.item-price').textContent; //intermediate - промежуточный
                const factor = +item.querySelector('.item-count').textContent;
                const sum = interSum * factor;
                sumArr.push(sum);

            });
            const finalSum = sumArr.reduce((sum, count) => {
                return sum + count;
            });
            orderSum.forEach((item) => {
                item.textContent = `${finalSum}`;
            });
        }
        let factorCount = 0;
        if (basketItems.length > 0) {
            basketItems.forEach((item) => {
                const itemFactor = Number(item.querySelector('.item-count').textContent);
                // console.log(` item factor is ${itemFactor}`);
                factorCount = factorCount + itemFactor;

            });
            // console.log(`factor is ${factorCount}`);
            if (factorCount === 1) {
                ending.textContent = '';
                // console.log('factor 1')

            } else if (factorCount > 1 && factorCount < 5) {
                ending.textContent = 'а';
                // console.log('factor 2')
            } else {
                ending.textContent = 'ов'
                // console.log('factor 3')
            }

        }
    }
}

export default basketAddItem;