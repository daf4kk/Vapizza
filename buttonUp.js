function buttonUp() {
     document.querySelector('.logo_href').classList.add('hide');

     window.addEventListener('scroll', () => {
          const position = window.pageYOffset;
          if (position > 333) {
               $('.logo_href').show('medium');

          } else {
               $('.logo_href').hide('medium');
          }
     });
}

export default buttonUp;