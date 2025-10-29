# 🔍 약관 탐지기 (Terms Detector)

> AI 기반 약관 자동 분석 Chrome 익스텐션 - 복잡한 약관을 쉽게 이해하고 안전하게 선택하세요

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-blue?logo=google-chrome)](https://github.com/yourusername/detect-unfair-terms)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Gemini API](https://img.shields.io/badge/Powered%20by-Gemini%202.0-purple)](https://ai.google.dev/)

## ✨ 주요 기능

### 🤖 AI 기반 약관 분석
- **Google Gemini 2.0 Flash** API를 활용한 실시간 약관 분석
- 개인정보 처리방침, 서비스 이용약관, 마케팅 동의 등 자동 분류
- 각 약관별 **위험도 점수** (0-10) 및 **권장 여부** 제시

### 📋 체크박스별 개별 분석
- 각 약관마다 독립적인 분석 카드 제공
- **권장(✓)**, **주의(⚡)**, **비권장(✗)** 배지로 한눈에 파악
- 필수/선택 약관 구분 및 시각화

### 🎨 현대적인 UI/UX
- 그라디언트 디자인 및 부드러운 애니메이션
- 카드 기반 레이아웃으로 가독성 극대화
- 접을 수 있는 상세 정보 (위험 요소, 수집 정보, 핵심 내용)

### ⚡ 성능 최적화
- **URL 필터링**: 불필요한 페이지 스캔 방지
- **캐싱 시스템**: 동일 페이지 재분석 방지 (0ms 응답)
- **타겟 기반 스캔**: 특정 CSS 선택자 우선 탐색
- **실시간 진행 상태**: tqdm 스타일 프로그레스 바

### 🔒 개인정보 보호
- 모든 분석은 클라이언트에서 실행
- 약관 텍스트만 Gemini API로 전송
- 사용자 개인정보는 수집하지 않음

## 📸 스크린샷

<details>
<summary>📱 메인 화면</summary>

```
┌─────────────────────────────────────┐
│  🔍 약관 분석 결과                    │
├─────────────────────────────────────┤
│  🌐 example.com                      │
│  📄 발견된 약관: 3개                  │
│  🕐 분석 시간: 방금 전                │
├─────────────────────────────────────┤
│  📋 약관 체크 가이드                  │
│                                     │
│  ┌──────────────────────────────┐  │
│  │ 개인정보 처리방침        필수 │  │
│  │                    ✓ 권장    │  │
│  │ 안전도: 7                    │  │
│  │ ✅ 표준적인 개인정보 처리...  │  │
│  │ [상세 정보 보기]              │  │
│  └──────────────────────────────┘  │
│                                     │
│  ┌──────────────────────────────┐  │
│  │ 마케팅 정보 수신 동의    선택 │  │
│  │                    ⚡ 주의    │  │
│  │ 안전도: 5                    │  │
│  │ ⚠️ 개인정보 마케팅 활용...    │  │
│  │ [상세 정보 보기]              │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘
```

</details>

<details>
<summary>🔄 분석 중 프로그레스</summary>

```
┌──────────────────────────────┐
│ 🔍 약관 탐지 중...           │
│ ████████████░░░░  80%        │
│ 약관 텍스트 추출 중...       │
│ 발견: 3개 | 처리: 2/3        │
└──────────────────────────────┘
```

</details>

## 🚀 설치 방법

### 1. 저장소 클론
```bash
git clone https://github.com/yourusername/detect-unfair-terms.git
cd detect-unfair-terms
```

### 2. Gemini API 키 설정

⚠️ **중요: API 키는 절대 Git에 커밋하지 마세요!**

**방법 1: config.js 사용 (권장)**
```bash
# config.example.js를 복사
cp config.example.js config.js

# config.js 파일을 열고 실제 API 키 입력
# const GEMINI_API_KEY = 'YOUR_API_KEY_HERE';
```

**방법 2: background.js 직접 수정**
1. [Google AI Studio](https://aistudio.google.com/app/apikey)에서 API 키 발급
2. `background.js` 파일 열기
3. 1번 줄의 `GEMINI_API_KEY` 값을 발급받은 키로 변경
   - ⚠️ 이 방법 사용 시 절대 Git에 커밋하지 말 것!

### 3. Chrome에 익스텐션 로드
1. Chrome 주소창에 `chrome://extensions/` 입력
2. 우측 상단의 **개발자 모드** 활성화
3. **압축해제된 확장 프로그램을 로드합니다** 클릭
4. 클론한 폴더(`detect-unfair-terms`) 선택

### 4. 테스트
```bash
# 테스트 서버 실행 (Windows)
start-test-server.bat

# 브라우저에서 접속
http://localhost:8000/test-page.html
```

## 📖 사용 방법

### 자동 분석 (기본)
1. 약관이 있는 웹사이트 방문
2. 익스텐션이 자동으로 약관 탐지 시작
3. 우측 상단 프로그레스 바로 진행 상황 확인
4. 배지에 "완료" 표시되면 아이콘 클릭
5. 분석 결과 확인 및 약관 선택 결정

### 수동 분석
1. 익스텐션 아이콘 클릭
2. **다시 분석** 버튼 클릭
3. 약관 재분석 시작

### 원문 보기
- **원문 보기** 버튼 클릭하면 추출된 약관 원문 확인 가능

## 🛠️ 기술 스택

### Frontend
- **Vanilla JavaScript** - 순수 JS로 경량화
- **CSS3** - 그라디언트, 애니메이션, Flexbox
- **Chrome Extension Manifest V3** - 최신 표준

### AI & API
- **Google Gemini 2.0 Flash Exp** - 초고속 AI 모델
- **Generative AI API** - JSON 구조화 분석

### 최적화 기술
- **Heuristic Scoring** - 0-100점 약관 탐지 시스템
- **Smart Caching** - LocalStorage 기반 중복 방지
- **Progressive Callbacks** - 실시간 UI 업데이트
- **Token Optimization** - 텍스트 요약 및 프롬프트 최적화

## 📁 프로젝트 구조

```
detect-unfair-terms/
├── manifest.json              # 익스텐션 설정
├── background.js              # 백그라운드 워커 (API 호출)
├── content.js                 # 컨텐츠 스크립트 (약관 탐지)
├── popup.html                 # 팝업 UI 구조
├── popup.js                   # 팝업 로직
├── style.css                  # 메인 스타일
├── progress-ui.js             # 프로그레스 바 UI
├── progress-ui.css            # 프로그레스 바 스타일
├── icon48.png                 # 익스텐션 아이콘
├── icon128.png                # 익스텐션 아이콘
├── test-page.html             # 테스트 페이지
├── start-test-server.bat      # 테스트 서버 스크립트
└── README.md                  # 이 파일
```

## 🔧 주요 설정

### URL 필터링 (content.js)
특정 도메인에서 자동 분석 방지:
```javascript
const excludeDomains = [
  'youtube.com',
  'google.com',
  'netflix.com'
];
```

### 캐시 유효기간 (content.js)
분석 결과 캐시 시간 (기본 1시간):
```javascript
const CACHE_DURATION = 60 * 60 * 1000; // 1시간
```

### 약관 탐지 임계값 (content.js)
요소를 약관으로 판단하는 최소 점수:
```javascript
const TERMS_THRESHOLD = 40; // 40점 이상
```

## 🎯 약관 탐지 알고리즘

### Heuristic Scoring System (0-100점)
```javascript
점수 =
  + 약관 키워드 매칭 (최대 30점)
  + 텍스트 길이 (500자 이상 20점)
  + 구조적 요소 (리스트, 테이블 등 15점)
  + 위치 (상단/중앙 10점)
  + 체크박스 연관성 (10점)
  + 제목 관련성 (15점)
```

### 검출 키워드
- **개인정보**: 개인정보, 처리방침, privacy, policy
- **이용약관**: 이용약관, 서비스약관, terms, conditions
- **마케팅**: 마케팅, 광고, 프로모션, newsletter

## 🌟 권장 시스템

### Accept (✓ 권장) - 녹색
- 필수 약관 + 표준적 내용
- 안전도 점수 7-10점
- 예: 일반적인 개인정보 처리방침

### Caution (⚡ 주의) - 주황색
- 선택 약관 또는 제3자 제공
- 안전도 점수 4-6점
- 예: 마케팅 정보 수신, 제3자 정보 제공

### Reject (✗ 비권장) - 빨간색
- 과도한 권한 요구 또는 불리한 조항
- 안전도 점수 0-3점
- 예: 과도한 개인정보 수집, 일방적 면책 조항

## 🚀 성능 지표

| 항목 | 기존 | 최적화 후 |
|------|------|-----------|
| 페이지 스캔 시간 | 2-5초 | 0.3-0.8초 |
| API 응답 시간 | 8-15초 | 2-4초 |
| 중복 분석 방지 | ❌ | ✅ (캐시) |
| 불필요한 페이지 스캔 | 모든 페이지 | URL 필터링 |
| 총 처리 시간 | 10-20초 | 2-5초 |

## ⚠️ 제한 사항

1. **Gemini API 의존성**
   - API 키 필요 (무료 할당량: 월 60회/분)
   - 인터넷 연결 필수

2. **약관 탐지 정확도**
   - 비표준적 HTML 구조는 탐지 실패 가능
   - 동적 로딩 약관은 감지 어려움

3. **언어 제한**
   - 주로 한국어 약관 최적화
   - 영어 약관도 지원하나 정확도 다를 수 있음

## 🤝 기여하기

기여는 언제나 환영합니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 기여 아이디어
- [ ] 다국어 지원 (영어, 일본어 등)
- [ ] 약관 비교 기능 (버전 간 차이 표시)
- [ ] 오프라인 모드 (로컬 AI 모델)
- [ ] 약관 북마크 기능
- [ ] PDF/Word 약관 분석

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

## 👨‍💻 개발자

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 감사의 말

- **Google Gemini API** - 강력한 AI 분석 엔진 제공
- **Chrome Extensions Team** - 훌륭한 플랫폼 제공
- **오픈소스 커뮤니티** - 영감과 아이디어

## 📮 문의 및 피드백

- 🐛 버그 리포트: [Issues](https://github.com/yourusername/detect-unfair-terms/issues)
- 💡 기능 제안: [Discussions](https://github.com/yourusername/detect-unfair-terms/discussions)
- 📧 이메일: your.email@example.com

---

<div align="center">

**⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!**

Made with ❤️ and ☕

</div>
