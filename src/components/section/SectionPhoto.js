import React from "react";
import styled from "styled-components";
import Img from "../../img/Ellipse17.png";
import Imf from "../../img/Ellipse14.png";
import i from "../../img/Ellipse 2.png";
import m from "../../img/Ellipse 3.png";
import g from "../../img/Ellipse 4.png";
import e from "../../img/Ellipse 5.png";
import k from "../../img/kk.png";

const SectionPhoto = () => {
  return (
    <DIV>
      <DIVICON>
        <Du>
          <img src={k} alt="" />
          <img src={k} alt="" />
          <img src={k} alt="" />
          <img src={k} alt="" />
        </Du>
        <span>Rating 4.7 / 321 reviews</span>
        <div>
          <IMG src={i} alt="" />
          <IMG src={m} alt="" />
          <IMG src={g} alt="" />
          <IMG src={e} alt="" />
        </div>
      </DIVICON>
      <DIB>
        <div>
          <img src={Img} alt="photo" />
        </div>
        <div>
          <H2>Become The Best Version Of Yourself With Sacrill Club</H2>
          <P>
            Sacrill subscription gives you courses to daily improve your
            relationships, self-realization, health and emotional well-being.
            And all this at an incredibly low price.
          </P>
        </div>
        <div>
          <IMGD src={Imf} alt="photo" />
        </div>
      </DIB>
    </DIV>
  );
};
const IMGD = styled("img")`
  width: 160px;
  height: 160px;
  position: relative;
  right: 150px;
  bottom: 100px;
`;
const Du = styled("div")`
  margin: 10px;

  & img {
    margin-left: 10px;
    @media only screen and (max-width: 414px) {
      margin: 0px;
      padding: 0px;
    }
  }
`;
const H2 = styled("h2")`
  width: 586px;
  height: 102px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 110%;
  text-align: center;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 297px;
    height: 52px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    color: #333333;
  }
`;
const DIVICON = styled("div")`
  display: flex;
  width: 436px;
  background: #f5f5f5;
  text-align: center;
  border-radius: 12px;
  padding-left: 10px;
  padding-top: 10px;
  margin-left: 300px;
  & span {
    width: 164px;
    height: 16px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    margin: 10px;
    color: #333333;
  }
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 102px;
    background: #ffffff;
    border-radius: 12px;
    margin-left: 10px;
    margin-top: 10px;
    display: flex;
    flex-direction: column-reverse;
    & span {
      height: 16px;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: #333333;
      margin-left: 60px;
    }
  }
`;
const IMG = styled("img")`
  margin-left: -10px;
`;

const DIV = styled("div")`
  margin-left: 200px;
  margin-bottom: 120px;
  @media only screen and (max-width: 414px) {
    margin: 10px;
    padding: 10px;
    background: #f5f5f5;
  }
`;
const DIB = styled("div")`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    & img {
      display: none;
    }
  }
`;
const P = styled("p")`
  width: 760px;
  height: 56px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
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
    color: #333333;
  }
`;
export default SectionPhoto;
