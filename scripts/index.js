
// 스와이퍼 모음
const mainSlide = new Swiper('.main_slide',{
    direction:'vertical',
    slidesPerView:1,
    mousewheel:true,
});

/* const aboutMe = document.querySelector('.introduce_btn');
const skill = document.querySelector('.skill_btn');
const project = document.querySelector('.project_btn'); */
const projCard1 = document.querySelector('.card_1');
const projCard2 = document.querySelector('.card_2');
const projCard3 = document.querySelector('.card_3');
console.log(projCard1, projCard2, projCard3);

/* aboutMe.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(2, 400);
})
skill.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(3, 400);
})
project.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(5, 400);
}) */

projCard1.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(6, 400);
})
projCard2.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(8, 400);
})
projCard3.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(9, 400);
})

const subSlide = new Swiper('.graphic_design',{
    nested:true,
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

// top 버튼 클릭 시 슬라이드 1번으로 이동
/* const topBtn = document.querySelector('.top_btn');

topBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(0,500);
}); */

// top menu 클릭 시 해당 슬라이드 이동
const topMenuBtn = document.querySelector('.top_menu_btn');
const topBtn = document.querySelector('.top_btn');
topBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    topMenuBtn.classList.toggle('hide');
})


const aboutMe = document.querySelector('.tab1');
const ProjectAll = document.querySelector('.tab2');
const PjWeb = document.querySelector('.tab3');
const PjUiux = document.querySelector('.tab4');
const PjGraphic = document.querySelector('.tab5');

aboutMe.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(1,500);
})
ProjectAll.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(3,500);
})
PjWeb.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(5,500);
})
PjUiux.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(7,500);
})
PjGraphic.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(8,500);
})