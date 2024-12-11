searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}



var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

   var swiper = new Swiper(".featured-slider", {
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3, // Displays 3 slides regardless of screen size
});


var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


function switchForm(formType) {
            const signInForm = document.getElementById('sign-in-container');
            const registerForm = document.getElementById('register-container');

            if (formType === 'register') {
                signInForm.classList.remove('active');
                registerForm.classList.add('active');
            } else {
                registerForm.classList.remove('active');
                signInForm.classList.add('active');
            }
        }






function showPreview(bookId) {
        // Display the preview container
        document.getElementById("preview-container").style.display = "flex";

        // Hide all previews and show only the selected one
        document.querySelectorAll(".preview").forEach((preview) => {
            preview.style.display = "none";
        });
        document.getElementById(bookId).style.display = "block";
    }

    function closePreview() {
        document.getElementById("preview-container").style.display = "none";
    }