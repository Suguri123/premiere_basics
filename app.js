// Premiere AI Basics Interactive Javascript

// 1. Data Definitions
const courseData = {
    ch1: [
        { id: "1-1", title: "프로젝트의 저장 위치와 이름 지정", duration: "5분", desc: "Creative Cloud에서 설치 → 새 프로젝트 → 위치 / 찾아보기  → 만들기", caption: "프로젝트 = 작업 파일, 시퀀스 = 편집 도화지", resource: "", image: "project_save_path.png" },
        { id: "1-2", title: "패널 위치 및 변경", duration: "5분", desc: "소스 모니터·프로그램 모니터·프로젝트 패널·타임라인 패널 역할 소개, 작업 영역을 '편집(Editing)'으로 전환, 패널 크기 조절·초기화", caption: "화면이 꼬이면 → 작업 영역 재설정", resource: "", image: "panel_layout_reset.png" },
        { id: "1-3", title: "키보드 단축키 편집", duration: "5분", desc: "편집(Edit) → 키보드 단축키(Keyboard Shortcuts) 실행, 원하는 단축키 기능 사용자 정의 및 프리셋 저장 방법", caption: "자주 쓰는 기능은 편리한 단축키로 설정", resource: "", image: "keyboard_shortcuts.png" },
        { id: "1-4", title: "타임라인 구조 파헤치기", duration: "5분", desc: "트랙 헤드·시퀀스 헤드·시간 눈금자 영역 구분, V트랙/A트랙 개념, 스케일 슬라이더로 확대·축소", caption: "+/- 키로 타임라인 확대·축소", resource: "실습 소스팩 A" },
        { id: "1-5", title: "선택 도구와 자르기 도구로 컷 편집", duration: "6분", desc: "선택 도구(V)로 클립 이동·트리밍, 자르기 도구(C)로 컷 분할, 잔물결 삭제로 빈 공간 없애기", caption: "V=선택, C=자르기, 지우고 나면 잔물결 삭제", resource: "실습 소스팩 A" },
        { id: "1-6", title: "루미트리 기본 교정으로 색 살리기", duration: "5분", desc: "Lumetri Color → 기본 교정에서 노출·대비·색온도 조정, 전/후 비교 토글", caption: "노출 → 대비 → 색온도 순서로", resource: "실습 소스팩 C" },
        { id: "1-7", title: "루미트리 프리셋으로 영화 색감 만들기", duration: "4분", desc: "크리에이티브 탭의 Look 프리셋 적용, 강도 슬라이더 조절, 프리셋 3종 비교", caption: "프리셋은 100%가 아니라 50~70%만", resource: "실습 소스팩 C" },
        { id: "1-8", title: "Film Impact 전환 효과 적용하기", duration: "5분", desc: "Film Impact 무료 체험판 설치, 효과 패널에서 검색, 클립 사이에 드래그 적용, 지속 시간 조절", caption: "전환은 장면이 바뀔 때만, 남발 금지", resource: "실습 소스팩 A" },
        { id: "1-9", title: "문자 도구로 자막 넣고 30초 영상 완성", duration: "6분", desc: "문자 도구(T)로 제목 자막 입력, 속성 패널에서 글꼴·크기·색·위치 지정, 1차시 배운 것 총동원해 30초 영상 완성", caption: "T키 → 화면 클릭 → 바로 입력", resource: "완성 프로젝트 A" }
    ],
    ch2: [
        { id: "2-1", title: "오디오 트랙과 볼륨 조절 기본기", duration: "5분", desc: "A트랙 구조, 클립 볼륨 선 드래그로 조절, 오디오 미터로 적정 레벨(-6dB 내외) 확인", caption: "내레이션이 주인공, 음악은 -20dB 아래로", resource: "실습 소스팩 B" },
        { id: "2-2", title: "필수 사운드 패널로 소리 자동 정리", duration: "5분", desc: "Essential Sound 패널에서 클립을 '대화'/'음악'으로 지정, 자동 볼륨 매칭, 덕킹(음악 자동 줄이기)", caption: "대화 지정 → 소리 향상 체크 → 끝", resource: "실습 소스팩 B" },
        { id: "2-3", title: "받아쓰기 기능으로 음성을 텍스트로", duration: "4분", desc: "텍스트 패널 → 받아쓰기 실행 → 언어(한국어) 지정 → 변환된 대본 확인·오타 수정", caption: "받아쓰기 = 모든 AI 편집의 시작점", resource: "실습 소스팩 B" },
        { id: "2-4", title: "텍스트 지우면 영상이 잘린다? AI 컷 편집", duration: "6분", desc: "받아쓰기 대본에서 불필요한 문장·간투사 선택 → 삭제 → 타임라인에 자동 반영, 일시정지 구간 한 번에 제거", caption: "말버릇 '어…' 검색해서 일괄 삭제", resource: "실습 소스팩 B" },
        { id: "2-5", title: "대본으로 자막 자동 생성하기", duration: "5분", desc: "캡션 탭 → 대본으로 캡션 만들기 → 자동 생성된 자막 확인, 틀린 부분 문자 도구로 수정, 캡션 분할로 호흡 다듬기", caption: "긴 자막은 캡션 분할로 두 줄 → 한 줄", resource: "실습 소스팩 B" },
        { id: "2-6", title: "자막 스타일 통일 + 번역 자막 만들기", duration: "5분", desc: "속성 패널에서 자막 스타일(글꼴·테두리·배경) 지정 → 트랙 스타일로 전체 적용, 자동 번역으로 영어 자막 트랙 생성", caption: "스타일은 한 번만 만들고 전체 적용", resource: "실습 소스팩 B" },
        { id: "2-7", title: "Firefly 프롬프트 작성법", duration: "5분", desc: "firefly.adobe.com 접속, 프롬프트 공식(주제+스타일+분위기+구도) 소개, 같은 주제로 프롬프트를 바꿔가며 결과 비교", caption: "주제 + 스타일 + 분위기 + 구도", resource: "프롬프트 모음집" },
        { id: "2-8", title: "Firefly 이미지를 프리미어로 가져와 활용", duration: "5분", desc: "생성 이미지 다운로드 → 프리미어로 가져오기 → 인트로 배경으로 배치 → 위치·비율 키프레임으로 살짝 줌인 효과(켄 번즈)", caption: "정지 이미지도 줌인 하나면 영상이 된다", resource: "완성 프로젝트 B" }
    ],
    ch3: [
        { id: "3-1", title: "키프레임 첫걸음 — 텍스트 움직이기", duration: "5분", desc: "위치·불투명도 키프레임 개념, 텍스트가 아래서 위로 떠오르며 나타나는 애니메이션 제작", caption: "키프레임 = 시작점과 끝점만 찍으면 사이는 자동", resource: "실습 소스팩 C" },
        { id: "3-2", title: "마스크 개념과 기본 도형 마스크", duration: "5분", desc: "불투명도 항목의 원형·사각형·펜 마스크, 마스크 페더로 경계 부드럽게, 반전 활용", caption: "마스크 = 보여줄 곳만 오려내는 가위", resource: "실습 소스팩 C" },
        { id: "3-3", title: "피사체 뒤로 텍스트 숨기기", duration: "6분", desc: "텍스트 위 트랙에 영상 복제 → 인물만 펜 마스크 → 마스크 패스 키프레임을 10프레임 단위로 수정 → 텍스트가 인물 뒤로 지나가는 효과 완성", caption: "10프레임마다 마스크 수정, 어색한 프레임만 재수정", resource: "실습 소스팩 C" },
        { id: "3-4", title: "모션그래픽 템플릿(.mogrt) 사용법", duration: "5분", desc: "그래픽 템플릿 패널 열기, 타이틀 템플릿 드래그 적용, 텍스트·색상 커스터마이징", caption: "템플릿은 디자인 외주, 수정은 내 맘대로", resource: "내장 템플릿" },
        { id: "3-5", title: "Adobe Stock 무료 템플릿 가져오기", duration: "4분", desc: "라이브러리 패널에서 Adobe Stock 검색, 무료 필터, 라이브러리로 저장 → 프로젝트에 적용", caption: "무료 필터 체크 잊지 말기", resource: "Adobe Stock" },
        { id: "3-6", title: "Firefly로 AI 비디오 만들기 — 장면 계획", duration: "5분", desc: "만들고 싶은 장면을 글로 정리(피사체·움직임·카메라·분위기) → 텍스트→비디오 생성 → 결과 비교·재생성", caption: "움직임과 카메라 워크를 꼭 프롬프트에", resource: "장면 계획서" },
        { id: "3-7", title: "이미지→비디오 생성과 클립 다듬기", duration: "5분", desc: "Firefly 이미지를 비디오로 변환, 생성 클립을 프리미어에서 속도·색보정으로 다듬기", caption: "AI 클립도 색보정하면 티가 안 난다", resource: "Firefly 리소스" },
        { id: "3-8", title: "실습예제 — 시네마틱 인트로 15초 완성", duration: "6분", desc: "Firefly 배경 클립 + Stock 타이틀 템플릿 + 키프레임 텍스트 등장 + 루미트리 색보정 → 15초 인트로 완성, 전체 조립 과정 압축 시연", caption: "배경(AI) + 타이틀(템플릿) + 등장(키프레임) + 색감(루미트리)", resource: "완성 프로젝트 C" }
    ],
    ch4: [
        { id: "4-1", title: "외부 템플릿 사이트와 설치 방법", duration: "5분", desc: "무료 템플릿 사이트 소개(Mixkit 등), .mogrt 파일 다운로드 → 그래픽 템플릿 패널에 설치", caption: "설치는 그래픽 템플릿 패널 + 버튼", resource: "외부 템플릿" },
        { id: "4-2", title: "템플릿 라이선스, 이것만은 확인", duration: "4분", desc: "개인/상업용 구분, 출처 표기 조건, 유튜브 수익화 시 주의점 — 사례 중심 설명", caption: "상업적 이용 가능 여부 먼저 확인", resource: "라이선스 확인 카드" },
        { id: "4-3", title: "생성형 확장으로 짧은 클립 늘리기", duration: "5분", desc: "타임라인에서 생성형 확장 도구 선택 → 클립 끝을 드래그 → AI가 이어 그린 프레임 확인", caption: "부족한 1~2초는 AI에게", resource: "실습 소스팩 A" },
        { id: "4-4", title: "생성형 확장이 잘 되는 장면 vs 안 되는 장면", duration: "4분", desc: "배경 위주·완만한 움직임(잘 됨) vs 빠른 동작·복잡한 손동작(한계) 비교 실험", caption: "풍경 O, 격한 움직임 X", resource: "실습 소스팩 C" },
        { id: "4-5", title: "숏폼 시퀀스 설정과 기획", duration: "5분", desc: "1080×1920(9:16) 시퀀스 생성, 숏폼 3초 훅의 중요성, 15~30초 구성안 짜기", caption: "첫 3초에 결과물부터 보여주기", resource: "기획 템플릿" },
        { id: "4-6", title: "숏폼 편집 — 컷·자막·음악 몰아치기", duration: "6분", desc: "빠른 컷 편집 리듬, AI 자동 자막을 숏폼 스타일(큰 글씨·중앙 하단)로 변환, 비트에 컷 맞추기", caption: "숏폼 자막은 크게, 짧게, 중앙에", resource: "완성 프로젝트 D" },
        { id: "4-7", title: "숏폼 내보내기와 업로드 규격", duration: "4분", desc: "내보내기 설정(H.264, 유튜브 1080p Full HD 프리셋), 쇼츠/릴스 규격·용량, 업로드 시 제목·해시태그 요령", caption: "쇼츠는 60초 이내, #shorts", resource: "규격 비교표" },
        { id: "4-8", title: "결과물 셀프 점검과 다음 단계", duration: "5분", desc: "자주 하는 실수 체크리스트(자막 가독성·오디오 밸런스·과한 전환) 셀프 점검, 수강생 결과물 피드백 예시, 심화 학습 로드맵(색보정·합성) 안내", caption: "업로드 전 10초 체크리스트", resource: "셀프 점검표" }
    ]
};

const shortcutsData = [
    { category: "영상 컷 편집", key: "V", name: "클립 선택 도구", desc: "클립을 선택하고 이동하거나 간단하게 트리밍합니다." },
    { category: "영상 컷 편집", key: "Ctrl + K", name: "인디케이터 위치에서 자르기", desc: "재생 헤드 위치에서 클립을 바로 분할합니다." },
    { category: "영상 컷 편집", key: "C", name: "자르기 도구", desc: "선택한 클립을 인디케이터 위치에서 분할합니다." },
    { category: "영상 컷 편집", key: "Q / W", name: "이전·이후 잔물결 컷", desc: "인디케이터 기준 앞(Q) 또는 뒤(W) 부분을 자르고 당겨옵니다." },
    { category: "영상 컷 편집", key: "Shift + Delete", name: "잔물결 삭제", desc: "빈 공간을 남기지 않고 선택한 클립을 삭제합니다." },
    { category: "영상 컷 편집", key: "Delete / Backspace", name: "클립 삭제", desc: "선택한 영상이나 오디오 클립을 삭제합니다." },
    { category: "영상 컷 편집", key: "Ctrl + D", name: "기본 전환 적용", desc: "선택한 클립 경계에 기본 전환 효과를 적용합니다." },
    { category: "영상 컷 편집", key: "T", name: "문자 도구", desc: "프로그램 모니터를 클릭해 화면 자막을 생성합니다." },
    { category: "재생·정지", key: "Space / L", name: "재생·2배속 재생", desc: "스페이스바로 재생하고 L키로 2배속 재생합니다." },
    { category: "재생·정지", key: "J", name: "역재생", desc: "J키를 눌러 역방향으로 재생합니다. 반복 입력 시 속도가 빨라집니다." },
    { category: "재생·정지", key: "K / Space", name: "정지", desc: "K키 또는 스페이스바로 재생을 멈춥니다." },
    { category: "타임라인 보기", key: "← / → / ↑ / ↓", name: "프레임·클립 이동", desc: "좌우 화살표로 앞뒤로 이동하고 위아래 화살표로 클립을 이동합니다." },
    { category: "타임라인 보기", key: "+ / -", name: "타임라인 확대·축소", desc: "타임라인을 확대하거나 축소합니다." },
    { category: "타임라인 보기", key: "Alt + 마우스 휠", name: "타임라인 가로 스크롤", desc: "Alt를 누른 상태에서 마우스 휠로 타임라인을 이동합니다." },
    { category: "타임라인 보기", key: "트랙 헤더 더블 클릭", name: "트랙 높이 확대", desc: "트랙 헤더를 더블 클릭해 트랙 높이를 확대하고 키프레임을 확인합니다." },
    { category: "타임라인 보기", key: "Shift + 드래그", name: "스냅 기능 적용", desc: "Shift를 누른 상태로 인디케이터를 이동해 스냅 기능을 적용합니다." },
    { category: "타임라인 보기", key: "H", name: "손 도구", desc: "손 도구를 선택한 뒤 타임라인을 좌우로 드래그합니다." },
    { category: "타임라인 보기", key: "W", name: "클립 전체 보기", desc: "타임라인 패널에 클립이 모두 보이도록 맞춥니다." },
    { category: "클립 복사", key: "Alt + 드래그", name: "클립 복사", desc: "Alt를 누른 상태에서 클립을 드래그해 복사합니다." },
    { category: "패널·모니터 보기", key: "~", name: "작업 패널 크게 보기", desc: "마우스를 패널 위에 두고 물결표 키를 눌러 패널을 크게 봅니다." },
    { category: "패널·모니터 보기", key: "마우스 휠", name: "모니터 확대·축소", desc: "소스 모니터나 프로그램 모니터 위에서 마우스 휠로 확대·축소합니다." },
    { category: "패널·모니터 보기", key: "클릭 + 드래그", name: "모니터 화면 이동", desc: "소스 모니터나 프로그램 모니터 화면을 드래그해 시점을 이동합니다." },
    { category: "프로젝트 관리", key: "Ctrl + S", name: "프로젝트 저장", desc: "작업 결과를 프로젝트 파일에 저장합니다." },
    { category: "프로젝트 관리", key: "Ctrl + M", name: "내보내기", desc: "완성 영상을 비디오 파일로 인코딩해 출력합니다." }
];

