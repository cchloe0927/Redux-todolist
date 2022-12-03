import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DetailTodo = () => {
  return (
    <Todowrap>
      <TodoBox>
        <Header>
          <TodoId>Todo Id</TodoId>
          <Link to="/">
            <Btn>이전으로</Btn>
          </Link>
        </Header>
        <Body>
          <h2>테스트</h2>
          <p>테스트 중입니다.</p>
        </Body>
      </TodoBox>
    </Todowrap>
  );
};

export default DetailTodo;

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
