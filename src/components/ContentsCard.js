import React from 'react';
import classes from './ContentsCard.module.css';

const ContentsCard = ({ todo, deleteTdosData, progressData, buttonName }) => {
  //console.log('todo: ', todo);
  //console.log('deleteTdosData: ', deleteTdosData);
  //console.log('progressData: ', progressData);
  //console.log('buttonName: ', buttonName);

  return (
    <div className={classes.contents_card}>
      <h2 className={classes.contents_title}>{todo.title}</h2>
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

export default ContentsCard;
