/* ==========================================
   PWP Web View Interactive Script (완전 개편)
   ========================================== */

// 1. 가상의 유기견 데이터 (Mock Database)
const DOGS_DATA = [
    {
        id: "choco",
        name: "초코",
        breed: "골든 리트리버 믹스",
        age: "2살 3개월",
        gender: "남아(중성화)",
        weight: "18.5kg",
        height: "52cm",
        desc: "사람을 무척 좋아하고 호기심이 아주 강한 장난꾸러기입니다. 산책 훈련을 좋아해서 도우미가 카메라를 착용하면 신나게 앞장서서 리드하곤 합니다.",
        health: "백신 추가 접종 및 심장사상충 예방 완료. 모질 상태 윤기 흐르며 관절 관리가 양호함.",
        status: { walk: true, sponsor: true, matching: true, camera: true },
        sponsors: ["김*수", "박*영"],
        totalRaised: 60000,
        gifts: [
            { date: "2026-05-20", title: "친환경 천연 실타래 장난감 후원", desc: "초코의 터그 놀이용 천연 장난감 선물 (전달 완료)" },
            { date: "2026-04-28", title: "알러지 프리 연어 수제 간식", desc: "피부 면역 강화를 위한 특식 선물 (전달 완료)" }
        ],
        shelter: "마포 유기견 행복 보호소",
        image: "images/dog_golden.png",
        growthHistory: [
            { month: 3, weight: 4.2, height: 18, note: "보호소 입소, 기본 건강 검진 양호" },
            { month: 6, weight: 7.5, height: 26, note: "2차 접종 진행 중, 활발한 성장기 진입" },
            { month: 12, weight: 12.8, height: 40, note: "종합 백신 접종, 성장 속도 안정화" },
            { month: 18, weight: 16.5, height: 49, note: "성견 형태 발달, 모질 및 식사량 양호" },
            { month: 24, weight: 18.0, height: 51, note: "성견 도달 완료, 정기 심장사상충 예방" },
            { month: 27, weight: 18.5, height: 52, note: "현재 상태. 활력 매우 좋고 예방 접종 완료" }
        ]
    },
    {
        id: "happy",
        name: "해피",
        breed: "골든 리트리버 믹스",
        age: "1살 6개월",
        gender: "여아(중성화)",
        weight: "9.2kg",
        height: "38cm",
        desc: "처음 만날 때는 낯을 가리지만 금세 친해져서 배를 뒤집는 애교쟁이입니다. 나비나 꽃을 구경하는 조용한 산책을 선호합니다.",
        health: "종합 예방 접종 완료. 사료 식사량 우수하며 매우 활동적인 신체 조건 보유.",
        status: { walk: false, sponsor: true, matching: false, camera: true },
        sponsors: ["최*지"],
        totalRaised: 30000,
        gifts: [
            { date: "2026-05-15", title: "푹신한 메모리폼 마약 방석", desc: "해피의 단잠을 위한 푹신 쿠션 (전달 완료)" }
        ],
        shelter: "희망 동물 Care 센터",
        image: "images/dog_golden.png",
        growthHistory: [
            { month: 3, weight: 2.1, height: 14, note: "영양 부족으로 특별 사료 및 비타민 공급 시작" },
            { month: 6, weight: 4.5, height: 22, note: "신체 지표 정상 범위 회복, 사교성 훈련 개시" },
            { month: 9, weight: 6.8, height: 30, note: "뼈대 성장 영양제 복용, 야외 놀이 시작" },
            { month: 12, weight: 8.2, height: 35, note: "신체 균형 완성 단계, 종합 건강 검진 양호" },
            { month: 18, weight: 9.2, height: 38, note: "현재 상태. 건강 최상이며 식욕 왕성함" }
        ]
    },
    {
        id: "coco",
        name: "코코",
        breed: "토이 푸들",
        age: "4살",
        gender: "여아(중성화)",
        weight: "4.5kg",
        height: "28cm",
        desc: "영리해서 앉아, 엎드려, 손을 10분 만에 마스터했습니다. 미용 봉사자 품에서도 꾸벅꾸벅 조는 얌전함을 가지고 있습니다.",
        health: "슬개골 탈구 방지를 위한 미끄럼 매트 관리 중. 정기 귀 청소 완료로 매우 깨끗함.",
        status: { walk: true, sponsor: false, matching: true, camera: false },
        sponsors: ["이*민", "한*수", "유*아"],
        totalRaised: 80000,
        gifts: [
            { date: "2026-05-02", title: "강아지 전용 유기농 삼계탕", desc: "원기 보양을 위한 닭가슴살 캔 수제식 (전달 완료)" }
        ],
        shelter: "서교 동물 나눔 쉼터",
        image: "images/dog_poodle.png",
        growthHistory: [
            { month: 6, weight: 1.5, height: 12, note: "자율 급식 훈련, 얌전하고 영리함 입증" },
            { month: 12, weight: 3.2, height: 22, note: "성장기 종료, 슬개골 보호 매트 생활" },
            { month: 24, weight: 4.2, height: 27, note: "성견 안정기, 정기 피부 상태 체크 양호" },
            { month: 36, weight: 4.4, height: 28, note: "귀 세정 관리 및 발톱 미용 완료" },
            { month: 48, weight: 4.5, height: 28, note: "현재 상태. 영양 밸런스 우수하고 조용함" }
        ]
    },
    {
        id: "mungchi",
        name: "뭉치",
        breed: "사모예드 믹스",
        age: "3살",
        gender: "남아(중성화)",
        weight: "24.0kg",
        height: "60cm",
        desc: "새하얗고 풍성한 털이 매력적인 웃음 천사 대형견입니다. 힘차게 뛰는 에너지를 도우미들이 같이 뛰며 발산해 주고 있습니다.",
        health: "대형견 전용 오메가3 영양제 복용. 모량 풍부하며 정기 피부 건강 진단 양호.",
        status: { walk: false, sponsor: true, matching: true, camera: true },
        sponsors: ["강*우"],
        totalRaised: 50000,
        gifts: [],
        shelter: "마포 유기견 행복 보호소",
        image: "images/dog_samoyed.png",
        growthHistory: [
            { month: 6, weight: 8.5, height: 30, note: "대형견 속도로 빠른 골격 성장 및 근육량 증가" },
            { month: 12, weight: 16.2, height: 48, note: "이중모 관리 브러싱 훈련, 피부 질환 없음" },
            { month: 18, weight: 20.5, height: 55, note: "오메가3 및 조인트 영양제 투여, 관절 관리" },
            { month: 24, weight: 22.8, height: 58, note: "체중 안정, 에너지 발산을 위한 산책 코스 추가" },
            { month: 36, weight: 24.0, height: 60, note: "현재 상태. 모량 매우 풍부하고 성격 사교적" }
        ]
    },
    {
        id: "bori",
        name: "보리",
        breed: "포메라니안 믹스",
        age: "9개월",
        gender: "남아(중성화)",
        weight: "3.2kg",
        height: "22cm",
        desc: "귀여운 호기심으로 가득 찬 아기 강아지입니다. 장난감을 멀리 던지면 쪼르르 물어오는 물어오기 놀이에 푹 빠져 있습니다.",
        health: "유치 탈락 관리 및 뼈대 성장 영양제 복용 중. 신체 활력도 우수함.",
        status: { walk: true, sponsor: true, matching: false, camera: true },
        sponsors: [],
        totalRaised: 10000,
        gifts: [],
        shelter: "분당 유기견 구호 보호소",
        image: "images/dog_shiba.png",
        growthHistory: [
            { month: 3, weight: 1.2, height: 10, note: "보호소 구조, 유치 발달 상태 확인" },
            { month: 6, weight: 2.3, height: 16, note: "뼈 성장 영양 식단 공급, 물어오기 놀이 훈련" },
            { month: 9, weight: 3.2, height: 22, note: "현재 상태. 호기심 충만, 유치 정상 탈락 중" }
        ]
    },
    {
        id: "aji",
        name: "아지",
        breed: "웰시 코기 믹스",
        age: "1살 2개월",
        gender: "남아(중성화)",
        weight: "11.0kg",
        height: "32cm",
        desc: "다리는 짧지만 누구보다 빠르게 뛰어다니는 사교성 만점 강아지입니다. 공 던지기 놀이를 무척 좋아해요.",
        health: "척추 건강 보호를 위해 체중 조절 식단 투여 중. 예방 접종 100% 완료.",
        status: { walk: true, sponsor: true, matching: true, camera: true },
        sponsors: ["정*재"],
        totalRaised: 40000,
        gifts: [],
        shelter: "인천 늘푸른 케어 쉼터",
        image: "images/dog_golden.png",
        growthHistory: [
            { month: 3, weight: 3.5, height: 16, note: "허리 및 고관절 1차 진단 정상, 기본 접종" },
            { month: 6, weight: 6.8, height: 24, note: "예방 접종 완료, 활동량이 많아 간식 급여 조절" },
            { month: 10, weight: 9.5, height: 29, note: "척추 보호를 위한 저지방 식단 및 체중 감량 시작" },
            { month: 14, weight: 11.0, height: 32, note: "현재 상태. 건강 관리 잘 유지 중, 활달함" }
        ]
    },
    {
        id: "latte",
        name: "라떼",
        breed: "토이 푸들 믹스",
        age: "2살",
        gender: "여아(중성화)",
        weight: "3.8kg",
        height: "26cm",
        desc: "라떼 마끼아토처럼 따뜻하고 부드러운 털을 가진 얌전한 푸들입니다. 품에 안겨서 스르륵 잠드는 것을 좋아합니다.",
        health: "정기 미용 완료. 안구 영양제 및 귀 세정 관리 양호. 관절 상태 우수.",
        status: { walk: false, sponsor: true, matching: false, camera: true },
        sponsors: ["송*혜"],
        totalRaised: 20000,
        gifts: [],
        shelter: "부산 광안 댕댕이 쉼터",
        image: "images/dog_poodle.png",
        growthHistory: [
            { month: 6, weight: 1.8, height: 15, note: "털 엉킴 방지 미용 적응 교육, 귀 세정 관리 개시" },
            { month: 12, weight: 3.0, height: 22, note: "체형 안정화, 사람을 매우 따르고 얌전함" },
            { month: 18, weight: 3.5, height: 25, note: "눈물자국 케어 식단 공급, 안구 상태 양호" },
            { month: 24, weight: 3.8, height: 26, note: "현재 상태. 모질 부드럽고 관절 건강함" }
        ]
    }
];;

