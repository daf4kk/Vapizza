function inputsFilter(){
   
   
   //input contant
    const inputContact = document.querySelector('.modal-input-contact');     
    inputContact.addEventListener('input', ()=>{
        
        let str = inputContact.value;
        if (str.length > 11){
            const strArray = str.split('');
            strArray.pop();
            str = strArray.reduce((sum,current)=>{
                return sum + current;
            });
        }
        const edited = str.replace(/\D/ig,'');
        inputContact.value = edited; 
    });

    


    // input name
    const inputName = document.querySelector('.modal-input-name');
    inputName.addEventListener('input', ()=>{
        const str = inputName.value;        
        const edited = str.replace(/\d/ig,'');
        inputName.value = edited;
    });
}

export default inputsFilter;