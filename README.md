# 개요

프론트엔드는 사용자의 인터렉션이 많은 만큼 테스트를 작성할 때 고려해야 할 것이 많다.
Cypress를 이용해 사용자 중심의 흐름으로 E2E 테스트 코드 작성.

## Cypress 설치, 실행 방법

#### 설치

- npm install cypress --save -dev

#### 실행

- npx cypress verify
- ./node_modules/.bin/cypress open

## Cypress 코드 작성법

### 테스트 코드 함수

- describe: 어떤 테스트의 코드들인지 기술하는, 묶어주는 함수
- beforeEach: 하나의 테스트코드를 실행시키기 전에 매번 실행하는 함수
- it: 각각의 테스트 코드를 작성하는 함수
