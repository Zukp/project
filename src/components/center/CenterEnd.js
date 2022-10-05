import React from "react";
import styled from "styled-components";
import img from "../../img/Free.png";

const CenterEnd = () => {
  return (
    <DIV>
      <DIVB>
        <DIVV>
          <H1>Try Sacrill Club 14 days For Free</H1>
          <H3>
            Only for new learners like you, for a limited time, a 14 days free
            trial, then only for $29 a month
          </H3>
          <P>
            This offer is only available now.
            <span>You won't be able to upgrade for free trial plan later.</span>
          </P>
          <Button>Try Sacrill club for 14 days</Button>
          <PP>I only want to study the course I bought on previous step</PP>
        </DIVV>
        <DIVIMG>
          <DIVF>
            <div>
              <Button1>Body</Button1>
            </div>
            <div>
              <Button2>Mind</Button2>
            </div>
          </DIVF>

          <DIVG>
            <div>
              <Button3>Soul</Button3>
            </div>
            <div>
              <Button4>Relationship</Button4>
            </div>
          </DIVG>
        </DIVIMG>
      </DIVB>
    </DIV>
  );
};
const DIV = styled("div")`
  margin-left: 200px;
  width: 1580px;
  height: 689px;
  background: #f5f2f0;
  border-radius: 12px;
  margin-bottom: 120px;
  @media only screen and (max-width: 414px) {
    margin-left: 5px;
    margin-bottom: 420px;
    width: 380px;
    height: 630px;
  }
`;
const DIVV = styled("div")`
  margin-left: 50px;
  @media only screen and (max-width: 414px) {
    margin-left: 2px;
  }
`;
const H1 = styled("h1")`
  width: 360px;
  height: 102px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 110%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 255px;
    height: 52px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    text-align: center;
    color: #333333;
    margin-left: 40px;
  }
`;
const H3 = styled("h3")`
  width: 460px;
  height: 117px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 140%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 84px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    color: #333333;
    margin-left: 20px;
  }
`;
const P = styled("p")`
  width: 420px;
  height: 60px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #ff3a44;
  & span {
    color: black;
  }
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 48px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    margin-left: 20px;
    color: #ff3a44;
    & span {
      color: black;
    }
  }
`;
const Button = styled("button")`
  width: 360px;
  height: 86px;
  border-radius: 1111px;
  background: #73c371;
  border: none;
  cursor: pointer;
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 76px;
    background: #73c371;
    border-radius: 100px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: #ffffff;
    margin-left: 20px;
  }
`;
const PP = styled("p")`
  width: 373px;
  height: 24px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration-line: underline;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 273px;
    height: 48px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    text-decoration-line: underline;
    color: #333333;
    margin-left: 44px;
  }
`;
const DIVIMG = styled("div")`
  width: 1333px;
  height: 699px;
  background-image: url("http://localhost:3000/static/media/Free.9c204b26430091f7e8e6.png");
  @media only screen and (max-width: 414px) {
    width: 380px;
    height: 620px;
    background: #f5f2f0;
    border-radius: 12px;
    background-image: url("http://localhost:3000/static/media/Free.9c204b26430091f7e8e6.png");
  }
`;
const DIVB = styled("div")`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
  }
`;
const DIVF = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 700px;
  padding-top: 200px;
  padding-left: 300px;
  @media only screen and (max-width: 414px) {
    width: 360px;
    height: 392px;
    background: url(Free_iPhone_12_Mockup_3.png);
    border-radius: 12px;
    padding-left: 10px;
    padding-top: 40px;
  }
`;
const DIVG = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 700px;
  padding-top: 200px;
  padding-left: 400px;
  @media only screen and (max-width: 414px) {
    width: 360px;
    height: 392px;
    background: url(Free_iPhone_12_Mockup_3.png);
    border-radius: 12px;
    padding-left: 10px;
    padding-top: 50px;
  }
`;
const Button1 = styled("button")`
  width: 106px;
  height: 59px;
  background: #7ab1ff;
  border-radius: 100px;
  border: none;
  color: white;
  @media only screen and (max-width: 414px) {
  }
`;
const Button2 = styled("button")`
  width: 104px;
  height: 59px;
  background: #f85c50;
  border-radius: 100px;
  border: none;
  color: wheat;
  @media only screen and (max-width: 414px) {
  }
`;
const Button3 = styled("button")`
  width: 97px;
  height: 59px;
  background: #f375f3;
  border-radius: 100px;
  border: none;
  color: white;
  @media only screen and (max-width: 414px) {
  }
`;
const Button4 = styled("button")`
  width: 199px;
  height: 59px;
  background: #fed876;
  border-radius: 100px;
  border: none;
  color: black;
  @media only screen and (max-width: 414px) {
  }
`;

export default CenterEnd;
