import React, { useState } from 'react';
import classes from './AddContents.module.css';

const AddContents = (props) => {
  //state를 하나로 관리하면 좋은 점 : 결국 값이 바뀔 때 한번만 렌더링 하면됌!
  const [addTodo, setAddTodo] = useState({
    title: '',
    contents: '',
  });
  // const [title, setTitle] = useState('');
  // const [contents, setContents] = useState('');

  //input 값 추출 (전체) 장점 : 이벤트 핸들러 함수를 하나 만들어서 재사용할 수 있음
  const onChangeHandleInput = (event) => {
    console.log(event.target);
    const { id, value } = event.target;
    // const id = event.target.id   //id = title, contents
    // const value = event.target.value
    setAddTodo({ ...addTodo, [id]: value });
  };

  /*
  //title input 값 추출
  const onChangeHandleTitle = (event) => {
    setAddTodo({ ...addTodo, title: event.target.value });
  };
  //contents input 값 추출
  const onChangeHandleContents = (event) => {
    setAddTodo({ ...addTodo, contents: event.target.value });
  };
  */

  const addTodoHandler = (event) => {
    //form태그 새로고침 막기
    event.preventDefault();
    //빈 값인 경우 alert 띄어 주기 -> 현업에서는 alert은 브라우저 작동을 멈추기 때문에 잘 사용 안함!
    if (addTodo.title === '' || addTodo.contents === '') {
      alert('입력해주세요');
    }
    // 추가 버튼 클릭 시, 새로운 Todo 카드 생성
    const newTodo = {
      title: addTodo.title,
      contents: addTodo.contents,
    };
    props.onSaveTodosData(newTodo);
    //저장 후 input 내용 빈 값 처리
    setAddTodo({ title: '', contents: '' });
  };

  return (
    <form className={classes.add} onSubmit={addTodoHandler}>
      <div className={classes.contents}>
        <label htmlFor='title'>제목</label>
        <input
          id='title'
          type='text'
          onChange={onChangeHandleInput}
          value={addTodo.title}
        />
        <label htmlFor='contents'>내용</label>
        <input
          id='contents'
          type='text'
          onChange={onChangeHandleInput}
          value={addTodo.contents}
        />
      </div>
      <button className={classes.addBtn}>추가하기</button>
    </form>
  );
};

export default AddContents;
