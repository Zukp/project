import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <DIVHeader>
      <div>
        <PARA>
          Go through all the steps to get access and start Sacrill programs
        </PARA>
      </div>
      <DIV></DIV>
      <PARAGRAF>
        Wait! You're Almost There!
        <PARF> Just One More Step To Go</PARF>
      </PARAGRAF>
      <P>
        You'll need to go through all the registration steps to gain access to
        our education platform, and then you can start learning. We have
        something special for you today.
      </P>
    </DIVHeader>
  );
};
const P = styled("p")`
  width: 770px;
  margin-top: 60px;
  margin-left: 300px;
  height: 60px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 96px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    margin-top: 20px;
    margin-left: 10px;
    /* or 24px */

    text-align: center;

    color: #333333;
  }
`;
const DIVHeader = styled("div")`
  width: 1280px;
`;
const PARA = styled("p")`
  /* width: 528px; */
  height: 30px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  /* identical to box height, or 30px */
  text-align: center;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 18px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
    color: #333333;
  }
`;
const PARAGRAF = styled("p")`
  height: 100px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 10%;
  color: #ff3a44;
  text-align: center;

  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 52px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 10%;
    text-align: center;
    color: #ff3a44;
  }
`;
const PARF = styled("p")`
  height: 100px;
  color: black;
  font-family: "SF Pro Display";
  font-weight: 700;
  font-size: 56px;
  line-height: 110%;
  margin-bottom: 30px;
  text-align: center;
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 52px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 10%;
    text-align: center;
    color: black;
  }
`;
const DIV = styled("div")`
  width: 1000px;
  height: 24px;
  background: linear-gradient(297.23deg, #a0ffb5 -12.98%, #bec1c0 115.22%),
    linear-gradient(51.51deg, #9aeabf 0%, #eaf6a3 100%);
  border-radius: 100px;
  margin-left: 160px;
  margin-bottom: 72px;
  @media only screen and (max-width: 414px) {
    width: 288px;
    height: 12px;
    background: linear-gradient(297.23deg, #a0ffb5 -12.98%, #bec1c0 115.22%);
    border-radius: 100px;
    margin-left: 10px;
    margin-bottom: 36px;
  }
`;
export default Header;
