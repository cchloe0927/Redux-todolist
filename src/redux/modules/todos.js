// src/redux/modules/todos.js

//Action Value
const ADD_TODOS = "ADD_TODOS";
const DELETE_TODOS = "DELETE_TODOS";
const PROGRESS_TODOS = "PROGRESS_TODOS";

//Action Creator
export const addTodos = (newTodos) => {
  return {
    type: ADD_TODOS,
    payload: newTodos,
  };
};
//1. 만들어진 데이터를 가져와서 state 변경
// export const deleteTodos = (newTodoList) => {
//   return {
//     type: DELETE_TODOS,
//     payload: newTodoList,
//   };
// };
//2. 필요한 값만 값아와서 리듀서에서 데이터 만듦
export const deleteTodos = (id) => {
  return {
    type: DELETE_TODOS,
    payload: id,
  };
};
export const progressTodos = () => {
  return {
    type: PROGRESS_TODOS,
  };
};

//Initial State
const initialState = {
  todoList: [
    {
      title: "리덕스",
      contents: "리덕스 내용",
      progress: true,
      id: 0,
    },
  ],
};

// Reducer 기본형태
const todos = (state = initialState, action) => {
  //console.log("action 값 확인: ", action);
  switch (action.type) {
    case ADD_TODOS:
      //console.log("ADD_TODOS 추가");
      return {
        todoList: [...state.todoList, action.payload],
      };
    case DELETE_TODOS:
      //console.log("DELETE_TODOS 삭제");
      //console.log(action.payload);
      return {
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    case PROGRESS_TODOS:
      //console.log("PROGRESS_TODOS 상태변경");
      return {
        todoList: [...state.todoList],
      };
    default:
      return { ...state };
  }
};

// export default reducer
export default todos;
