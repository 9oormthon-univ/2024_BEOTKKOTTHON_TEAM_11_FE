# [kakao x 9oorm] 2024-벚꽃톤 11팀 프론트엔드 레포지토리

2024-벚꽃톤 11팀 "🍚이츠타임⏰"의 프론트엔드 레포지토리입니다!

<div align="center">
  <img src="https://github.com/goormthon-Univ/2024_BEOTKKOTTHON_TEAM_11/blob/main/pics/eatstime_intro.png" width="auto" height="auto">
</div>

### 🌸 Developers

|FE | FE |
| :---: | :---: |
|  <img style="width: 200px;" src="https://avatars.githubusercontent.com/u/35104213?v=4" />  | <img style="width: 200px;" src="https://github.com/goormthon-Univ/2024_BEOTKKOTTHON_TEAM_11/assets/118183190/eac44f26-00e4-45b0-a9e7-4efbdbe2393d" /> |
|한림대학교|한국외국어대학교|
|김경재|김현아|
|   [@PortalCube](https://github.com/PortalCube)   |  [@wiseah](https://github.com/wiseah)     |


### 서비스 링크
  - https://eatstime.vercel.app/

### 🔖 소개
  - 쉽고 간편하게 밥 약속을 생성하고 관리할 수 있는 서비스로, 신학기 학생들을 위해 기획 및 개발되었습니다.
  - 사용자들이 일상에서 발생하는 밥 약속을 잡는 것에 대한 불편함을 해소하고 더 나은 유저의 밥약 관리 경험을 제공하는 것입니다. 지금 바로 '이츠타임'을 이용하여 밥약 관리의 편리함을 경험해보세요!

### 🎯 목표
  - 약속 생성 및 관리를 더욱 간편하고 효율적으로 하는 것과 기존에 밥약을 잡는 플로우에서 발생하는 불편함을 해소하는 것이 주된 목표입니다.
  - 다른 서비스를 추가적으로 이용하지 않고도 밥약을 생성하고 관리할 수 있는 통합된 플랫폼을 제공하여 사용자들이 편리하게 이용할 수 있도록 합니다.
  - 다양한 협업 툴을 사용하여 활발한 소통을 바탕으로 효율적인 협업을 통해 팀 공동의 목표에 달성합니다.
 
### 📚 기술 스택

|파트|프레임워크 & 라이브러리|
|---|---|
|Frontend|<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/><img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/><img src="https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/><img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white"/><img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/><img src="https://img.shields.io/badge/Vercel-0000?style=flat-square&logo=vercel&logoColor=white"/>|
|Backend|<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white"/><img src="https://img.shields.io/badge/Spring Security-6DB33F?style=flat-square&logo=springsecurity&logoColor=white"/><img src="https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white"/><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white"/>|
|Collaborative|<img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion&logoColor=white"/><img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/><img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white"/>|


### 🗂️ 개발 레포 및 문서
> 아래 링크를 통해 저희 서비스의 개발 레포지토리 및 문서를 확인하실 수 있습니다.
  
- [Frontend Repository](https://github.com/goormthon-Univ/2024_BEOTKKOTTHON_TEAM_11_FE)
- [Backend Repository](https://github.com/goormthon-Univ/2024_BEOTKKOTTHON_TEAM_11_BE)
- [이츠타임 ERD](https://www.erdcloud.com/d/txHpp4bQaeeqAntZJ)
  <details>
    <summary>Preview</summary>

    <div align="center">
  <img src="https://github.com/goormthon-Univ/2024_BEOTKKOTTHON_TEAM_11/blob/main/pics/eatstime_erd.png" width="auto" height="auto">
</div>

  </details>

- 플로우 차트
  <details>
    <summary>Preview</summary>
  
    <div align="center">
  <img src="https://github.com/goormthon-Univ/2024_BEOTKKOTTHON_TEAM_11/blob/main/pics/eatstime_flow.png" width="auto" height="auto">
</div>

  </details>

### 🔗 주요 기능

  #### 1️⃣ 밥약 생성
  - 밥약 이름·기간·장소·메모 정보를 작성하여 새로운 밥약을 생성할 수 있습니다.
  - 생성된 밥약에 대한 링크를 참여자들에게 공유하여 참여할 수 있도록 합니다.

  #### 2️⃣ 내 밥약 상태별 관리
  - 생성된 밥약은 대기 중·확정·종료 세 가지의 상태로 관리됩니다.

    + 대기중 밥약: 밥약 참여에 가능한 시간대를 설정하고 응답을 제출할 수 있으며, 밥약에 참여하는 다른 파티원이 몇 명인지와 파티원의 참여 가능 시간을 개별적으로 확인할 수 있습니다.
    + 확정된 밥약: 밥약에 참여하는 파티원들이 모두 응답을 완료한 상태로, 밥약에 대한 정보를 확인할 수 있습니다.
    + 종료된 밥약: 종료된 밥약에 대한 정보를 확인할 수 있으며, 송금 링크 및 보은하기 기능을 제공합니다. 

  #### 3️⃣ 밥약 가능 시간대 설정
  - 설정된 기간 내로 시간표에 자신의 밥약 참여 가능한 시간대를 설정할 수 있습니다.
  - 밥약 참여자들의 가능한 시간대를 채도 또는 체크 표시를 통해 알 수 있습니다.

  #### 4️⃣ 결제 및 보은하기
  - 밥약이 종료된 후 약속에 대한 정보 및 더치 페이를 위한 송금 링크를 제공합니다.
  - 해당 밥약과 동일한 멤버로 구성된 밥약을 다시 생성할 수 있는 '보은하기' 기능을 제공합니다.


- - -
# 🔥 협업룰
## 개발 환경 세팅

-   Node.js 18+를 설치합니다.
-   터미널을 열고 `npm install`을 입력하여 패키지를 모두 설치합니다.
-   `npm run dev` 명령어로 개발 서버를 실행합니다.

## 빌드

-   `npm run build` 명령어로 빌드합니다.
-   dist 폴더에 결과물이 저장됩니다.

## Commit Convention

커밋 요약은 "(type): (content)" 형식으로 작성합니다.

type은 영어 소문자로 작성하며, content는 한국어로 명확하게 작성합니다. 요약이 너무 길어지면 세부적인 내용은 커밋 설명에 풀어적고 요약은 간결하게 수정합니다.

| type     | 설명                                                                      | 예시                                                               |
| -------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| feat     | 새로운 기능 추가                                                          | feat: 로그인 페이지 구현                                           |
| fix      | 버그 수정                                                                 | fix: 320px보다 작은 기기에서 "다음" 버튼이 잘리는 문제 수정        |
| docs     | 문서 수정                                                                 | docs: README.md에 커밋 컨벤션 추가                                 |
| style    | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우                         | style: 모든 따옴표를 쌍따옴표로 수정                               |
| refactor | 코드 리팩토링                                                             | refactor: axios request를 axios instance를 이용해서 중복 코드 정리 |
| test     | 테스트 코드 구현                                                          | test: postLogin, postRegister 함수의 테스트 케이스 추가            |
| chore    | 패키지 매니저 수정, 빌드 CI/CD 설정 수정, 깃허브 설정 수정 등 잡다한 일들 | chore: package.json에 redux 패키지 추가                            |

## PR Convention

PR 제목은 커밋 요약과 동일하게 "(type): (content)" 형식으로 작성하며, 내용은 다음을 포함하여 작성합니다.

### Changes 📝

이 PR에서 작업한 사항을 적어주세요.

### Screenshot 📷 (선택)

작업한 사항을 스크린샷으로 찍을 수 있다면 (예: 신규 페이지 구현, 새로운 컴포넌트 구현) 스크린샷을 찍어서 올려주세요. 반드시 올릴 필요는 없습니다!

### Issues 🚩

이 PR과 연관된 Issue를 작성해주세요. 해당 PR이 Issue를 해결한다면 Issue도 꼭 닫아주세요!