// 1-2. 가상의 전국 보호소 데이터 (Mock Shelters Database)
const SHELTERS_DATA = [
    { id: "mapo", name: "마포 유기견 행복 보호소", city: "서울시", district: "마포구", address: "서울시 마포구 대흥로 123-45", camCount: 6, lat: 35, lng: 45 },
    { id: "seogyo", name: "서교 동물 나눔 쉼터", city: "서울시", district: "마포구", address: "서울시 마포구 와우산로 12", camCount: 0, lat: 25, lng: 70 },
    { id: "hope", name: "희망 동물 Care 센터", city: "서울시", district: "마포구", address: "서울시 마포구 신촌로 88", camCount: 4, lat: 55, lng: 30 },
    { id: "bundang", name: "분당 유기견 구호 보호소", city: "경기도", district: "성남시 분당구", address: "경기도 성남시 분당구 판교역로 99", camCount: 5, lat: 70, lng: 50 },
    { id: "incheon", name: "인천 늘푸른 케어 쉼터", city: "인천시", district: "남동구", address: "인천시 남동구 예술로 12", camCount: 3, lat: 40, lng: 20 },
    { id: "busan", name: "부산 광안 댕댕이 쉼터", city: "부산시", district: "해운대구", address: "부산시 해운대구 해운대로 333", camCount: 5, lat: 80, lng: 80 }
];

// 2. 현재 애플리케이션 상태 (Application State)
let currentDog = DOGS_DATA[0]; // 기본 활성화견: 초코
let userTotalContribution = 150000; // 사용자 누적 후원액
let sponsoredDogsList = new Set(["choco"]); // 후원 중인 강아지 목록
let viewHistory = ["home-view"]; // 히스토리 기반 라우팅
let tempSponsorType = "one"; // 임시 후원 유형 기억 (one / group)

// 3. DOM 요소 참조 전역 변수 선언
let dogCarouselTrack = null;
let dogPhotoTrigger = null;
let dogName = null;
let dogBreed = null;
let dogDesc = null;
let dogAge = null;
let dogGender = null;
let dogWeight = null;

let statusWalk = null;
let statusSponsor = null;
let statusMatching = null;
let statusCamera = null;

let mypageTrigger = null;
let mypageDrawer = null;
let closeMypageDrawer = null;

let sponsorModal = null;
let closeSponsorModal = null;
let modalConfirmBtn = null;
let sponsorSuccessTitle = null;
let sponsorSuccessDesc = null;
let toast = null;

let btnSendHeart = null;
let btnGiveSnack = null;
let btnPlayVoice = null;
let heartsContainer = null;
let liveChatBox = null;
let liveChatInput = null;
let liveChatSend = null;
let walkVideoContainer = null;

let actionRequestInput = null;
let actionRequestSend = null;
let actionLogList = null;

let camScreen = null;
let camTitle = null;
let camRotationX = 0;
let camRotationY = 0;

// 4. 초기화 및 이벤트 리스너 마운트
document.addEventListener("DOMContentLoaded", () => {
    queryDOMElements();
    initDogCarousel();
    updateActiveDogUI(currentDog);
    bindNavigationEvents();
    bindSponsorSelectEvents();
    bindSponsorshipEvents();
    bindLiveWalkEvents();
    bindHomeCamEvents();
    bindFormSubmissionEvents();
    bindGrowthHistoryEvents();
});

// DOM 요소를 안전하게 쿼리하는 함수
function queryDOMElements() {
    dogCarouselTrack = document.getElementById("dog-carousel-track");
    dogPhotoTrigger = document.getElementById("dog-photo-trigger");
    dogName = document.getElementById("dog-name");
    dogBreed = document.getElementById("dog-breed");
    dogDesc = document.getElementById("dog-desc");
    dogAge = document.getElementById("dog-age");
    dogGender = document.getElementById("dog-gender");
    dogWeight = document.getElementById("dog-weight");

    statusWalk = document.getElementById("status-walk");
    statusSponsor = document.getElementById("status-sponsor");
    statusMatching = document.getElementById("status-matching");
    statusCamera = document.getElementById("status-camera");

    mypageTrigger = document.getElementById("mypage-trigger");
    mypageDrawer = document.getElementById("mypage-drawer");
    closeMypageDrawer = document.getElementById("close-mypage-drawer");

    sponsorModal = document.getElementById("sponsor-modal");
    closeSponsorModal = document.getElementById("close-sponsor-modal");
    modalConfirmBtn = document.getElementById("modal-confirm-btn");
    sponsorSuccessTitle = document.getElementById("sponsor-success-title");
    sponsorSuccessDesc = document.getElementById("sponsor-success-desc");
    toast = document.getElementById("toast-message");

    btnSendHeart = document.getElementById("btn-send-heart");
    btnGiveSnack = document.getElementById("btn-give-snack");
    btnPlayVoice = document.getElementById("btn-play-voice");
    heartsContainer = document.getElementById("hearts-container");
    liveChatBox = document.getElementById("live-chat-box");
    liveChatInput = document.getElementById("live-chat-input");
    liveChatSend = document.getElementById("live-chat-send");
    walkVideoContainer = document.querySelector(".walk-video-container");

    actionRequestInput = document.getElementById("action-request-input");
    actionRequestSend = document.getElementById("action-request-send");
    actionLogList = document.getElementById("action-log-list");

    camScreen = document.querySelector(".cam-screen-container");
    camTitle = document.querySelector(".cam-badge");
}

// 5. 3초 주기 무한 스와이프 캐러셀 (4x1 포맷)
let carouselIndex = 0;
let carouselTimer = null;
const CARD_FULL_WIDTH = 245; // 카드너비 225px + gap 20px

