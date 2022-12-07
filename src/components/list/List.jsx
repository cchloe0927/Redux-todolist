import React from "react";
import classes from "./List.module.css";
import Todo from "../todo/Todo";
//redux state
import { useSelector } from "react-redux";

const List = () => {
  //값 읽어오기
  const todosData = useSelector((state) => state.todos.todoList);
  console.log("todosData: ", todosData);
  const isWorking = todosData.filter((work) => work.progress === true);
  const isDone = todosData.filter((work) => work.progress === false);
  //console.log('isWorking', isWorking);
  //console.log('isDone', isDone);

  return (
    <div className={classes.contents}>
      {/* working */}
      <section>
        <h2>Working 🔥</h2>
        <div className={classes.contents_box}>
          {isWorking.map((todo) => {
            return <Todo key={todo.id} todo={todo} buttonName="완료" />;
          })}
        </div>
      </section>
      {/* Done */}
      <section>
        <h2>Done 🎉</h2>
        <div className={classes.contents_box}>
          {isDone.map((todo) => {
            return <Todo key={todo.id} todo={todo} buttonName="취소" />;
          })}
        </div>
      </section>
    </div>
  );
};

export default List;
