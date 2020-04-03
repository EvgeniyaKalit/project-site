/*document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const swithModal = () => {modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', swithModal);
    });   
    
  closeBtn.addEventListener('click', swithModal);
    
    })*/
    

  $(document).ready(function () {
    
 
     
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
   
  modalBtn.on('click', function () {
      modal.toggleClass('modal--visible');
    });
  
  closeBtn.on('click', function () {
      modal.toggleClass('modal--visible');
    });

      var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        });
        var next = $('.swiper-button-next');
        var prev = $('.swiper-button-prev');
        var bullets = $('.swiper-pagination');
        next.css('left', prev.width() + 10 + bullets.width() + 10)
        // у кнопки prev мы выясняем ширину при помощи функции width в jQuery и тогда эта кнопка отдвинится на ширину кнопки prev.Если добавить например prev.width() +10, то кнопочка отъедет на 10px
        bullets.css('left', prev.width() + 10)
        
        new WOW().init();
        // активируем анимацию
      })
    
    
  
      
   
  
 
    
  