function initDogCarousel() {
    if (!dogCarouselTrack) return;
    dogCarouselTrack.innerHTML = "";
    
    // 오리지널 카드 7장 뒤에 처음 4장을 복제해서 무한 루프 구현 (총 11장)
    const clonedElements = DOGS_DATA.slice(0, 4);
    const renderList = [...DOGS_DATA, ...clonedElements];
    
    renderList.forEach((dog, index) => {
        const card = document.createElement("div");
        card.className = "carousel-card";
        card.setAttribute("data-dog-id", dog.id);
        
        // 첫 번째 강아지(초코) 카드들 active 활성화
        if (dog.id === currentDog.id) card.classList.add("active");
        
        card.innerHTML = `
            <div class="carousel-photo">
                <img src="${dog.image}" alt="${dog.name}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">
            </div>
            <div class="carousel-name">${dog.name}</div>
        `;
        
        card.addEventListener("click", () => {
            // 데이터 갱신
            currentDog = dog;
            updateActiveDogUI(dog);
            showToast(`${dog.name}를(을) 선택하여 프로필이 갱신되었습니다.`);
            
            // 모든 캐러셀 카드 중 동일 ID를 가진 카드들 active 상태 동기화
            document.querySelectorAll(".carousel-card").forEach(c => {
                if (c.getAttribute("data-dog-id") === dog.id) {
                    c.classList.add("active");
                } else {
                    c.classList.remove("active");
                }
            });
            
            // 화면 부드럽게 활성화 카드 위치로 스크롤
            const activeCard = document.getElementById("active-dog-card");
            if (activeCard) {
                activeCard.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
        
        dogCarouselTrack.appendChild(card);
    });

    // 3초 타이머 시작
    startCarouselTimer();

    // 마우스 호버 시 일시정지 인터랙션
    const container = document.querySelector(".carousel-container");
    if (container) {
        container.addEventListener("mouseenter", stopCarouselTimer);
        container.addEventListener("mouseleave", startCarouselTimer);
    }
}

function startCarouselTimer() {
    if (carouselTimer) clearInterval(carouselTimer);
    carouselTimer = setInterval(slideNextCarousel, 3000);
}

function stopCarouselTimer() {
    if (carouselTimer) {
        clearInterval(carouselTimer);
        carouselTimer = null;
    }
}

function slideNextCarousel() {
    if (!dogCarouselTrack) return;
    
    carouselIndex++;
    
    dogCarouselTrack.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
    dogCarouselTrack.style.transform = `translateX(${-carouselIndex * CARD_FULL_WIDTH}px)`;
    
    // 오리지널 카드 7개 뒤의 클론 카드 복제 지점(인덱스 7)에 도달하면 무한 회귀
    if (carouselIndex === DOGS_DATA.length) {
        setTimeout(() => {
            if (!dogCarouselTrack) return;
            dogCarouselTrack.style.transition = "none";
            carouselIndex = 0;
            dogCarouselTrack.style.transform = "translateX(0)";
            // 리플로우 강제
            dogCarouselTrack.offsetHeight;
        }, 500); // 0.5초 transition이 끝난 직후
    }
}

// 6. 강아지 상세 정보 및 마이페이지 내 상세 데이터 동기화
function updateActiveDogUI(dog) {
    if (dogName) dogName.textContent = dog.name;
    if (dogBreed) dogBreed.textContent = dog.breed;
    if (dogDesc) dogDesc.textContent = dog.desc;
    if (dogAge) dogAge.textContent = dog.age;
    if (dogGender) dogGender.textContent = dog.gender;
    if (dogWeight) dogWeight.textContent = dog.weight;

    if (dogPhotoTrigger) {
        dogPhotoTrigger.innerHTML = `
            <img src="${dog.image}" alt="${dog.name}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit; position:absolute; inset:0;">
            <div class="photo-info-overlay" style="z-index: 5;">
                <span class="click-hint">터치 시 1인칭 산책 Live로 이동</span>
            </div>
        `;
    }

    // 성장 일지 탭 연동 (존재 여부 체크)
    const albumDogName = document.getElementById("album-dog-name");
    const albumDogAge = document.getElementById("album-dog-age");
    const albumDogWeightVal = document.getElementById("album-dog-weight-val");
    const albumDogHeightVal = document.getElementById("album-dog-height-val");
    const albumDogHealth = document.getElementById("album-dog-health");
    
    if (albumDogName) albumDogName.textContent = dog.name;
    if (albumDogAge) albumDogAge.textContent = dog.age;
    if (albumDogWeightVal) albumDogWeightVal.textContent = dog.weight;
    if (albumDogHeightVal) albumDogHeightVal.textContent = dog.height;
    if (albumDogHealth) albumDogHealth.textContent = `"${dog.health}"`;

    // 내 후원 기록 탭 연동
    const recordDogName = document.getElementById("record-dog-name");
    if (recordDogName) recordDogName.textContent = dog.name;
    const recordDogThumb = document.querySelector(".dog-thumb-mini");
    if (recordDogThumb) {
        recordDogThumb.innerHTML = `<img src="${dog.image}" alt="${dog.name}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">`;
    }

    // 공동 후원 진행 바 연동 (마이페이지 드로어/상세 뷰)
    const coGroupName = document.getElementById("co-group-name");
    if (coGroupName) coGroupName.textContent = `${dog.name}네 수호천사들`;

    // 공동 후원 초대 명단 초기화
    const memberList = document.querySelector("#cosponsor-view .member-list-mini");
    if (memberList) {
        memberList.innerHTML = `
            <div class="member-badge">김*수 (방장)</div>
            <div class="member-badge">나 (후원자)</div>
            ${dog.sponsors.length > 0 ? dog.sponsors.map(sp => `<div class="member-badge">${sp}</div>`).join('') : ''}
            <div class="add-member-placeholder">+ 초대 대기 중</div>
        `;
    }

    // 성장 앨범 특별 선물 내역 연동
    const timeline = document.getElementById("special-gifts-timeline");
    if (timeline) {
        if (dog.gifts.length > 0) {
            timeline.innerHTML = dog.gifts.map(gift => `
                <div class="timeline-item">
                    <div class="date">${gift.date}</div>
                    <div class="title">${gift.title}</div>
                    <div class="desc">${gift.desc}</div>
                </div>
            `).join('');
        } else {
            timeline.innerHTML = `<div style="font-size:0.75rem; color:#94a3b8; text-align:center; padding:20px 0;">아직 선물 내역이 없습니다. 첫 수제 선물을 후원해 보세요!</div>`;
        }
    }

    // 후원 신청 페이지 대상 강아지 갱신
    const sponsorTargetName = document.getElementById("sponsor-target-name");
    const sponsorTargetBreed = document.getElementById("sponsor-target-breed");
    if (sponsorTargetName) sponsorTargetName.textContent = dog.name;
    if (sponsorTargetBreed) sponsorTargetBreed.textContent = dog.breed;
    const sponsorTargetThumb = document.querySelector(".sponsor-target-card .target-thumb");
    if (sponsorTargetThumb) {
        sponsorTargetThumb.innerHTML = `<img src="${dog.image}" alt="${dog.name}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">`;
    }

    // 개월별 성장 변화 역사 렌더링
    renderGrowthHistory(dog);
}

// LED 점 갱신 헬퍼
function updateStatusDot(element, isActive, colorClass, isPulsing) {
    if (!element) return;
    const dot = element.querySelector(".status-dot");
    const label = element.querySelector(".status-label");
    if (!dot || !label) return;
    
    dot.className = "status-dot";
    
    if (isActive) {
        dot.classList.add(colorClass);
        if (isPulsing) dot.classList.add("pulsing");
        label.style.color = "var(--dark)";
    } else {
        label.style.color = "var(--slate-400)";
    }
}

// 7. 내비게이션 라우팅 및 사이드 패널 제어
function changeView(targetViewId, pushToHistory = true) {
    document.querySelectorAll(".view").forEach(v => {
        v.classList.remove("active");
    });
    const targetView = document.getElementById(targetViewId);
    if (targetView) {
        targetView.classList.add("active");
        targetView.scrollTop = 0;
    }
    
    // 뷰 전환 시 마이페이지 드로어는 닫는다
    if (mypageDrawer) {
        mypageDrawer.classList.remove("active");
    }

    if (pushToHistory) {
        if (viewHistory[viewHistory.length - 1] !== targetViewId) {
            viewHistory.push(targetViewId);
        }
    }
}

function goBack() {
    if (viewHistory.length > 1) {
        viewHistory.pop(); // 현재 뷰 제거
        const prevView = viewHistory[viewHistory.length - 1];
        changeView(prevView, false);
    } else {
        changeView("home-view", false);
        viewHistory = ["home-view"];
    }
}

function bindNavigationEvents() {
    // 로고 클릭 시 홈 복귀
    const logoBtn = document.getElementById("header-logo-btn");
    if (logoBtn) {
        logoBtn.addEventListener("click", () => {
            changeView("home-view");
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 헤더 내비 링크 클릭 시 (홈 뷰로 전환하고 해당 앵커로 스크롤. 단, Q&A는 상세 페이지로 라우팅)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            
            if (targetId === "#qna-view") {
                changeView("qna-view");
            } else {
                changeView("home-view");
                setTimeout(() => {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                }, 100);
            }
        });
    });

    // 1) 1:1 후원 신청 버튼 클릭
    const sponsorOneBtn = document.getElementById("sponsor-one-btn");
    if (sponsorOneBtn) {
        sponsorOneBtn.addEventListener("click", () => {
            tempSponsorType = "one";
            changeView("sponsor-select-view");
            resetSponsorSelectUI();
        });
    }

    // 2) 공동 후원 신청 버튼 클릭
    const sponsorGroupBtn = document.getElementById("sponsor-group-btn");
    if (sponsorGroupBtn) {
        sponsorGroupBtn.addEventListener("click", () => {
            tempSponsorType = "group";
            changeView("sponsor-select-view");
            resetSponsorSelectUI();
        });
    }

    // 3) 내 주변 보호소 찾기 버튼 클릭
    const findShelterBtn = document.getElementById("find-shelter-btn");
    if (findShelterBtn) {
        findShelterBtn.addEventListener("click", () => {
            changeView("map-view");
        });
    }

    // 강아지 1인칭 산책 Live 진입
    if (dogPhotoTrigger) {
        dogPhotoTrigger.addEventListener("click", () => {
            enterWalkLiveView();
        });
    }

    // 대시보드 내 미니 LIVE 버튼 클릭 시 바로 산책 화면 이동
    const activeDogLiveBtn = document.getElementById("active-dog-live-btn");
    if (activeDogLiveBtn) {
        activeDogLiveBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            enterWalkLiveView();
        });
    }

    // 마이페이지 사이드 패널 토글
    if (mypageTrigger) {
        mypageTrigger.addEventListener("click", () => {
            if (mypageDrawer) mypageDrawer.classList.add("active");
        });
    }

    if (closeMypageDrawer) {
        closeMypageDrawer.addEventListener("click", () => {
            if (mypageDrawer) mypageDrawer.classList.remove("active");
        });
    }

    if (mypageDrawer) {
        mypageDrawer.addEventListener("click", (e) => {
            if (e.target === mypageDrawer) {
                mypageDrawer.classList.remove("active");
            }
        });
    }

    // 마이페이지 메뉴 버튼 클릭 시 상세 페이지로 라우팅
    const menuButtons = document.querySelectorAll(".mypage-menu-btn");
    menuButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetViewId = btn.getAttribute("data-target");
            if (targetViewId) {
                changeView(targetViewId);
                showToast(`마이페이지 메뉴 [${btn.querySelector(".menu-title").textContent}]로 이동했습니다.`);
                if (targetViewId === "walk-live-view") {
                    simulateLiveChat();
                }
            }
        });
    });

    // 공통 뒤로가기 버튼들 바인딩
    const backBtns = document.querySelectorAll(".router-back-btn");
    backBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            goBack();
        });
    });

    // 지도 검색 시뮬레이션
    const searchBtn = document.querySelector(".search-btn");
    const searchInput = document.querySelector(".search-bar input");
    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", () => {
            if (searchInput.value.trim() === "") return;
            showToast(`'${searchInput.value}' 주변 보호소를 탐색 중입니다...`);
            setTimeout(() => {
                showToast("탐색이 완료되었습니다. 목록의 보호소 카드를 눌러보세요.");
            }, 800);
        });
    }

    // 지도 핀 연동
    const pins = document.querySelectorAll(".map-pin");
    const cards = document.querySelectorAll(".shelter-card");

    pins.forEach((pin, index) => {
        pin.addEventListener("click", () => {
            pins.forEach(p => p.classList.remove("active"));
            cards.forEach(c => c.classList.remove("active"));
            
            pin.classList.add("active");
            if (cards[index]) {
                cards[index].classList.add("active");
                cards[index].scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
            
            showToast(`선택: ${pin.getAttribute("data-name")}`);
        });
    });

    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            pins.forEach(p => p.classList.remove("active"));
            cards.forEach(c => c.classList.remove("active"));
            
            card.classList.add("active");
            if (pins[index]) pins[index].classList.add("active");
            showToast(`선택: ${card.querySelector(".shelter-name").textContent}`);
        });
    });

    // 지도 예약 -> 방문 봉사 예약 신청 페이지로 바로 가기
    document.querySelectorAll(".select-shelter-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const shelterCard = btn.closest(".shelter-card");
            const shelterName = shelterCard ? shelterCard.querySelector(".shelter-name").textContent : "보호소";
            showToast(`[${shelterName}] 방문을 예약하는 화면으로 이동합니다.`);
            
            // 방문 예약 페이지로 바로 이동
            changeView("volunteer-view");
        });
    });

    // 실물 성장 앨범 주문서 진입
    const albumOrderTriggerBtn = document.getElementById("album-order-trigger-btn");
    if (albumOrderTriggerBtn) {
        albumOrderTriggerBtn.addEventListener("click", () => {
            changeView("album-buy-view");
            initAlbumOrderPage();
        });
    }
}

