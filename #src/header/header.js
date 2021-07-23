
const bottomOfHeadContent = document.querySelector('.bottom-header-content');
const headerBackgroung = document.querySelector('.header__bg');
const marginForMain = document.querySelector('.margin-for-main');
const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__col--burger');

// по нажатию бургера меняем класс
headerBurger.onclick = function () {
   header.classList.toggle('change');
}

//по окончанию постройки dom слушаем события 
document.addEventListener("DOMContentLoaded", function (event) {
   setMarginForMain();
   window.addEventListener('resize', function (event) {    //ресайз окна
      setMarginForMain();
   })
   headerBackgroung.addEventListener('transitionend', () => {   // окончания css-перехода размера бэкграунда
      setMarginForMain();
    });
});

function setMarginForMain() {   
   if (headerBackgroung.offsetHeight < bottomOfHeadContent.offsetTop) {
      marginForMain.style.height = bottomOfHeadContent.offsetTop + 'px';
   } 
   else {
      marginForMain.style.height = headerBackgroung.offsetHeight + 'px';
   }
}
