import React from "react";
import styled from "styled-components";
import img from "../../img/Ellipse16.png";
import imge from "../../img/Ellipse 15.png";

const SectionGovo = () => {
  return (
    <DIV>
      <div>
        <IMG src={imge} alt="" />
      </div>
      <div>
        <PARAGR>
          Sacrill is a powerful investment in your self-development
        </PARAGR>
        <Button>Try Sacrill club for 14 days</Button>
        <P>I only want to study the course I bought on previous step</P>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </DIV>
  );
};
const DIV = styled("div")`
  margin-left: 220px;
  margin-bottom: 120px;
  display: flex;
  justify-content: space-between;
  width: 1110px;
  @media only screen and (max-width: 414px) {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & img {
      display: none;
    }
  }
`;
const IMG = styled("img")`
  position: relative;
  left: 100px;
  top: 110px;
  @media only screen and (max-width: 414px) {
    position: relative;
    left: 0%;
    top: 0%;
  }
`;
const PARAGR = styled("p")`
  width: 717px;
  height: 39px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 140%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 56px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #333333;
    margin-left: 20px;
    text-align: center;
  }
`;
const Button = styled("button")`
  width: 360px;
  height: 86px;
  background: #73c371;
  border-radius: 1111px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  border: none;
  color: #ffffff;
  margin-left: 180px;
  cursor: pointer;
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 76px;
    background: #73c371;
    border-radius: 100px;
    margin-left: 10px;
  }
`;
const P = styled("p")`
  height: 24px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration-line: underline;
  color: #333333;
  text-align: center;
  @media only screen and (max-width: 414px) {
    width: 273px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    text-decoration-line: underline;
    color: #333333;
    margin-left: 25px;
  }
`;

export default SectionGovo;