// 8. 후원 페이지 금액 선택 및 결제 폼 전송
function bindSponsorshipEvents() {
    const sponsorshipForm = document.getElementById("sponsorship-form");
    const sponsorshipAmount = document.getElementById("sponsorship-amount");
    const customAmtTrigger = document.getElementById("custom-amt-trigger");
    const amountBtns = document.querySelectorAll(".amount-btn");
    const typeRadios = document.querySelectorAll('input[name="sponsor-type"]');

    // 라디오 버튼(1:1 vs 공동) 선택 변경 시 기본값 설정
    typeRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            amountBtns.forEach(btn => btn.classList.remove("active"));
            if (radio.value === "one") {
                // 1:1 정기는 기본 30,000원
                const defaultBtn = document.querySelector('.amount-btn[data-amt="30000"]');
                if (defaultBtn) defaultBtn.classList.add("active");
                if (sponsorshipAmount) sponsorshipAmount.value = 30000;
            } else {
                // 공동은 기본 10,000원
                // 10,000원짜리 전용 버튼이 없으므로 직접 입력값 혹은 default 세팅
                if (sponsorshipAmount) sponsorshipAmount.value = 10000;
                // '직접 입력' 버튼을 활성화하거나 커스텀 처리
                if (customAmtTrigger) customAmtTrigger.classList.add("active");
            }
        });
    });

    // 금액 고정 선택 단추 클릭
    amountBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.id === "custom-amt-trigger") return; // 직접 입력은 따로 처리
            
            amountBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const amt = btn.getAttribute("data-amt");
            if (sponsorshipAmount) sponsorshipAmount.value = amt;
            showToast(`후원 금액이 ₩ ${parseInt(amt).toLocaleString()}으로 설정되었습니다.`);
        });
    });

    // 직접 입력 버튼 클릭
    if (customAmtTrigger) {
        customAmtTrigger.addEventListener("click", () => {
            amountBtns.forEach(b => b.classList.remove("active"));
            customAmtTrigger.classList.add("active");

            const customVal = prompt("후원하실 월 정기 금액을 숫자로 입력해 주세요. (원 단위):", "20000");
            if (customVal !== null) {
                const parsed = parseInt(customVal);
                if (!isNaN(parsed) && parsed > 0) {
                    if (sponsorshipAmount) sponsorshipAmount.value = parsed;
                    customAmtTrigger.textContent = `₩ ${parsed.toLocaleString()}`;
                    showToast(`직접 입력 금액 ₩ ${parsed.toLocaleString()}이 적용되었습니다.`);
                } else {
                    showToast("올바른 금액을 입력해 주세요.");
                    // 기본값 복구
                    const defaultBtn = document.querySelector('.amount-btn[data-amt="30000"]');
                    if (defaultBtn) defaultBtn.click();
                }
            }
        });
    }

    // 후원 폼 제출 시뮬레이션
    if (sponsorshipForm) {
        sponsorshipForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const isOne = document.querySelector('input[name="sponsor-type"]:checked').value === "one";
            const amt = parseInt(sponsorshipAmount ? sponsorshipAmount.value : 30000);
            const message = document.getElementById("sponsor-message").value.trim();

            if (sponsorSuccessTitle) {
                sponsorSuccessTitle.textContent = isOne ? "1:1 매칭 후원 완료" : "공동 매칭 후원 완료";
            }
            if (sponsorSuccessDesc) {
                sponsorSuccessDesc.textContent = `[${currentDog.name}]을(를) 위한 매월 ₩ ${amt.toLocaleString()}의 정기 돌봄 후원이 성공적으로 신청되었습니다. 보호소 성장 기록부와 24시간 실시간 홈캠 채널이 활성화됩니다.`;
            }

            if (sponsorModal) sponsorModal.classList.add("active");
        });
    }

    if (closeSponsorModal) {
        closeSponsorModal.addEventListener("click", () => {
            if (sponsorModal) sponsorModal.classList.remove("active");
        });
    }

    if (sponsorModal) {
        sponsorModal.addEventListener("click", (e) => {
            if (e.target === sponsorModal) {
                sponsorModal.classList.remove("active");
            }
        });
    }

    if (modalConfirmBtn) {
        modalConfirmBtn.addEventListener("click", () => {
            if (sponsorModal) sponsorModal.classList.remove("active");
            
            const isOne = sponsorSuccessTitle ? sponsorSuccessTitle.textContent.includes("1:1") : true;
            const amt = parseInt(sponsorshipAmount ? sponsorshipAmount.value : 30000);
            
            userTotalContribution += amt;
            sponsoredDogsList.add(currentDog.id);
            currentDog.totalRaised += amt;

            // 가상의 선물 타임라인에 한마디 기록 추가
            const message = document.getElementById("sponsor-message") ? document.getElementById("sponsor-message").value.trim() : "";
            if (message) {
                const today = new Date().toISOString().split('T')[0];
                currentDog.gifts.unshift({
                    date: today,
                    title: `돌봄 응원 메시지 및 정기 후원`,
                    desc: `"${message}"`
                });
            }

            // 데이터 UI 동기화
            const statsTotalMoney = document.getElementById("stats-total-money");
            const statsDogCount = document.getElementById("stats-dog-count");
            
            if (statsTotalMoney) statsTotalMoney.textContent = `₩ ${userTotalContribution.toLocaleString()}`;
            if (statsDogCount) statsDogCount.textContent = `${sponsoredDogsList.size} 마리`;
            
            updateActiveDogUI(currentDog);
            
            // 폼 초기화
            if (sponsorshipForm) sponsorshipForm.reset();
            const defaultAmtBtn = document.querySelector('.amount-btn[data-amt="30000"]');
            if (defaultAmtBtn) {
                defaultAmtBtn.classList.add("active");
                if (sponsorshipAmount) sponsorshipAmount.value = 30000;
            }
            if (customAmtTrigger) customAmtTrigger.textContent = "직접 입력";

            showToast(`🎉 ${currentDog.name}의 후원 수호천사가 되어주셔서 진심으로 감사드립니다!`);
            
            // 후원 완료 후 마이페이지 내역이나 홈 화면으로 돌려보낸다.
            changeView("records-view");
        });
    }
}

