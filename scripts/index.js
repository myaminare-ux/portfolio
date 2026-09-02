/* index.js */
// 스와이퍼 모음
const mainSlide = new Swiper('.main_slide',{
    direction:'vertical',
    slidesPerView:1,
    mousewheel:true,
});

const subSlide = new Swiper('.graphic_design',{
    slidesPerView:3.5,
    spaceBetween:20,
    loop:true,
    speed:2000,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
});

// 10행 이미지 클릭 시 큰이미지 팝업
const bigImgPopup = document.querySelector('#bigImg_popup');
const bigDesign = document.querySelector('#bigDesign');
const popupImg = document.querySelectorAll('.js_popup_img');

popupImg.forEach((img) => {
    img.addEventListener('click', () => {
        bigImgPopup.classList.add('active');
        bigDesign.src = img.src;
        bigDesign.alt = img.alt;
    });
});

bigImgPopup.addEventListener('click', (e) => {
    if (e.target === bigImgPopup) {
        bigImgPopup.classList.remove('active');
    }
});