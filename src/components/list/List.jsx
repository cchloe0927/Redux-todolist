import React from "react";
import classes from "./List.module.css";
import Todo from "../todo/Todo";
// import { useNavigate } from "react-router-dom";

const List = (props) => {
  // const navigate = useNavigate();
  //console.log('props', props);
  const isWorking = props.todosData.filter((work) => work.progress === true);
  const isDone = props.todosData.filter((work) => work.progress === false);
  //console.log('isWorking', isWorking);
  //console.log('isDone', isDone);

  return (
    <div className={classes.contents}>
      {/* working */}
      <section>
        <h2>Working 🔥</h2>
        <div className={classes.contents_box}>
          {isWorking.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTdosData={props.deleteTdosData}
                progressData={props.progressData}
                buttonName="완료"
                // onClick={() => {
                //   navigate("/detail");
                // }}
              />
            );
          })}
        </div>
      </section>
      {/* Done */}
      <section>
        <h2>Done 🎉</h2>
        <div className={classes.contents_box}>
          {isDone.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTdosData={props.deleteTdosData}
                progressData={props.progressData}
                buttonName="취소"
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default List;
