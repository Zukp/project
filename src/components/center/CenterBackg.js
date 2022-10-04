import React from "react";
import styled from "styled-components";
import i from "../../img/image 283.png";
import m from "../../img/image 284.png";
import g from "../../img/image 285.png";
import e from "../../img/image 286.png";

const CenterBackg = () => {
  return (
    <DIV>
      <DIC>
        <P>
          Become a Sacrill club member to start Get access to all courses for
          less than $1 a day
        </P>
        <H1>What you get:</H1>
        <DIVK>
          <DIVJ>
            <IMG src={i} alt="" />
            <PP>
              Full access to Sacrills entire curriculum of best-in-class
              programs for transforming every dimension of your life.
            </PP>
          </DIVJ>
          <DIVJ>
            <IMG src={m} alt="" />
            <PP>
              Access to Sacrills private social network, where you can connect,
              share wisdom, and grow with fellow members in your city and around
              the world.
            </PP>
          </DIVJ>

          <DIVJ>
            <IMG src={g} alt="" />
            <PP>
              One-click refund in the first 14 days so your purchase is a 100%
              safe.
            </PP>
          </DIVJ>
          <DIVJ>
            <IMG src={e} alt="" />
            <PP>Plus: a price available on this page only.</PP>
          </DIVJ>
        </DIVK>
      </DIC>
    </DIV>
  );
};
const DIV = styled("div")`
  margin-left: 200px;
  margin-bottom: 120px;
  @media only screen and (max-width: 414px) {
    margin-left: 10px;
  }
`;
const DIC = styled("div")`
  width: 1200px;
  height: 809px;
  background-image: url("http://localhost:3000/static/media/Rectangle%20572.0c245b4ded06a4f646d6.png");
  border-radius: 12px;
  @media only screen and (max-width: 414px) {
    height: 809px;
  }
`;
const P = styled("p")`
  width: 420px;
  height: 255px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 110%;
  color: #ffffff;
  margin-left: 600px;
  padding-top: 110px;
  @media only screen and (max-width: 414px) {
    padding-top: 0px;
    width: 214px;
    height: 130px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    color: #ffffff;
  }
`;
const H1 = styled("h1")`
  width: 177px;
  height: 39px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 140%;
  color: #ffffff;
  margin-left: 600px;
  @media only screen and (max-width: 414px) {
    width: 101px;
    height: 22px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    color: #ffffff;
  }
`;
const DIVK = styled("div")`
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;
const DIVJ = styled("div")`
  width: 275px;
  height: 300px;
  background: #ffffff;
  border-radius: 12px;
  @media only screen and (max-width: 414px) {
  }
`;
const PP = styled("p")`
  width: 215px;
  height: 180px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  margin-left: 10px;
  @media only screen and (max-width: 414px) {
    width: 300px;
    height: 72px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
  }
`;
const IMG = styled("img")`
  padding-left: 20px;
  padding-top: 20px;
  @media only screen and (max-width: 414px) {
  }
`;
export default CenterBackg;
