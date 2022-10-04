import React from "react";
import styled from "styled-components";
import k from "../../img/kk.png";
import i from "../../img/Ellipse 49.png";
import c from "../../img/Ellipse 48.png";
import o from "../../img/Ellipse 40.png";
const CenterContainer = () => {
  return (
    <DIV>
      <div>
        <H1>Student reviews about our courses</H1>
        <P>
          All our students are delighted with the results and the work of online
          trainers
        </P>
      </div>
      <DIVO>
        <DIVCONT>
          <DIVICON>
            <img src={k} alt="" />
            <img src={k} alt="" />
            <img src={k} alt="" />
            <img src={k} alt="" />
            <img src={k} alt="" />
          </DIVICON>
          <PP>@dBarnes · 7 March 2022</PP>
          <PPP>
            A wonderful, healthy pastime! Great, exciting and giving hope for a
            full perception of the world in its best light! Developing motor
            skills-we develop acute and quick problem solving! Great! Thanks!
          </PPP>
          <DIVUSER>
            <div>
              <img src={i} alt="photo" />
            </div>
            <div>
              <H>Davide Barnes</H>
              <POP>Novice disco dancer</POP>
            </div>
          </DIVUSER>
        </DIVCONT>

        <DIVCONT>
          <DIVICON>
            <img src={k} alt="" />
            <img src={k} alt="" />
            <img src={k} alt="" />
            <img src={k} alt="" />
            <img src={k} alt="" />
          </DIVICON>
          <PP>@Mikeeeee · 5 March 2022</PP>
          <PPP>
            Now I feel my inner power After this program I does not feel my
            daily weakness without taking any pills and medications. This is
            unbelieveble!
          </PPP>
          <DIVUSER>
            <div>
              <img src={i} alt="photo" />
            </div>
            <div>
              <H>Mike Thomson</H>
              <POP>Nutrition Coach</POP>
            </div>
          </DIVUSER>
        </DIVCONT>
      </DIVO>

      <DIVO>
        <DIVCONT>
          <DIVICON>
            <img src={k} alt="" />
            <img src={k} alt="" />
            <img src={k} alt="" />
            <img src={k} alt="" />
            <img src={k} alt="" />
          </DIVICON>
          <PP>@BrianAl · 9 April 2022</PP>
          <PPP>
            Hello. Thank you so much for the course program!!! It was a
            pleasure, I liked everything very much!!! The result speaks better
            than any words!
          </PPP>
          <DIVUSER>
            <div>
              <img src={i} alt="photo" />
            </div>
            <div>
              <H>Brian Alexander</H>
              <POP>Successful businessman</POP>
            </div>
          </DIVUSER>
        </DIVCONT>

        <DIVCONT>
          <DIVICON>
            <img src={k} alt="" />
            <img src={k} alt="" />
            <img src={k} alt="" />
            <img src={k} alt="" />
            <img src={k} alt="" />
          </DIVICON>
          <PP>@NicGray · 7 July 2022</PP>
          <PPP>
            I've been doing it for 2 months, 3 times a week - the result is
            minus 8 cm in the waistline. Very cool result! Thank you for this
            useful course.
          </PPP>
          <DIVUSER>
            <div>
              <img src={i} alt="photo" />
            </div>
            <div>
              <H>Nicole Gray</H>
              <POP>Novice disco dancer</POP>
            </div>
          </DIVUSER>
        </DIVCONT>
      </DIVO>
    </DIV>
  );
};
const DIVO = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin-top: 60px;
  @media only screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height:700px;
  }
`;
const DIV = styled("div")`
  margin-left: 200px;
  margin-bottom: 120px;
  @media only screen and (max-width: 414px) {
    margin-left: 10px;
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
  @media only screen and (max-width: 414px) {
    width: 240px;
    height: 52px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    text-align: center;
    color: #333333;
  }
`;
const P = styled("p")`
  height: 28px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 44px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    color: #333333;
  }
`;
const DIVCONT = styled("div")`
  width: 560px;
  height: 384px;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  @media only screen and (max-width: 414px) {
    width: 340px;
    height: 314px;

    border: 1px solid #e5e5e5;
    border-radius: 12px;
  }
`;
const DIVICON = styled("div")`
  margin-left: 20px;
  & img {
    margin-left: 8px;
    padding-top: 40px;
    @media only screen and (max-width: 414px) {
      padding-top: 8px;
    }
  }
`;
const PP = styled("p")`
  width: 205px;
  height: 24px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
  margin-left: 20px;
`;
const PPP = styled("p")`
  margin-left: 20px;
  width: 480px;
  height: 120px;
  font-family: "SF Pro Display";
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 300px;
    height: 120px;
    font-family: "SF Pro Display";
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
  }
`;
const DIVUSER = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 350px;
`;
const H = styled("h1")`
  width: 132px;
  height: 20px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 105px;
    height: 16px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: #333333;
  }
`;
const POP = styled("p")`
  width: 230px;
  height: 18px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: #333333;
  opacity: 0.5;
  @media only screen and (max-width: 414px) {
    width: 113px;
    height: 13px;
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 110%;
    color: #333333;
    opacity: 0.5;
  }
`;
export default CenterContainer;
