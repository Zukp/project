import React from "react";
import styled from "styled-components";
import imgg from "../../img/Rectangle 702.png";
import image from "../../img/Rectangle 703.png";
import img from "../../img/Rectangle 704.png";
import imag from "../../img/Rectangle 705.png";
import imge from "../../img/Rectangle 706.png";
import imgge from "../../img/Rectangle 707.png";
const HeaderPhoto = () => {
  return (
    <DIVC>
      <div>
        <H1>Invest In Your Skills</H1>
        <PARAGR>
          That's right, self-development. When you develop, everything around
          you grows with you: your career, your quality of life, and your
          ability to control your own destiny.
        </PARAGR>
        <PARAGR>
          Gaining new skills and knowledge with courses is a great modern form
          of education. Apply your new skills on a daily basis and improve your
          life quality!
        </PARAGR>
        <DIV>
          <div>
            <img src={imgg} alt="photo" />
            <p>Body health</p>
          </div>
          <div>
            <img src={image} alt="photo" />
            <p>Body health</p>
          </div>

          <div>
            <img src={img} alt="photo" />
            <p>Emotional well-being</p>
          </div>
          <div>
            <img src={imag} alt="photo" />
            <p>Relationship</p>
          </div>
          <div>
            <img src={imge} alt="photo" />
            <p>Self-realization</p>
          </div>
          <div>
            <img src={imgge} alt="photo" />
            <p>Dancing</p>
          </div>
        </DIV>
      </div>
    </DIVC>
  );
};
const DIVC = styled("div")`
  width: 1130px;
  margin-left: 200px;
  @media only screen and (max-width: 414px) {
    margin: 10px;
  }
`;
const H1 = styled("h1")`
  width: 400px;
  height: 51px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 110%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 215px;
    height: 26px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    /* or 26px */

    color: #333333;
  }
`;
const PARAGR = styled("p")`
  width: 731px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 320px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
  }
`;
const DIV = styled("div")`
  display: flex;
  justify-content: space-around;
  /* @media only screen and (max-width: 414px) {
  } */
`;

export default HeaderPhoto;