document.addEventListener("DOMContentLoaded", () => {
    // Theme Switcher Logic
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const currentTheme = localStorage.getItem("pr_basics_theme") || "light";
    
    if (currentTheme === "dark") {
        document.body.classList.add("dark-theme");
        if (themeToggleBtn) themeToggleBtn.innerText = "☀️ 라이트 모드";
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            let theme = "light";
            if (document.body.classList.contains("dark-theme")) {
                theme = "dark";
                themeToggleBtn.innerText = "☀️ 라이트 모드";
            } else {
                themeToggleBtn.innerText = "🌙 다크 모드";
            }
            localStorage.setItem("pr_basics_theme", theme);
        });
    }

    // Sidebar Section Switching Logic
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".app-section");
    
    window.switchSection = function(targetId) {
        sections.forEach(sec => sec.classList.remove("active"));
        navItems.forEach(item => item.classList.remove("active"));
        
        const targetSection = document.getElementById(targetId);
        if (targetSection) targetSection.classList.add("active");
        
        let navLookupId = targetId;
        if (targetId.startsWith('ch')) {
            navLookupId = 'ch1';
        }
        const targetNavItem = document.querySelector(`.nav-item[data-target="${navLookupId}"]`);
        if (targetNavItem) targetNavItem.classList.add("active");
        
        // Scroll to top of content area
        const contentArea = document.querySelector(".content-area");
        if (contentArea) contentArea.scrollTop = 0;
        
        // Close sidebar on mobile
        document.body.classList.remove("sidebar-open");
    };

    window.switchChapter = function(chapterId) {
        switchSection(chapterId);
    };
    
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetId = item.getAttribute("data-target");
            switchSection(targetId);
        });
    });
    
    // Mobile Sidebar Toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            document.body.classList.toggle("sidebar-open");
        });
    }
    
    // Click outside sidebar to close on mobile
    document.addEventListener("click", (e) => {
        if (document.body.classList.contains("sidebar-open")) {
            const sidebar = document.querySelector(".sidebar");
            if (sidebar && !sidebar.contains(e.target) && e.target !== mobileMenuBtn) {
                document.body.classList.remove("sidebar-open");
            }
        }
    });

    initCurriculum();
    initTabs();
    initPromptBuilder();
    initStoryboardGenerator();
    initShortcuts();
    initDownloads();
    initQna();
});

// 3. Render Curriculum
function initCurriculum() {
    Object.keys(courseData).forEach(chapterKey => {
        const container = document.getElementById(`${chapterKey}-clips`);
        if (!container) return;
        
        container.innerHTML = "";
        
        courseData[chapterKey].forEach(clip => {
            const card = document.createElement("div");
            card.className = "clip-card glass-panel";
            
            const imageHtml = clip.image ? `
                <div class="clip-image-box" style="margin-top: 12px; margin-bottom: 12px; text-align: center;">
                    <img src="${clip.image}" onclick="openLightbox('${clip.image}')" style="max-width: 100%; border-radius: var(--radius-sm); border: 1.5px solid var(--border-color); display: block; margin: 0 auto;" alt="학습 스크린샷" />
                </div>
            ` : "";

            card.innerHTML = `
                <div class="clip-card-header">
                    <div class="clip-label-area">
                        <span class="clip-number">클립 ${clip.id}</span>
                        <h4 class="clip-title">${clip.title}</h4>
                    </div>
                </div>
                <p class="clip-desc">${clip.desc}</p>
                ${imageHtml}
                <div class="clip-caption-box">
                    ${clip.caption}
                </div>
                <div class="clip-footer">
                    <span class="clip-meta-resource">📦 리소스: ${clip.resource}</span>
                </div>
            `;
            container.appendChild(card);
        });
    });
}

// 4. Tab logic
function initTabs() {
    const tabs = document.querySelectorAll(".tab-btn");
    const panels = document.querySelectorAll(".tab-panel");
    
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));
            
            tab.classList.add("active");
            const targetPanel = document.getElementById(tab.dataset.tab);
            if (targetPanel) targetPanel.classList.add("active");
        });
    });
}

// 5. AI Prompt Builder
function initPromptBuilder() {
    const subjectSelect = document.getElementById("prompt-subject");
    const styleChips = document.querySelectorAll("#prompt-style-chips .chip");
    const cameraChips = document.querySelectorAll("#prompt-camera-chips .chip");
    const moodChips = document.querySelectorAll("#prompt-mood-chips .chip");
    const resultArea = document.getElementById("prompt-result");
    const copyBtn = document.getElementById("copy-prompt-btn");
    
    let activeStyle = "영화 스틸컷 (시네마틱 아나모픽 렌즈)";
    let activeCamera = "카메라가 천천히 전진하는 피사체 밀착 트래킹 슬로우 줌인";
    let activeMood = "따뜻하고 감성적인 주황빛 햇살이 내리쬐는 웜톤";

    const updatePrompt = () => {
        const subject = subjectSelect.value;
        const prompt = `${subject}, ${activeStyle}, ${activeCamera}, ${activeMood}, 16:9 비율`;
        resultArea.value = prompt;
    };

    // Style Chips Click
    styleChips.forEach(chip => {
        chip.addEventListener("click", () => {
            styleChips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            activeStyle = chip.dataset.val;
            updatePrompt();
        });
    });

    // Camera Chips Click
    cameraChips.forEach(chip => {
        chip.addEventListener("click", () => {
            cameraChips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            activeCamera = chip.dataset.val;
            updatePrompt();
        });
    });

    // Mood Chips Click
    moodChips.forEach(chip => {
        chip.addEventListener("click", () => {
            moodChips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            activeMood = chip.dataset.val;
            updatePrompt();
        });
    });

    // Subject select change
    subjectSelect.addEventListener("change", updatePrompt);

    // Copy to clipboard
    copyBtn.addEventListener("click", () => {
        resultArea.select();
        navigator.clipboard.writeText(resultArea.value)
            .then(() => {
                const toast = document.getElementById("copy-toast");
                toast.classList.add("show");
                setTimeout(() => toast.classList.remove("show"), 2000);
            })
            .catch(err => {
                alert("복사 실패. 브라우저 설정을 확인해 주세요.");
            });
    });
}

// 6. Shortcuts Search & Render
function initShortcuts() {
    const container = document.getElementById("shortcuts-container");
    const searchInput = document.getElementById("shortcut-search-input");
    
    const renderShortcuts = (filter = "") => {
        container.innerHTML = "";
        const filtered = shortcutsData.filter(s => 
            s.key.toLowerCase().includes(filter.toLowerCase()) || 
            s.name.toLowerCase().includes(filter.toLowerCase()) || 
            s.desc.toLowerCase().includes(filter.toLowerCase())
        );

        if (filtered.length === 0) {
            container.innerHTML = `<div class="text-center" style="grid-column: 1/-1; padding: 40px; color: var(--text-muted);">검색 결과가 없습니다.</div>`;
            return;
        }

        const categories = [...new Set(filtered.map(s => s.category))];
        categories.forEach(category => {
            const heading = document.createElement("h3");
            heading.className = "shortcut-category";
            heading.textContent = category;
            container.appendChild(heading);

            filtered.filter(s => s.category === category).forEach(s => {
                const card = document.createElement("div");
                card.className = "shortcut-card glass-panel";
                card.innerHTML = `
                    <div class="shortcut-info">
                        <h4>${s.name}</h4>
                        <p>${s.desc}</p>
                    </div>
                    <kbd>${s.key}</kbd>
                `;
                container.appendChild(card);
            });
        });
    };

    searchInput.addEventListener("input", (e) => {
        renderShortcuts(e.target.value);
    });

    renderShortcuts();
}



// 8. Download Mock Action
function initDownloads() {
    const buttons = document.querySelectorAll(".download-btn-action");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const packName = btn.getAttribute("data-val") || btn.dataset.pack;
            showToast(`${packName} 다운로드가 완료되었습니다!`);
        });
    });
}

function showToast(message) {
    const toast = document.getElementById("download-toast");
    toast.innerText = message;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

// 9. AI Q&A Console Logic (Gemini API Integration)
const PRESET_ANSWERS = {
    "프리미어에서 단축키 C와 V의 차이가 뭐야?": `✂️ **자르기 도구 (C)**: 타임라인에서 비디오나 오디오 클립을 자르는 데 사용됩니다.

🖱️ **선택 도구 (V)**: 클립을 선택, 이동하거나 길이를 늘리고 줄이는 등 기본 마우스 역할을 합니다.

💡 **꿀팁**: \`C\`로 자른 뒤 다시 선택하거나 이동하려면 반드시 \`V\`를 눌러 선택 도구로 돌아오셔야 합니다!`,

    "받아쓰기 대본을 활용한 AI 컷 편집이 안 보여요.": `대본을 통한 AI 컷 편집 방법은 다음과 같습니다:

1. 상단 메뉴 \`Window (윈도우)\` -> \`Text (텍스트)\` 패널을 엽니다.
2. **Transcript (받아쓰기)** 탭에서 받아쓰기(Transcribe)를 실행합니다.
3. 분석된 텍스트 중 불필요한 단어나 말버릇(예: '어...', '음...')을 선택합니다.
4. 키보드의 \`Backspace\` 또는 \`Delete\` 키를 누르면, **텍스트와 연동된 타임라인의 영상이 자동으로 삭제**되며 컷 편집이 진행됩니다!`,

    "루미트리 색보정을 적용할 때 가장 좋은 순서는?": `🎨 **루미트리 기본 색보정 추천 순서**:

1. **노출 (Exposure)**: 화면 전체의 밝기를 먼저 맞춥니다.
2. **대비 (Contrast)**: 어두운 곳과 밝은 곳의 밝기 차이를 조절하여 입체감을 줍니다.
3. **색온도 (Temperature)**: 실내등이나 실외 환경에 맞춰 캘빈값을 자연스럽게 조절합니다.
4. **크리에이티브 (Creative) 프리셋**: 필요 시 전체 톤앤매너 프리셋을 50~70% 강도로 입힙니다.`,

    "유튜브 쇼츠용 영상으로 화면 비율(9:16)을 맞추려면 어떻게 세팅해야 해?": `📱 **유튜브 쇼츠(9:16) 시퀀스 설정 방법**:

1. 상단 메뉴 \`Sequence (시퀀스)\` -> \`Sequence Settings (시퀀스 설정)\`으로 들어갑니다.
2. **Editing Mode**를 \`Custom\`으로 변경합니다.
3. **Frame Size**를 가로 \`1080\`, 세로 \`1920\` (9:16 비율)로 입력합니다.
4. 확인을 누르면 세로형 시퀀스로 변경됩니다!`,

    "오디오 볼륨 조절할 때 적절한 데시벨(dB) 수준은?": `🔊 **사운드 믹싱 데시벨(dB) 기준 가이드**:

* **주요 목소리 (내레이션/스피치)**: \`-6dB\`에서 \`-12dB\` 사이를 넘나들도록 볼륨을 조정합니다. (\`0dB\`를 넘어가면 소리가 깨집니다)
* **배경음악 (BGM)**: 목소리가 있을 때는 \`-20dB\`에서 \`-25dB\` 이하로 낮춰야 목소리가 묻히지 않습니다.
* **효과음 (SFX)**: 순간적인 소리이므로 보통 \`-10dB\`에서 \`-15dB\` 사이가 무난합니다.`,

    "Adobe Firefly에서 비디오 만들 때 쓰는 꿀팁 알려줘.": `🪄 **Adobe Firefly 비디오 생성 꿀팁**:

1. **카메라 무브먼트 명시**: 프롬프트 뒤에 '슬로우 줌인(Slow zoom-in)', '드론 뷰(Drone shot)'와 같이 카메라 연출을 지정하세요.
2. **분위기 & 라이팅 지정**: '따뜻한 골든 아워 라이트(Golden hour lighting)', '신비로운 안개(Mysterious fog)' 등을 포함하면 훨씬 고품질 비디오가 완성됩니다.
3. **16:9 화면 비율 기재**: 프롬프트 마지막에 비율을 미리 적어두는 것이 출력물 조립 시 편리합니다.`
};

let chatHistory = [];

window.toggleApiPanel = function() {
    const apiBody = document.getElementById("api-config-body");
    const toggleIcon = document.getElementById("api-toggle-icon");
    if (apiBody.style.display === "none" || !apiBody.style.display) {
        apiBody.style.display = "block";
        toggleIcon.innerText = "▲";
    } else {
        apiBody.style.display = "none";
        toggleIcon.innerText = "▼";
    }
};

window.saveApiKey = function() {
    const keyInput = document.getElementById("gemini-api-key-input");
    const apiKey = keyInput.value.trim();
    if (!apiKey) {
        alert("API 키를 입력해 주세요.");
        return;
    }
    localStorage.setItem("gemini_api_key", apiKey);
    updateApiStatus();
    alert("Gemini API 키가 저장되었습니다!");
    toggleApiPanel();
};

window.deleteApiKey = function() {
    localStorage.removeItem("gemini_api_key");
    document.getElementById("gemini-api-key-input").value = "";
    updateApiStatus();
    alert("Gemini API 키가 삭제되었습니다.");
};

function updateApiStatus() {
    const apiKey = localStorage.getItem("gemini_api_key");
    const statusBadge = document.getElementById("api-status-badge");
    const modeDesc = document.getElementById("chat-mode-desc");
    const keyInput = document.getElementById("gemini-api-key-input");

    if (apiKey) {
        statusBadge.innerText = "연동 완료 (Gemini Live)";
        statusBadge.style.background = "#dcfce7";
        statusBadge.style.color = "#15803d";
        statusBadge.style.borderColor = "#bbf7d0";
        modeDesc.innerText = "Gemini Live 모드로 작동 중";
        keyInput.value = apiKey;
    } else {
        statusBadge.innerText = "미연동 (기본 응답 모드)";
        statusBadge.style.background = "#fee2e2";
        statusBadge.style.color = "#ef4444";
        statusBadge.style.borderColor = "#fecaca";
        modeDesc.innerText = "기본 데모 모드로 작동 중";
        keyInput.value = "";
    }
}

window.initQna = function() {
    updateApiStatus();
    
    // Set time for welcome message
    const now = new Date();
    const timeString = formatTime(now);
    const welcomeTime = document.getElementById("welcome-msg-time");
    if (welcomeTime) welcomeTime.innerText = timeString;

    // Load chat history from localStorage
    const savedChat = localStorage.getItem("pr_basics_chat_history");
    if (savedChat) {
        try {
            chatHistory = JSON.parse(savedChat);
            chatHistory.forEach(msg => {
                renderMessageBubble(msg.sender, msg.text, msg.time);
            });
        } catch (e) {
            console.error("Failed to load chat history", e);
            chatHistory = [];
        }
    }
};

window.askQuickQuestion = function(questionText) {
    const textarea = document.getElementById("chat-input-textarea");
    textarea.value = questionText;
    sendChatMessage();
};

window.handleChatInputKeydown = function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendChatMessage();
    }
};

