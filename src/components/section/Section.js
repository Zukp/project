import React from "react";
import styled from "styled-components";

import img from "../../img/Rectangle 1.png";
import imge from "../../img/Rectangle 2.png";
import imgee from "../../img/Rectangle 3.png";
import imgeee from "../../img/Rectangle 4.png";
import i from "../../img/Ic.png";
import Icon from "../../img/Icon.png";
const Section = () => {
  return (
    <DIC>
      <div>
        <PARAGRAF>Best-Selling Programs are Included in Membership</PARAGRAF>
      </div>
      <DIV>
        <div>
          <img src={img} alt="photo" />
          <P>El masaje es como una danza de amor</P>
          <H4>Zinovieva Irina</H4>
        </div>
        <div>
          <img src={imge} alt="photo" />
          <P>Corrección de la postura en casa "Royal Stan"</P>
          <H4>Venera Pratova</H4>
        </div>
        <div>
          <img src={imgee} alt="photo" />
          <P>Curso en línea para mujeres "Lo que un hombre real…"</P>
          <H4>Alex Polyakov</H4>
        </div>
        <div>
          <img src={imgeee} alt="photo" />
          <P>Cómo Balancear los Chakras y mejorar la vida</P>
          <H4>Ernesto Giombini</H4>
        </div>
      </DIV>
      <DIVB>
        <button>
          <img src={i} alt="icon" />
        </button>
        <button>
          <img src={Icon} alt="icon" />
        </button>
      </DIVB>
    </DIC>
  );
};
const DIC = styled("div")`
  margin-left: 200px;
  margin-bottom: 120px;
  @media only screen and (max-width: 414px) {
    margin: 10px;
  }
`;
const PARAGRAF = styled("p")`
  width: 696px;
  height: 102px;

  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 110%;
  /* or 51px */

  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 302px;
    height: 52px;
    left: 20px;
    top: 1958px;

    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    /* or 26px */

    color: #333333;
  }
`;
const DIV = styled("div")`
  display: flex;
  justify-content: space-between;
  & img {
    margin-right: 20px;
  }
`;
const P = styled("p")`
  width: 230px;
  height: 56px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  /* or 28px */

  color: #333333;
`;
const H4 = styled("h4")`
  width: 117px;
  height: 24px;
  margin-top: 40px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  color: #333333;
`;
const DIVB = styled("div")`
  width: 200px;
  display: flex;
  justify-content: space-around;
  & button {
    width: 96px;
    height: 96px;
    border: 1px solid #333333;
    border-radius: 60px;
    background-color: white;
  }
`;
export default Section;
