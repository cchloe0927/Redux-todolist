//import { v4 as uuidv4 } from "uuid"; //고유 id값 주기 위한 라이브러리 (설치해야함)
import React, { useState } from "react";

//redux
import { useDispatch, useSelector } from "react-redux";
// import { addTodos } from "../redux/modules/todos";

//component
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

function TodoList() {
  //값 읽어오기
  const todosData = useSelector((state) => state.todos.todoList);
  console.log("todosData: ", todosData);
  //dispatch 세팅 작업
  const dispatch = useDispatch();
  //todo 고유 ID state (상세페이지에서 보여지기 때문에 state로 관리)
  const [todoId, setTodoId] = useState(1);

  //todo 추가하기
  const onSavedTodo = (newTodo) => {
    const newTodos = {
      ...newTodo,
      id: todoId,
      progress: true,
    };
    dispatch({
      type: "ADD_TODOS",
      payload: newTodos,
    });
    setTodoId(todoId + 1); //원시값은 상관없음
  };

  //todo 삭제하기
  const onDeletedTodo = (id) => {
    const newTodoList = todosData.filter((todo) => todo.id !== id);
    dispatch({
      type: "DELETE_TODOS",
      payload: newTodoList,
    });
  };

  //todo 상태값 변경하기
  const onProgressTodo = (id, progress) => {
    //console.log(id);
    const todos_index = todosData.findIndex((todo) => todo.id === id); //조건이 충족하는 인덱스 번호를 구함
    //console.log('todos_index: ', todos_index);
    progress
      ? (todosData[todos_index].progress = false)
      : (todosData[todos_index].progress = true);

    dispatch({
      type: "PROGRESS_TODOS",
    });
  };

  return (
    <Layout>
      <Header />
      <Form onSaveTodosData={onSavedTodo} />
      <List
        todosData={todosData}
        deleteTdosData={onDeletedTodo}
        progressData={onProgressTodo}
      />
    </Layout>
  );
}

export default TodoList;
