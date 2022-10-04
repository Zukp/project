import React from "react";
import styled from "styled-components";
import Center from "./components/center/Center";
import CenterBackg from "./components/center/CenterBackg";
import CenterCenterov from "./components/center/CenterCenterov";
import CenterContainer from "./components/center/CenterContainer";
import CenterEnd from "./components/center/CenterEnd";
import End from "./components/center/End";
import Header from "./components/header/Header";
import HeaderBackg from "./components/header/HeaderBackg";
import HeaderPhoto from "./components/header/HeaderPhoto";
import Section from "./components/section/Section";
import SectionContainer from "./components/section/SectionContainer";
import SectionGovo from "./components/section/SectionGovo";
import SectionPhoto from "./components/section/SectionPhoto";

function App() {
  return (
    <div>
      <Header />
      <HeaderBackg />
      <HeaderPhoto />
      <Section />
      <SectionPhoto />
      <SectionGovo />
      <SectionContainer />
      <Center />
      <CenterContainer />
      <CenterBackg />
      <CenterCenterov />
      <CenterEnd />
      <End />
    </div>
  );
}
// const DIVAPP = styled("div")`
//   margin-left: -100px;
//   @media only screen and (max-width: 414px) {
//     margin: 0px;
//     padding: 0px;
//   }
// `;
export default App;
