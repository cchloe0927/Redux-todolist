import React from "react";
import classes from "./Todo.module.css";
import { useNavigate } from "react-router-dom";

const Todo = ({ todo, deleteTdosData, progressData, buttonName }) => {
  const navigator = useNavigate();
  //console.log('todo: ', todo);
  //console.log('deleteTdosData: ', deleteTdosData);
  //console.log('progressData: ', progressData);
  //console.log('buttonName: ', buttonName);

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
          onClick={() => deleteTdosData(todo.id)}
        >
          삭제
        </button>
        <button
          className={classes.doneBtn}
          onClick={() => progressData(todo.id, todo.progress)}
        >
          {buttonName}
        </button>
      </div>
    </div>
  );
};

export default Todo;
