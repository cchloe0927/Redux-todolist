import React, { useState } from "react";
import classes from "./Form.module.css";

const AddContents = (props) => {
  //state를 하나로 관리하면 좋은 점 : 결국 값이 바뀔 때 한번만 렌더링 하면됌!
  const [addTodo, setAddTodo] = useState({
    title: "",
    contents: "",
    //빈 값인 경우, alert 대신 CSS 변경
    isTitleValid: true, //true: 기본 false: 빈 값(레드컬러 처리)
    isContentsValid: true,
  });

  //input 값 추출(전체) 장점 : 이벤트 핸들러 함수를 하나 만들어서 재사용할 수 있음
  const onChangeHandleInput = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    //cosnt name = event.target.value -> name이 결국 title 또는 contents

    // 예외 조건 경우의 수
    // if (name === 'title' && value) {
    // } else if (name === 'title' && !value) {
    // } else if (name === 'contents' && value) {
    // } else if (name === 'contents' && !value) {
    // }

    //event.target.value값이 변경 될 때마다도 빈값인 경우 / 아닌 경우 border 색상 변경해 주기
    if (name === "title" && value) {
      setAddTodo({ ...addTodo, isTitleValid: true, [name]: value });
    } else if (name === "contents" && value) {
      setAddTodo({ ...addTodo, isContentsValid: true, [name]: value });
    } else if (name === "title" && !value) {
      setAddTodo({ ...addTodo, isTitleValid: false, [name]: value });
    } else {
      setAddTodo({ ...addTodo, isContentsValid: false, [name]: value });
    }
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    //빈 값인 경우 alert 띄어 주기 -> 현업에서는 alert은 브라우저 작동을 멈추기 때문에 잘 사용 안함!
    if (addTodo.title === "") {
      setAddTodo({ ...addTodo, isTitleValid: false });
      // return;
    } else if (addTodo.contents === "") {
      setAddTodo({ ...addTodo, isContentsValid: false });
      // return;
    } else {
      // 추가 버튼 클릭 시, 새로운 Todo 카드 생성
      const newTodo = {
        title: addTodo.title,
        contents: addTodo.contents,
      };
      props.onSaveTodosData(newTodo);
      //저장 후 input 내용 빈 값 처리
      setAddTodo({
        title: "",
        contents: "",
        isTitleValid: true,
        isContentsValid: true,
      });
    }
  };

  return (
    <form className={classes.add} onSubmit={addTodoHandler}>
      <div className={classes.contents}>
        <label htmlFor="title">제목</label>
        <input
          className={`${
            !addTodo.isTitleValid ? classes.invalid : classes.input
          }`}
          id="title"
          name="title"
          type="text"
          onChange={onChangeHandleInput}
          value={addTodo.title}
        />
        <label htmlFor="contents">내용</label>
        <input
          className={`${
            !addTodo.isContentsValid ? classes.invalid : classes.input
          }`}
          id="contents"
          name="contents"
          type="text"
          onChange={onChangeHandleInput}
          value={addTodo.contents}
        />
      </div>
      <button className={classes.addBtn}>추가하기</button>
    </form>
  );
};

export default AddContents;
