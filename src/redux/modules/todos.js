// src/redux/modules/todos.js

//Action Value
// const ADD_TODOS = "ADD_TODOS";

//Action Creator
// export const addTodos = () => {
//   return {
//     type: ADD_TODOS,
//     // payload: {}
//   };
// };

//Initial State
const initialState = {
  todoList: [],
};

// Reducer 기본형태
const todos = (state = initialState, action) => {
  //console.log("action 값 확인: ", action);
  switch (action.type) {
    case "ADD_TODOS":
      console.log("ADD_TODOS 추가");
      return {
        todoList: [
          ...state.todoList,
          {
            title: action.payload.title,
            contents: action.payload.contents,
            id: action.payload.id,
            progress: action.payload.progress,
          },
        ],
      };
    case "DELETE_TODOS":
      console.log("DELETE_TODOS 삭제");
      console.log(action.payload);
      return {
        todoList: [...action.payload],
      };
    case "PROGRESS_TODOS":
      console.log("PROGRESS_TODOS 상태변경");
      return {
        todoList: [...state.todoList],
      };
    default:
      return { ...state };
  }
};

// export default reducer
export default todos;
