// Premiere AI Basics Interactive Javascript

// 1. Data Definitions
const courseData = {
    ch1: [
        { id: "1-1", title: "프로젝트의 저장 위치와 이름 지정", duration: "5분", desc: "Creative Cloud에서 설치 → 새 프로젝트 → 위치 / 찾아보기  → 만들기", caption: "프로젝트 = 작업 파일, 시퀀스 = 편집 도화지", resource: "", image: "project_save_path.png" },
        { id: "1-2", title: "패널 위치 및 변경", duration: "5분", desc: "소스 모니터·프로그램 모니터·프로젝트 패널·타임라인 패널 역할 소개, 작업 영역을 '편집(Editing)'으로 전환, 패널 크기 조절·초기화", caption: "화면이 꼬이면 → 작업 영역 재설정", resource: "", image: "panel_layout_reset.png" },
        { id: "1-3", title: "작업 영역 설정", duration: "5분", desc: "• (메뉴) 창>작업영역>편집, 새 작업영역으로 저장, 저장된 레이아웃으로 재설정<br>• 우측 상단 편집 아이콘에서 설정", caption: "패널이 닫히거나 위치가 꼬였을 때 저장된 초기 상태로 복구 → 작업영역 초기화", resource: "", image: "workspace_setting.png" },
        { id: "1-4", title: "키보드 단축키 편집", duration: "5분", desc: "편집(Edit) → 키보드 단축키(Keyboard Shortcuts) 실행, 원하는 단축키 기능 사용자 정의 및 프리셋 저장 방법", caption: "자주 쓰는 기능은 편리한 단축키로 설정", resource: "", image: "keyboard_shortcuts.png" },
        { id: "1-5", title: "한글-영문버전 메뉴 언어설정 바꾸기", duration: "5분", desc: "편집창에서→Ctrl+F12 같이 클릭(→콘솔창<br>三 → Debug Database View → Application Language → 한글 ko_KR, 영어 en_US 입력 콘솔창 닫기, 재실행", caption: "윈도우 Ctrl+F12, 맥 Command+F12 눌러서 콘솔창 열기", resource: "", image: "language_setting.png" },
        { id: "1-6", title: "파일/폴더 가져오기", duration: "5분", desc: "• 메뉴 > 파일 > 가져오기(Ctrl+I (i 대문자))<br>• 프로젝트 패널에서 더블 클릭<br>• 프로젝트 패널에서 우클릭 선택<br>• 프로젝트 패널에 드래그해서 가져오기", caption: "가져오기 단축키는 Ctrl+I (i 대문자)", resource: "", image: "import_methods.png" },
        { id: "1-7", title: "소스 영상의 속성 확인하기", duration: "5분", desc: "• 영상 선택 후, 마우스 우클릭 해서 미디어파일 속성 선택<br>• 프로젝트 패널에서 오른쪽으로 스크롤 또는 확장해서 확인", caption: "소스 영상의 속성 확인하기", resource: "" },
        { id: "1-8", title: "타임코드 : 영상의 시간 표시 방식", duration: "5분", desc: "• 영상의 시간 표시 방식, 인디게이터의 위치를 표시<br>• 0프레임, 0초 제일 첫 프레임, 처음으로 : ‘0’ 입력 후 Enter<br>• 1초 : ‘1.’ 입력 후 Enter, 1분 : ‘1..’ 입력 후 Enter", caption: "타임코드 활용하기", resource: "", image: "timecode_setting.png" },
        { id: "1-9", title: "영상 속도 조절하기 / 역재생", duration: "5분", desc: "• 메인메뉴 클립(C ) → 속도/지속지간(S) 설정<br>• 비디오 속성패널 → 속도 조정 버튼 클릭 후 설정<br>• 타임라인 클립 선택후 마우스 우클릭 → 속도/지속지간(S) 설정", caption: "속도/지속지간(S) 설정", resource: "", image: "speed_duration.png" },
        { id: "1-10", title: "도구(Tools) 패널", duration: "5분", desc: "<div style=\"text-align: center; margin-bottom: 12px;\"><img src=\"tool_panel.png\" onclick=\"openLightbox('tool_panel.png')\" style=\"max-width: 100%; border-radius: var(--radius-sm); border: 1.5px solid var(--border-color); cursor: zoom-in;\" alt=\"도구 패널\" /></div><div class=\"tool-table-container\" onclick=\"window.open('tool_table.html', '_blank')\" style=\"cursor: pointer;\"><table class=\"tool-table\"><thead><tr><th>구분</th><th>기본 도구 (단축키)</th><th>하위/세부 도구</th><th>주요 역할 및 특징</th></tr></thead><tbody><tr><td>1. 선택</td><td>선택 도구 (V)</td><td>-</td><td>클립 선택, 이동 및 기본 길이 조절</td></tr><tr><td>2. 트랙 선택</td><td>앞으로 트랙 선택 (A)</td><td>뒤로 트랙 선택 (Shift + A)</td><td>클릭 지점 기준 트랙 일괄 선택</td></tr><tr><td>3. 편집/오디오</td><td>잔물결 편집 (B)</td><td>롤링 편집 (N) / 속도 조정 (R) / 리믹스 도구</td><td>컷 편집, 배속 조절 및 음악 길이 자동 리믹스</td></tr><tr><td>4. 자르기</td><td>자르기 도구 (C)</td><td>-</td><td>클립 분할 (이미지 라벨 누락 부분)</td></tr><tr><td>5. 위치 조정</td><td>밀어넣기 도구 (Y)</td><td>밀기 도구 (U)</td><td>전체 길이 유지하며 내부 장면/위치 이동</td></tr><tr><td>6. 드로잉</td><td>펜 도구 (P)</td><td>-</td><td>키프레임 및 자유 곡선 마스크 생성</td></tr><tr><td>7. 도형</td><td>사각형 도구</td><td>타원 도구 / 다각형 도구</td><td>화면에 사각형/원형/다각형 그래픽 생성</td></tr><tr><td>8. AI 마스크</td><td>오브젝트 마스크</td><td>원형 마스크 / 사각형 마스크 / 펜 마스크</td><td>피사체 자동 인식 및 정밀 영역 선택</td></tr><tr><td>9. 화면 이동</td><td>손 도구 (H)</td><td>확대/축소 도구 (Z)</td><td>타임라인/화면 이동 및 확대/축소</td></tr><tr><td>10. 텍스트</td><td>문자 도구 (T)</td><td>세로 문자 도구</td><td>화면에 가로/세로 자막 입력</td></tr><tr><td>11. AI 생성</td><td>생성형 확장 도구</td><td>-</td><td>AI로 영상(2초) / 오디오(10초) 길이 연장</td></tr></tbody></table><div class=\"table-hint\">🔍 클릭해서 새 탭으로 전체 보기</div></div>", caption: "", resource: "" },
        { id: "1-11", title: "타임라인 보기", duration: "5분", desc: "• 타임라인 패널 하단, 우측 스크롤바 드래그<br>• 키보드 +, - 키 클릭<br>• Alt 키 누른 상태에서 마우스 휠 스크롤<br>• 트랙 두 번 클릭해서 트랙 높이 확대", caption: "+/- 키로 타임라인 확대·축소", resource: "" },
        { id: "1-12", title: "선택 도구와 자르기 도구로 컷 편집", duration: "6분", desc: "선택 도구(V)로 클립 이동·트리밍, 자르기 도구(C)로 컷 분할, 잔물결 삭제로 빈 공간 없애기", caption: "V=선택, C=자르기, 지우고 나면 잔물결 삭제", resource: "실습 소스팩 A" },
        { id: "1-13", title: "루미트리 기본 교정으로 색 살리기", duration: "5분", desc: "• 창(W) → Lumetri 색상 패널 열기 → 편집할 비디오/조정레이어 선택 후 적용<br>• 효과 패널 → 비디오 효과 → 색상 교정 → Lumetri 색상 메뉴 동일<br>• 기본 교정에서 노출·대비·색온도 조정, 전/후 비교 토글", caption: "노출 → 대비 → 색온도 순서로", resource: "", image: "lumetri_basic_concept_2.png" },
        { id: "1-14", title: "필름 이펙트 대시보드(Film Impact Dashboard)", duration: "5분", desc: "• 전환 효과(Transition)와 이펙트(Effect)를 빠르게 적용하고 관리할 수 있는 패널 (비디오, 텍스트)<br>• (메뉴) 창> 확장명 > Film Impack Dashboard 또는 효과패널>비디오 전환/효과", caption: "", resource: "", images: ["film_impact_dashboard_1.png", "film_impact_dashboard_3.png"] }
    ],
    ch2: [
        { id: "2-1", title: "클립 볼륨 조절하기", duration: "5분", desc: "• 전체 볼륨 조절 (Audio Gain) : 클립 선택 후 단축키 G 입력, 또는 마우스 우클릭하고 오디오 게인 선택 -> 원하는 dB 지정<br>• 효과 컨트롤 - 볼륨 (Volume) : 타임라인 클립 선택 후 [효과 컨트롤] 패널, 오디오 레벨 또는 채널 볼륨 조정<br>• 오디오 클립 믹서 : [창] > [오디오 클립 믹서] 선택, 타임라인 인디케이터가 위치한 개별 오디오 클립의 실시간 볼륨 레벨을 세밀하게 조절<br>• 오디오 트랙 믹서 : [창] > [오디오 트랙 믹서] 선택, 특정 트랙(예: A1, A2 전체) 전체의 볼륨 레벨이나 효과(Effect)를 일괄 제어 및 자동화(Read/Write) 조절", caption: "내레이션이 주인공, 음악은 -20dB 아래로", resource: "", images: ["audio_gain.png", "audio_volume_effect.png"] },
        { id: "2-2", title: "받아쓰기 기능으로 음성을 텍스트로", duration: "4분", desc: "텍스트 패널 → 받아쓰기 실행 → 언어(한국어) 지정 → 변환된 대본 확인·텍스트 기반 편집", caption: "받아쓰기 = 모든 AI 편집의 시작점", resource: "", images: ["스크린샷 2026-08-12 171536.png", "스크린샷 2026-08-12 172230.png"] },
        { id: "2-3", title: "텍스트 지우면 영상이 잘린다? AI 텍스트 기반 편집", duration: "6분", desc: "받아쓰기 대본에서 불필요한 문장·추임새 등 선택 → 삭제 → 타임라인에 자동 반영, 일시정지 구간 한 번에 제거", caption: "말버릇 '어…' 검색해서 일괄 삭제", resource: "" }
    ],
    ch3: [
        { id: "3-1", title: "키프레임 첫걸음 — 도형 움직이기", duration: "5분", desc: "• 시간의 흐름에 따라 영상 속성(위치, 크기, 불투명도, 회전 등)의 변화를 주어 움직임을 만드는 기능<br>• 최소 2개의 키프레임(시작점과 끝점)이 설정되면, 프로그램이 그 사이의 변화를 자동으로 보간하여 부드러운 움직임을 생성<br>• 효과 컨트롤 패널>클립 선택 후 [모션-위치/비율조정]에 애니메이션 적용(키프레임)", caption: "키프레임 = 시작점과 끝점만 찍으면 사이는 자동", resource: "", images: ["keyframe_concept_2.png", "keyframe_concept_3.png"] },
        { id: "3-2", title: "마스크 개념과 오브젝트 마스크", duration: "5분", desc: "• 마스크는 화면의 특정 영역만 지정하여 보이게 하거나 가리고, 원하는 부분에만 효과(모자이크, 색보정 등)를 적용할 때 사용하는 기능<br>• 오브젝트 마스크 적용: 클립에 적용한 효과(효과 컨트롤 패널) 하위의 펜 도구(마스크)로 개체의 외곽선을 따서 해당 영역에만 효과를 한정 적용", caption: "마스크 = 보여줄 곳만 오려내는 가위", resource: "", images: ["mask_concept_2.png", "mask_concept_3.png"] },
        { id: "3-3", title: "Firefly로 AI 비디오 만들기 — 장면 계획", duration: "5분", desc: "만들고 싶은 장면을 글로 정리(피사체·움직임·카메라·분위기) → 텍스트→비디오 생성 → 결과 비교·재생성", caption: "🔗 <strong>생성형 AI 바로가기:</strong><ul style='margin: 8px 0 0 16px; padding: 0; text-align: left; display: flex; flex-direction: column; gap: 4px; font-style: normal; list-style-type: disc;'><li><a href='https://firefly.adobe.com' target='_blank' style='color: var(--secondary); text-decoration: underline; font-weight: 700;'>Adobe Firefly 바로가기</a></li><li><a href='https://flow.google' target='_blank' style='color: var(--secondary); text-decoration: underline; font-weight: 700;'>Google Flow 바로가기</a></li><li><a href='https://aistudio.google.com/prompts/new_chat' target='_blank' style='color: var(--secondary); text-decoration: underline; font-weight: 700;'>Google AI Studio 바로가기</a></li></ul>", resource: "장면 계획서", images: ["scene_plan_concept_1.png", "scene_plan_concept_2.png"] },
        { id: "3-4", title: "실습예제 — 시네마틱 인트로", duration: "6분", desc: "• 트랙매트 키 효과로 글자 속에 영상 넣기<br>• AI 배경클립+키프레임 애니메이션+전환효과를 활용한 시네마틱 인트로 완성", caption: "", resource: "", images: ["cinematic_intro_1.png", "cinematic_intro_2.png"] }
    ],
    ch4: [
        { id: "4-1", title: "모션그래픽 템플릿(.mogrt) 사용법", duration: "5분", desc: "그래픽 템플릿 패널 열기, 타이틀 템플릿 드래그 적용, 텍스트·색상 커스터마이징", caption: "템플릿은 디자인 외주, 수정은 내 맘대로", resource: "내장 템플릿", image: "mogrt_usage_concept.png" },
        { id: "4-2", title: "Adobe Stock 무료 템플릿 가져오기", duration: "4분", desc: "라이브러리 패널에서 Adobe Stock 검색, 무료 필터, 라이브러리로 저장 → 프로젝트에 적용", caption: "무료 필터 체크 잊지 말기", resource: "Adobe Stock" },
        { id: "4-3", title: "외부 템플릿 사이트와 설치 방법", duration: "5분", desc: "무료 템플릿 사이트(Mixkit 등), .mogrt 파일 다운로드 → 그래픽 템플릿 패널에 설치", caption: "🔗 <a href='https://mixkit.co/' target='_blank' style='color: var(--secondary); text-decoration: underline; font-weight: 700;'>Mixkit 바로가기</a>", resource: "외부 템플릿" },
        { id: "4-4", title: "생성형 확장으로 짧은 클립 늘리기", duration: "5분", desc: "타임라인에서 생성형 확장 도구 선택 → 클립 끝을 드래그 → AI가 이어 그린 프레임 확인", caption: "부족한 1~2초는 AI에게", resource: "실습 소스팩 A" },
        { id: "4-5", title: "장면계획서 작성 프롬프트 복사", duration: "3분", desc: "AI가 분석 및 장면 기획을 원활하게 수행할 수 있도록 정의된 기획 프롬프트 템플릿입니다.", caption: "", resource: "", promptToCopy: `주제 : \n\n위 주제를 바탕으로 AI 영상 제작 교육생이 바로 복사/붙여넣기할 수 있는 4컷(Scene 1~4) 씬 플랜을 아래 규칙에 맞춰 '전부 한글'로 작성해 줘.\n\n[작성 규칙]:\n1. 상단에 주제에 어울리는 매력적인 "씬 플랜: [새로운 제목]" 생성\n2. 각 Scene 번호 옆에 직관적인 "컷 제목" 표기 (예: Scene 1. 평화로운 아침 과수원)\n3. 컷 구성 (Scene 1~4):\n   - [이미지 프롬프트]: 구도, 피사체, 조명, 화질(8K), 스타일 등 상세 묘사\n   - [비디오 모션 프롬프트]: 카메라 무빙(팬, 줌, 틸트 등), 피사체 움직임 지시어\n4. 하단에 영상 전체를 아우르는 "[오디오 & 효과음 프롬프트]" 딱 1개만 생성 (BGM 스타일/템포, 주요 효과음 포함)` }
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
    initShortcuts();
    initDownloads();
    initQna();
    initVideoCarousel();
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
            
            let imageHtml = "";
            if (clip.image) {
                imageHtml = `
                    <div class="clip-image-box" style="margin-top: 12px; margin-bottom: 12px; text-align: center;">
                        <img src="${clip.image}" onclick="openLightbox('${clip.image}')" style="max-width: 100%; border-radius: var(--radius-sm); border: 1.5px solid var(--border-color); display: block; margin: 0 auto;" alt="학습 스크린샷" />
                    </div>
                `;
            } else if (clip.images && Array.isArray(clip.images)) {
                imageHtml = `
                    <div class="clip-images-box" style="margin-top: 12px; margin-bottom: 12px; display: flex; flex-direction: column; gap: 8px; align-items: center;">
                        ${clip.images.map(img => `
                            <img src="${img}" onclick="openLightbox('${img}')" style="max-width: 100%; border-radius: var(--radius-sm); border: 1.5px solid var(--border-color); display: block;" alt="학습 스크린샷" />
                        `).join('')}
                    </div>
                `;
            }

            let copyPromptHtml = "";
            if (clip.promptToCopy) {
                copyPromptHtml = `
                    <div class="prompt-container" style="margin-top: 12px; margin-bottom: 12px; background: var(--bg-page-deep); border: 1.5px solid var(--border-color); border-radius: var(--radius-sm); padding: 16px; position: relative;">
                        <div class="prompt-label" style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 6px; text-transform: uppercase;">📋 복사할 프롬프트 내용</div>
                        <div class="prompt-text" id="prompt-to-copy-${clip.id}" style="font-size: 0.95rem; font-weight: 600; color: var(--text-main); white-space: pre-wrap; word-break: break-all; padding-right: 80px; text-align: left; line-height: 1.5;">${clip.promptToCopy}</div>
                        <button class="copy-btn" style="position: absolute; top: 16px; right: 16px; background: var(--primary); color: var(--text-inverse); border: none; padding: 6px 12px; border-radius: var(--radius-sm); font-size: 0.8rem; font-weight: 700; cursor: pointer; transition: var(--transition);" onclick="copyCardPrompt('prompt-to-copy-${clip.id}')">복사</button>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="clip-card-header">
                    <div class="clip-label-area">
                        <span class="clip-number">${clip.id}</span>
                        <h4 class="clip-title">${clip.title}</h4>
                    </div>
                </div>
                <p class="clip-desc">${clip.desc}</p>
                ${clip.resource ? `
                <div class="clip-resource-box" style="margin-top: 12px; margin-bottom: 4px;">
                    <span class="clip-meta-resource" style="font-size: 1.05rem;">📦 ${clip.resource === "장면 계획서" ? `<a href="scene_plan.html" target="_blank" style="color: var(--secondary); text-decoration: underline; font-weight: 700; font-size: 1.1rem;">${clip.resource} (새창 열기)</a>` : clip.resource}</span>
                </div>` : ''}
                ${imageHtml}
                ${copyPromptHtml}
                ${clip.caption ? `<div class="clip-caption-box">${clip.caption}</div>` : ''}
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

    // Audio Prompt Builder Logic
    const audioGenre = document.getElementById("audio-genre");
    const audioInstChips = document.querySelectorAll("#audio-instrument-chips .chip");
    const audioVocalChips = document.querySelectorAll("#audio-vocal-chips .chip");
    const audioResultArea = document.getElementById("audio-prompt-result");

    let activeAudioInst = "부드러운 피아노와 첼로, 느린 템포 (Slow tempo)";
    let activeAudioVocal = "보컬 없음 (Instrumental only)";

    const updateAudioPrompt = () => {
        const genre = audioGenre.value;
        const prompt = `${genre}, ${activeAudioInst}, ${activeAudioVocal}`;
        audioResultArea.value = prompt;
    };

    audioGenre?.addEventListener("change", updateAudioPrompt);

    audioInstChips.forEach(chip => {
        chip.addEventListener("click", () => {
            audioInstChips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            activeAudioInst = chip.dataset.val;
            updateAudioPrompt();
        });
    });

    audioVocalChips.forEach(chip => {
        chip.addEventListener("click", () => {
            audioVocalChips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            activeAudioVocal = chip.dataset.val;
            updateAudioPrompt();
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
    // Copy Audio Prompt to clipboard
    const audioCopyBtn = document.getElementById("copy-audio-prompt-btn");
    if(audioCopyBtn) {
        audioCopyBtn.addEventListener("click", () => {
            audioResultArea.select();
            navigator.clipboard.writeText(audioResultArea.value)
                .then(() => {
                    const toast = document.getElementById("audio-copy-toast");
                    toast.classList.add("show");
                    setTimeout(() => toast.classList.remove("show"), 2000);
                })
                .catch(err => {
                    alert("복사 실패. 브라우저 설정을 확인해 주세요.");
                });
        });
    }
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

window.initQna = function() {
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

    // Render 500 Q&As categorized on the left sidebar
    renderFaqSidebar();
};

window.renderFaqSidebar = function() {
    const container = document.getElementById("faq-categories-container");
    if (!container) return;
    
    // Define the 5 categories
    const categories = [
        { id: "cat-basic", name: "⚙️ 기본 및 환경 설정", keywords: ['설정', '프로젝트', '언어', '스크래치', '캐시', 'ram', '저장', 'gpu', '초기화', '환경', '도구', '단축키', '단축'] },
        { id: "cat-timeline", name: "✂️ 컷 편집 및 타임라인", keywords: ['컷', '자르기', '타임라인', '클립', '트랙', '삭제', '스냅', '이동', '재생헤드', '트리밍', 'unlink', '스냅', '자석'] },
        { id: "cat-caption", name: "💬 자막 및 기본 그래픽", keywords: ['자막', '텍스트', '글꼴', '폰트', '행간', '템플릿', 'mogrt', '그래픽', '정렬', '디자인', '획', 'stroke'] },
        { id: "cat-audio", name: "🔊 오디오 및 사운드", keywords: ['오디오', '사운드', '볼륨', 'bgm', '게인', '데시벨', 'db', '노이즈', '마이크', '페이드', '리믹스', '음악', '싱크', '동기화'] },
        { id: "cat-color", name: "🎨 색보정 및 내보내기", keywords: ['색', '루미트리', 'lut', '렌더링', '랜더링', '내보내기', 'mp4', '인코딩', '화질', '컴파일', '알파', 'h.264', '출력', '프레임', 'vfr'] }
    ];
    
    // Group all QnAs
    const grouped = {
        "cat-basic": [],
        "cat-timeline": [],
        "cat-caption": [],
        "cat-audio": [],
        "cat-color": []
    };
    
    if (typeof PRESET_QNA !== 'undefined' && Array.isArray(PRESET_QNA)) {
        PRESET_QNA.forEach(item => {
            const q = item.q.toLowerCase();
            let categorized = false;
            
            // 1. Group based on keywords
            for (const cat of categories) {
                if (cat.keywords.some(k => q.includes(k))) {
                    grouped[cat.id].push(item);
                    categorized = true;
                    break;
                }
            }
            
            // 2. Catch-all: default to cat-basic
            if (!categorized) {
                grouped["cat-basic"].push(item);
            }
        });
    }
    
    // Now, render the HTML
    container.innerHTML = "";
    
    categories.forEach(cat => {
        const list = grouped[cat.id];
        if (list.length === 0) return;
        
        // Show first 3, hide others
        const visibleList = list.slice(0, 3);
        const hiddenList = list.slice(3);
        
        const catDiv = document.createElement("div");
        catDiv.style.marginBottom = "14px";
        
        let html = `
            <h5 style="font-size: 0.85rem; color: var(--primary); margin-bottom: 6px; font-weight: 700; display: flex; align-items: center; gap: 6px;">${cat.name}</h5>
            <div style="display: flex; flex-direction: column; gap: 2px;">
        `;
        
        visibleList.forEach(item => {
            let shortQ = item.q
                .replace(/프리미어 프로에서/g, "")
                .replace(/프리미어 프로 실행 시/g, "실행 시")
                .replace(/프리미어 프로/g, "")
                .replace(/프리미어에서/g, "")
                .replace(/프리미어/g, "")
                .trim();
            
            // Clean up leading particles
            shortQ = shortQ.replace(/^(는|은|을|를|이|가)\s*/, "");
            shortQ = shortQ.charAt(0).toUpperCase() + shortQ.slice(1);

            if (shortQ.length > 25) {
                shortQ = shortQ.substring(0, 24) + "...";
            }
            // Use custom escape for quotes to ensure safe HTML in onclick
            const safeQ = item.q.replace(/'/g, "\\'");
            html += `<div class="quick-question-text" onclick="askQuickQuestion('${safeQ}')" title="${item.q}">• ${shortQ}</div>`;
        });
        
        if (hiddenList.length > 0) {
            html += `<div class="more-questions" style="display: none; flex-direction: column; gap: 2px;">`;
            hiddenList.forEach(item => {
                let shortQ = item.q
                    .replace(/프리미어 프로에서/g, "")
                    .replace(/프리미어 프로 실행 시/g, "실행 시")
                    .replace(/프리미어 프로/g, "")
                    .replace(/프리미어에서/g, "")
                    .replace(/프리미어/g, "")
                    .trim();
                
                shortQ = shortQ.replace(/^(는|은|을|를|이|가)\s*/, "");
                shortQ = shortQ.charAt(0).toUpperCase() + shortQ.slice(1);

                if (shortQ.length > 25) {
                    shortQ = shortQ.substring(0, 24) + "...";
                }
                const safeQ = item.q.replace(/'/g, "\\'");
                html += `<div class="quick-question-text" onclick="askQuickQuestion('${safeQ}')" title="${item.q}">• ${shortQ}</div>`;
            });
            html += `</div>`;
        }
        
        html += `</div>`;
        catDiv.innerHTML = html;
        container.appendChild(catDiv);
    });
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
    if (typeof filterQuickQuestions === 'function') {
        filterQuickQuestions("");
    }

    // 2. Add user message
    const now = new Date();
    const timeStr = formatTime(now);
    
    chatHistory.push({ sender: 'user', text: text, time: timeStr });
    saveChatHistory();
    renderMessageBubble('user', text, timeStr);

    // 3. Add typing indicator
    const typingIndicator = showTypingIndicator();

    try {
        let replyText = "";
        await new Promise(resolve => setTimeout(resolve, 600)); // natural typing delay

        const matchedAnswer = getPresetAnswer(text);
        if (matchedAnswer) {
            replyText = matchedAnswer;
        } else {
            replyText = `❓ **답변을 찾지 못했습니다.**\n\n질문하신 내용인 **"${text}"**에 대한 미리 정의된 답변이 데이터베이스에 등록되어 있지 않습니다.\n\n💡 **도움말**: 아래 키워드가 포함된 질문을 입력하시면 관련 답변을 즉시 확인하실 수 있습니다!\n\n* **키워드 안내**: \`단축키\`, \`컷 편집/자르기\`, \`색보정/루미트리\`, \`쇼츠/9:16 비율\`, \`볼륨/데시벨\`, \`배속/속도 조절\`, \`자막 움직임/키프레임\`, \`화면 전환/디졸브\`, \`프로젝트 저장\`, \`잔물결 삭제\`, \`한영 언어 설정\`, \`모션 그래픽 템플릿\`, \`내보내기/렌더링\``;
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

function getPresetAnswer(userInput) {
    if (typeof PRESET_QNA === 'undefined' || !Array.isArray(PRESET_QNA)) {
        return null;
    }
    
    const text = userInput.toLowerCase().replace(/\s+/g, '').replace(/랜/g, '렌').replace(/넵/g, '냅');
    
    // Map each item to its score
    const matches = PRESET_QNA.map(item => {
        let score = 0;
        
        // 1. Exact or partial question match
        const qNormalized = item.q.toLowerCase().replace(/\s+/g, '');
        if (text.includes(qNormalized) || qNormalized.includes(text)) {
            score += 50;
        }

        // 2. Keyword matching
        if (item.keywords && Array.isArray(item.keywords)) {
            for (const keyword of item.keywords) {
                const kwNormalized = keyword.toLowerCase().replace(/\s+/g, '');
                if (text.includes(kwNormalized)) {
                    score += 10;
                }
            }
        }
        
        return { item, score };
    })
    .filter(m => m.score >= 10) // Minimum threshold
    .sort((a, b) => b.score - a.score); // Sort by score descending

    if (matches.length === 0) {
        return null;
    }

    // Default to single best match
    const best = matches[0].item;
    return `
<div style="margin: 0;">
    <div style="font-weight: 700; color: var(--text-main); margin-bottom: 2px; font-size: 0.95rem;">🙋‍♂️ ${best.q}</div>
    <div style="color: var(--primary); font-size: 0.9rem; line-height: 1.4;">${best.a}</div>
</div>`;
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
    
    // If the text is already HTML (starts with <div or similar structure), skip escaping
    const isHtml = text.trim().startsWith('<div') || text.trim().startsWith('<span');
    
    let formatted = text;
    if (!isHtml) {
        formatted = text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    // Code blocks `\`\`\`javascript ... \`\`\``
    formatted = formatted.replace(/```([\s\S]*?)```/g, (match, code) => {
        return `<pre style="background: var(--bg-page-deep); padding: 12px; border-radius: var(--radius-sm); font-family: monospace; overflow-x: auto; margin: 10px 0; border: 1.5px solid var(--border-color); font-size: 0.9rem; line-height: 1.4; color: var(--text-main);">${code.trim()}</pre>`;
    });

    // Inline code `code`
    formatted = formatted.replace(/`([^`]+)`/g, '<code style="background: var(--bg-page-deep); padding: 2px 6px; border-radius: 4px; font-family: monospace; border: 1px solid var(--border-color); color: var(--secondary); font-size: 0.95rem; font-weight: 700;">$1</code>');

    // Bold **text**
    formatted = formatted.replace(/\*\*([^*]+)\*\*/g, '<strong style="font-weight: 700; color: var(--primary);">$1</strong>');

    // Bullet points (simple starting with - or * followed by space)
    if (!isHtml) {
        formatted = formatted.split('\n').map(line => {
            if (line.startsWith('* ') || line.startsWith('- ')) {
                return `<li style="margin-left: 16px; margin-top: 4px; margin-bottom: 4px;">${line.substring(2)}</li>`;
            }
            return line;
        }).join('\n');
        
        // Line breaks
        formatted = formatted.replace(/\n/g, '<br>');
    }

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

window.toggleMoreQuestions = function() {
    const moreDivs = document.querySelectorAll(".more-questions");
    const btn = document.getElementById("toggle-more-btn");
    if (!btn || moreDivs.length === 0) return;
    
    const isHidden = moreDivs[0].style.display === "none" || !moreDivs[0].style.display;
    
    moreDivs.forEach(div => {
        div.style.display = isHidden ? "flex" : "none";
    });
    
    btn.innerHTML = isHidden ? "➖ 질문 접기" : "➕ 자주 묻는 질문 전체보기 (더보기)";
};

window.filterQuickQuestions = function(query) {
    const text = query.toLowerCase().replace(/\s+/g, '');
    const items = document.querySelectorAll(".quick-question-text");
    const moreDivs = document.querySelectorAll(".more-questions");
    const btn = document.getElementById("toggle-more-btn");
    
    if (query.trim().length > 0) {
        // Show all hidden question containers during search
        moreDivs.forEach(div => div.style.display = "flex");
        if (btn) btn.style.display = "none"; // Hide show more button during search
    } else {
        // Revert to current state (default hidden)
        const isExpanded = btn && btn.innerHTML.includes("접기");
        moreDivs.forEach(div => div.style.display = isExpanded ? "flex" : "none");
        if (btn) btn.style.display = "block";
    }

    items.forEach(item => {
        const itemText = item.textContent.toLowerCase().replace(/\s+/g, '');
        const onclickAttr = item.getAttribute("onclick") || "";
        const matchText = onclickAttr.toLowerCase().replace(/\s+/g, '');
        
        if (itemText.includes(text) || matchText.includes(text)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
};

window.toggleAudioSpecsPanel = function() {
    const panel = document.getElementById("audio-specs-panel");
    const icon = document.getElementById("audio-specs-toggle-icon");
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

function initVideoCarousel() {
    const track = document.getElementById("video-slider-track");
    const toggleBtn = document.getElementById("carousel-toggle-btn");
    if (!track || !toggleBtn) return;

    let currentIndex = 0; // 0 = 3차시 (Slide 1), 1 = 1차시 (Slide 2)

    toggleBtn.addEventListener("click", () => {
        if (currentIndex === 0) {
            currentIndex = 1;
            track.style.transform = "translateX(-50%)";
            toggleBtn.innerHTML = "▶";
            toggleBtn.style.left = "auto";
            toggleBtn.style.right = "-40px";
        } else {
            currentIndex = 0;
            track.style.transform = "translateX(0%)";
            toggleBtn.innerHTML = "◀";
            toggleBtn.style.left = "-40px";
            toggleBtn.style.right = "auto";
        }
    });
}

window.copyCardPrompt = function(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        let toast = document.getElementById('card-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'card-toast';
            toast.style.cssText = 'position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%) translateY(100px); background: #10b981; color: #ffffff; padding: 12px 24px; border-radius: 30px; font-weight: 700; font-size: 0.95rem; box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s; z-index: 2000; opacity: 0;';
            document.body.appendChild(toast);
        }
        toast.innerText = '프롬프트가 클립보드에 복사되었습니다!';
        toast.style.transform = 'translateX(-50%) translateY(0)';
        toast.style.opacity = '1';
        setTimeout(() => {
            toast.style.transform = 'translateX(-50%) translateY(100px)';
            toast.style.opacity = '0';
        }, 2000);
    });
};

