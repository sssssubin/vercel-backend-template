# Vercel Backend Template

이 프로젝트는 Vercel에 배포된 기본 Express.js 백엔드 템플릿을 포함하고 있습니다. Express를 사용하여 간단한 서버를 설정하고, MongoDB와 연동하여 데이터베이스 작업을 실습할 수 있습니다. 기본적인 API 기능을 구현하여 백엔드 개발의 기초를 학습하고 실습할 수 있는 예제입니다.

## 📦 프로젝트 구성

- **Express.js**: Node.js 서버 프레임워크
- **MongoDB**: 데이터베이스 연동 예제
- **API Endpoints**: 기본적인 API 엔드포인트 예제

## 🚀 배포

이 프로젝트는 Vercel에 배포되어 있습니다. [배포된 API 엔드포인트](https://vercel-backend-template.vercel.app/api/todos)를 통해 서버 기능을 테스트할 수 있습니다.

## 🔗 연동 링크

- **프론트엔드 서비스 URL**: [Frontend Service](https://vercel-frontend-template.vercel.app/) - 프론트엔드와 백엔드가 연동되는 URL을 통해 전체 시스템의 동작을 확인할 수 있습니다.
- **프론트엔드 저장소**: [Vercel Template Frontend Repository](https://github.com/sssssubin/vercel-frontend-template) - 프론트엔드 저장소를 확인하고 연동할 수 있습니다.

## 📋 기능

- Express.js 기반의 간단한 서버
- MongoDB 연동 예제
- RESTful API 엔드포인트

## 💡 사용 방법

### 1. MongoDB URL 생성 및 연동

1. **MongoDB 클러스터 생성**:

   - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) 웹사이트에 접속하여 MongoDB 클러스터를 생성합니다.

2. **데이터베이스 사용자 생성**:

   - 클러스터에서 데이터베이스 사용자 계정을 생성합니다. 이 사용자는 데이터베이스에 접근할 수 있는 권한을 가집니다.

3. **MongoDB 연결 문자열 생성**:

   - 클러스터의 "Connect" 버튼을 클릭하고, "Connect your application"을 선택합니다.
   - 드롭다운에서 `Node.js`를 선택하고, MongoDB 연결 문자열을 복사합니다. 문자열에서 `<password>`를 생성한 데이터베이스 사용자 비밀번호로 바꿉니다.

4. **환경 변수 설정**:
   - 프로젝트의 루트 디렉토리에 `.env` 파일을 생성하고, 다음과 같이 MongoDB URL을 설정합니다:
     ```env
     MONGODB_URI=<your-mongodb-connection-string>
     ```
   - `<your-mongodb-connection-string>`을 복사한 MongoDB 연결 문자열로 교체합니다.

### 2. 프로젝트 클론 및 실행

1. 프로젝트를 클론합니다:

   ```bash
   git clone <repository-url>

   ```

2. 종속성을 설치합니다:

   ```bash
   npm install

   ```

3. 로컬 서버를 시작합니다:

   ```bash
   npm start

   ```

4. MongoDB와 연동된 서버가 정상적으로 작동하는지 확인합니다.

## 📝 라이센스

[MIT License](LICENSE).
