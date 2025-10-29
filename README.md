# 🔍 약관 탐지기 (Terms Detector)

> AI 기반 약관 자동 분석 Chrome 익스텐션 - 복잡한 약관을 쉽게 이해하고 안전하게 선택하세요

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Powered by Gemini](https://img.shields.io/badge/Powered%20by-Gemini%202.0-purple)](https://ai.google.dev/)

## ✨ 주요 기능

### 🤖 AI 기반 스마트 분석
- **Google Gemini 2.0 Flash** API로 약관 실시간 분석
- 각 약관별 **위험도 점수** (0-10) 및 **권장 여부** 제공
- 개인정보 처리방침, 이용약관, 마케팅 동의 등 자동 분류

### 📋 직관적인 UI
- **권장(✓)**, **주의(⚡)**, **비권장(✗)** 배지로 한눈에 파악
- 체크박스별 개별 분석 카드
- 위험 요소, 수집 정보, 핵심 내용 상세 보기

### ⚡ 성능 최적화
- URL 필터링으로 불필요한 페이지 스캔 방지
- 캐싱 시스템으로 중복 분석 제거 (0ms 응답)
- 실시간 진행 상태 표시

## 📸 미리보기

```
┌─────────────────────────────────┐
│  🔍 약관 분석 결과               │
├─────────────────────────────────┤
│  📋 약관 체크 가이드             │
│                                 │
│  ┌───────────────────────────┐ │
│  │ 개인정보 처리방침      필수│ │
│  │               ✓ 권장      │ │
│  │ 안전도: 7                 │ │
│  │ ✅ 표준적인 처리 내용     │ │
│  └───────────────────────────┘ │
│                                 │
│  ┌───────────────────────────┐ │
│  │ 마케팅 수신 동의      선택│ │
│  │               ⚡ 주의      │ │
│  │ 안전도: 5                 │ │
│  │ ⚠️ 개인정보 마케팅 활용   │ │
│  └───────────────────────────┘ │
└─────────────────────────────────┘
```

## 🚀 설치 방법

### 1. 저장소 클론
```bash
git clone https://github.com/YIDEUNKIM/Detect-unfair-terms.git
cd Detect-unfair-terms
```

### 2. Gemini API 키 설정

⚠️ **중요: API 키는 절대 Git에 커밋하지 마세요!**

1. [Google AI Studio](https://aistudio.google.com/app/apikey)에서 API 키 발급
2. `background.js` 파일의 1번 줄 수정:
```javascript
const GEMINI_API_KEY = 'YOUR_API_KEY_HERE';
```

### 3. Chrome에 익스텐션 로드
1. Chrome 주소창에 `chrome://extensions/` 입력
2. 우측 상단 **개발자 모드** 활성화
3. **압축해제된 확장 프로그램을 로드합니다** 클릭
4. 클론한 폴더 선택

## 📖 사용 방법

1. **자동 분석**: 약관이 있는 웹사이트 방문 시 자동 탐지 및 분석
2. **결과 확인**: 우측 상단 익스텐션 아이콘 클릭
3. **상세 보기**: 각 약관 카드의 "상세 정보 보기" 버튼으로 위험 요소 확인
4. **수동 분석**: "다시 분석" 버튼으로 재분석

## 🛠️ 기술 스택

- **Frontend**: Vanilla JavaScript, CSS3
- **AI Engine**: Google Gemini 2.0 Flash Exp
- **Platform**: Chrome Extension Manifest V3

## 📁 프로젝트 구조

```
Detect-unfair-terms/
├── manifest.json       # 익스텐션 설정
├── background.js       # AI 분석 엔진
├── content.js          # 약관 탐지 로직
├── popup.html          # 팝업 UI
├── popup.js            # 팝업 제어
├── style.css           # 스타일
├── progress-ui.js      # 프로그레스 바
├── progress-ui.css     # 프로그레스 스타일
└── README.md           # 문서
```

## 🎯 권장 시스템

| 배지 | 의미 | 기준 | 예시 |
|------|------|------|------|
| **✓ 권장** | 안전하고 표준적 | 안전도 7-10점 | 일반적인 개인정보 처리방침 |
| **⚡ 주의** | 검토 필요 | 안전도 4-6점 | 마케팅 동의, 제3자 제공 |
| **✗ 비권장** | 위험 요소 존재 | 안전도 0-3점 | 과도한 권한, 불리한 조항 |

## 🚀 성능

| 항목 | 최적화 전 | 최적화 후 |
|------|----------|----------|
| 페이지 스캔 | 2-5초 | 0.3-0.8초 |
| API 응답 | 8-15초 | 2-4초 |
| 총 처리 시간 | 10-20초 | 2-5초 |

## ⚠️ 제한 사항

- Gemini API 키 필요 (무료 할당량: 월 60회/분)
- 인터넷 연결 필수
- 비표준적 HTML 구조는 탐지 어려움

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

## 📮 문의

- 🐛 버그 리포트: [Issues](https://github.com/YIDEUNKIM/Detect-unfair-terms/issues)
- 💡 기능 제안: [Discussions](https://github.com/YIDEUNKIM/Detect-unfair-terms/discussions)

---

<div align="center">

**⭐ 이 프로젝트가 도움이 되었다면 Star를 눌러주세요!**

Made with ❤️

</div>
