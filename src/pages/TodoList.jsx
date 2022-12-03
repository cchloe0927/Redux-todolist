import React, { useState } from "react";
//import { v4 as uuidv4 } from "uuid"; //고유 id값 주기 위한 라이브러리 (설치해야함)

//component
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

function TodoList() {
  //todoList state
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      contents: "리액트 기초를 마스터 하자!",
      progress: true,
    },
  ]);
  //todo 고유 ID state (상세페이지에서 보여지기 때문에 state로 관리)
  const [todoId, setTodoId] = useState(2);

  //todo 추가하기
  const onSavedTodo = (newTodo) => {
    const todosData = {
      ...newTodo,
      id: todoId,
      progress: true,
    };
    setTodos([...todos, todosData]);
    console.log("todosData: ", todosData);
    setTodoId(todoId + 1); //원시값은 상관없음
  };
  //todo 삭제하기
  const onDeletedTodo = (id) => {
    //console.log(id);
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };
  //todo 상태값 변경하기
  const onProgressTodo = (id, progress) => {
    console.log(id);
    const todos_index = todos.findIndex((todo) => todo.id === id); //조건이 충족하는 인덱스 번호를 구함
    //console.log('todos_index: ', todos_index);
    progress
      ? (todos[todos_index].progress = false)
      : (todos[todos_index].progress = true);
    setTodos([...todos]);
  };

  return (
    <Layout>
      <Header />
      <Form onSaveTodosData={onSavedTodo} />
      <List
        todosData={todos}
        deleteTdosData={onDeletedTodo}
        progressData={onProgressTodo}
      />
    </Layout>
  );
}

export default TodoList;
