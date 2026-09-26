// index_db.js
// 3행 자기소개
const aboutMeDB = [
{
    title: 'About Me',
    type: 'definition', // label - value 형태
    items: [
        { label: 'NAME', value: '박은진 / Park Eun Jin' },
        { label: 'BIRTH', value: '2003. 06. 12' },
        { label: 'ADDRESS', value: '인천 서해구 길주로63번길 7' },
        { label: 'PHONE', value: '010-7515-6867' },
        { label: 'EMAIL', value: 'irin1616@naver.com' }
    ]
},
{
    title: 'License',
    type: 'list', // 단순 텍스트 리스트
    items: [
        '제과기능사',
        '제빵기능사',
        '병원코디네이터 1급',
        'Barista Skills Foundation'
    ]
},
{
    title: 'Education',
    type: 'timeline', // 날짜 - 내용 형태
    items: [
        { date: '2024. 02', desc: '인천재능대학교 졸업', sub: '호텔외식조리과 / 베이커리 카페 전공' },
        { date: '2022. 01', desc: '신명여자고등학교 졸업' },
        { date: '2019. 02', desc: '간석여자중학교 졸업' }
    ]
},
{
    title: 'Skill',
    type: 'skills', // 아이콘 형태
    items: [
        { name: 'Figma', icon: './images/figma_icon.svg' },
        { name: 'HTML5', icon: './images/html_icon.svg' },
        { name: 'CSS3', icon: './images/css_icon.svg' },
        { name: 'Photoshop', icon: './images/photoshop_icon.svg' },
        { name: 'Illustrator', icon: './images/Illustrator_icon.svg' },
        { name: 'GitHub', icon: './images/github_icon.svg' }
    ]
},
{
    title: 'Job Training Program',
    type: 'training', // 연도 + 상세설명
    items: [
        { date: '2026. 10', desc: '[디지털디자인] UI/UX 반응형 웹디자인 & 웹퍼블리셔 (피그마, 디자인, 코딩) 양성과정', detail: '그린컴퓨터아카데미아 / 수료' },
        { date: '2024. 05', desc: '제과기능사(실기3)', detail: '다인요리전문학원 / 수료' },
        { date: '2024. 04', desc: '디저트', detail: '다인요리전문학원 / 수료' },
        { date: '2024. 03', desc: '제빵기능사(실기3)', detail: '다인요리전문학원 / 수료' }
    ]
}
];

// 4행 스킬&툴
const skillDB = [
{
    name: 'Figma',
    icon: './images/figma.svg',
    title: 'UI/UX 설계 및 인터랙티브 프로토타이핑',
    desc: '사용자 중심의 반응형 모바일/웹 UI를 설계. 오토레이아웃 (Auto Layout)과 컴포넌트화를 활용해 효율적인 디자인 시스템 구축 및 프로토타입 제작 가능.'
},
{
    name: 'HTML5',
    icon: './images/html5.svg',
    title: '시맨틱 마크업 및 접근성 고려 구조화',
    desc: '검색엔진 최적화(SEO)와 웹 접근성을 고려한 시맨틱 태그 기반의 표준화된 문서 구조를 설계, 유지보수가 용이하도록 마크업과 웹 텍스트 레이아웃을 작성.'
},
{
    name: 'CSS3',
    icon: './images/css3.svg',
    title: '반응형 웹 구현 및 디테일한 스타일링',
    desc: 'Flexbox 및 Grid 시스템을 자유롭게 다루어 다양한 디바이스 해상도에 최적화된 반응형 레이아웃을 구현. CSS 애니메이션을 활용해 직관적인 사용자 경험(UX)을 연출.'
},
{
    name: 'Photoshop',
    icon: './images/photoshop.svg',
    title: '비주얼 보정 및 이미지 합성',
    desc: '레이어 마스크와 다양한 필터/효과를 활용하여 고품질의 비주얼 콘텐츠를 제작. 웹/모바일 환경에 최적화된 상세페이지 및 프로모션 배너, 대용량 이미지를 리터칭.'
},
{
    name: 'Illustrator',
    icon: './images/illustrator.svg',
    title: '웹/앱 전용 벡터 그래픽 및 아이콘 제작',
    desc: '해상도에 영향받지 않는 깨끗한 벡터 기술을 바탕으로 브랜드 로고, 웹/앱 전용 아이콘, 캐릭터 및 일러스트 요소를 제작. SVG 형태의 최적화 에셋을 추출 가능.'
}
];