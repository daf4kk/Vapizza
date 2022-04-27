'use strict'

import sliderOptions from './modules/slider' ;
import modals from './modules/modals' ;
import navigation from './modules/nav' ;
import buttonUp from './modules/buttonUp' ;
import basket from './modules/basket';
import basketHeight from './modules/basketHeight';
import basketAddItem from './modules/basketAddItem';
import orderModal from'./modules/orderModal';
import inputsFilter from './modules/inputsFilter';

window.addEventListener('DOMContentLoaded', ()=>{
    sliderOptions();
    modals();
    navigation();
    buttonUp();
    basket();
    basketHeight();
    basketAddItem();
    orderModal();
    inputsFilter();
});