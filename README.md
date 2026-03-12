# SOHA Tech Policy Repository

## 자동 배포 시스템

### GitHub Pages를 통한 자동 배포

이 저장소는 GitHub Pages를 통해 자동으로 배포됩니다. `main` 브랜치에 코드를 푸시하면 자동으로 배포 프로세스가 실행됩니다.

### 배포 URL 구조

```
https://soha-tech.github.io/policy/
```

## 라우팅 방법

### 디렉토리 기반 라우팅

이 저장소는 디렉토리 구조를 통해 직접적인 라우팅을 지원합니다.

#### 라우팅 규칙

```
저장소 내 경로 → 배포 URL
privacy/mpc100/ → https://soha-tech.github.io/policy/privacy/mpc100/
```

#### 실제 예시

- `privacy/mpc100/index.html` 파일은 다음 URL에서 접근 가능:
  ```
  https://soha-tech.github.io/policy/privacy/mpc100/
  ```

### 새로운 페이지 추가 방법

1. **HTML 폴더 생성**: 원하는 경로에 폴더 생성

   ```
   새폴더명/
   └── index.html
   ```

2. **커밋 및 푸시**: 변경사항을 `main` 브랜치에 푸시

   ```bash
   git add .
   git commit -m "Add new page: 새폴더명"
   git push origin main
   ```

3. **자동 배포**: GitHub Actions가 자동으로 배포를 실행

4. **접속 URL**:
   ```
   https://soha-tech.github.io/policy/새폴더명/
   ```

## 개발 및 배포 가이드

### 로컬 개발

1. 저장소 클론:

   ```bash
   git clone https://github.com/soha-tech/policy.git
   cd policy
   ```

2. HTML 파일 작성 및 수정

3. 변경사항 커밋:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```

### 배포 확인

- GitHub Actions 실행 상태: 저장소의 Actions 탭에서 확인
- 배포된 사이트: https://soha-tech.github.io/policy/
- 특정 페이지: https://soha-tech.github.io/policy/privacy/mpc100/

## 주요 특징

- ✅ **자동 배포**: `main` 브랜치 푸시 시 자동 배포
- ✅ **직관적 라우팅**: 디렉토리 구조 그대로 URL 매핑
- ✅ **정적 호스팅**: GitHub Pages를 통한 무료 정적 호스팅
- ✅ **빠른 배포**: 커밋 후 몇 분 내에 반영
