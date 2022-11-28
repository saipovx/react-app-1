import tippy from 'tippy.js';


const template = `<div class="okno" id="template" style="display: none;">
<a href="#" class="okno__btn">
    Добавить компанию
</a>
</div>`//document.getElementById('template');

tippy('#myChel', {
  content: template,
  allowHTML: true,
  theme: 'tomato',
  interactive: true,
});

// const template2 = document.getElementById('template2');

// tippy('#akk', {
//   content: template2.innerHTML,
//   allowHTML: true,
//   theme: 'akk',
//   interactive: true,
// //   trigger: 'click',

// });


// const template3 = document.getElementById('template3');

// tippy('#shlypa', {
//   content: template3.innerHTML,
//   allowHTML: true,
//   theme: 'akk2',
//   interactive: true,


// });


const nav1 = document.getElementById('nav1');

tippy('#tovar', {
  content: nav1.innerHTML,
  allowHTML: true,
  theme: 'nav1',
  interactive: true,
  delay: 8000,

});

// const nav2 = document.getElementById('nav2');

// tippy('#tovar2', {
//   content: nav2.innerHTML,
//   allowHTML: true,
//   theme: 'nav1',
//   interactive: true,
//   delay: 200,


// });

// const nav3 = document.getElementById('nav3');

// tippy('#tovar3', {
//   content: nav3.innerHTML,
//   allowHTML: true,
//   theme: 'nav3',
//   interactive: true,
//   delay: 200,


// });

// const nav4 = document.getElementById('nav4');

// tippy('#tovar4', {
//   content: nav4.innerHTML,
//   allowHTML: true,
//   theme: 'nav1',
//   interactive: true,
//   delay: 200,


// });

// const nav5 = document.getElementById('nav5');

// tippy('#tovar5', {
//   content: nav5.innerHTML,
//   allowHTML: true,
//   theme: 'nav5',
//   interactive: true,
//   delay: 900,


// });

const nav6 = document.getElementById('nav6');

tippy('#tovar6', {
  content: nav6.innerHTML,
  allowHTML: true,
  theme: 'nav6',
  delay: 8000,
  interactive: true,

});

// const navig = document.getElementById('navig');

// tippy('#navig__btn', {
//   content: navig.innerHTML,
//   allowHTML: true,
//   theme: 'navig',
//   interactive: true,
//   trigger: 'click',
//   placement: 'bottom',

// });

// const navig2 = document.getElementById('navig2');

// tippy('#navig__btn2', {
//   content: navig2.innerHTML,
//   allowHTML: true,
//   theme: 'navig2',
//   interactive: true,
//   trigger: 'click',
//   placement: 'bottom',

// });




// tippy('#navig__btn3', {
//   content: 'My tooltip!',
// });




//tabs

// function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
//     const header = document.querySelector(headerSelector),
//           tab = document.querySelectorAll(tabSelector),
//           content = document.querySelectorAll(contentSelector)
//     function hideTabContent() {
//         content.forEach(item => {
//             item.style.display = 'none'
//         });
//         tab.forEach(item => {
//             item.classList.remove(activeClass)
//         });
//     }
//     function showTabContent(i = 0) {
//        content[i].style.display = display
//        tab[i].classList.add(activeClass)
//     }
//     hideTabContent()
//     showTabContent()
//     header.addEventListener('click', e => {
//         const target = e.target
//         if (target.classList.contains(tabSelector.replace(/\./, '')) || 
//         target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
//             tab.forEach((item, i) => {
//                 if ( target == item || target.parentNode == item ) {
//                     hideTabContent()
//                     showTabContent(i)
//                 }
//             });
//         }
//     })
// }

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
// tabs( '.tabs__header' ,'.tabs__header-item', '.tabs__content-item', 'active')

