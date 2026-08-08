// Premiere AI Basics Interactive Javascript

// 1. Data Definitions
const courseData = {
    ch1: [
        { id: "1-1", title: "프리미어 설치와 첫 프로젝트 만들기", duration: "5분", desc: "Creative Cloud에서 설치 → 새 프로젝트 → 클립 3개 가져오기(Import) → 자동으로 타임라인에 배치되는 과정 확인", caption: "프로젝트 = 작업 파일, 시퀀스 = 편집 도화지", resource: "실습 소스팩 A" },
        { id: "1-2", title: "화면 구성 4개 패널만 알면 끝", duration: "5분", desc: "소스 모니터·프로그램 모니터·프로젝트 패널·타임라인 패널 역할 소개, 작업 영역을 '편집(Editing)'으로 전환, 패널 크기 조절·초기화", caption: "화면이 꼬이면 → 작업 영역 재설정", resource: "실습 소스팩 A" },
        { id: "1-3", title: "타임라인 구조 파헤치기", duration: "5분", desc: "트랙 헤드·시퀀스 헤드·시간 눈금자 영역 구분, V트랙/A트랙 개념, 스케일 슬라이더로 확대·축소", caption: "+/- 키로 타임라인 확대·축소", resource: "실습 소스팩 A" },
        { id: "1-4", title: "선택 도구와 자르기 도구로 컷 편집", duration: "6분", desc: "선택 도구(V)로 클립 이동·트리밍, 자르기 도구(C)로 컷 분할, 잔물결 삭제로 빈 공간 없애기", caption: "V=선택, C=자르기, 지우고 나면 잔물결 삭제", resource: "실습 소스팩 A" },
        { id: "1-5", title: "루미트리 기본 교정으로 색 살리기", duration: "5분", desc: "Lumetri Color → 기본 교정에서 노출·대비·색온도 조정, 전/후 비교 토글", caption: "노출 → 대비 → 색온도 순서로", resource: "실습 소스팩 C" },
        { id: "1-6", title: "루미트리 프리셋으로 영화 색감 만들기", duration: "4분", desc: "크리에이티브 탭의 Look 프리셋 적용, 강도 슬라이더 조절, 프리셋 3종 비교", caption: "프리셋은 100%가 아니라 50~70%만", resource: "실습 소스팩 C" },
        { id: "1-7", title: "Film Impact 전환 효과 적용하기", duration: "5분", desc: "Film Impact 무료 체험판 설치, 효과 패널에서 검색, 클립 사이에 드래그 적용, 지속 시간 조절", caption: "전환은 장면이 바뀔 때만, 남발 금지", resource: "실습 소스팩 A" },
        { id: "1-8", title: "문자 도구로 자막 넣고 30초 영상 완성", duration: "6분", desc: "문자 도구(T)로 제목 자막 입력, 속성 패널에서 글꼴·크기·색·위치 지정, 1차시 배운 것 총동원해 30초 영상 완성", caption: "T키 → 화면 클릭 → 바로 입력", resource: "완성 프로젝트 A" }
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
        
        const targetNavItem = document.querySelector(`.nav-item[data-target="${targetId}"]`);
        if (targetNavItem) targetNavItem.classList.add("active");
        
        // Scroll to top of content area
        const contentArea = document.querySelector(".content-area");
        if (contentArea) contentArea.scrollTop = 0;
        
        // Close sidebar on mobile
        document.body.classList.remove("sidebar-open");
    };

    window.switchChapter = function(chapterId) {
        // 1. Switch to curriculum section
        switchSection('curriculum');
        
        // 2. Select the corresponding chapter tab
        const tabBtn = document.querySelector(`.tab-btn[data-tab="${chapterId}"]`);
        if (tabBtn) {
            tabBtn.click();
        }
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
            card.innerHTML = `
                <div class="clip-card-header">
                    <div class="clip-label-area">
                        <span class="clip-number">클립 ${clip.id}</span>
                        <h4 class="clip-title">${clip.title}</h4>
                    </div>
                </div>
                <p class="clip-desc">${clip.desc}</p>
                <div class="clip-caption-box">
                    <strong>💡 핵심 자막:</strong> "${clip.caption}"
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

