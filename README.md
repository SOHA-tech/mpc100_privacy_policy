# 유니팜 - 온실관리시스템 개인정보처리방침

Uni-farm Greenhouse Management System Privacy Policy

## Next.js 프로젝트

이 프로젝트는 Next.js 14를 사용하여 개인정보처리방침 페이지를 구현합니다.

## 설치 및 실행

### 의존성 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

### 프로덕션 서버 시작
```bash
npm start
```

## GitHub Pages 배포

이 프로젝트는 GitHub Pages에 배포하도록 구성되어 있습니다.

### 배포 단계

1. **GitHub 저장소에 푸시**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **GitHub Pages 설정**
   - GitHub 저장소로 이동
   - Settings > Pages로 이동
   - Source에서 "GitHub Actions" 선택
   - 또는 "Deploy from a branch" 선택 후 main/gh-pages 브랜치 선택

3. **자동 배포**
   - 코드를 푸시하면 자동으로 빌드되고 GitHub Pages에 배포됩니다

## 프로젝트 구조

```
src/
├── app/
│   ├── globals.css      # 전역 스타일
│   ├── layout.tsx       # 루트 레이아웃
│   └── page.tsx         # 메인 페이지
├── components/          # 컴포넌트 (필요시)
└── lib/                 # 유틸리티 (필요시)
```

## 기술 스택

- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 스타일링
- **React 18** - UI 라이브러리

## 주요 특징

- 반응형 디자인
- 한국어 폰트 최적화
- 접근성 고려
- SEO 최적화
- 정적 사이트 생성 (SSG)

## 라이선스

ISC