window.clearChatHistory = function() {
    if (confirm("대화 내역을 모두 삭제하시겠습니까?")) {
        chatHistory = [];
        localStorage.removeItem("pr_basics_chat_history");
        
        // Remove all except the welcome message
        const container = document.getElementById("chat-messages");
        const welcomeMsg = container.firstElementChild;
        container.innerHTML = "";
        if (welcomeMsg) container.appendChild(welcomeMsg);
    }
};

window.sendChatMessage = async function() {
    const textarea = document.getElementById("chat-input-textarea");
    const text = textarea.value.trim();
    if (!text) return;

    // 1. Clear input
    textarea.value = "";
    textarea.style.height = "auto";

    // 2. Add user message
    const now = new Date();
    const timeStr = formatTime(now);
    
    chatHistory.push({ sender: 'user', text: text, time: timeStr });
    saveChatHistory();
    renderMessageBubble('user', text, timeStr);

    // 3. Add typing indicator
    const typingIndicator = showTypingIndicator();

    try {
        const apiKey = localStorage.getItem("gemini_api_key");
        let replyText = "";

        if (apiKey) {
            // Live Gemini API call
            replyText = await callGeminiApi(apiKey, text);
        } else {
            // Fallback mock responses
            await new Promise(resolve => setTimeout(resolve, 800)); // natural typing delay
            if (PRESET_ANSWERS[text]) {
                replyText = PRESET_ANSWERS[text];
            } else {
                replyText = `**[알림: 데모 모드]**\n현재 API 키가 설정되어 있지 않아 사전 정의되지 않은 질문에는 답변할 수 없습니다.\n\n**입력하신 질문**: "${text}"\n\n상단의 **🔑 Gemini API 키 설정** 메뉴를 열어 API 키를 입력해 주시면 Gemini AI의 생생하고 똑똑한 실시간 답변을 받아보실 수 있습니다!`;
            }
        }

        // Remove typing indicator and render AI response
        typingIndicator.remove();
        const aiTimeStr = formatTime(new Date());
        chatHistory.push({ sender: 'ai', text: replyText, time: aiTimeStr });
        saveChatHistory();
        renderMessageBubble('ai', replyText, aiTimeStr);

    } catch (error) {
        console.error(error);
        typingIndicator.remove();
        renderMessageBubble('ai', `⚠️ 답변을 가져오는 중 오류가 발생했습니다: ${error.message}`, formatTime(new Date()));
    }
};

