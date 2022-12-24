'use strict'

// element toggle function

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
}

//navbar variable

const navbar = document.querySelector("[data-navbar]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overLay = document.querySelector("[data-overlay]");

const navElemArr = [navCloseBtn, navOpenBtn, overLay];

for (let i = 0; i < navElemArr.length; i++){
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overLay);
  });
}


// header scroll sticky
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 10){
      header.classList.add("active");
    } else{
      header.classList.remove("active");
    }
})











// swiper header
let swiper = new Swiper(".new_hero", {
    loop: true,
    // spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // breakpoints: {
    //     1200: {
    //         slidePerView: 1,
    //         // spaceBetween: 3,
    //     },
    // },

});



// go top

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if(window.scrollY >= 800){
    goTopBtn.classList.add("active");
  } else{
    goTopBtn.classList.remove("active")
  }
})






// EMAIL js


const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),

      contactSubject = document.getElementById('contact-subject'),
      contactPhone = document.getElementById('contact-phone'),

      contactEmail = document.getElementById('contact-email'),
      contactMessage = document.getElementById('contact-message'),
      contactText = document.getElementById('contact-text')

   const sendEmail = (e) =>{
    e.preventDefault()

    //Check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactMessage.value === '' || contactSubject.value === '' || contactPhone.value === ''){

        //Add and remove color
        contactText.classList.remove('color-blue') 
        contactText.classList.add('color-red')

        //Show messages
      contactText.textContent = 'Write all the input fields 📩'  
    }else{
        //serviceID - templateID - #form - publicKey
      emailjs.sendForm('service_kaczt8m','template_uotwjtd','#contact-form','b66xruqTklV3a4qmQ')
           .then(() =>{
              //show message and add color
              contactText.classList.add('color-blue')
              contactText.textContent = 'Message sent ✅'

              //Remove message after five seconds
              setTimeout(() =>{
                 contactText.textContent = ''
              }, 5000)
           }, (error) =>{
            alert('OOPs! SOMETHING HAS FAILED...', error)
           })

        // To clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactMessage.value = '' 

        contactSubject.value = ''
        contactPhone.value = ''
    }  
}
 
contactForm.addEventListener('submit', sendEmail)











   //dark LIGHT THEME
   const themeButton = document.getElementById('theme-button')
   const darkTheme = 'dark-theme'
   const iconTheme = 'ri-sun-line'
         
      //previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')
         
     //we obtain the current theme that the interface has by validating the dark-theme class
   const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
   const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
         
         
     //we validate if the user previously chose a topic
    if (selectedTheme) {
         //if the validation is fulfilled , we what the issue was to know if we activated or deactivated the dark
       document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme) 
       themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
    }
         
      //Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click',() => {
        //add or remove the dark / icon theme 
     document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
     //we save the theme and the current icon that the user chose
     localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())       
   });
       