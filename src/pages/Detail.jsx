import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
//redux state
import { useSelector } from "react-redux";

const DetailTodo = () => {
  const params = useParams(); //파라미터 값과 리덕스를 통해서 받아온 데이터의 id값일 일치하면 화면에 뿌리기
  console.log("params.id :", typeof params.id, params.id);
  //값 읽어오기
  const todosData = useSelector((state) => state.todos.todoList);
  const [todoID] = todosData.filter((item) => String(item.id) === params.id);
  console.log("todoID: ", todoID);

  return (
    <Todowrap>
      <TodoBox>
        <Header>
          <TodoId>{todoID.id}</TodoId>
          <Link to="/">
            <Btn>이전으로</Btn>
          </Link>
        </Header>
        <Body>
          <h2>{todoID.title}</h2>
          <p>{todoID.contents}</p>
        </Body>
      </TodoBox>
    </Todowrap>
  );
};

export default DetailTodo;

//styled-components
const Todowrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const TodoBox = styled.div`
  width: 500px;
  height: 300px;
  border: 3px solid #839ef7;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -150px;
  border-radius: 15px;
`;

const Header = styled.header`
  height: 50px;
  background: #839ef7;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Body = styled.div`
  border-radius: 6px;
  width: 100%;
  height: 80%;
  padding: 10px;
  box-sizing: border-box;
`;

const TodoId = styled.h2`
  padding-left: 20px;
`;

const Btn = styled.button`
  margin-right: 10px;
  width: 80px;
  height: 30px;
  background-color: #4265d6;
  color: white;
  font-weight: 600;
  text-align: center;
  border: 1px solid #4265d6;
  border-radius: 6px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;
