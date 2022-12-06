# [React] Redux - My Todo List
<hr>
항해99 주특기 숙련 주차 과제
<br>
*예시 사이트 : http://todolistwithreduxassignment.s3-website.ap-northeast-2.amazonaws.com/
<br>
*구현 사이트(배포) : 

## Constraints
1. todos 데이터는 리덕스를 사용해서 전역으로 상태를 관리합니다.
2. todos 모듈은 Ducks 패턴으로 구현합니다.
3. 상세보기 클릭하면 Todo의 상세 페이지로 이동합니다. 상세 페이지에서 보여야 하는 내용은 아래 토글에서 별도 안내합니다.

## Function
- Create Todo
- Read Todos, Todo
- Update Todo
- Delete Todo

## Table of Contents
- [구현 화면](#구현화면)
- [Components 구조](#Components구조)
- [UI 구성하기](#UI구성하기)
- [Redux 상태관리](#Redux상태관리)

<hr>

## 구현화면

https://user-images.githubusercontent.com/96729804/204094697-5df18463-a560-4590-88b6-ae715f13b55b.mov

| 구현 영상(모니터화면) | 반응형 |
|:------:|:------:|
| <img width="1242" alt="스크린샷 2022-11-27 오전 11 54 37" src="https://user-images.githubusercontent.com/96729804/204117181-215571c6-66f8-424d-aa95-bf00beae647f.png"> | ![ezgif com-gif-maker](https://user-images.githubusercontent.com/96729804/204117316-1fe3270c-2908-4f38-9f8f-f39c7749e7b9.gif) |


## Components구조
<b>Header / Todo 추가 / Todo List가 보여지는 부분 / 각 해당 Todo</b>

| 컴포넌트 구조 시각화 |
|:------:|
| <img src="https://user-images.githubusercontent.com/96729804/204087464-12c657d0-06ff-4550-983a-26b87bcb2cf3.jpeg" width="650" height="350"/> |


> Header ① : 값이 변하지 않는 고정 부분이라 고유 컴포넌트로 분리함

> Todo 추가 ② : 새로운 todo-list를 추가하는 부분으로 추가 데이터만 전달하는 기능이기 때문에 데이터를 추가하는 부분의 컴포넌트로 분리함

> Todo List가 보여이는 부분 ③ : 모든 데이터를 받아서 핸드링 하는 부분으로 컴포넌트를 분리함

> 각 해당 Todo ④ : 각각의 Todo의 형태가 반복되기 때문에 하나의 컴포넌트로 분리함


## UI구성하기
<b>Header / Todo 추가 / Todo List가 보여지는 부분으로 나눔 (Components구조 거의 유사)</b>

> flex : grid와 달리 고정되었는 부분은 flex를 사용

> grid : todo리스트들이 보여지는 곳에서 working / Done으로 구분하고 각각 안에서 카드들이 추가될 때 다시 grid로 Layout 구현

> 반응형 - Media Query


## Redux상태관리
<b>전역 관리 되는 state</b>

> Todos - AddContents 컴포넌트



