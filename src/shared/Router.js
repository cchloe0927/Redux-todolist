import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from "../pages/TodoList";
import DetailTodo from "../pages/DetailTodo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="detail/:id" element={<DetailTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