// 9. 산책 라이브 상호작용
function simulateLiveChat() {
    // 산책 라이브 진입 시 행동 요구 대장 로그 초기화
    if (actionLogList) {
        actionLogList.innerHTML = `
            <div class="log-item system">💡 하단 입력란에 강아지가 취할 행동을 입력하여 현장 직원에게 요구해 보세요. (예: "앉아", "뛰어", "기다려", "손", "간식", "물")</div>
        `;
    }
}

function bindLiveWalkEvents() {
    if (actionRequestSend) {
        actionRequestSend.addEventListener("click", sendBehaviorRequest);
    }
    if (actionRequestInput) {
        actionRequestInput.value = "";
        actionRequestInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") sendBehaviorRequest();
        });
    }
}

function sendBehaviorRequest() {
    if (!actionRequestInput || !actionLogList) return;
    const reqText = actionRequestInput.value.trim();
    if (reqText === "") return;
    
    // 1. 사용자 행동 요구 로그에 추가
    const userLog = document.createElement("div");
    userLog.className = "log-item user-req";
    userLog.innerHTML = `📢 나(행동요구): "${reqText}"`;
    actionLogList.appendChild(userLog);
    actionLogList.scrollTop = actionLogList.scrollHeight;
    
    // 입력란 비우기
    actionRequestInput.value = "";
    
    // 2. 도우미 처리 시뮬레이션
    const helperName = "김민수 도우미";
    
    // 로딩 인디케이터 표시
    showToast("⚙️ 보호소 도우미가 전달된 행동을 확인하고 시도 중입니다...");
    
    setTimeout(() => {
        const staffLog = document.createElement("div");
        staffLog.className = "log-item staff-res";
        
        let responseMsg = "";
        // 키워드별 맞춤 응답
        if (reqText.includes("앉아")) {
            responseMsg = `🙋‍♂️ ${helperName}: "앉아! 지시를 내렸습니다. ${currentDog.name}가 즉시 엉덩이를 붙이고 예쁘게 앉아 간식을 기다리네요. 🐾"`;
        } else if (reqText.includes("뛰어") || reqText.includes("달려")) {
            responseMsg = `🙋‍♂️ ${helperName}: "네! ${currentDog.name}와 함께 운동장 잔디밭을 힘차게 뛰었습니다. 꼬리를 엄청 흔들며 좋아하네요! 🏃‍♂️"`;
        } else if (reqText.includes("손")) {
            responseMsg = `🙋‍♂️ ${helperName}: "손! 요구를 인지했습니다. ${currentDog.name}가 앞발을 번쩍 들어 제 손바닥 위에 부드럽게 올려놓았습니다. 🐾"`;
        } else if (reqText.includes("먹") || reqText.includes("간식")) {
            responseMsg = `🙋‍♂️ ${helperName}: "네, 준비해 온 연어 수제 간식을 보상으로 주었습니다! 쩝쩝 맛있게도 먹네요. 🦴"`;
        } else if (reqText.includes("물") || reqText.includes("마셔")) {
            responseMsg = `🙋‍♂️ ${helperName}: "마침 목이 말랐나 봅니다. 휴대용 급수기로 시원한 물을 가득 마셨습니다. 💧"`;
        } else if (reqText.includes("기다려") || reqText.includes("멈춰")) {
            responseMsg = `🙋‍♂️ ${helperName}: "기다려! 지시에 따라 ${currentDog.name}가 얌전히 그 자리에 서서 다음 행동을 예의주시하고 있습니다. 🐕"`;
        } else {
            const randomResponses = [
                `🙋‍♂️ ${helperName}: "행동 요구 사항 '${reqText}'을(를) 확인하고 ${currentDog.name}에게 지시했습니다. 지시에 꼬리를 흔들며 열심히 화답하고 있습니다! 👍"`,
                `🙋‍♂️ ${helperName}: "지시를 내렸더니 ${currentDog.name}가 귀를 쫑긋 세우며 요구 사항을 성공적으로 수행했습니다! 🐾"`,
                `🙋‍♂️ ${helperName}: "네, 훈련 수칙에 맞춰 지시 후 가벼운 스킨십과 함께 요구 행동을 이끌어냈습니다. 아주 잘 따라주네요! 😊"`
            ];
            responseMsg = randomResponses[Math.floor(Math.random() * randomResponses.length)];
        }
        
        staffLog.innerHTML = responseMsg;
        actionLogList.appendChild(staffLog);
        actionLogList.scrollTop = actionLogList.scrollHeight;
        
        showToast("✓ 행동 요구 수행 완료!");
    }, 1500);
}

