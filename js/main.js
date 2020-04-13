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

        // валидация формы
        $('.modal__form').validate({
          errorClass: "invalid",
          rules: {
            // simple rule, converted to {required:true}
            userName: {
              required: true,
              minlength: 2
              // имя не меньше двух символов
            },
            userPhone: "required",
            // compound rule, поле обязательно для заполнения, строчное правило
            userEmail: {
              required: true,
              email: true
              // поле обязательно для заполнения и правильно заполнен Email (блок)
            }
        

        },
        // что писать внутри функции validate это есть в API Documentation, options for the validate method, в правиле rules
        
        // сообщения
        messages: {
          userName: {
            required: "Заполните поле",
            minlength: "Имя не короче двух букв"
          }, 
          userPhone: "Заполните поле",
          userEmail: {
            required: "Заполните поле", 
            email: "Введите корректный email"
          }
        }

      })
      // маска телефона
      //placeholder вводит шаблон заранее для пользователя, то есть его видно при открытиии сразу
      $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "__/__/____"});
     var player;
      $('.video__play').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
         // при клике на кнопку video__play будет срабатывать функция с ютюба
          height: '465',
          width: '100%',
          videoId: 'x3o0ByFNB7Q',
          events: {
            'onReady': videoPlay,
            
          }
        });
      })
      function videoPlay(event) {
        event.target.playVideo();
      }
    });  
    
  
      
   
  
 
    
  


          