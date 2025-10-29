// 프로그레스 UI 컨트롤러

class TermsDetectorUI {
  constructor() {
    this.overlay = null;
    this.progressBar = null;
    this.statusText = null;
    this.progressText = null;
    this.statsContainer = null;
    this.isVisible = false;
  }

  // UI 생성
  create() {
    if (this.overlay) return;

    // CSS 주입
    this.injectCSS();

    // 오버레이 생성
    this.overlay = document.createElement('div');
    this.overlay.id = 'terms-detector-overlay';
    this.overlay.innerHTML = `
      <div class="detector-header">
        <div class="detector-title">
          <span class="detector-icon">🔍</span>
          <span>약관 탐지 중...</span>
        </div>
        <button class="detector-close" title="닫기">×</button>
      </div>
      <div class="detector-status">페이지를 분석하고 있습니다...</div>
      <div class="progress-container">
        <div class="progress-bar indeterminate">
          <span class="progress-percentage"></span>
        </div>
      </div>
      <div class="progress-text">0%</div>
      <div class="detector-stats" style="display: none;">
        <div class="stat-item">
          <div class="stat-value" id="stat-scanned">0</div>
          <div class="stat-label">검사됨</div>
        </div>
        <div class="stat-item">
          <div class="stat-value" id="stat-found">0</div>
          <div class="stat-label">발견됨</div>
        </div>
        <div class="stat-item">
          <div class="stat-value" id="stat-time">0ms</div>
          <div class="stat-label">소요시간</div>
        </div>
      </div>
    `;

    // 요소 참조 저장
    this.progressBar = this.overlay.querySelector('.progress-bar');
    this.progressPercentage = this.overlay.querySelector('.progress-percentage');
    this.statusText = this.overlay.querySelector('.detector-status');
    this.progressText = this.overlay.querySelector('.progress-text');
    this.statsContainer = this.overlay.querySelector('.detector-stats');
    this.titleIcon = this.overlay.querySelector('.detector-icon');
    this.titleText = this.overlay.querySelector('.detector-title span:last-child');

    // 닫기 버튼 이벤트
    this.overlay.querySelector('.detector-close').addEventListener('click', () => {
      this.hide();
    });

    document.body.appendChild(this.overlay);
    this.isVisible = true;
  }

  // CSS 주입
  injectCSS() {
    if (document.getElementById('terms-detector-css')) return;

    const link = document.createElement('link');
    link.id = 'terms-detector-css';
    link.rel = 'stylesheet';
    link.href = chrome.runtime.getURL('progress-ui.css');
    document.head.appendChild(link);
  }

  // 진행률 업데이트
  updateProgress(percent, status) {
    if (!this.overlay) return;

    // 진행률 바 업데이트
    this.progressBar.classList.remove('indeterminate');
    this.progressBar.style.width = `${percent}%`;
    this.progressPercentage.textContent = `${percent}%`;
    this.progressText.textContent = `${percent}%`;

    // 상태 텍스트 업데이트
    if (status) {
      this.statusText.textContent = status;
    }
  }

  // 불확정 진행률 (로딩 애니메이션)
  showIndeterminate(status) {
    if (!this.overlay) return;

    this.progressBar.classList.add('indeterminate');
    this.progressPercentage.textContent = '';
    this.progressText.textContent = '분석 중...';

    if (status) {
      this.statusText.textContent = status;
    }
  }

  // 통계 업데이트
  updateStats(scanned, found, timeMs) {
    if (!this.statsContainer) return;

    this.statsContainer.style.display = 'flex';
    document.getElementById('stat-scanned').textContent = scanned;
    document.getElementById('stat-found').textContent = found;
    document.getElementById('stat-time').textContent = timeMs < 1000
      ? `${Math.round(timeMs)}ms`
      : `${(timeMs / 1000).toFixed(1)}s`;
  }

  // 성공 상태로 변경
  showSuccess(message, termsCount, timeMs) {
    if (!this.overlay) return;

    this.overlay.className = 'detector-success';
    this.titleIcon.textContent = '✅';
    this.titleText.textContent = '약관 발견!';
    this.statusText.textContent = message || '약관 분석이 완료되었습니다.';

    this.progressBar.classList.remove('indeterminate');
    this.progressBar.style.width = '100%';
    this.progressPercentage.innerHTML = '<span class="success-checkmark">✓</span>';
    this.progressText.textContent = '100%';

    // 3초 후 자동 숨김
    setTimeout(() => {
      this.hide();
    }, 3000);
  }

  // 오류 상태로 변경
  showError(message) {
    if (!this.overlay) return;

    this.overlay.className = 'detector-error';
    this.titleIcon.textContent = '⚠️';
    this.titleText.textContent = '오류 발생';
    this.statusText.textContent = message || '약관 탐지 중 오류가 발생했습니다.';

    this.progressBar.style.width = '0%';
    this.progressText.textContent = '실패';

    // 3초 후 자동 숨김
    setTimeout(() => {
      this.hide();
    }, 3000);
  }

  // 약관 없음 상태
  showNoTerms() {
    if (!this.overlay) return;

    this.overlay.setAttribute('style', 'background: linear-gradient(135deg, #718096 0%, #4a5568 100%);');
    this.titleIcon.textContent = 'ℹ️';
    this.titleText.textContent = '약관 없음';
    this.statusText.textContent = '이 페이지에서 약관을 찾을 수 없습니다.';

    this.progressBar.classList.remove('indeterminate');
    this.progressBar.style.width = '100%';
    this.progressPercentage.textContent = '';
    this.progressText.textContent = '완료';

    // 2초 후 자동 숨김
    setTimeout(() => {
      this.hide();
    }, 2000);
  }

  // UI 숨기기
  hide() {
    if (!this.overlay || !this.isVisible) return;

    this.overlay.classList.add('hiding');

    setTimeout(() => {
      if (this.overlay && this.overlay.parentNode) {
        this.overlay.parentNode.removeChild(this.overlay);
      }
      this.overlay = null;
      this.isVisible = false;
    }, 300);
  }

  // UI 표시
  show() {
    if (this.isVisible) return;
    this.create();
  }

  // UI 리셋
  reset() {
    this.hide();
    setTimeout(() => {
      this.create();
    }, 350);
  }
}

// 전역 인스턴스 생성
window.termsDetectorUI = new TermsDetectorUI();