// 10. 실시간 홈캠 3D 회전 제어 (탭 내 홈캠 화면)
function bindHomeCamEvents() {
    const camLeft = document.getElementById("cam-left");
    const camRight = document.getElementById("cam-right");
    const camUp = document.getElementById("cam-up");
    const camDown = document.getElementById("cam-down");
    
    const activeCamScreen = document.querySelector(".cam-screen-container");
    const activeCamTitle = document.querySelector(".cam-badge");
    
    if (!activeCamScreen) return;
    
    const placeholderText = activeCamScreen.querySelector(".placeholder-text");
    if (!placeholderText) return;

    function rotateCam(dx, dy, dirText) {
        camRotationX += dx;
        camRotationY += dy;
        
        camRotationX = Math.max(-25, Math.min(25, camRotationX));
        camRotationY = Math.max(-20, Math.min(20, camRotationY));

        placeholderText.style.transform = `perspective(400px) rotateY(${camRotationX}deg) rotateX(${camRotationY}deg)`;
        
        showToast(`🎥 홈캠을 ${dirText}(으)로 5도 회전했습니다. (X:${camRotationX}°, Y:${camRotationY}°)`);
        
        activeCamScreen.style.boxShadow = "inset 0 0 30px rgba(255, 142, 122, 0.4)";
        setTimeout(() => {
            activeCamScreen.style.boxShadow = "";
        }, 150);
    }

    if (camLeft) camLeft.addEventListener("click", () => rotateCam(-8, 0, "왼쪽"));
    if (camRight) camRight.addEventListener("click", () => rotateCam(8, 0, "오른쪽"));
    if (camUp) camUp.addEventListener("click", () => rotateCam(0, 8, "위쪽"));
    if (camDown) camDown.addEventListener("click", () => rotateCam(0, -8, "아래쪽"));

    // 채널 변환 (camTitle 바인딩 보완)
    document.querySelectorAll(".channel-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".channel-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const camName = btn.getAttribute("data-cam");
            if (activeCamTitle) {
                activeCamTitle.textContent = `🟢 CAM ${camName}`;
            } else if (camTitle) {
                camTitle.textContent = `🟢 CAM ${camName}`;
            }

            // 실시간 캠 채널별 이미지 교체 (골든 리트리버 에셋 연동)
            if (camName.includes("01")) {
                activeCamScreen.style.backgroundImage = "url('images/cam_bg.png')";
            } else if (camName.includes("02")) {
                activeCamScreen.style.backgroundImage = "url('images/cam_bg_2.png')";
            } else if (camName.includes("03")) {
                activeCamScreen.style.backgroundImage = "url('images/cam_bg_3.png')";
            }

            showToast(`CAM ${camName} 신호로 교체 송출 중`);
        });
    });
}

// 11. 각종 폼(Q&A, 방문 예약, 입양 심사, 공동 후원 초대) 제출 시뮬레이션
function bindFormSubmissionEvents() {
    
    // 1) FAQ 아코디언 토글
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(q => {
        q.addEventListener("click", () => {
            const answer = q.nextElementSibling;
            if (!answer) return;
            if (answer.style.display === "none" || answer.style.display === "") {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }
        });
    });

    // 2) Q&A 질문 등록
    const qnaForm = document.getElementById("qna-mock-form");
    const userQnaList = document.getElementById("user-qna-list");

    if (qnaForm && userQnaList) {
        qnaForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const writerInput = document.getElementById("qna-writer");
            const contentInput = document.getElementById("qna-content");
            if (!writerInput || !contentInput) return;
            
            const writer = writerInput.value.trim();
            const content = contentInput.value.trim();
            
            const newItem = document.createElement("div");
            newItem.className = "user-qna-item";
            newItem.style.animation = "slideDown 0.4s ease forwards";
            newItem.innerHTML = `
                <div class="qna-meta"><span>작성자: ${writer}</span> • <span>상태: 답변대기</span></div>
                <p class="qna-text">${content}</p>
                <div class="qna-reply" style="border-left-color: var(--slate-400); color: var(--slate-600);">🐾 [답변대기] 보호소 확인 후 관리자가 빠르게 작성해 드립니다.</div>
            `;
            
            const title = userQnaList.querySelector("h4");
            if (title) {
                userQnaList.insertBefore(newItem, title.nextSibling);
            } else {
                userQnaList.appendChild(newItem);
            }
            
            showToast("💬 질문이 등록되었습니다! 모의 게시판에 즉시 노출됩니다.");
            qnaForm.reset();
            
            newItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    }

    // 3) 방문 예약 신청 폼
    const volunteerForm = document.getElementById("volunteer-form");
    const timeSlots = document.querySelectorAll(".time-slot");
    
    timeSlots.forEach(slot => {
        slot.addEventListener("click", (e) => {
            timeSlots.forEach(s => s.classList.remove("active"));
            slot.classList.add("active");
            
            const bookingTimeInput = document.getElementById("booking-time");
            if (bookingTimeInput) {
                bookingTimeInput.value = slot.getAttribute("data-time");
            }
        });
    });

    if (volunteerForm) {
        volunteerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const dateInput = document.getElementById("booking-date");
            const nameInput = document.getElementById("visitor-name");
            const bookingTimeInput = document.getElementById("booking-time");
            if (!dateInput || !nameInput) return;
            
            const dateVal = dateInput.value;
            const nameVal = nameInput.value;
            const timeVal = bookingTimeInput ? bookingTimeInput.value : "오후 1 (14:00)";
            
            showToast(`🗓️ ${nameVal}님, ${dateVal}일 (${timeVal}) 방문 예약 신청이 접수되었습니다!`);
            volunteerForm.reset();
            
            setTimeout(() => {
                goBack();
            }, 1000);
        });
    }

    // 4) 입양 심사 제출
    const adoptForm = document.getElementById("adopt-form");
    if (adoptForm) {
        adoptForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const dots = document.querySelectorAll(".step-dot");
            const labels = document.querySelectorAll(".step-labels span");
            
            if (dots[1]) dots[1].classList.add("active");
            if (labels[1]) labels[1].classList.add("active");
            
            showToast("🏡 입양 신청서 접수가 완료되었습니다. 담당자가 순차적으로 비대면 영상 면담 약속을 통보해 드립니다.", 4000);
            adoptForm.reset();
            
            setTimeout(() => {
                // 초기 진행 상태 1단계 복구
                if (dots[1]) dots[1].classList.remove("active");
                if (labels[1]) labels[1].classList.remove("active");
                goBack();
            }, 2200);
        });
    }

    // 5) 공동 후원 친구 초대
    const generateInviteBtn = document.getElementById("generate-invite-link-btn");
    const inviteFriendInput = document.getElementById("invite-friend-name");
    const inviteLinkResult = document.getElementById("invite-link-result");
    const inviteUrlText = document.getElementById("invite-url-text");

    if (generateInviteBtn && inviteFriendInput) {
        generateInviteBtn.addEventListener("click", () => {
            const friend = inviteFriendInput.value.trim();
            if (friend === "") {
                showToast("초대할 친구 닉네임을 입력하세요.");
                return;
            }

            const code = Math.random().toString(36).substring(2, 8).toUpperCase();
            const fakeUrl = `https://pwp.co.kr/invite/${currentDog.id}?code=${code}&from=Mypage`;
            
            if (inviteUrlText) inviteUrlText.textContent = fakeUrl;
            if (inviteLinkResult) inviteLinkResult.classList.remove("hidden");
            
            navigator.clipboard.writeText(fakeUrl).then(() => {
                showToast("✓ 초대 링크가 클립보드에 복사되었습니다!");
            }).catch(() => {
                showToast("링크가 생성되었습니다. 복사하여 사용하세요.");
            });

            // 후원단 명단에 닉네임 즉각 추가 시뮬레이터
            const memberList = document.querySelector("#cosponsor-view .member-list-mini");
            if (memberList) {
                const placeholder = memberList.querySelector(".add-member-placeholder");
                
                const newBadge = document.createElement("div");
                newBadge.className = "member-badge";
                newBadge.style.color = "var(--primary)";
                newBadge.style.borderColor = "var(--primary)";
                newBadge.style.background = "var(--primary-light)";
                newBadge.textContent = `${friend} (초대됨)`;
                
                if (placeholder) {
                    memberList.insertBefore(newBadge, placeholder);
                } else {
                    memberList.appendChild(newBadge);
                }
            }
            
            showToast(`🤝 '${friend}'님을 위한 수호천사 초대 링크가 활성화되었습니다.`);
        });
    }

    // 6) 실물 성장 앨범 주문 폼
    const albumOrderForm = document.getElementById("album-order-form");
    if (albumOrderForm) {
        albumOrderForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const coverTypeRadio = document.querySelector('input[name="album-cover-type"]:checked');
            const coverType = coverTypeRadio ? coverTypeRadio.value : "hard";
            const price = coverType === "hard" ? 25000 : 15000;
            const coverName = coverType === "hard" ? "프리미엄 하드커버" : "클래식 소프트북";
            
            const receiver = document.getElementById("album-receiver").value.trim();
            const phone = document.getElementById("album-phone").value.trim();
            const address = document.getElementById("album-address").value.trim();
            const detail = document.getElementById("album-address-detail").value.trim();

            showToast(`💳 ₩ ${price.toLocaleString()} 결제 진행 중...`);

            setTimeout(() => {
                userTotalContribution += price;
                
                // 가상 결제 완료 토스트
                showToast(`🎉 [${currentDog.name}]의 실물 앨범 주문 완료! 배송지: ${receiver}님 앞`);

                // 후원 기록 연동
                const today = new Date().toISOString().split('T')[0];
                currentDog.gifts.unshift({
                    date: today,
                    title: `실물 성장 포토북 제작 신청 (${coverName})`,
                    desc: `배송 예정지: ${address} ${detail} (수령인: ${receiver})`
                });

                // 누적액 등 UI 동기화
                const statsTotalMoney = document.getElementById("stats-total-money");
                if (statsTotalMoney) statsTotalMoney.textContent = `₩ ${userTotalContribution.toLocaleString()}`;

                // 성장 앨범 특별 선물 내역 UI 강제 리렌더링
                updateActiveDogUI(currentDog);

                // 폼 리셋 및 이전 페이지로 이동
                albumOrderForm.reset();
                goBack();
            }, 1000);
        });
    }
}

