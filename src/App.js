import React from "react";
import styled from "styled-components";
import Header from "./components/header/Header";
import HeaderBackg from "./components/header/HeaderBackg";
import HeaderPhoto from "./components/header/HeaderPhoto";
import Section from "./components/section/Section";

function App() {
  return (
    <DIVAPP>
      <Header />
      <HeaderBackg />
      <HeaderPhoto />
      <Section />
    </DIVAPP>
  );
}
const DIVAPP = styled("div")`
  margin-left: -100px;
  @media only screen and (max-width: 414px) {
    margin: 0px;
  }
`;
export default App;
