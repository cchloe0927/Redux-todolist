import React from 'react';
import classes from './Contents.module.css';
import ContentsCard from './ContentsCard';

const Contents = (props) => {
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
              <ContentsCard
                key={todo.id}
                todo={todo}
                deleteTdosData={props.deleteTdosData}
                progressData={props.progressData}
                buttonName='완료'
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
              <ContentsCard
                key={todo.id}
                todo={todo}
                deleteTdosData={props.deleteTdosData}
                progressData={props.progressData}
                buttonName='취소'
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Contents;
