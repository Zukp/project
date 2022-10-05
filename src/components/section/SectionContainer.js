import React from "react";
import styled from "styled-components";
import img from "../../img/Rectangle 635.png";
import imge from "../../img/Rectangle 637.png";
import imgee from "../../img/Rectangle 639.png";
import k from "../../img/kk.png";
import i from "../../img/Ellipse 49.png";
import c from "../../img/Ellipse 48.png";
import o from "../../img/Ellipse 40.png";

const SectionContainer = () => {
  return (
    <DIVC>
      <H1>How Sacrill Works</H1>
      <DIV>
        <DIVD>
          <SPAN>1</SPAN>
          <img src={img} alt="" />
          <H2>Learn</H2>
          <P>Level up your life with the worlds best trainers programs.</P>
        </DIVD>

        <DIVD>
          <SPAN>2</SPAN>
          <img src={imge} alt="" />
          <H2>Connect</H2>
          <P>Be part of a community that supports you.</P>
        </DIVD>

        <DIVD>
          <SPAN>3</SPAN>
          <img src={imgee} alt="" />
          <H2>Get result</H2>
          <P>
            Get results that last a lifetime. Your transformation begins here.
          </P>
        </DIVD>
      </DIV>
      <div>
        <DIVG>
          <DIVH>
            <DIX>
              <div>
                <img src={i} alt="" />
              </div>
              <div>
                <HH>Helen Williams</HH>
                <PP>Bank employee</PP>
              </div>
            </DIX>
            <PARAGRAF>
              Im participating on multiple Sacrill programs and integrated it
              easily into my daily routine. It completely fall into my squedule.
              I feel pumped up and limitless now!
            </PARAGRAF>
            <DIVJ>
              <img src={k} alt="" />
              <img src={k} alt="" />
              <img src={k} alt="" />
              <img src={k} alt="" />
              <img src={k} alt="" />
            </DIVJ>
          </DIVH>

          <DIVH>
            <DIX>
              <div>
                <img src={c} alt="" />
              </div>
              <div>
                <HH>Mike Tombler</HH>
                <PP>Technology Engineer</PP>
              </div>
            </DIX>
            <PARAGRAF>
              Sacrill brings together like-minded individuals to inspire each
              other with their daily transformations
            </PARAGRAF>
            <DIVJ>
              <img src={k} alt="" />
              <img src={k} alt="" />
              <img src={k} alt="" />
              <img src={k} alt="" />
              <img src={k} alt="" />
            </DIVJ>
          </DIVH>

          <DIVH>
            <DIX>
              <div>
                <img src={o} alt="" />
              </div>
              <div>
                <HH>Tara Brangston</HH>
                <PP>Online entrepreneur</PP>
              </div>
            </DIX>
            <PARAGRAF>
              Great materials Sacrill international community is a combination
              that caused a mind shift, helped me understand who I am. I finally
              started my online business and it is going well!
            </PARAGRAF>
            <DIVJ>
              <img src={k} alt="" />
              <img src={k} alt="" />
              <img src={k} alt="" />
              <img src={k} alt="" />
              <img src={k} alt="" />
            </DIVJ>
          </DIVH>
        </DIVG>
      </div>
    </DIVC>
  );
};
const DIVC = styled("div")`
  width: 1320px;
  margin-bottom: 120px;
  @media only screen and (max-width: 414px) {
    margin-bottom: 40px;
  }
`;
const H1 = styled("h1")`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 110%;
  text-align: center;
  color: #333333;
  margin-left: 200px;
  @media only screen and (max-width: 414px) {
    width: 204px;
    height: 26px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    color: #333333;
    margin-left: 75px;
  }
`;
const DIV = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-left: 200px;
  @media only screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    margin-top: 40px;
  }
`;
const DIVD = styled("div")`
  padding: 0;
  margin: 0;
  width: 360px;
  height: 385px;
  background: #f5f5f5;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  @media only screen and (max-width: 414px) {
    width: 340px;
    background: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    margin-bottom: 20px;
    & img {
      width: 340px;
      height: 200px;
      background: url(image.png);
      border-radius: 12px 12px 0px 0px;
    }
  }
`;
const SPAN = styled("p")`
  position: absolute;
  border-radius: 60px;
  width: 36px;
  height: 36px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: #000000;
  background-color: white;
  @media only screen and (max-width: 414px) {
  }
`;
const H2 = styled("h2")`
  width: 120px;
  height: 39px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 140%;
  color: #333333;
  margin-left: 20px;
  @media only screen and (max-width: 414px) {
    width: 52px;
    height: 28px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    color: #333333;
  }
`;

const P = styled("p")`
  width: 300px;
  height: 56px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  margin-left: 20px;
  color: #333333;
  @media only screen and (max-width: 414px) {
  }
`;
const DIVG = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-left: 200px;
  @media only screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5px;
  }
`;
const DIVH = styled("div")`
  width: 360px;
  height: 376px;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  @media only screen and (max-width: 414px) {
    width: 340px;
    height: 296px;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    margin-bottom: 20px;
  }
`;
const DIX = styled("div")`
  display: flex;
  padding: 10px;
  @media only screen and (max-width: 414px) {
    margin-bottom: 20px;
  }
`;

const PARAGRAF = styled("p")`
  width: 300px;
  height: 150px;
  font-family: "SF Pro Display";
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  text-align: center;
  @media only screen and (max-width: 414px) {
    width: 300px;
    height: 90px;
    font-family: "SF Pro Display";
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
  }
`;
const HH = styled("h1")`
  width: 135px;
  height: 20px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 108px;
    height: 16px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: #333333;
  }
`;
const PP = styled("p")`
  width: 156px;
  height: 18px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  color: #333333;
  opacity: 0.5;
  @media only screen and (max-width: 414px) {
  }
`;
const DIVJ = styled("div")`
  margin-top: 50px;
  margin-left: 20px;
  & img {
    margin-left: 10px;
  }
  @media only screen and (max-width: 414px) {
    width: 340px;
    height: 200px;
    background: url(image.png);
    border-radius: 12px 12px 0px 0px;
  }
`;
export default SectionContainer;
