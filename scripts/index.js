/* index.js */

// 3행 자기소개 영역 for 반복처리
// function renderAboutMe (){
//     console.log("함수 실행됨!");
//     console.log("DB 데이터 확인:", aboutMeDB);
//     const container = document.querySelector('.about_me');
//     if (!container) return;

//     let htmlStr = '';

//     aboutMeDB.forEach(section => {
//         htmlStr += `<div class="info_box ${section.type}_box">`;
//         htmlStr += `<h2 class="box_title">${section.title}</h2>`;
//         htmlStr += `<div class="box_content">`;

//         if (section.type === 'definition'){
//             htmlStr += `<dl class="info_group">`;
//             section.items.forEach(item => {
//                 htmlStr += `<div class="row">
//                     <dt>${item.label}</dt>
//                     <dd>${item.value}</dd>
//                 </div>`;
//             });
//             htmlStr += `</dl>`;
//         }
//         else if (section.type === 'list'){
//             htmlStr += `<ul class="license_list">`;
//             section.items.forEach(item => {
//                 htmlStr += `<li>${item}</li>`;
//             });
//             htmlStr += `</ul>`;
//         }
//         else if (section.type === 'timeline'){
//             htmlStr += `<ul class="edu_list">`;
//             section.items.forEach(item => {
//                 htmlStr += `<li>
//                     <p class="date">${item.date}</p>
//                     <div class="edu_name">
//                         <p>${item.desc}</p>${item.sub ? `<p>${item.sub}</p>` : ''}
//                     </div>
//                 </li>`;
//             });
//             htmlStr += `</ul>`;
//         }
//         else if (section.type === 'skills'){
//             htmlStr += `<ul class="skill_list">`;
//             section.items.forEach(item => {
//                 htmlStr += `<li><img src="${item.icon}" alt="${item.name}"></li>`;
//             });
//             htmlStr += `</ul>`;
//         }
//         else if (section.type === 'training'){
//             htmlStr += `<ul class="train_list">`;
//             section.items.forEach(item => {
//                 htmlStr += `<li>
//                     <p class="date">${item.date}</p>
//                     <div class="train_name">
//                         <p>${item.desc}</p>
//                         <p>${item.detail}</p>
//                     </div>
//                 </li>`;
//             });
//             htmlStr += `</ul>`;
//         }
//         htmlStr += `    </div>`;
//         htmlStr += `</div>`;
//     });
//     container.innerHTML = htmlStr;
// }

// document.addEventListener('DOMContentLoaded',renderAboutMe);

// 메인 스와이퍼
// const mainSlide = new Swiper('#main_slide',{
//     direction:'vertical',
//     slidesPerView:1,
//     mousewheel:true,
// });

// 4행 스킬&툴



// 10행 상세페이지, 광고 포스터 스와이퍼






// 스와이퍼 모음
const mainSlide = new Swiper('.main_slide',{
    direction:'vertical',
    slidesPerView:1,
    mousewheel:true,
});

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
const topBtn = document.querySelector('.top_btn');

topBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    mainSlide.slideTo(0,500);
});