// 12. 공용 토스트 알림 헬퍼
function showToast(message, duration = 2000) {
    if (!toast) return;
    const toastText = toast.querySelector(".toast-text");
    if (toastText) toastText.textContent = message;
    toast.classList.add("active");
    
    if (window.toastTimeout) clearTimeout(window.toastTimeout);
    
    window.toastTimeout = setTimeout(() => {
        toast.classList.remove("active");
    }, duration);
}

// 13. 보호소 및 강아지 선택 인터랙션 (Sponsor Select Flow)
function resetSponsorSelectUI() {
    // 탭 상태 초기화
    document.querySelectorAll(".mode-tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    const defaultTab = document.querySelector('.mode-tab-btn[data-mode="area"]');
    if (defaultTab) defaultTab.classList.add("active");

    // 패널 상태 초기화
    const areaPanel = document.getElementById("area-select-panel");
    const mapPanel = document.getElementById("map-select-panel");
    if (areaPanel) areaPanel.classList.remove("hidden");
    if (mapPanel) mapPanel.classList.add("hidden");

    // 드롭다운 기본값 초기화
    const citySelect = document.getElementById("area-city");
    const distSelect = document.getElementById("area-district");
    if (citySelect) citySelect.value = "서울시";
    
    // 서울시 구/군 초기화
    if (distSelect) {
        distSelect.innerHTML = `<option value="마포구" selected>마포구</option>`;
    }

    // 지도 핀 기본 활성화
    document.querySelectorAll(".select-map-pin").forEach(pin => {
        if (pin.getAttribute("data-shelter") === "마포 유기견 행복 보호소") {
            pin.classList.add("active");
        } else {
            pin.classList.remove("active");
        }
    });

    // 지도 정보 텍스트 초기화
    const mapShelterName = document.getElementById("map-shelter-name-display");
    const mapShelterAddr = document.getElementById("map-shelter-address-display");
    if (mapShelterName) mapShelterName.textContent = "마포 유기견 행복 보호소";
    if (mapShelterAddr) mapShelterAddr.textContent = "서울시 마포구 대흥로 123-45";

    // 지역 보호소 그리드 렌더링
    renderAreaShelters("서울시", "마포구");
}

// 지역별 보호소 카드 렌더링
function renderAreaShelters(city, district) {
    const areaShelterGrid = document.getElementById("area-shelter-grid");
    if (!areaShelterGrid) return;

    if (!city || !district) {
        areaShelterGrid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 20px; font-weight: 600; color: var(--slate-600);">📍 시/도 및 구/군을 먼저 선택해 주세요.</div>`;
        return;
    }

    const filteredShelters = SHELTERS_DATA.filter(s => s.city === city && s.district === district);

    if (filteredShelters.length > 0) {
        areaShelterGrid.innerHTML = filteredShelters.map(s => `
            <div class="shelter-select-card" data-shelter="${s.name}">
                <div class="shelter-icon">🏡</div>
                <h4>${s.name}</h4>
                <p>${s.address}</p>
                <span class="badge">${s.camCount > 0 ? `CAM ${s.camCount}대 가동` : 'CAM 점검 중'}</span>
            </div>
        `).join('');

        // 카드 클릭 이벤트 바인딩
        areaShelterGrid.querySelectorAll(".shelter-select-card").forEach(card => {
            card.addEventListener("click", () => {
                areaShelterGrid.querySelectorAll(".shelter-select-card").forEach(c => c.classList.remove("active"));
                card.classList.add("active");
                
                const shelterName = card.getAttribute("data-shelter");
                selectShelterAndRenderDogs(shelterName);
            });
        });

        // 첫 번째 보호소를 자동으로 선택/활성화 처리
        const firstCard = areaShelterGrid.querySelector(".shelter-select-card");
        if (firstCard) {
            firstCard.click();
        }
    } else {
        areaShelterGrid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 20px; font-weight: 600; color: var(--slate-600);">🔍 해당 지역에 등록된 보호소가 없습니다.</div>`;
        // 강아지 그리드도 비움
        const selectDogGrid = document.getElementById("select-dog-grid");
        if (selectDogGrid) {
            selectDogGrid.innerHTML = `<div class="select-dog-empty">💡 보호소를 최종 선택해 주세요.</div>`;
        }
    }
}

// 보호소 선택 후 강아지 렌더링 공통 핵심 함수
function selectShelterAndRenderDogs(shelterName) {
    const selectDogGrid = document.getElementById("select-dog-grid");
    if (!selectDogGrid) return;

    showToast(`📍 [${shelterName}] 선택됨. 보호견 목록을 갱신합니다.`);

    const filteredDogs = DOGS_DATA.filter(dog => dog.shelter === shelterName);

    if (filteredDogs.length > 0) {
        selectDogGrid.innerHTML = filteredDogs.map(dog => `
            <div class="dog-select-card" data-dog-id="${dog.id}">
                <div class="dog-select-thumb">
                    <img src="${dog.image}" alt="${dog.name}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">
                </div>
                <div class="dog-select-name">${dog.name}</div>
                <div class="dog-select-breed">${dog.breed}</div>
            </div>
        `).join('');

        // 강아지 카드 선택 이벤트 바인딩
        selectDogGrid.querySelectorAll(".dog-select-card").forEach(dogCard => {
            dogCard.addEventListener("click", () => {
                const dogId = dogCard.getAttribute("data-dog-id");
                const selectedDog = DOGS_DATA.find(d => d.id === dogId);
                if (selectedDog) {
                    currentDog = selectedDog;
                    updateActiveDogUI(currentDog);
                    showToast(`🐶 [${selectedDog.name}]이(가) 후원 대상으로 지정되었습니다.`);

                    // 후원 유형 세팅 동기화 및 갱신
                    const targetRadio = document.querySelector(`input[name="sponsor-type"][value="${tempSponsorType}"]`);
                    if (targetRadio) {
                        targetRadio.checked = true;
                        targetRadio.dispatchEvent(new Event("change"));
                    }

                    // 최종 후원 신청서 뷰로 이동
                    changeView("sponsorship-view");
                }
            });
        });
    } else {
        selectDogGrid.innerHTML = `<div class="select-dog-empty">🔍 아쉽게도 현재 해당 보호소에서 등록된 보호견이 없습니다.</div>`;
    }
}

function bindSponsorSelectEvents() {
    // 1) 듀얼 모드 탭 스위칭 바인딩
    const modeTabs = document.querySelectorAll(".mode-tab-btn");
    const areaPanel = document.getElementById("area-select-panel");
    const mapPanel = document.getElementById("map-select-panel");

    modeTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            modeTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const mode = tab.getAttribute("data-mode");
            if (mode === "area") {
                if (areaPanel) areaPanel.classList.remove("hidden");
                if (mapPanel) mapPanel.classList.add("hidden");
                // 드롭다운 현재 활성화 보호소로 강아지 리스트 갱신
                const activeCard = document.querySelector("#area-shelter-grid .shelter-select-card.active");
                if (activeCard) {
                    const shelterName = activeCard.getAttribute("data-shelter");
                    selectShelterAndRenderDogs(shelterName);
                } else {
                    renderAreaShelters(document.getElementById("area-city").value, document.getElementById("area-district").value);
                }
            } else {
                if (areaPanel) areaPanel.classList.add("hidden");
                if (mapPanel) mapPanel.classList.remove("hidden");
                // 지도 현재 액티브 핀으로 강아지 리스트 갱신
                const activePin = document.querySelector(".select-map-pin.active");
                if (activePin) {
                    const shelterName = activePin.getAttribute("data-shelter");
                    selectShelterAndRenderDogs(shelterName);
                }
            }
        });
    });

    // 2) 행정구역 셀렉트 박스 동적 바인딩
    const citySelect = document.getElementById("area-city");
    const distSelect = document.getElementById("area-district");

    // 각 광역 자치단체 하위 구군 데이터
    const districtsByCity = {
        "서울시": ["마포구"],
        "경기도": ["성남시 분당구"],
        "인천시": ["남동구"],
        "부산시": ["해운대구"]
    };

    if (citySelect && distSelect) {
        citySelect.addEventListener("change", () => {
            const city = citySelect.value;
            distSelect.innerHTML = `<option value="">-- 구/군 선택 --</option>`;

            if (city && districtsByCity[city]) {
                districtsByCity[city].forEach(d => {
                    const opt = document.createElement("option");
                    opt.value = d;
                    opt.textContent = d;
                    distSelect.appendChild(opt);
                });
                // 구/군이 1개밖에 없으면 자동 선택
                if (districtsByCity[city].length === 1) {
                    distSelect.value = districtsByCity[city][0];
                }
            }

            // 시/도 변경에 따른 보호소 목록 갱신
            renderAreaShelters(city, distSelect.value);
        });

        distSelect.addEventListener("change", () => {
            renderAreaShelters(citySelect.value, distSelect.value);
        });
    }

    // 3) 전국 지도 핀 클릭 바인딩
    const mapPins = document.querySelectorAll(".select-map-pin");
    const mapShelterName = document.getElementById("map-shelter-name-display");
    const mapShelterAddr = document.getElementById("map-shelter-address-display");

    mapPins.forEach(pin => {
        pin.addEventListener("click", () => {
            mapPins.forEach(p => p.classList.remove("active"));
            pin.classList.add("active");

            const shelterName = pin.getAttribute("data-shelter");
            const shelterInfo = SHELTERS_DATA.find(s => s.name === shelterName);

            if (shelterInfo) {
                if (mapShelterName) mapShelterName.textContent = shelterInfo.name;
                if (mapShelterAddr) mapShelterAddr.textContent = shelterInfo.address;
                selectShelterAndRenderDogs(shelterInfo.name);
            }
        });
    });
}

