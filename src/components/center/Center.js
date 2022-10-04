import React from "react";
import styled from "styled-components";
import A from "../../img/Rectangle 535.png";
import b from "../../img/Rectangle 536.png";
import c from "../../img/Rectangle 538.png";
import d from "../../img/Rectangle 539.png";
import e from "../../img/Rectangle 540.png";
import g from "../../img/Rectangle 541.png";
import h from "../../img/Rectangle 542.png";
import k from "../../img/Rectangle 543.png";
import j from "../../img/Ellipse 50.png";
import p from "../../img/Ic.png";
import n from "../../img/Icon.png";

const Center = () => {
  return (
    <DIV>
      <div>
        <H1>176,405 success stories</H1>
        <P>
          Sacrill constantly doing student feedback loops to ensure that our
          products not only enjoyable to get through, but transform the life of
          our learners and help to get the bright future.
        </P>
      </div>
      <DIVIMG>
        <img src={A} alt="" />
        <img src={b} alt="" />
        <img src={c} alt="" />
        <img src={d} alt="" />
        <img src={e} alt="" />
        <img src={g} alt="" />
        <img src={h} alt="" />
        <img src={k} alt="" />
      </DIVIMG>
      <DIVGGG>
        <div>
          <PP>What students say about Sacrill club</PP>
          <DIVBUTTON>
            <button>
              <img src={p} alt="" />
            </button>
            <button>
              <img src={n} alt="" />
            </button>
          </DIVBUTTON>
        </div>
        <div>
          <DIVP>
            <DIVO>
              <img src={j} alt="photo" />
              <p>Linda</p>
            </DIVO>
            <PO>
              The subscription to Sacrill has helped me to know what I really
              like, what topics are close and interesting and what is not worth
              wasting time on. It is an unlimited opportunity to learn for a
              small amount of money. I have always bought different online
              courses, but it often happened that the topic is interesting but
              the expert's presentation is boring and I quickly lost interest
              and left the course without getting the desired result. However, I
              can choose which author I feel more comfortable with, which topics
              I want to delve into, and which ones don't suit me at all. Sacrill
              is a great way to find a new hobby and get better every day. I
              definitely recommend it to those who want to improve themselves,
              their lives and strive to be a well-rounded and interesting
              person.
            </PO>
          </DIVP>
        </div>
      </DIVGGG>
    </DIV>
  );
};
const DIV = styled("div")`
  margin-left: 200px;
  margin-bottom: 120px;
  @media only screen and (max-width: 414px) {
    margin: 10px;
  }
`;
const H1 = styled("h1")`
  height: 51px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 110%;
  text-align: center;
  color: #333333;
  margin-left: -100px;
  @media only screen and (max-width: 414px) {
    width: 368px;
    /* height: 26px; */
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    color: #333333;
    margin-left: -25px;
    text-align: center;
  }
`;
const P = styled("p")`
  width: 860px;
  height: 56px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: #333333;
  text-align: center;
  margin-left: 100px;
  @media only screen and (max-width: 414px) {
    width: 320px;
    /* height: 88px; */
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    color: #333333;
    margin-left: -10px;
  }
`;
const DIVIMG = styled("div")`
  width: 900px;
  display: flex;
  justify-content: space-around;
  /* margin-left: -160px; */
`;
const PP = styled("p")`
  width: 300px;
  height: 204px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 110%;
  color: #333333;
  padding: 40px;
  @media only screen and (max-width: 414px) {
    width: 255px;
    height: 2px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    text-align: center;
    color: #333333;
    padding: 0px;
  }
`;
const DIVGGG = styled("div")`
  display: flex;
  @media only screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
  }
`;
const DIVO = styled("div")`
  display: flex;
  width: 200px;
  justify-content: space-around;
  padding-top: 60px;
  padding-left: 40px;
  @media only screen and (max-width: 414px) {
    padding-left: 5px;
  }
  
`;
const DIVP = styled("div")`
  width: 760px;
  height: 560px;
  background: #f0f6f4;
  border-radius: 12px;
  margin-top: 100px;
  @media only screen and (max-width: 414px) {
    width: 340px;
    height: 576px;
    background: #f0f6f4;
    border-radius: 12px;
  }
`;
const PO = styled("p")`
  width: 640px;
  height: 330px;
  font-family: "SF Pro Display";
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  margin-left: 40px;
  @media only screen and (max-width: 414px) {
    width: 300px;
    height: 456px;
    font-family: "SF Pro Display";
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
    margin-left: 10px;
  }
`;
const DIVBUTTON = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 200px;
  margin-top: 230px;
  margin-left: 60px;
  & button {
    width: 96px;
    height: 96px;
    border: 1px solid #333333;
    border-radius: 60px;
    background-color: white;
  }
  @media only screen and (max-width: 414px) {
    display: none;
  }
`;
export default Center;
