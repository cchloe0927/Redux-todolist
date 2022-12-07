import React from "react";
import classes from "./Todo.module.css";
import { useNavigate } from "react-router-dom";
//redux state
import { useDispatch, useSelector } from "react-redux";
import { deleteTodos } from "../../redux/modules/todos";
import { progressTodos } from "../../redux/modules/todos";

const Todo = ({ todo, buttonName }) => {
  //컴포넌트 내에서 페이지 이동
  const navigator = useNavigate();
  //dispatch 세팅 작업
  const dispatch = useDispatch();
  //값 읽어오기
  const todosData = useSelector((state) => state.todos.todoList);
  //console.log("todosData: ", todosData);

  //todo 삭제하기
  const onDeletedTodo = (id) => {
    //console.log(id);
    const newTodoList = todosData.filter((todo) => todo.id !== id);
    dispatch(deleteTodos(newTodoList));
  };

  //todo 상태값 변경하기
  const onProgressTodo = (id, progress) => {
    //console.log(id);
    const todos_index = todosData.findIndex((todo) => todo.id === id); //조건이 충족하는 인덱스 번호를 구함
    //console.log('todos_index: ', todos_index);
    progress
      ? (todosData[todos_index].progress = false)
      : (todosData[todos_index].progress = true);

    dispatch(progressTodos());
  };

  return (
    <div className={classes.contents_card}>
      <div className={classes.top}>
        <h2 className={classes.contents_title}>{todo.title}</h2>
        <button
          className={classes.linkBtn}
          onClick={() => {
            navigator(`detail/${todo.id}`);
          }}
        >
          상세보기
        </button>
      </div>
      <p className={classes.contents_text}>{todo.contents}</p>
      <div className={classes.btn}>
        <button
          className={classes.deleteBtn}
          onClick={() => onDeletedTodo(todo.id)}
        >
          삭제
        </button>
        <button
          className={classes.doneBtn}
          onClick={() => onProgressTodo(todo.id, todo.progress)}
        >
          {buttonName}
        </button>
      </div>
    </div>
  );
};

export default Todo;