// 14. 실물 앨범 주문 페이지 초기화 및 이벤트 리스너 바인딩
function initAlbumOrderPage() {
    const buyDogName = document.getElementById("album-buy-dog-name");
    const summaryProductName = document.getElementById("summary-product-name");
    const coverRadios = document.querySelectorAll('input[name="album-cover-type"]');
    const shippingSelect = document.getElementById("album-shipping-msg");
    const shippingCustom = document.getElementById("album-shipping-msg-custom");
    const searchZipBtn = document.getElementById("btn-search-zip");

    if (buyDogName) buyDogName.textContent = currentDog.name;
    const buyDogThumb = document.querySelector("#album-buy-view .target-thumb");
    if (buyDogThumb) {
        buyDogThumb.innerHTML = `<img src="${currentDog.image}" alt="${currentDog.name}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">`;
    }
    if (summaryProductName) summaryProductName.textContent = `${currentDog.name}의 성장 앨범 포토북`;

    // 초기 가격 계산 및 사양 텍스트 세팅
    const activeRadio = document.querySelector('input[name="album-cover-type"]:checked');
    if (activeRadio) {
        updateAlbumSummaryPrice(activeRadio.value);
    }

    // 커버 사양 변경 이벤트
    coverRadios.forEach(radio => {
        radio.addEventListener("change", () => {
            updateAlbumSummaryPrice(radio.value);
        });
    });

    // 배송 요청사항 커스텀 인풋 토글
    if (shippingSelect && shippingCustom) {
        shippingSelect.addEventListener("change", () => {
            if (shippingSelect.value === "direct") {
                shippingCustom.classList.remove("hidden");
                shippingCustom.required = true;
            } else {
                shippingCustom.classList.add("hidden");
                shippingCustom.required = false;
            }
        });
    }

    // 우편번호 검색 시뮬레이션
    if (searchZipBtn) {
        searchZipBtn.addEventListener("click", () => {
            showToast("🔍 행정 구역 우편번호 목록을 조회하는 중...");
            setTimeout(() => {
                const randomZip = "0" + Math.floor(Math.random() * 8000 + 1000);
                const zipInput = document.getElementById("album-zipcode");
                if (zipInput) zipInput.value = randomZip;
                showToast(`✓ 가상 우편번호(${randomZip})가 정상 입력되었습니다.`);
            }, 600);
        });
    }
}

function updateAlbumSummaryPrice(type) {
    const summaryCoverType = document.getElementById("summary-cover-type");
    const summaryBasePrice = document.getElementById("summary-base-price");
    const summaryTotalPrice = document.getElementById("summary-total-price");

    if (type === "hard") {
        if (summaryCoverType) summaryCoverType.textContent = "프리미엄 하드커버";
        if (summaryBasePrice) summaryBasePrice.textContent = "₩ 25,000";
        if (summaryTotalPrice) summaryTotalPrice.textContent = "₩ 25,000";
    } else {
        if (summaryCoverType) summaryCoverType.textContent = "클래식 소프트북";
        if (summaryBasePrice) summaryBasePrice.textContent = "₩ 15,000";
        if (summaryTotalPrice) summaryTotalPrice.textContent = "₩ 15,000";
    }
}

// 15. 1인칭 산책 라이브 공통 진입 처리
function enterWalkLiveView() {
    if (!currentDog.status.walk) {
        showToast(`${currentDog.name}는(은) 지금 휴식 중입니다. 이전 녹화 영상을 송출합니다.`, 3000);
    } else {
        showToast(`${currentDog.name}의 실시간 1인칭 산책 라이브에 접속했습니다!`);
    }
    changeView("walk-live-view");
    simulateLiveChat();
}

// 16. 개월별 성장 변화 역사 이벤트 바인딩 및 렌더링
let currentGrowthView = "chart-weight"; // 기본 보기 상태 (chart-weight / chart-height / table)

function bindGrowthHistoryEvents() {
    const tabBtns = document.querySelectorAll(".history-tab-btn");
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            currentGrowthView = btn.getAttribute("data-view");
            renderGrowthHistory(currentDog);
        });
    });
}

function renderGrowthHistory(dog) {
    if (!dog || !dog.growthHistory) return;

    const chartPanel = document.getElementById("growth-chart-panel");
    const tablePanel = document.getElementById("growth-table-panel");
    const chartContainer = document.getElementById("growth-chart-container");
    const tableBody = document.getElementById("album-growth-history-body");

    if (!chartPanel || !tablePanel || !chartContainer || !tableBody) return;

    // 1. 테이블 렌더링 (항상 세팅)
    tableBody.innerHTML = dog.growthHistory.map(item => `
        <tr>
            <td><strong>${item.month}개월</strong></td>
            <td>${item.weight} kg</td>
            <td>${item.height} cm</td>
            <td class="note-td" title="${item.note}">${item.note}</td>
        </tr>
    `).join('');

    // 2. 현재 탭 뷰 활성화 설정
    if (currentGrowthView === "table") {
        chartPanel.classList.add("hidden");
        tablePanel.classList.remove("hidden");
        chartPanel.classList.remove("active");
        tablePanel.classList.add("active");
    } else {
        chartPanel.classList.remove("hidden");
        tablePanel.classList.add("hidden");
        chartPanel.classList.add("active");
        tablePanel.classList.remove("active");

        // 3. 차트 바 생성 (weight 또는 height)
        const isWeight = currentGrowthView === "chart-weight";
        const metric = isWeight ? "weight" : "height";
        const unit = isWeight ? "kg" : "cm";

        // 최댓값 찾기 (높이 비율 환산용)
        const values = dog.growthHistory.map(item => item[metric]);
        const maxVal = Math.max(...values, 1);

        chartContainer.innerHTML = dog.growthHistory.map(item => {
            const val = item[metric];
            const percent = (val / maxVal) * 100;
            return `
                <div class="chart-bar-container" title="${item.month}개월: ${val}${unit} (${item.note})">
                    <span class="chart-bar-val">${val}${unit}</span>
                    <div class="chart-bar-outer">
                        <div class="chart-bar-inner" style="height: ${percent}%;"></div>
                    </div>
                    <span class="chart-bar-label">${item.month}개월</span>
                </div>
            `;
        }).join('');
    }
}