async function callGeminiApi(apiKey, userMessageText) {
    const systemInstruction = "당신은 프리미어 프로(Adobe Premiere Pro) 기초 과정을 학습하는 학생들을 위한 친절하고 전문적인 AI 튜터입니다. 질문에 대해 쉽고 명확하게 한국어로 답변해 주세요. 프리미어와 무관한 질문에는 정중히 거절하고 프리미어 질문으로 유도해 주세요. 코드나 단축키가 포함된 경우 마크다운 형식으로 가독성 좋게 꾸며주세요.";
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    // Build the request contents array from conversation history (limit to last 10 messages for token usage and performance)
    const historyLimit = chatHistory.slice(-10);
    const contents = historyLimit.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
    }));

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contents: contents,
            systemInstruction: {
                parts: [{ text: systemInstruction }]
            }
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `HTTP error ${response.status}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "죄송합니다. 답변을 생성하지 못했습니다.";
}

function renderMessageBubble(sender, text, time) {
    const container = document.getElementById("chat-messages");
    if (!container) return;

    const msgDiv = document.createElement("div");
    msgDiv.className = `chat-msg ${sender === 'user' ? 'user-msg' : 'ai-msg'}`;

    const avatar = sender === 'user' ? '👤' : '🤖';
    const parsedText = formatMarkdown(text);

    msgDiv.innerHTML = `
        <div class="avatar">${avatar}</div>
        <div class="msg-bubble-wrapper">
            <div class="msg-bubble">${parsedText}</div>
            <span class="msg-time">${time}</span>
        </div>
    `;

    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
}

function showTypingIndicator() {
    const container = document.getElementById("chat-messages");
    const indicatorDiv = document.createElement("div");
    indicatorDiv.className = "chat-msg ai-msg";
    indicatorDiv.innerHTML = `
        <div class="avatar">🤖</div>
        <div class="msg-bubble-wrapper">
            <div class="msg-bubble" style="padding: 8px 16px;">
                <div class="typing-indicator">
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                </div>
            </div>
        </div>
    `;
    container.appendChild(indicatorDiv);
    container.scrollTop = container.scrollHeight;
    return indicatorDiv;
}

function formatTime(date) {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? '오후' : '오전';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    return `${ampm} ${String(hours).padStart(2, '0')}:${minutes}`;
}

function saveChatHistory() {
    localStorage.setItem("pr_basics_chat_history", JSON.stringify(chatHistory));
}

function formatMarkdown(text) {
    if (!text) return "";
    
    // Protect HTML tags
    let formatted = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // Code blocks `\`\`\`javascript ... \`\`\``
    formatted = formatted.replace(/```([\s\S]*?)```/g, (match, code) => {
        return `<pre style="background: var(--bg-page-deep); padding: 12px; border-radius: var(--radius-sm); font-family: monospace; overflow-x: auto; margin: 10px 0; border: 1.5px solid var(--border-color); font-size: 0.9rem; line-height: 1.4; color: var(--text-main);">${code.trim()}</pre>`;
    });

    // Inline code `code`
    formatted = formatted.replace(/`([^`]+)`/g, '<code style="background: var(--bg-page-deep); padding: 2px 6px; border-radius: 4px; font-family: monospace; border: 1px solid var(--border-color); color: var(--secondary); font-size: 0.95rem; font-weight: 700;">$1</code>');

    // Bold **text**
    formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong style="font-weight: 700; color: var(--primary);">$1</strong>');

    // Bullet points (simple starting with - or * followed by space)
    formatted = formatted.split('\n').map(line => {
        if (line.startsWith('* ') || line.startsWith('- ')) {
            return `<li style="margin-left: 16px; margin-top: 4px; margin-bottom: 4px;">${line.substring(2)}</li>`;
        }
        return line;
    }).join('\n');

    // Line breaks
    formatted = formatted.replace(/\n/g, '<br>');

    return formatted;
}

window.toggleSpecsPanel = function() {
    const panel = document.getElementById("specs-panel");
    const icon = document.getElementById("specs-toggle-icon");
    if (!panel || !icon) return;
    
    if (panel.style.display === "none" || !panel.style.display) {
        panel.style.display = "block";
        icon.innerText = "▲";
        icon.style.transform = "rotate(180deg)";
    } else {
        panel.style.display = "none";
        icon.innerText = "▼";
        icon.style.transform = "rotate(0deg)";
    }
};

window.openResolutionVisualizer = function() {
    const modal = document.getElementById("res-modal");
    if (!modal) return;
    modal.style.display = "flex";
    setTimeout(() => {
        modal.style.opacity = "1";
    }, 10);
};

window.closeResolutionVisualizer = function() {
    const modal = document.getElementById("res-modal");
    if (!modal) return;
    modal.style.opacity = "0";
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
};

window.toggleRealSizeOverlay = function() {
    const overlay = document.getElementById("real-size-overlay");
    if (!overlay) return;
    if (overlay.style.display === "none" || !overlay.style.display) {
        overlay.style.display = "block";
    } else {
        overlay.style.display = "none";
    }
};

function initStoryboardGenerator() {
    // Tab switching function
    window.switchBuilderTab = function(tabId) {
        const tabs = document.querySelectorAll(".builder-tabs .tab-btn");
        tabs.forEach(btn => {
            if (btn.getAttribute("data-tab") === tabId) {
                btn.classList.add("active");
                btn.style.color = "var(--secondary)";
            } else {
                btn.classList.remove("active");
                btn.style.color = "var(--text-muted)";
            }
        });

        const tabContents = document.querySelectorAll(".tab-content");
        tabContents.forEach(content => {
            if (content.id === `${tabId}-tab`) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    };

    // Story input preset toggle
    const storyTopicPreset = document.getElementById("story-topic-preset");
    const storyTopicCustom = document.getElementById("story-topic-custom");
    if (storyTopicPreset && storyTopicCustom) {
        storyTopicPreset.addEventListener("change", () => {
            if (storyTopicPreset.value === "직접 입력") {
                storyTopicCustom.style.display = "block";
                storyTopicCustom.focus();
            } else {
                storyTopicCustom.style.display = "none";
            }
        });
    }

    // Story scene & tone chip selections
    const sceneChips = document.querySelectorAll("#story-scenes-chips .chip");
    let activeSceneCount = 3;
    sceneChips.forEach(chip => {
        chip.addEventListener("click", () => {
            sceneChips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            activeSceneCount = parseInt(chip.dataset.val) || 3;
        });
    });

    const toneChips = document.querySelectorAll("#story-tone-chips .chip");
    let activeTone = "영화 스틸컷, 시네마틱 85mm 아나모픽 렌즈, 고도의 명암 대비";
    toneChips.forEach(chip => {
        chip.addEventListener("click", () => {
            toneChips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            activeTone = chip.dataset.val;
        });
    });

    // Story Preset Database (All expanded to 10 scenes)
    const storyDatabase = {
        "신비로운 새벽 안개 숲속에서 길을 잃은 하얀 사슴": [
            {
                title: "Scene 1: 아침의 깨어남 (오프닝)",
                visual: "안개 자욱한 새벽 숲속, 울창한 소나무들 사이로 푸른빛의 새벽빛이 비추는 가운데 눈을 깜빡이는 하얀 사슴의 클로즈업 샷",
                prompt: "A close-up shot of a mystical glowing white deer blinking its eyes, deep in a foggy pine forest at dawn, cinematic lighting, 8k resolution, soft ambient morning light",
                voiceover: "고요한 새벽녘, 모두가 잠든 시간. 신비로운 숲속의 하얀 사슴이 눈을 뜹니다.",
                audio: "고요한 숲 바람 소리와 부드러운 하프 음악 연주"
            },
            {
                title: "Scene 2: 신비로운 발걸음 (전개)",
                visual: "우아하고 고요하게 안개 낀 이끼 숲을 서행하며 걷고 있는 하얀 사슴의 측면 풀샷",
                prompt: "A majestic side profile full shot of a white deer walking gracefully on green moss covered forest ground, fog swirling around trees, mystical moody lighting",
                voiceover: "어디론가 홀린 듯, 비밀을 간직한 숲길을 따라 사슴은 발걸음을 옮깁니다.",
                audio: "사각사각 풀잎 밟는 소리 효과음, 몽환적인 신디사이저 멜로디"
            },
            {
                title: "Scene 3: 이슬 머금은 숲속 이끼 (디테일)",
                visual: "이슬방울이 가득 맺힌 초록색 이끼와 작은 야생화들 위를 사뿐히 밟고 지나가는 사슴 발굽의 초근접 매크로 샷",
                prompt: "An extreme macro close-up of a white deer's hoof step on dew-covered bright green moss, water droplets, forest floor detail, cinematic soft focus",
                voiceover: "발걸음이 닿는 곳마다 자연의 숨결이 생생히 살아 움직입니다.",
                audio: "물방울이 톡 떨어지는 소리 효과음, 신비롭고 맑은 실로폰 연주"
            },
            {
                title: "Scene 4: 맑은 계곡물 마시기 (전환)",
                visual: "빛을 받아 반짝이는 맑은 숲속 계곡물로 다가와 물을 조용히 마시는 하얀 사슴의 측면 로우앵글 샷",
                prompt: "A low-angle shot of a white deer drinking water from a crystal-clear forest stream, sun rays reflecting on water surface, peaceful fantasy environment",
                voiceover: "가장 맑은 영혼만이 마실 수 있다는 깊은 계곡물로 목을 축입니다.",
                audio: "퐁당거리는 물소리 효과음, 잔잔한 플루트 멜로디"
            },
            {
                title: "Scene 5: 빛내림과의 조우 (클라이맥스)",
                visual: "거대한 숲의 고목나무 사이로 틴달 효과(God rays) 빛내림이 쏟아져 내리고, 그 빛을 온몸으로 받는 하얀 사슴의 웅장한 로우앵글 샷",
                prompt: "A low-angle cinematic shot of a white deer standing under glowing sunlight beams (God rays) breaking through huge ancient trees, magical forest, particles in air",
                voiceover: "가장 깊은 곳에 도달했을 때, 하늘에서 찬란한 빛의 세례가 쏟아져 내립니다.",
                audio: "웅장하면서도 평화로운 오케스트라 현악기 연주 고조"
            },
            {
                title: "Scene 6: 영적 교감 (위기/절정)",
                visual: "빛을 뿜는 신비한 야생화 꽃봉오리에 코를 살짝 대어 냄새를 맡고 있는 사슴의 초근접 매크로 샷",
                prompt: "An extreme macro close-up shot of a white deer's nose touching a glowing magical wildflower, fantasy forest, soft particles, magical warm bokeh",
                voiceover: "대자연이 건네는 속삭임에 귀를 기울이며, 사슴은 비로소 숲과 하나가 됩니다.",
                audio: "반짝이는 효과음(Sparkle chimes), 신비롭고 맑은 울림"
            },
            {
                title: "Scene 7: 빛나는 나비들과의 춤 (환상)",
                visual: "하늘색 빛을 내는 신비로운 야광 나비들이 하얀 사슴 주위를 맴돌며 날아다니는 아름다운 슬로우모션 샷",
                prompt: "A slow-motion cinematic shot of glowing blue magical butterflies flying around a white deer, fantasy forest night-to-dawn transition, warm golden bokeh",
                voiceover: "이곳에서는 모든 생명이 마법처럼 서로 연결되어 속삭집니다.",
                audio: "나비 날개짓 소리와 몽환적인 윈드차임 사운드"
            },
            {
                title: "Scene 8: 숲을 덮어오는 어스름 노을 (황혼)",
                visual: "숲 너머 하늘이 오렌지빛과 분홍빛 노을로 물들고, 나무 그림자가 길게 늘어선 황홀한 숲 전경 샷",
                prompt: "A cinematic wide view of a forest at sunset, orange and pink sky, long shadows from ancient trees, warm atmospheric golden hour lighting",
                voiceover: "시간이 흘러 숲은 서서히 오렌지빛 옷으로 갈아입고 깊은 어둠을 준비합니다.",
                audio: "멀리서 우는 올빼미 소리 효과음, 깊고 차분한 첼로 솔로"
            },
            {
                title: "Scene 9: 신비로운 달빛 밤안개 (야경)",
                visual: "거대한 보름달이 숲 위로 떠올라, 은색 안개로 가득 찬 고목들 사이를 신비롭게 비추는 야간 풀샷",
                prompt: "A wide night shot of a massive full moon shining bright light through dark forest branches, silvery glowing fog, dreamlike mysterious atmosphere",
                voiceover: "달빛의 인도 아래, 숲은 밤안개를 감싸 안으며 신비로운 기운을 더해갑니다.",
                audio: "풀벌레 우는 소리, 고요한 밤의 공간 앰비언스 효과음"
            },
            {
                title: "Scene 10: 숲의 영원한 수호자 (결말)",
                visual: "카메라가 천천히 드론 샷으로 상승하며, 숲속 한가운데 서서 카메라(하늘)를 지긋이 올려다보는 하얀 사슴의 원경 풀샷",
                prompt: "A high-angle drone shot zooming out slowly, showing a white deer standing in a clearing of a vast ancient forest, foggy mountains in the background, epic scale",
                voiceover: "그렇게 하얀 사슴은 숲의 전설이 되어 영원히 이곳을 지켜나갈 것입니다.",
                audio: "바람 소리가 잦아들며 부드럽고 긴 여운을 남기는 피아노 솔로 아웃트로"
            }
        ],
        "화려한 네온사인 아래 미래 도시를 가르는 추격전": [
            {
                title: "Scene 1: 도시의 밤 (오프닝)",
                visual: "비에 젖은 아스팔트 위로 홀로그램 광고와 화려한 핑크, 네온 블루 빛이 반사되는 사이버펑크 도시의 마천루 항공 뷰",
                prompt: "An aerial drone view of a cyberpunk futuristic city, towering skyscrapers with glowing neon holograms, rain slicked streets reflecting pink and blue neon lights",
                voiceover: "네온 조명이 어둠을 삼킨 도시. 화려함 뒤에 숨겨진 추격전이 시작되려 합니다.",
                audio: "기계적인 앰비언스 소음, 무겁고 빠른 신스웨이브 비트"
            },
            {
                title: "Scene 2: 감시 카메라의 포착 (전개)",
                visual: "CCTV 카메라 렌즈의 각도가 위이잉 돌아가며 추적 중인 대상 스포츠카를 화면 중앙에 정확히 매칭하는 1인칭 렌즈 뷰",
                prompt: "Futuristic security camera panning down, digital interface scanning street, cyberpunk aesthetic, glitch effects, target detected",
                voiceover: "도시의 모든 인공지능이 숨은 탈주자를 감시하기 시작합니다.",
                audio: "CCTV 기계 모터 구동음, 스캔 경고 전자 비프음"
            },
            {
                title: "Scene 3: 시동 기동 및 가속 (준비)",
                visual: "차량 내부 계기판에 푸른 조명이 켜지며 디지털 속도계가 급격히 올라가고 배기구에서 푸른 화염이 뿜어져 나오는 클로즈업 샷",
                prompt: "A close-up of a futuristic car dashboard with glowing cyan dials, speed digits rising rapidly, neon reflection on driver's leather gloves",
                voiceover: "엔진이 깨어나는 순간, 가속 패널을 끝까지 밟아 나아갑니다.",
                audio: "터빈 제트엔진이 가동되는 고주파 굉음 효과음"
            },
            {
                title: "Scene 4: 네온 골목길 드리프트 (질주)",
                visual: "헤드라이트를 켠 하이테크 스포츠카가 네온 골목길을 엄청난 속도로 드리프트하며 지나가는 역동적인 로우앵글 샷",
                prompt: "A low-angle dynamic shot of a sleek futuristic sports car drifting through neon-lit narrow cyberpunk streets, sparks flying, speed motion blur",
                voiceover: "한계를 모르는 속도로 복잡한 마천루 사이를 가로질러 나아갑니다.",
                audio: "강력한 엔진 배기음 효과음, 템포가 빨라지는 일렉트로닉 음악"
            },
            {
                title: "Scene 5: 네온 터널의 추격 (클라이맥스)",
                visual: "뒤따라오는 경찰 플라잉카들과 주인공 차량이 네온 튜브 터널 내부에서 속도 대결을 펼치며 추적하는 긴박한 핸드헬드 샷",
                prompt: "A handheld shaking camera shot of a high speed chase inside a glowing neon tunnel, futuristic police flying cars pursuing a sports car, futuristic action movie style",
                voiceover: "시시각각 조여오는 감시망을 뚫고, 필사의 질주가 계속됩니다.",
                audio: "사이렌 소리, 타이어 마찰음 효과음, 드럼 비트 폭발"
            },
            {
                title: "Scene 6: 하늘을 나는 탈출 (도약)",
                visual: "스포츠카가 고가 도로의 끊어진 틈새를 뛰어넘어 공중으로 솟구치는 순간, 아래로 거대한 홀로그램 광고판들이 깔려 있는 장엄한 슬로우모션 샷",
                prompt: "A slow-motion cinematic action shot of a futuristic car jumping over a broken bridge in the air, flying high above a cyberpunk metropolis with holographic lights, epic moment",
                voiceover: "단 한 순간의 기회, 목숨을 건 도약이 어둠 속 밤하늘을 수놓습니다.",
                audio: "소리가 순간적으로 먹먹해지는 무중력 효과음 뒤 콰쾅 터지는 폭발음"
            },
            {
                title: "Scene 7: 쏟아지는 폭우 (위기)",
                visual: "공중 도약 후 비 내리는 하층부 도로로 착지하며 물보라가 사방으로 사납게 튀어 오르는 슬로우모션 샷",
                prompt: "Cinematic shot of a car landing on wet road during heavy rain, splash of water, neon reflections, high contrast action scene",
                voiceover: "갑자기 쏟아지는 빗줄기마저 질주하는 차량을 가로막을 순 없습니다.",
                audio: "거칠게 도로 바닥에 떨어지는 물보라 소리 효과음"
            },
            {
                title: "Scene 8: 홀로그램 숲 통과 (절정)",
                visual: "거대한 디지털 잉어 홀로그램이 헤엄치며 빛나는 광장 한가운데를 하이테크 스포츠카가 전속력으로 뚫고 지나가는 몽환적 뷰",
                prompt: "Futuristic car driving through a massive glowing koi fish hologram in a central plaza, holographic particles scattering, cyberpunk art style",
                voiceover: "빛의 바다를 뚫고, 추격자들의 눈을 완벽히 교란합니다.",
                audio: "홀로그램 전자기 펄스가 산란되는 독특한 디지털 노이즈음"
            },
            {
                title: "Scene 9: 타이어 마찰과 브레이크 (전환)",
                visual: "급정거하는 바퀴 휠에서 뜨거운 마찰 연기가 피어오르고, 아스팔트 바닥에 검은 스키드마크가 깊게 새겨지는 매크로 샷",
                prompt: "A macro close-up of a futuristic car tire braking hard on wet road, sparks and smoke rising from brake discs, high speed screech",
                voiceover: "추격의 한복판, 마침내 감시망의 사각지대에 도달했습니다.",
                audio: "날카로운 급브레이크 타이어 스크래치 소리 효과음"
            },
            {
                title: "Scene 10: 도시 속으로 사라지다 (결말)",
                visual: "도약을 마친 스포츠카가 멀리 솟아오른 거대한 하이테크 게이트 속으로 들어가며, 네온 안개 너머로 서서히 사라지는 뒷모습",
                prompt: "A rear view tracking shot of a futuristic sports car driving into a huge glowing city gate, fading into neon fog, atmospheric cyberpunk night vibe",
                voiceover: "추격은 끝났고, 스포츠카는 흔적도 없이 어둠 속으로 녹아들었습니다.",
                audio: "신스웨이브 패드 음악이 천천히 페이드아웃되며 끝남"
            }
        ],
        "바쁜 도시를 떠나 조용한 숲속에서 즐기는 모닥불과 커피 한 잔": [
            {
                title: "Scene 1: 캠핑장 안착 (오프닝)",
                visual: "해가 저무는 고요한 숲속, 텐트 옆에 놓인 나무 캠핑 테이블과 타오르기 시작하는 모닥불 화로의 따뜻한 오버숄더 샷",
                prompt: "A warm close-up shot of a crackling campfire starting in a fire pit next to a cozy tent, evening forest background, soft orange lighting, cinematic depth of field",
                voiceover: "쉼 없이 달려온 일상. 오늘은 도시를 떠나 조용한 자연의 소리에 귀 기울여 봅니다.",
                audio: "타닥타닥 장작 타는 소리, 멀리서 들리는 가을 벌레 소리"
            },
            {
                title: "Scene 2: 나만의 안식처 구축 (전개)",
                visual: "나무들 사이에 걸어놓은 감성적인 전구 라인에 노란 불빛들이 톡톡 차례대로 켜지는 예쁜 풍경 샷",
                prompt: "A close-up of warm fairy lights being turned on, draped between forest pine trees at dusk, cozy camping site setup, soft bokeh",
                voiceover: "나만의 작은 숲속 아지트에 노란 온기가 하나씩 채워집니다.",
                audio: "딸깍 스위치 켜지는 소리 효과음, 아늑한 통기타 선율 시작"
            },
            {
                title: "Scene 3: 불 피우기 (전개)",
                visual: "모닥불 화로 속 쪼개진 나뭇가지 위로 불꽃이 서서히 퍼져나가며 타오르는 클로즈업 샷",
                prompt: "A macro shot of orange flames engulfing wooden logs in a bonfire pit, flying sparks, warm glowing ashes, beautiful wood fire textures",
                voiceover: "나무들이 타들어 가며 숲의 밤공기를 부드럽게 데워주기 시작합니다.",
                audio: "불길이 확 일어나는 후끈한 바람 소리"
            },
            {
                title: "Scene 4: 원두 그라인딩 (감성)",
                visual: "나무 핸드밀을 쥐고 아날로그한 방식으로 천천히 원두를 가는 손동작의 빈티지 룩 샷",
                prompt: "A close-up of hands turning a wooden vintage coffee grinder, coffee beans turning to powder, outdoor rustic setting, camping style",
                voiceover: "사각사각 원두가 갈리는 소리와 고소한 향이 주변을 가득 채웁니다.",
                audio: "원두 가는 아날로그하고 사각거리는 마찰음 ASMR 극대화"
            },
            {
                title: "Scene 5: 핸드드립 커피 (추출)",
                visual: "모닥불 불빛 아래에서 나무 드립퍼에 조심스럽게 온수를 부어 커피 원두가 부풀어 오르는 손 클로즈업 샷",
                prompt: "A detailed close-up shot of pouring hot water from a kettle onto coffee grounds in a drip filter, steam rising, campfire reflection, cozy camping mood",
                voiceover: "차가운 밤공기 속, 따뜻하게 피어오르는 김과 함께 커피가 깊게 내려집니다.",
                audio: "쪼르르 뜨거운 물 떨어지는 소리, 아늑한 어쿠스틱 기타 선율"
            },
            {
                title: "Scene 6: 따뜻한 커피 한 잔 (음미)",
                visual: "연기가 뿜어져 나오는 김 서린 머그컵을 쥐고 커피를 조심스럽게 한 모금 마시는 인물의 따뜻한 표정 샷",
                prompt: "A medium shot of a person taking a sip of hot coffee from a camp mug, steam rising, campfire light glowing on face, comfortable winter style",
                voiceover: "바람을 타고 스쳐가는 차가운 촉감마저도 커피 한 모금에 사르르 녹아내립니다.",
                audio: "호오 부는 소리와 목 넘김 소리 효과음"
            },
            {
                title: "Scene 7: 불멍의 시간 (클라이맥스)",
                visual: "커피잔을 손에 든 채 흔들거리는 불꽃을 멍하니 바라보고 있는 사람의 평화롭고 나른한 바스트 샷",
                prompt: "A peaceful medium shot of a person holding a warm mug, sitting on a camping chair and looking at a campfire, relaxing atmosphere, soft warm shadows",
                voiceover: "타오르는 불꽃을 가만히 응시하는 것만으로도, 무거웠던 마음이 가벼워집니다.",
                audio: "장작이 크게 튀며 타는 소리, 마음이 편안해지는 로파이(Lo-Fi) 피아노 멜로디"
            },
            {
                title: "Scene 8: 밤하늘의 쏟아지는 은하수 (절정)",
                visual: "텐트 위로 별자리가 선명하게 펼쳐진 맑고 푸른 밤하늘과 은하수가 캠핑장을 감싸고 있는 장엄한 야경 샷",
                prompt: "A breathtaking shot of a dark night sky full of stars and Milky Way galaxy arching over a cozy camping tent with a warm interior glow, epic space nature",
                voiceover: "도시의 불빛이 닿지 않는 곳, 자연이 들려주는 고요한 은하수의 위로가 사방을 채웁니다.",
                audio: "부드럽게 나뭇잎을 흔드는 바람 소리 효과음"
            },
            {
                title: "Scene 9: 안개 낀 아침의 숲 (전환)",
                visual: "다음날 아침, 은은한 하얀 안개가 이슬 머금은 소나무 숲 사이로 자욱하게 낀 평화로운 주간 전경",
                prompt: "A quiet morning scene of a pine forest covered in light white fog, early morning sunlight filtering through misty trees, camping tent nearby",
                voiceover: "고요히 밝아오는 숲속의 아침, 맑은 공기가 온몸을 정화하는 듯합니다.",
                audio: "새가 지저귀는 소리 효과음 시작"
            },
            {
                title: "Scene 10: 평화로운 아침 (결말)",
                visual: "이른 아침, 텐트 문을 열고 나오자 초록빛 숲속 틈새로 아침 햇살이 부드럽게 쏟아지는 싱그러운 풀샷",
                prompt: "A beautiful point-of-view shot opening a tent zipper, revealing a fresh green forest with bright morning sun rays piercing through leaves, hopeful vibe",
                voiceover: "온전히 나만의 시간을 보낸 숲속의 밤. 새로운 활력을 품고 다시 시작해 봅니다.",
                audio: "싱그러운 아침 새들의 지저귐 소리, 맑고 밝은 어쿠스틱 음악 완성"
            }
        ],
        "우주 정거장에서 바라보는 푸른 지구와 우주비행사의 하루": [
            {
                title: "Scene 1: 정거장의 아침 (오프닝)",
                visual: "우주 정거장의 커다란 원형 창문 너머로 구름이 휘감긴 푸른 지구가 장엄하게 펼쳐져 있고, 우주복을 입은 비행사가 그 창가를 바라보는 뒷모습 샷",
                prompt: "An interior shot of a futuristic space station cupola window, looking out at the giant glowing blue planet Earth, astronaut in space suit silhouette looking out, epic sci-fi",
                voiceover: "지구 상공 400킬로미터. 이곳에서 보는 푸른 행성은 말로 다할 수 없이 장엄합니다.",
                audio: "미세한 우주선 환기구 윙윙하는 화이트 노이즈 사운드, 웅장하고 신비로운 우주 분위기 패드 소리"
            },
            {
                title: "Scene 2: 무중력 아침 식사 (전개)",
                visual: "동그랗게 공중에 뭉쳐서 떠다니는 물방울을 비행사가 장난기 어린 미소로 받아마시는 슬로우모션 샷",
                prompt: "A slow-motion close-up of a water droplet floating in zero gravity inside a space station cabin, astronaut capturing it with mouth, fun space lifestyle",
                voiceover: "중력이 없는 이곳의 아침은 아주 색다른 평화로 시작됩니다.",
                audio: "물 꿀꺽 삼키는 소리, 아기자기하고 유쾌한 신디사이저 멜로디"
            },
            {
                title: "Scene 3: 무중력 업무 (연구)",
                visual: "태블릿과 도구들이 무중력 상태로 둥둥 떠다니는 실험실 내부에서 연구원이 미세중력 실험 장비를 조작하는 측면 샷",
                prompt: "A shot of an astronaut operating high-tech scientific equipment inside an ISS laboratory module, floating tools and tablets around, cinematic clean sci-fi design",
                voiceover: "중력이 사라진 공간에서 인류의 미래를 위한 새로운 과학적 여정이 펼쳐집니다.",
                audio: "띠딕- 컴퓨터 기계 작동 전자음 효과음, 절제된 리드미컬 테크노 비트"
            },
            {
                title: "Scene 4: 대기권의 관측 (분석)",
                visual: "정거장 줌 렌즈를 통해 폭풍이 몰아치는 대기권의 소용돌이 구름과 지구 표면의 번개를 관측하는 뷰 샷",
                prompt: "A spectacular view of lightning storms flickering inside massive clouds from orbit, glowing electrical discharges, Earth's atmosphere view",
                voiceover: "구름 속 번개의 발광을 통해 푸른 행성이 살아있음을 온전히 실감합니다.",
                audio: "미세한 기계 줌 구동음, 가벼운 잡음 섞인 무전기 수신음"
            },
            {
                title: "Scene 5: 은하수와의 대면 (클라이맥스)",
                visual: "태양이 지구 반대편으로 지며 정거장 바깥으로 수억 개의 은하수 별빛과 성운이 보랏빛, 분홍빛으로 요동치며 나타나는 황홀한 우주 원경 샷",
                prompt: "An epic shot from space station looking at the dazzling Milky Way galaxy, colorful nebula gas clouds in deep space, cosmic scale, astronomical photography",
                voiceover: "지구의 밤이 찾아오면, 우주의 진정한 속살인 은하수가 정거장을 감싸 안습니다.",
                audio: "끝없이 팽창하는 느낌의 신비롭고 웅장한 우주 분위기 패드 음악"
            },
            {
                title: "Scene 6: 우주 산책 준비 (위기/절정)",
                visual: "단단하게 조여지는 헬멧 잠금 장치와 가스 주입 밸브를 체크하는 우주비행사 복장의 디테일 클로즈업 샷",
                prompt: "A close-up shot of an astronaut locking the helmet ring, gas valve adjusting, glowing helmet visor indicator lights, dramatic preparation vibe",
                voiceover: "이제, 정거장의 두터운 철문을 열고 가장 깊고 차가운 공간으로 나아갈 시간입니다.",
                audio: "슈우우 공기 배출 사운드 효과음, 긴장감을 주는 저음의 팀파니 연주"
            },
            {
                title: "Scene 7: 우주 산책 (절정)",
                visual: "우주비행사가 밧줄에 의지한 채 정거장 외부 우주 공간으로 나와 거대한 태양광 패널을 수리하는 스릴 넘치는 POV 1인칭 시점 샷",
                prompt: "A dramatic first-person point-of-view (POV) space walk shot, looking at astronaut's gloved hands working on giant solar panels of space station, dark empty space background",
                voiceover: "오직 산소통 하나에 의지한 채 차가운 진공 속에서 묵묵히 임무를 완수해 냅니다.",
                audio: "우주비행사의 다소 거친 거친 숨소리 효과음, 적막하고 긴장감 도는 바이올린 서스테인"
            },
            {
                title: "Scene 8: 궤도상의 일출 (일출)",
                visual: "둥근 지구의 곡선 지평선 뒤로 백색의 아주 눈부신 태양광선이 플레어를 뿜으며 폭발하듯 솟아오르는 장면",
                prompt: "An epic orbital sunrise, blinding bright sun rays bursting over the Earth's blue atmosphere horizon, lens flare, cinematic space scene",
                voiceover: "정거장에서 하루에 16번이나 맞이하는 눈부신 우주 일출을 목격합니다.",
                audio: "태양열이 퍼지는 느낌의 고음역 신스 패드 멜로디 극대화"
            },
            {
                title: "Scene 9: 지구의 야경 관찰 (야경)",
                visual: "대륙과 도시들을 따라 전구들처럼 촘촘하고 오렌지빛으로 빛나는 거대 그리드 지도의 지구 야경 타임랩스 비주얼",
                prompt: "An orbital time-lapse view looking down at Earth's continents glowing with orange city night lights grid patterns, breathtaking technology visualization",
                voiceover: "저 멀리 작게 반짝이는 불빛 하나하나가 사람들의 따스한 일상을 품고 있습니다.",
                audio: "잔잔하게 울리는 바이올린 합주"
            },
            {
                title: "Scene 10: 우주에서 보낸 편지 (결말)",
                visual: "비행사의 헬멧 쉴드 유리에 지구가 둥글게 반사되는 모습, 헬멧 속의 비행사가 카메라를 향해 가볍게 손을 흔들며 미소 짓는 클로즈업 샷",
                prompt: "A close-up shot of an astronaut's visor reflecting the blue Earth, astronaut smiling and waving hand to the camera, warm hopeful atmosphere, cinematic light leak",
                voiceover: "이 광활한 우주 속에서 지구는 우리가 지켜내야 할 가장 아름다운 고향입니다.",
                audio: "피아노 연주와 은은한 현악 합주가 어우러진 따뜻한 아웃트로"
            }
        ],
        "비 내리는 창가의 카페에서 책을 읽는 평화로운 오후": [
            {
                title: "Scene 1: 빗속의 카페 (오프닝)",
                visual: "유리창을 타고 흘러내리는 빗방울들 너머로 뿌옇게 흐려진 도시 길거리와 노란 카페 조명이 따뜻하게 비치는 창문 뷰 샷",
                prompt: "A close-up shot of rain drops sliding down a cafe window, blurry background showing street lights at dusk, cozy warm yellow interior light, nostalgic atmosphere",
                voiceover: "비 오는 날의 오후. 소란스럽던 세상은 빗소리 아래 고요히 잦아듭니다.",
                audio: "타닥타닥 창가에 부딪히는 빗소리와 자동차들이 물길을 지나는 백그라운드 소음"
            },
            {
                title: "Scene 2: 따스한 조명 아래 (전개)",
                visual: "엔틱한 스탠드 조명에서 은은한 오렌지빛이 흘러나와 나무 테이블 모서리를 포근하게 비추는 미학적인 샷",
                prompt: "An aesthetic close-up shot of an antique brass table lamp glowing with warm yellow light on a wooden table, cozy cafe interior background, soft focus",
                voiceover: "창밖의 서늘한 기운과 대비되는, 노란 불빛이 주는 작은 위로에 안착합니다.",
                audio: "조용한 비 카페 분위기, 잔잔한 재즈 음악 인트로"
            },
            {
                title: "Scene 3: 머그잔과 스팀 (전개)",
                visual: "나무 테이블 위에 놓인 김이 피어오르는 도자기 머그잔과 그 옆에 펼쳐져 있는 낡은 책 한 권의 매크로 샷",
                prompt: "A macro close-up shot of hot steam rising from a ceramic mug, next to an open vintage book on a rustic wooden table, cozy aesthetic, shallow depth of field",
                voiceover: "따뜻한 음료 한 잔과 손끝으로 전해지는 온기, 완벽한 하루의 쉼표가 됩니다.",
                audio: "머그잔을 달그락 내려놓는 소리, 잔잔하고 로맨틱한 재즈 피아노 선율"
            },
            {
                title: "Scene 4: 종이의 바스락거림 (감성)",
                visual: "인물이 낡은 책장을 조심스럽게 한 장 넘기는 손가락의 텍스처를 세밀하게 보여주는 측면 클로즈업 샷",
                prompt: "A close-up of a hand gently turning a page of an old paper book in a library setting, warm golden light, cinematic soft focus",
                voiceover: "가볍게 스쳐가는 종이의 바스락거림은 번잡했던 마음을 차분히 내려놓게 만듭니다.",
                audio: "사각하는 책장 넘기는 소리 효과음 ASMR 극대화"
            },
            {
                title: "Scene 5: 몰입의 시간 (클라이맥스)",
                visual: "안경을 쓴 사람이 창밖을 잠시 바라보다가 다시 책장으로 시선을 옮겨 한 페이지를 천천히 넘기는 서정적인 미디엄 샷",
                prompt: "A beautiful medium shot of a person sitting by a window in a cafe, turning a page of a book, soft cozy lighting, relaxing moody look, vintage colors",
                voiceover: "오롯이 활자 속 세계에 빠져드는 이 순간만큼은 아무런 걱정도 끼어들지 못합니다.",
                audio: "콘트라베이스가 가미된 재즈 콰르텟 음악"
            },
            {
                title: "Scene 6: 짧은 일기 작성 (사색)",
                visual: "노트 위에 연필로 글을 서서히 적어 내려가는 시선 탑다운 (Top-down) 샷, 나무 연필 자루의 아날로그함 묘사",
                prompt: "A close-up shot of hand writing on a blank paper journal with a wooden pencil, cozy lighting, retro notebook aesthetic",
                voiceover: "마음 한편에 묵혀두었던 소소한 생각들을 연필 끝으로 조심스레 펼쳐 보기도 합니다.",
                audio: "서걱서걱 연필 소리 효과음"
            },
            {
                title: "Scene 7: 빗물 튀는 차창 밖 (풍경)",
                visual: "카페 유리창 바로 바깥, 빗물이 고인 도로를 빠르게 달리는 택시와 흐려진 빨간 신호등의 미학적인 오버랩",
                prompt: "A view from window showing rain pouring on a street corner, passing taxi lights blurred by water droplets, cozy aesthetic cinematic grading",
                voiceover: "창밖의 세상은 여전히 빠르게 흘러가지만, 이곳은 시간이 잠시 멈춘 듯 평화롭습니다.",
                audio: "웅장한 빗소리와 자동차 지나가는 수면 마찰음"
            },
            {
                title: "Scene 8: 창밖의 사색 (절정)",
                visual: "카페 유리창에 맺힌 빗방울에 아웃포커싱이 걸리며 창밖의 가로등 불빛들이 보케 (Bokeh)로 아름답게 흩어지는 몽환적인 클로즈업 샷",
                prompt: "A dreamlike close-up shot of soft warm bokeh lights from rainy street through a window, raindrops on glass, romantic warm colors",
                voiceover: "흐려진 풍경 속에서 마음속 엉켜있던 생각들도 투명하게 씻겨 내려갑니다.",
                audio: "한층 선명해지는 빗소리와 멀리서 울리는 천둥소리"
            },
            {
                title: "Scene 9: 커피 한 모금과 미소 (전환)",
                visual: "남은 커피를 천천히 들이마신 후, 비 내리는 밖을 바라보며 옅은 미소를 짓는 인물의 옆모습 샷",
                prompt: "A soft focus side profile of a person smiling gently, looking out a rainy window in a quiet coffee shop, peaceful feeling",
                voiceover: "충분한 사색 끝에 마음 한구석에 맑고 긍정적인 생각들이 다시 피어납니다.",
                audio: "커피 마시는 소리와 작게 흐르는 재즈 소닉"
            },
            {
                title: "Scene 10: 저녁의 귀로 (결말)",
                visual: "우산을 쓰고 카페를 나서는 사람의 뒷모습이 가로등 불빛이 켜진 길을 따라 걸어가며 빗물이 고인 바닥에 조명이 아름답게 반사되는 야경 샷",
                prompt: "A wide night shot of a person with an umbrella walking away from a cozy lit cafe, reflections of streetlights on wet pavement, cinematic lighting, peaceful end",
                voiceover: "마음의 비축분을 충분히 채운 오늘, 집으로 향하는 발걸음이 한결 가볍습니다.",
                audio: "카페 문이 닫히며 빗소리가 커지고 잔잔히 감싸 안는 재즈 음악 엔딩"
            }
        ]
    };

    const generateStoryBtn = document.getElementById("generate-story-btn");
    const storyOutputPlaceholder = document.getElementById("story-output-placeholder");
    const storyOutputList = document.getElementById("story-output-list");
    const copyAllStoryBtn = document.getElementById("copy-all-story-btn");

    if (generateStoryBtn) {
        generateStoryBtn.addEventListener("click", () => {
            let topic = storyTopicPreset.value;
            if (topic === "직접 입력") {
                topic = storyTopicCustom.value.trim();
                if (!topic) {
                    alert("원하시는 주제를 입력해 주세요!");
                    return;
                }
            }

            // Find matching preset, or auto-generate matching templates
            let baseScenes = storyDatabase[topic];
            if (!baseScenes) {
                // Determine the type of video based on keywords
                let videoType = "general"; // general, cooking_diy, travel_vlog, tech_future
                const topicLower = topic.toLowerCase();
                
                if (topicLower.includes("만들") || topicLower.includes("과정") || topicLower.includes("요리") || topicLower.includes("조리") || topicLower.includes("레시피") || topicLower.includes("청") || topicLower.includes("제작") || topicLower.includes("만드는") || topicLower.includes("제빵") || topicLower.includes("굽기") || topicLower.includes("굽는") || topicLower.includes("베이킹")) {
                    videoType = "cooking_diy";
                } else if (topicLower.includes("여행") || topicLower.includes("vlog") || topicLower.includes("브이로그") || topicLower.includes("일상") || topicLower.includes("나들이") || topicLower.includes("산책")) {
                    videoType = "travel_vlog";
                } else if (topicLower.includes("미래") || topicLower.includes("로봇") || topicLower.includes("우주") || topicLower.includes("ai") || topicLower.includes("사이버") || topicLower.includes("과학")) {
                    videoType = "tech_future";
                }

                if (videoType === "cooking_diy") {
                    let cookingSubType = "general_cooking";
                    if (topicLower.includes("청") || topicLower.includes("에이드") || topicLower.includes("음료") || topicLower.includes("차") || topicLower.includes("잼")) {
                        cookingSubType = "preserve_beverage";
                    } else if (topicLower.includes("빵") || topicLower.includes("베이킹") || topicLower.includes("케이크") || topicLower.includes("쿠키") || topicLower.includes("굽") || topicLower.includes("도우") || topicLower.includes("발효")) {
                        cookingSubType = "baking";
                    }

                    if (cookingSubType === "baking") {
                        baseScenes = [
                            {
                                title: "Scene 1: 재료 계량과 준비 (오프닝)",
                                visual: `아늑한 주방 테이블 위에 하얀 밀가루, 노란 이스트, 소금, 부드러운 버터 등 [${topic}]의 핵심 계량 재료들이 예쁜 그릇에 담겨 정렬된 뷰`,
                                prompt: `A close-up aesthetic shot of baking ingredients for ${topic}, flour, yeast, butter, bowls on a wooden table, warm sunlight, baking concept`,
                                voiceover: `따뜻한 밀가루 향이 솔솔 풍기는 주방, 오늘은 손끝의 정성을 담아 [${topic}]를 시작합니다.`,
                                audio: "고요한 아침 주방의 앰비언스, 따뜻한 피아노 솔로 인트로"
                            },
                            {
                                title: "Scene 2: 액체류 혼합 (준비)",
                                visual: `넓은 믹싱 볼에 담긴 밀가루 가운데 홈을 파고, 따뜻한 물과 우유를 졸졸 부어 넣는 감성적인 슬로우모션 샷`,
                                prompt: `A close-up shot of pouring warm milk into a bowl of white flour, mixing baking ingredients, steam rising gently, slow-motion`,
                                voiceover: "반죽의 기초를 다집니다. 이스트를 녹인 따뜻한 물을 붓고 섞기 시작합니다.",
                                audio: "쪼르르 액체 쏟아지는 소리 효과음"
                            },
                            {
                                title: "Scene 3: 반죽 믹싱 및 치대기 (전개)",
                                visual: `손으로 반죽을 힘있게 늘였다 접어가며 글루텐을 형성하는, 손의 움직임에 포커스를 둔 옆면 트래킹 샷`,
                                prompt: `A close-up shot of hands kneading dough on a wooden kitchen counter, flour dust in air, dynamic action shot, rustic baking`,
                                voiceover: "반죽이 끈기를 가지고 매끄러운 덩어리가 될 때까지 정성껏 치대어 줍니다.",
                                audio: "반죽이 도마에 철썩 부딪히는 찰진 소리 효과음"
                            },
                            {
                                title: "Scene 4: 따뜻한 1차 발효 (발효)",
                                visual: `볼에 젖은 면포를 덮어두고 시간이 지남에 따라 반죽이 2배 크기로 서서히 부풀어 오르는 타임랩스 비주얼`,
                                prompt: `A time-lapse shot of bread dough rising to double its size inside a glass bowl, yeast fermentation, puffy texture`,
                                voiceover: "따뜻한 온기 속에서 반죽은 숨을 쉬며 서서히 부풀어 오릅니다.",
                                audio: "평화롭게 흘러가는 어쿠스틱 통기타 연주"
                            },
                            {
                                title: "Scene 5: 가스 제거 및 둥글리기 (성형)",
                                visual: `부풀어 오른 반죽을 꾹 눌러 가스를 빼고, 주먹 크기로 분할하여 동글동글하게 성형해 놓은 정갈한 매크로 샷`,
                                prompt: `A close-up shot of hands punching down rose dough to release gas, shaping dough into small round balls on flour dusted counter`,
                                voiceover: "가스를 가볍게 빼낸 뒤, 적당한 크기로 둥글려 잠시 휴식의 시간을 줍니다.",
                                audio: "푸슈슈 가스 빠지는 부드러운 소리"
                            },
                            {
                                title: "Scene 6: 본격적인 모양 성형 (제작)",
                                visual: `밀대로 반죽을 얇게 밀거나, 손가락으로 주름을 잡아 예쁜 빵/쿠키 형태로 디자인해 나가는 섬세한 디테일 샷`,
                                prompt: `A macro close-up of shaping dough into beautiful bread shape, rolling and folding details, highly skilled baking craft`,
                                voiceover: "머릿속으로 상상했던 예쁜 모양으로 정성스럽게 빵의 형태를 매만져 줍니다.",
                                audio: "나무 밀대가 밀리는 드르륵 거리는 편안한 소리"
                            },
                            {
                                title: "Scene 7: 팬 위에 배열 및 2차 발효 (팬닝)",
                                visual: `종이 호일을 깐 오븐 팬 위에 성형된 반죽들을 일정한 간격으로 나란히 올려놓고 면포를 덮는 탑뷰`,
                                prompt: `Top-down shot of shaped raw dough pieces arranged neatly on a metal baking sheet pan, professional bakery aesthetic`,
                                voiceover: "오븐에 넣기 전, 빵이 구워질 팬에 정갈히 올린 뒤 마지막 2차 발효를 거칩니다.",
                                audio: "식기 달그락거리는 잔잔한 사운드"
                            },
                            {
                                title: "Scene 8: 오븐 입고 및 구워내기 (클라이맥스)",
                                visual: `뜨겁게 예열된 오븐 내부에서 반죽이 황금빛 갈색으로 노릇노릇하게 구워지며 부푸는 오븐 내부 카메라 샷`,
                                prompt: `A cinematic shot through oven glass window, showing bread baking and turning golden brown, rising dough, glowing heating elements`,
                                voiceover: "뜨거운 열기 속에서 서서히 부풀어 오르며 향긋한 갈색 빛깔을 띠기 시작합니다.",
                                audio: "오븐 내부 열풍 윙윙 소리와 웅장한 바이올린 합주 피치 고조"
                            },
                            {
                                title: "Scene 9: 구운 빵 꺼내어 식히기 (완성)",
                                visual: `오븐 장갑을 끼고 갓 구워져 연기가 살짝 피어오르는 노릇한 빵을 꺼내어 식힘망 위에 올려놓는 오버숄더 샷`,
                                prompt: `A close-up shot of taking fresh baked hot golden bread out of the oven, steam rising, placing on a wire cooling rack, warm colors`,
                                voiceover: "주방 전체에 고소한 빵 냄새가 가득 퍼지며, 노릇노릇한 모습으로 완성되어 나옵니다.",
                                audio: "갓 구운 빵 표면이 바스락 튀는 크랙 소리, 따뜻한 피아노 음악 리턴"
                            },
                            {
                                title: "Scene 10: 시식 및 플레이팅 (결말)",
                                visual: `완성된 따끈한 빵을 손으로 부드럽게 반으로 찢자 쫄깃한 결이 보이며 뜨거운 김이 뿜어 나오는 모습을 담은 감성 엔딩 뷰`,
                                prompt: `A slow-motion close-up of hands pulling apart a freshly baked warm loaf of bread, showing soft texture and steam rising, ultimate delicious look`,
                                voiceover: "갓 구워 겉은 바삭하고 속은 촉촉한 오늘의 선물. 정성으로 구워낸 따끈한 빵 한 입을 음미합니다.",
                                audio: "바스락 찢어지는 빵 질감 효과음, 잔잔하고 평화로운 어쿠스틱 재즈 아웃트로"
                            }
                        ];
                    } else if (cookingSubType === "preserve_beverage") {
                        baseScenes = [
                            {
                                title: "Scene 1: 신선한 재료 준비 (오프닝)",
                                visual: `깨끗하게 손질된 [${topic}]의 주재료들이 테이블 위에 소담스럽게 놓여 있고, 그 위로 따뜻한 아침 햇살이 비추는 감성적인 주방 전경`,
                                prompt: `A close-up aesthetic shot of fresh ingredients for ${topic} on a rustic wooden counter, soft morning sunlight, cooking show style, depth of field`,
                                voiceover: `따뜻한 햇살이 드는 아늑한 주방, 오늘은 정성을 가득 담아 [${topic}]를 만들어 보려 합니다.`,
                                audio: "새소리와 잔잔한 어쿠스틱 기타 오프닝 음악"
                            },
                            {
                                title: "Scene 2: 청결한 세척 및 다듬기 (준비)",
                                visual: `싱크대 수전에서 떨어지는 맑은 물줄기로 재료를 꼼꼼하게 씻어내는 손짓의 내추럴한 슬로우모션 샷`,
                                prompt: `A close-up shot of fresh raw ingredients being washed under running water, water splashing, shiny droplets, culinary cleanliness`,
                                voiceover: "가장 중요한 첫 단계는 깨끗함입니다. 주재료를 흐르는 맑은 물에 정성껏 씻어냅니다.",
                                audio: "쏴아아 시원한 물 흐르는 물소리 효과음"
                            },
                            {
                                title: "Scene 3: 물기 제거 (전개)",
                                visual: `린넨 타월로 재료 표면의 미세한 수분을 조심스럽게 눌러서 닦아내는 감성적인 정면 매크로 샷`,
                                prompt: `A macro shot of drying fresh washed ingredients with a clean linen cloth, focusing on the water droplets being absorbed, soft organic kitchen aesthetic`,
                                voiceover: "수분이 남아있지 않도록 마른 린넨으로 하나씩 꼼꼼하게 물기를 닦아줍니다.",
                                audio: "바스락거리는 마른 천의 스치는 소리"
                            },
                            {
                                title: "Scene 4: 정성스러운 손질 (전개)",
                                visual: `도마 위에서 숙련된 손길로 주재료들을 얇고 고르게 썰어내거나 손질하는 손 영역 밀착 탑다운 (Top-down) 샷`,
                                prompt: `A macro top-down shot of hands slicing and prepping fresh ingredients for ${topic} on a cutting board, organic textures, juice glistening`,
                                voiceover: "잘 닦아낸 재료들을 일정한 크기로 사각사각 소리를 내며 정성스럽게 썰어 준비합니다.",
                                audio: "탁탁탁 서걱서걱 정겨운 칼질 소리 효과음, 경쾌한 핑거스타일 기타 음악"
                            },
                            {
                                title: "Scene 5: 큰 볼에 조심스레 담기 (가공)",
                                visual: `썰어둔 재료가 넓고 투명한 유리 볼에 채워지면서 아름다운 원재료의 색상이 단면을 가득 메우는 측면 뷰`,
                                prompt: `A detailed close-up shot of freshly sliced raw ingredients being placed into a clear glass bowl, vibrant organic colors filling the frame`,
                                voiceover: "자연의 향이 듬뿍 묻어나는 재료들을 조심스럽게 큰 그릇에 정갈하게 한데 모아봅니다.",
                                audio: "볼에 부드럽게 담기는 소리, 활기찬 어쿠스틱 리듬"
                            },
                            {
                                title: "Scene 6: 본격적인 혼합과 가공 (클라이맥스)",
                                visual: `유리 볼에 가득 담긴 손질된 재료 위로 설탕이나 꿀, 달콤한 시럽이 흘러내리며 켜켜이 스며드는 역동적인 슬로우 모션 샷`,
                                prompt: `An extreme close-up slow motion shot of pouring sugar and mixing ingredients together for ${topic}, glistening syrup coating the raw pieces, glowing rich colors`,
                                voiceover: "준비된 재료들이 서로 어우러지며 새콤달콤한 향이 가득 퍼져나갑니다.",
                                audio: "사각사각 섞이는 자연스러운 ASMR 효과음 극대화"
                            },
                            {
                                title: "Scene 7: 재료와 시럽 섞어주기 (융합)",
                                visual: `나무 주걱으로 재료들을 원을 그리며 천천히 섞어주자 설탕이 스르르 녹으며 투명한 청의 비주얼로 변화하는 샷`,
                                prompt: `A medium close-up shot of a wooden spoon gently stirring the ingredients in a bowl, dissolving sugar syrup coating the translucent pieces`,
                                voiceover: "골고루 베어들 수 있도록 위아래로 부드럽게 뒤섞어 설탕을 녹여줍니다.",
                                audio: "꾸덕하게 비벼지고 섞이는 기분 좋은 질감 소리"
                            },
                            {
                                title: "Scene 8: 열소독한 유리병 소독 (준비)",
                                visual: `김이 솔솔 나는 물에서 소독하여 투명하게 마른 밀폐식 유리병들이 선반 위에 거꾸로 세워져 있는 아늑한 위생 샷`,
                                prompt: `Cozy clean glass storage jars drying on a kitchen shelf, soft focus background, pristine sanitation, home preserving concept`,
                                voiceover: "오래 보관하기 위해 미리 끓는 물로 깨끗하게 열소독한 보관 유리병을 세워 준비해 둡니다.",
                                audio: "유리가 가볍게 달그락 부딪히는 맑은 효과음"
                            },
                            {
                                title: "Scene 9: 숙성과 기다림 (절정)",
                                visual: `투명한 유리병에 가득 담긴 [${topic}]의 단면을 클로즈업하여, 은은하게 비치는 오버숄더 라이팅을 통해 영롱한 투명함을 극대화한 뷰`,
                                prompt: `A beautiful close-up shot of finished ${topic} stored inside a clear glass jar on a wooden shelf, warm backlighting highlighting translucent textures`,
                                voiceover: "병에 담아 꼭꼭 눌러 담은 뒤, 맛이 깊게 우러나도록 기다림의 시간을 보냅니다.",
                                audio: "시계 소리처럼 잔잔하고 아늑한 로파이 피아노 연주"
                            },
                            {
                                title: "Scene 10: 싱그러운 한 잔의 완성 (결말)",
                                visual: `유리잔에 완성된 [${topic}]과 탄산수/얼음을 가득 채워, 탄산이 톡톡 튀어 오르는 청량감 넘치는 시각적 디테일 연출 샷`,
                                prompt: `A slow-motion cinematic shot of pouring sparkling water into a glass with ice and finished ${topic}, bubble fizzing, garnishing with a green mint leaf`,
                                voiceover: "보기만 해도 가슴이 상쾌해지는 싱그러운 한 잔. 정성이 만들어낸 오늘의 힐링입니다.",
                                audio: "얼음 달그락거리는 맑은 소리와 톡 쏘는 탄산 소리, 경쾌한 재즈 피아노 아웃트로"
                            }
                        ];
                    } else {
                        // general_cooking
                        baseScenes = [
                            {
                                title: "Scene 1: 아늑한 주방과 재료 (오프닝)",
                                visual: `주방 선반 위 조리 도구들과 도마 옆에 신선한 고기, 야채 등 [${topic}]의 모든 핵심 식재료들이 예쁘게 손질 대기 중인 뷰`,
                                prompt: `A close-up aesthetic shot of fresh cooking ingredients for ${topic}, cut vegetables, raw components in bowls on kitchen counter, soft warm backlight`,
                                voiceover: `오늘의 따뜻한 한 끼, 정갈한 손길로 [${topic}]를 만들어 볼 시간입니다.`,
                                audio: "요리가 시작되기 전 평화로운 어쿠스틱 통기타 멜로디"
                            },
                            {
                                title: "Scene 2: 흐르는 물에 재료 세척 (준비)",
                                visual: `싱크대 보울 속 채반에 야채들을 담고 위에서 시원하게 물을 뿌려 가며 흙과 수분을 털어내는 청량한 샷`,
                                prompt: `A close-up shot of washing green vegetables and ingredients in a metal colander under cold running tap water, splashes, clean water droplets`,
                                voiceover: "건강하고 신선한 요리의 기본, 흐르는 맑은 물에 재료들을 한 번 더 깨끗하게 헹궈냅니다.",
                                audio: "시원하게 흐르는 싱크대 물줄기 소리 효과음"
                            },
                            {
                                title: "Scene 3: 정교한 야채 손질 (전개)",
                                visual: `도마 위에서 양파, 대파 또는 채소들을 균일한 간격으로 사각사각 써는 칼끝에 포커스를 둔 디테일 뷰`,
                                prompt: `A close-up macro shot of chef hands slicing vegetables on a wooden chopping board, clean cuts, green herbs, fresh prep work`,
                                voiceover: "칼질 한 번에도 마음을 다해, 조화롭게 먹기 좋은 크기로 하나하나 썰어 나갑니다.",
                                audio: "탁탁탁 도마에 칼날이 닿는 규칙적이고 맑은 나무 소리 ASMR"
                            },
                            {
                                title: "Scene 4: 팬 예열 및 가열 (전개)",
                                visual: `가스레인지 불을 켜고 달궈진 두꺼운 팬 위로 신선한 올리브유/기름을 휘둘러 붓는 감성적인 로우앵글 샷`,
                                prompt: `A close-up of pouring olive oil into a hot cast iron skillet on a gas stove burner, glowing fire flame underneath, kitchen heat`,
                                voiceover: "팬에 은은하게 불을 올리고, 조심스레 기름을 두른 뒤 열기를 가둡니다.",
                                audio: "치익- 불길이 켜지고 차르르 기름 흐르는 효과음"
                            },
                            {
                                title: "Scene 5: 재료 투하 및 볶기 (융합)",
                                visual: `팬 위로 손질한 고기와 단단한 야채들을 쏟아 넣는 순간, 자욱하게 피어오르는 하얀 스팀 연기와 볶는 손놀림`,
                                prompt: `A dynamic close-up of tossing meat and vegetables in a hot sizzling pan, steam rising, oil splashing, action cooking shot`,
                                voiceover: "가장 먼저 익어야 할 재료들을 넣고 센 불에 빠르게 볶아내어 육즙과 식감을 살립니다.",
                                audio: "치이이익- 재료가 닿자마자 맛있게 익는 요리 마찰음 극대화, 빠른 어쿠스틱 리듬"
                            },
                            {
                                title: "Scene 6: 특제 소스/육수 투하 (클라이맥스 오프닝)",
                                visual: `재료들이 절반쯤 익은 팬 위로 붉은 양념장이나 맑은 우려낸 육수를 국자로 가득 부어 끓어오르게 만드는 샷`,
                                prompt: `A close-up shot of pouring red spicy cooking sauce or broth from a ladle into a boiling pot with ingredients, sauce spreading, slow-motion`,
                                voiceover: "요리의 핵심을 채울 특제 비법 양념을 아낌없이 골고루 부어줍니다.",
                                audio: "콸콸콸 육수가 쏟아지는 소리 효과음"
                            },
                            {
                                title: "Scene 7: 보글보글 졸여내기 (클라이맥스)",
                                visual: `육수가 지글지글 끓어오르며 재료들 속으로 소스가 녹아들고 표면에 거품이 톡톡 터지는 보글보글 슬로우모션 샷`,
                                prompt: `An extreme close-up of boiling food stew bubbling in a hot pot, thick red sauce simmering, bubbling textures, ultimate delicious food visual`,
                                voiceover: "불을 낮추고 뭉근하게 졸여내며, 양념의 진한 깊은 맛이 재료 깊숙이 베어들게 만듭니다.",
                                audio: "보글보글 지글지글 기분 좋게 끓어오르는 소리, 웅장하고 풍성한 오케스트라 사운드"
                            },
                            {
                                title: "Scene 8: 신선한 허브 및 가니쉬 토핑 (절정 오프닝)",
                                visual: `거의 완성된 요리 위에 고소한 깨나 파릇파릇한 대파, 허브 가루를 솔솔 뿌리는 손가락 스캐터링 클로즈업 샷`,
                                prompt: `A macro close-up of sprinkling green herbs or sesame seeds onto a hot finished dish, steam rising, aesthetic plating detail`,
                                voiceover: "마지막 향긋함을 더해줄 신선한 가니쉬를 솔솔 뿌려 풍미의 방점을 찍습니다.",
                                audio: "차르르 흩날려 뿌려지는 섬세한 소리"
                            },
                            {
                                title: "Scene 9: 정갈한 플레이팅 (절정)",
                                visual: `도자기 그릇에 요리를 깔끔하고 푸짐하게 덜어내어 담은 뒤, 테이블 한가운데 조명 아래로 슬며시 내려놓는 모습`,
                                prompt: `A medium close-up of placing a beautiful ceramic bowl filled with freshly cooked hot food onto a dining table, cozy home lighting, perfect plating`,
                                voiceover: "정성을 다해 차려낸 오늘의 한 그릇. 가장 먹음직스러운 모습으로 플레이팅을 마칩니다.",
                                audio: "그릇이 탁자 위에 스르륵 놓이는 아늑한 소리, 피아노와 첼로의 따뜻한 복귀"
                            },
                            {
                                title: "Scene 10: 행복한 첫 입 (결말)",
                                visual: `김이 모락모락 나는 요리를 숟가락/젓가락으로 듬뿍 떠서 한 입 시식하는 순간, 김 서림 너머로 환하게 지어지는 시각적 만족의 엔딩 뷰`,
                                prompt: `A slow-motion close-up of a spoon lifting a perfect bite of hot cooked food with steam rising, blurry warm dining background, ultimate comfort food`,
                                voiceover: "오랜 시간 공들여 완성한 한 그릇. 소중한 사람들과 나누는 가장 행복하고 맛있어지는 힐링입니다.",
                                audio: "후후 부는 호흡 소리, 따뜻하고 여운이 깊은 포크 재즈 피아노 아웃트로"
                            }
                        ];
                    }
                } else if (videoType === "travel_vlog") {
                    baseScenes = [
                        {
                            title: "Scene 1: 떠나는 설렘 (오프닝)",
                            visual: `가벼운 짐을 챙겨 밖으로 나서거나 창밖으로 구름 낀 풍경이 흘러가는 열차/차량 내부의 시네마틱 무빙 샷`,
                            prompt: `A cinematic point of view shot looking out of a vehicle window at scenic road and trees, warm morning sun, freedom travel concept`,
                            voiceover: `반복되는 삭막한 도심을 잠시 벗어나, 오늘 새로운 여정을 떠납니다: [${topic}].`,
                            audio: "시동 소리 혹은 부드러운 바람 소리와 잔잔한 인디 팝 인트로"
                        },
                        {
                            title: "Scene 2: 설레는 도착 (전개)",
                            visual: `목적지에 도달하여 카메라가 인물의 발걸음 뒤를 부드럽게 추적하거나, 장소 전체를 부드럽게 패닝하며 보여주는 뷰`,
                            prompt: `A cinematic tracking shot following a traveler walking into a beautiful landscape related to ${topic}, rich natural details, sunny day`,
                            voiceover: "마침내 마주한 목적지의 맑은 공기. 마음까지 시원해지는 바람이 불어옵니다.",
                            audio: "풀벌레 소리, 산들바람 소리 효과음, 산뜻한 템포의 어쿠스틱 비트"
                        },
                        {
                            title: "Scene 3: 현지의 소소한 발견 (전개)",
                            visual: `길가에 피어난 독특한 꽃이나 클래식한 골목길 벽돌, 작은 이정표를 아래에서 위로 패닝하는 매크로 샷`,
                            prompt: `A detailed close-up shot of a rustic wooden sign or wild flower on the road to ${topic}, sunlight filtering, vintage travel vibe`,
                            voiceover: "소박하지만 시선이 머무는 길가 골목마다 새로운 이야기가 숨 쉬고 있습니다.",
                            audio: "사뿐사뿐 걷는 아늑한 발소리 효과음"
                        },
                        {
                            title: "Scene 4: 여정 속의 맛과 향 (식사)",
                            visual: `그 지역의 특산 요리나 따뜻한 로컬 음료에서 피어오르는 미세한 김을 포착한 감성적인 푸드 매크로 샷`,
                            prompt: `A delicious close-up of local street food or coffee served on a wooden table, steam gently rising, rich warm colors`,
                            voiceover: "그 지역의 맛과 향기를 느껴보는 일, 여행이 선물하는 뜻밖의 미각적 쉼표입니다.",
                            audio: "접시가 살짝 놓이는 경쾌한 소리 효과음"
                        },
                        {
                            title: "Scene 5: 특별한 감상 (클라이맥스 오프닝)",
                            visual: `목적지 전경을 한눈에 담아낼 수 있는 높은 전망대 또는 언덕 위에서 사방을 둘러보는 카메라 패닝 무브 샷`,
                            prompt: `A scenic high-angle camera sweep of the beautiful environment surrounding ${topic}, epic view, atmospheric distance`,
                            voiceover: "눈앞에 드넓게 펼쳐지는 장엄한 풍경 속에서, 지쳐있던 복잡한 마음이 씻겨 내려갑니다.",
                            audio: "웅장한 신스 사운드 융합"
                        },
                        {
                            title: "Scene 6: 특별한 순간 (클라이맥스)",
                            visual: `장소의 가장 핵심적이고 아름다운 풍광 (바다, 산, 하늘 등)을 렌즈 플레어와 함께 시네마틱하게 포착한 와이드 풀샷`,
                            prompt: `An epic wide angle cinematic shot of the gorgeous landscape of ${topic}, volumetric golden sunlight, beautiful lens flare, awe-inspiring scale`,
                            voiceover: "이곳에서만 만날 수 있는 찰나의 눈부신 풍경을 오롯이 두 눈에 담아봅니다.",
                            audio: "현악기와 피아노 멜로디가 어우러지며 가장 감동적으로 음악 고조"
                        },
                        {
                            title: "Scene 7: 노을이 내려앉는 순간 (황혼)",
                            visual: `하늘이 주황빛과 붉은빛으로 물들어가며 피사체 뒤로 해가 넘어가는 황홀한 타임랩스 혹은 슬로우모션 샷`,
                            prompt: `A slow transition of sky colors changing to deep orange and violet at sunset, landscape of ${topic}, cinematic light leak`,
                            voiceover: "하늘에 붉은 물감이 번지듯, 노을이 온 세상을 평화롭게 감싸 안습니다.",
                            audio: "고요히 불어오는 쓸쓸하면서도 따뜻한 바람 소리"
                        },
                        {
                            title: "Scene 8: 고요한 쉼표 (절정)",
                            visual: `노을빛이 잔잔하게 물든 벤치에 앉아 조용히 휴식을 취하거나, 따뜻한 음료 한 잔을 마시며 사색을 즐기는 실루엣 샷`,
                            prompt: `A peaceful sunset shot of a person relaxing by a scenic view related to ${topic}, cozy and emotional retro mood, silhouette`,
                            voiceover: "걸음을 늦추고 온전히 멈추어 서는 시간. 자연이 건네는 고요한 위로를 마주합니다.",
                            audio: "가만히 타오르는 모닥불 소리 혹은 부드러운 파도 소리 ASMR"
                        },
                        {
                            title: "Scene 9: 하루를 기록하며 (정리)",
                            visual: `수첩에 펜으로 가볍게 스케치를 하거나 모바일 화면으로 찍은 사진을 한 장씩 넘겨 보는 편안한 인물의 정면 샷`,
                            prompt: `Close-up shot of traveler looking through photos on digital camera screen, cozy warm tent interior or campfire lighting`,
                            voiceover: "카메라 액정 속 박제된 순간들 하나하나가 잊지 못할 삶의 소중한 기록이 됩니다.",
                            audio: "찰칵 찰칵 카메라 셔터 소리 효과음"
                        },
                        {
                            title: "Scene 10: 일상으로의 복귀 (결말)",
                            visual: `밤하늘이나 도시의 가로등 불빛이 하나둘 켜지는 거리 속으로 스며들며 카메라가 천천히 아웃포커싱되는 감성적인 보케 샷`,
                            prompt: `A beautiful dreamlike bokeh shot of distant city lights at twilight, warm glowing colors, emotional end to travel vlog`,
                            voiceover: "오늘 하루 숲과 바람이 선물한 여운을 품고, 다시 힘차게 나의 일상으로 돌아갑니다.",
                            audio: "부드럽고 긴 페이드아웃의 바이올린 서스테인과 피아노 솔로"
                        }
                    ];
                } else if (videoType === "tech_future") {
                    baseScenes = [
                        {
                            title: "Scene 1: 기술의 태동 (오프닝)",
                            visual: `어두운 하이테크 실험실 내부에서 서버 랙의 블루/바이올렛 LED가 순차적으로 점멸하며 홀로그램 데이터 링이 허공에 연산되는 샷`,
                            prompt: `A high-tech laboratory with glowing computer servers, blue holographic data structures swirling in air, cybernetic mood, futuristic design`,
                            voiceover: `상상 속에만 머물던 미래형 아이디어, [${topic}]의 위대한 첫 번째 가동이 시작됩니다.`,
                            audio: "지잉- 전원이 켜지는 전자 기계 효과음, 장엄한 로봇 신스 사운드"
                        },
                        {
                            title: "Scene 2: 지능적 연산 (전개)",
                            visual: `회로 기판을 흐르는 광섬유 불빛과 디스플레이 화면 위로 인공지능 분석 데이터 그래프가 복잡하게 연산되며 지나가는 매크로 샷`,
                            prompt: `A macro detail shot of electric circuit board with glowing light paths, futuristic interface displaying algorithms and charts`,
                            voiceover: "미세한 오차도 허용하지 않는 인공지능 알고리즘이 스스로 움직이며 데이터를 설계해 나갑니다.",
                            audio: "띠리릭 틱- 연산 전자음 효과음, 절제된 리드미컬 테크노 비트"
                        },
                        {
                            title: "Scene 3: 코어 부품 기하학 연산 (발전)",
                            visual: `기계 부품들이 3D 홀로그램 도면 형태로 공중에서 기하학적으로 조립되며 맞춰지는 복잡한 디지털 그래픽 샷`,
                            prompt: `A 3D holographic wireframe of mechanical components assembling automatically in air, glowing high-tech lab setting`,
                            voiceover: "정밀하게 계산된 조각들이 완벽한 합을 이루며 형태를 갖춰 나갑니다.",
                            audio: "지지직- 홀로그램 굴절 마찰 효과음"
                        },
                        {
                            title: "Scene 4: 에너지 충전 단계 (충전)",
                            visual: `투명한 원통형 유리 튜브를 따라 충전 에너지를 시각화하는 하늘색 전기 스파크 파동이 물결치며 뻗어 나가는 모습`,
                            prompt: `Energy pulsing through high tech blue glass conduits, electric sparks, futuristic energy generator interior, macro detail`,
                            voiceover: "기동 전력을 주입하자 코어 내부 깊숙이 푸른 동력이 차오르기 시작합니다.",
                            audio: "쉬이이이- 에너지가 압축 주입되는 압력 효과음"
                        },
                        {
                            title: "Scene 5: 시스템 기동 (클라이맥스 오프닝)",
                            visual: `코어 구동부에서 거대한 에너지가 활성화되며 푸른빛의 스펙트럼 광선과 홀로그램이 눈부시게 폭발하기 직전의 떨림 샷`,
                            prompt: `High-tech system core trembling under massive load, glowing blue particle aura, sci-fi machine control room`,
                            voiceover: "이제 인류의 생활을 도울 마지막 통합 연결 링크가 완성되려 합니다.",
                            audio: "저음의 웅장한 진동 기계음 효과음"
                        },
                        {
                            title: "Scene 6: 임계점 도약 (클라이맥스)",
                            visual: `코어 구동부에서 거대한 에너지가 활성화되며 푸른빛의 스펙트럼 광선과 홀로그램이 눈부시게 폭발하는 로우앵글 시네마틱 샷`,
                            prompt: `An epic climax shot of a futuristic machine core activating, emitting bright white and violet particles, beams of light, masterpiece sci-fi style`,
                            voiceover: "마침내 임계점을 넘어선 순간, 인류의 삶을 송두리째 바굴 기술적 도약이 실현됩니다.",
                            audio: "에너지가 고밀도로 충전되어 강렬하게 발산하는 우퍼 베이스 사운드 효과음"
                        },
                        {
                            title: "Scene 7: 실시간 디스플레이 데이터 분석 (전환)",
                            visual: `컴퓨터 화면 모니터에 초록빛 데이터 로그 텍스트들이 매트릭스 화면처럼 빛을 내며 수없이 빠르게 타이핑되는 클로즈업 샷`,
                            prompt: `Close-up shot of computer screen showing fast scrolling data streams green text logs, hacker terminal style, futuristic code`,
                            voiceover: "시스템이 완벽하게 가동되었음을 모든 디바이스가 입증하고 있습니다.",
                            audio: "타타타타 타이핑 기계식 키보드 소리 효과음"
                        },
                        {
                            title: "Scene 8: 실생활 융합 (절정)",
                            visual: `미래형 디바이스를 조작하는 인간의 손끝 터치에 맞춰 주거 환경 조명이 자연스럽게 변하고 정교한 편의가 제공되는 모습`,
                            prompt: `A warm sci-fi shot of a human hand interacting with glowing soft user interface on wall, interior smart home changing colors, futuristic daily life`,
                            voiceover: "기술은 언제나 사람을 향하며, 우리의 손길 닿는 모든 곳을 더 지능적이고 따뜻하게 변화시킵니다.",
                            audio: "맑고 투명한 스마트 알림 전자 챠임 소리"
                        },
                        {
                            title: "Scene 9: 무인 자율 이동 수단의 움직임 (풍경)",
                            visual: `마천루 사이 공중 빌딩 연결 통로를 매끄럽게 비행하며 스쳐 지나가는 스마트 자율주행 모빌리티의 슬로우모션 패닝 샷`,
                            prompt: `Cinematic panning shot of autonomous flying vehicle gliding between eco skyscrapers, modern bright daylight sci-fi design`,
                            voiceover: "공중과 땅의 모든 모빌리티가 끊김 없이 하나의 거대한 네트워크 속에서 안전하게 융합됩니다.",
                            audio: "슈우우욱 부드럽게 공기를 가르는 비행 모터 효과음"
                        },
                        {
                            title: "Scene 10: 미래의 청사진 (결말)",
                            visual: `수많은 날아다니는 탈것들과 울창한 수직 정원이 기하학적으로 어우러진 Utopian 하이테크 메가 시티의 석양 비행 뷰 샷`,
                            prompt: `An epic high-angle aerial view of a futuristic smart city with flying vehicles and green vertical eco towers at sunset, hopeful futuristic scale`,
                            voiceover: "오늘 탄생한 혁신은, 우리가 그려갈 찬란한 미래의 이정표가 될 것입니다.",
                            audio: "희망차고 웅장하며 감동적으로 피날레를 장식하는 오케스트라 사운드"
                        }
                    ];
                } else {
                    // Standard narrative structure with more descriptive text
                    baseScenes = [
                        {
                            title: "Scene 1: 이야기의 시작 (오프닝)",
                            visual: `[${topic}]의 핵심 피사체를 부드럽게 감싸는 감성적인 라이팅과 웅장한 여백을 살린 시네마틱 오프닝 뷰`,
                            prompt: `A cinematic beautiful establishing shot of ${topic}, soft natural warm lighting, peaceful atmosphere, high resolution`,
                            voiceover: `우리가 마주할 오늘의 주인공, [${topic}]의 신비로운 이야기의 첫 페이지를 엽니다.`,
                            audio: "잔잔한 어쿠스틱 기타 인트로와 조용한 바람 소리"
                        },
                        {
                            title: "Scene 2: 디테일의 전개 (전개)",
                            visual: `카메라가 피사체의 측면을 천천히 트래킹하며, 표면의 미세한 굴곡과 깊이감이 전해지는 고품질 클로즈업 샷`,
                            prompt: `A slow tracking medium shot of ${topic}, capturing fine details and textures, cinematic depth of field, professional grade`,
                            voiceover: "가까이 다가갈수록, 그 안에 담긴 섬세한 매력과 숨겨진 이야기들이 숨쉬기 시작합니다.",
                            audio: "주변 환경 소리 효과음, 조용하게 흐르는 감성 피아노 연주"
                        },
                        {
                            title: "Scene 3: 숨은 디테일의 발견 (감성)",
                            visual: `피사체 모서리 끝을 타는 미세한 미학적인 하이라이트와 몽환적으로 흐려지는 얕은 피사체 심도 매크로 샷`,
                            prompt: `Extreme macro shot focusing on a tiny detail of ${topic}, golden sunlight highlight, gorgeous depth of field, warm light leaks`,
                            voiceover: "눈여겨보지 않으면 스쳐 지나갔을 소박하지만 아름다운 구석을 찾아봅니다.",
                            audio: "신비롭고 은은하게 번지는 차임 벨 톤"
                        },
                        {
                            title: "Scene 4: 움직임의 미학 (준비)",
                            visual: `피사체의 움직임 또는 피사체가 있는 공간으로 들어오는 감각적인 카메라 무빙과 자연광 렌즈 플레어의 일치`,
                            prompt: `Cinematic panning slow motion shot of ${topic}, light rays creating beautiful warm lens flares, peaceful atmospheric look`,
                            voiceover: "빛의 궤적을 따라서 주변 환경은 점점 깊은 감동을 담아낼 준비를 마칩니다.",
                            audio: "현악기의 무드가 조용히 고조되는 크레센도 인트로"
                        },
                        {
                            title: "Scene 5: 클라이맥스 조장 (빌드업)",
                            visual: `어둠 속에서 강하게 뿜어져 나오는 역동적인 광원 조명과 주인공 피사체의 정면 실루엣 스태틱 샷`,
                            prompt: `Dramatic medium shot of ${topic} with high contrast lighting, silhouette casting long shadow, mysterious cinematic storytelling tone`,
                            voiceover: "모든 조각이 맞아 들어가는 이 순간, 긴장과 설렘이 교차하며 클라이맥스로 나아갑니다.",
                            audio: "긴장감을 한 옥타브 올려 주는 바이올린 서스테인"
                        },
                        {
                            title: "Scene 6: 시각적 극치 (클라이맥스)",
                            visual: `강렬한 명암 대비와 아름다운 렌즈 플레어 속에서 피사체의 가장 웅장하고 아름다운 모션을 잡아낸 드라마틱한 로우앵글 샷`,
                            prompt: `An epic low-angle dramatic shot of ${topic}, heavy contrast, beautiful lighting flare, masterpiece quality, emotional impact`,
                            voiceover: "가장 빛나는 바로 이 순간, 잊지 못할 시각적 경이로움이 화면 가득 펼쳐집니다.",
                            audio: "가장 웅장한 톤으로 고조되는 오케스트라 현악 연주"
                        },
                        {
                            title: "Scene 7: 감동의 잔상 (릴렉스)",
                            visual: `격정적인 순간이 지난 뒤, 먼지가 햇살 아래서 부드럽게 유영하며 반짝이는 평온한 역광의 롱 샷`,
                            prompt: `A quiet long shot of dust particles floating in bright sunlight beams, cozy and reflective mood, after the climax`,
                            voiceover: "뜨거운 격정이 지나간 숲과 도시 위로 고요하고 맑은 평화가 다시 잦아듭니다.",
                            audio: "격정적인 악기가 물러나고 평온하고 긴 톤의 패드 음악 사운드"
                        },
                        {
                            title: "Scene 8: 감성적 클로즈업 (절정)",
                            visual: `따뜻한 색감과 몽환적인 포커스 아웃 보케 속에서 아늑한 디테일이 눈을 뗄 수 없게 만드는 서정적인 카메라 클로즈업 샷`,
                            prompt: `A poetic close-up shot of ${topic}, dreaming background bokeh, soft nostalgic tones, cinematic color palette`,
                            voiceover: "바쁜 호흡을 잠시 멈추고, 깊어지는 감성에 온전히 몰입해 보는 순간입니다.",
                            audio: "고요히 들리는 바람 나부끼는 소리 등 미세 자연음 효과음"
                        },
                        {
                            title: "Scene 9: 기억의 소환 (회상)",
                            visual: `빛 바랜 레트로 필름 카메라 필터와 스크래치 질감이 입혀져 기억의 한 조각을 회상하게 만드는 정적인 측면 뷰`,
                            prompt: `Nostalgic film look style shot of ${topic}, vintage colors, subtle grain and light leaks, memory flashback vibe`,
                            voiceover: "지나온 이야기들을 마음에 켜켜이 차곡차곡 쌓아 올리며 마지막 여정을 끝마칠 차례입니다.",
                            audio: "오르골 소리처럼 빈티지하고 쓸쓸한 피아노 건반 음"
                        },
                        {
                            title: "Scene 10: 깊어지는 여운 (결말)",
                            visual: `석양빛이 붉게 물드는 지평선/창가를 비추며 카메라가 멀어지고, 잔잔한 감성을 담아 완성되는 시네마틱 엔딩 샷`,
                            prompt: `A breathtaking slow zoom out shot to the beautiful sunset sky, reflecting the peaceful theme of ${topic}, warm and nostalgic vibe`,
                            voiceover: "[${topic}]가 남긴 깊은 여운은, 마음에 남아 오랫동안 머무를 것입니다.",
                            audio: "은은하고 차분하게 잔향을 남기며 잦아드는 피아노 아웃트로"
                        }
                    ];
                }
            }

            // Adjust scene count based on selection
            let finalScenes = [];
            if (activeSceneCount === 3) {
                // Smart pacing selection (Start, Middle, End)
                finalScenes = [baseScenes[0], baseScenes[4] || baseScenes[2], baseScenes[baseScenes.length - 1]];
            } else if (activeSceneCount === 5) {
                // Smart pacing selection (Scene 1, 3, 5, 8, 10 if length is 10, else slice)
                if (baseScenes.length >= 10) {
                    finalScenes = [baseScenes[0], baseScenes[2], baseScenes[4], baseScenes[7], baseScenes[9]];
                } else {
                    finalScenes = baseScenes.slice(0, 5);
                }
            } else {
                // All scenes (up to 10)
                finalScenes = baseScenes;
            }

            // Render Storyboard
            storyOutputList.innerHTML = "";
            finalScenes.forEach((scene, index) => {
                // Blend global active tone with scene prompts
                const fullPrompt = `${scene.prompt}, ${activeTone}, 16:9 ratio`;
                
                const card = document.createElement("div");
                card.className = "glass-panel";
                card.style.padding = "20px";
                card.style.border = "1.5px solid var(--border-color)";
                card.style.borderRadius = "var(--radius-md)";
                card.style.display = "flex";
                card.style.flexDirection = "column";
                card.style.gap = "12px";
                card.style.background = "var(--bg-page-deep)";
                card.style.animation = "fadeIn 0.3s ease";
                card.style.marginBottom = "12px";
                
                card.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed var(--border-color); padding-bottom: 8px;">
                        <strong style="color: var(--secondary); font-size: 1.05rem;">🎬 ${scene.title}</strong>
                        <span style="font-size: 0.85rem; background: var(--border-color); padding: 2px 8px; border-radius: 10px; font-weight: 700;">비디오 분량: 5초</span>
                    </div>
                    <div>
                        <small style="color: var(--text-muted); display: block; font-weight: 700; margin-bottom: 2px;">👁️ 화면 연출 (Visual)</small>
                        <p style="font-size: 0.95rem; font-weight: 500; margin: 0; line-height: 1.5;">${scene.visual}</p>
                    </div>
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                            <small style="color: var(--text-muted); font-weight: 700;">🪄 AI 프롬프트 (Firefly / Runway / Sora)</small>
                            <button class="btn btn-outline btn-xs copy-scene-prompt-btn" style="padding: 2px 6px; font-size: 0.75rem;">복사</button>
                        </div>
                        <textarea style="width: 100%; height: 60px; padding: 8px; font-size: 0.85rem; border: 1.5px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-card); color: var(--text-main); font-family: monospace; resize: none; outline: none;" readonly>${fullPrompt}</textarea>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                                <small style="color: var(--text-muted); font-weight: 700;">💬 내레이션/자막 (Audio)</small>
                                <button class="btn btn-outline btn-xs copy-scene-voice-btn" style="padding: 2px 6px; font-size: 0.75rem;">복사</button>
                            </div>
                            <p class="scene-voiceover" style="font-size: 0.85rem; font-weight: 600; line-height: 1.4; color: var(--text-main); background: var(--bg-card); padding: 8px; border: 1.5px solid var(--border-color); border-radius: var(--radius-sm); margin: 0;">${scene.voiceover}</p>
                        </div>
                        <div>
                            <small style="color: var(--text-muted); display: block; font-weight: 700; margin-bottom: 2px;">🎵 오디오 & BGM 가이드</small>
                            <p style="font-size: 0.85rem; line-height: 1.4; color: var(--text-muted); background: var(--bg-card); padding: 8px; border: 1.5px solid var(--border-color); border-radius: var(--radius-sm); margin: 0;">${scene.audio}</p>
                        </div>
                    </div>
                `;

                // Add single item copy events
                card.querySelector(".copy-scene-prompt-btn").addEventListener("click", () => {
                    navigator.clipboard.writeText(fullPrompt).then(() => alert("해당 장면 프롬프트가 복사되었습니다!"));
                });
                card.querySelector(".copy-scene-voice-btn").addEventListener("click", () => {
                    navigator.clipboard.writeText(scene.voiceover).then(() => alert("해당 자막/내레이션 텍스트가 복사되었습니다!"));
                });

                storyOutputList.appendChild(card);
            });

            // Show list and buttons
            storyOutputPlaceholder.style.display = "none";
            storyOutputList.style.display = "flex";
            copyAllStoryBtn.style.display = "block";

            // Copy all storyboard Markdown logic
            copyAllStoryBtn.onclick = () => {
                let markdownContent = `# AI 생성 비디오 시나리오: ${topic}\n\n`;
                finalScenes.forEach((scene, i) => {
                    const fullPrompt = `${scene.prompt}, ${activeTone}, 16:9 ratio`;
                    markdownContent += `## ${scene.title}\n`;
                    markdownContent += `* **화면 연출 (Visual):** ${scene.visual}\n`;
                    markdownContent += `* **AI 프롬프트 (Prompt):** \`${fullPrompt}\`\n`;
                    markdownContent += `* **내레이션/자막 (Voiceover):** "${scene.voiceover}"\n`;
                    markdownContent += `* **오디오 & BGM:** ${scene.audio}\n\n`;
                });

                navigator.clipboard.writeText(markdownContent).then(() => {
                    const toast = document.getElementById("story-toast");
                    if (toast) {
                        toast.classList.add("show");
                        setTimeout(() => toast.classList.remove("show"), 2000);
                    } else {
                        alert("전체 시나리오가 마크다운으로 복사되었습니다!");
                    }
                });
            };
        });
    }
}

// Image Lightbox Functions
window.openLightbox = function(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightbox.classList.add("show");
};

window.closeLightbox = function() {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox) return;
    lightbox.classList.remove("show");
};

