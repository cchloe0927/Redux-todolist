//import { v4 as uuidv4 } from "uuid"; //고유 id값 주기 위한 라이브러리 (설치해야함)
import React from "react";

//component
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";

function Home() {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
}

export default Home;
