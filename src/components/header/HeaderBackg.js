import React from "react";
import styled from "styled-components";
import img from "../../img/Rectangle 632.png";
const HeaderBackg = () => {
  return (
    <DIV>
      <img src={img} alt="photo" />
      <DIVCONT>
        <PARAGRAF>
          Add 14 days of free access to entire Sacrill curriculum of
          best-in-class programs to your purchase.
        </PARAGRAF>
        <PARAGRA>
          We make it available only once for new customers like you!
        </PARAGRA>
        <H3>What you get on the next step:</H3>
        <UL>
          <li>
            <span>Unlimited access</span> to 50+ best-in-class programs to
            improve health, relationships, self-realization,
          </li>
          <li>
            <span>Unlimited access</span> to Customizable learning for your
            unique goals, preferences, behaviors, and desired growth
          </li>
          <li>Mobile and laptop course access</li>
          <li>
            <span>Quick subscription cancelation.</span> Your free trial is 100%
            safe
          </li>
          <li>
            <span>
              PLUS: this free trial option is available on this page only.
            </span>
            You don't need to make a decision now.
          </li>
        </UL>
        <PARAGR>
          Try for 14 days risk-free. After free trial only $49 per month. Push
          the green button below to continue
        </PARAGR>
        <Button>
          Yes! Try Sacrill Club For Free And Continue With 50+ Courses
        </Button>
        <PAR>
          No, I dont want to take this amazing opportunity and want to continue
          with only one program
        </PAR>
      </DIVCONT>
    </DIV>
  );
};
const DIV = styled("div")`
  width: 1000px;
  height: 690px;
  background: #f5f5f5;
  border-radius: 12px;
  margin-left: 200px;
  margin-bottom: 120px;
  & img {
    display: none;
  }

  @media only screen and (max-width: 414px) {
    margin: 10px;
    height: 1200px;
    width: 360px;
    & img {
      display: block;
      width: 360px;
      background: url(Mockup.jpg);
      border-radius: 12px 12px 0px 0px;
    }
  }
`;
const PAR = styled("p")`
  width: 612px;
  height: 24px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-decoration-line: underline;
  margin-left: 10px;
  color: #333333;
  @media only screen and (max-width: 414px) {
    display: block;
    width: 320px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-decoration-line: underline;
    margin-left: -28px;
    color: #333333;
  }
`;
const DIVCONT = styled("div")`
  padding: 50px;
`;
const PARAGRAF = styled("p")`
  width: 698px;
  height: 78px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 140%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 84px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    margin-left: -28px;
    /* or 28px */
    color: #333333;
  }
`;
const PARAGRA = styled("p")`
  width: 677px;
  height: 39px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 140%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 291px;
    height: 56px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    margin-left: -28px;
    /* or 28px */

    color: #333333;
  }
`;
const H3 = styled("h3")`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    margin-left: -28px;

    /* or 24px */

    color: #333333;
  }
`;
const UL = styled("ul")`
  & li {
    width: 980px;
    font-family: "SF Pro Display";
    font-style: normal;
    line-height: 150%;
    color: #333333;
    @media only screen and (max-width: 414px) {
      width: 290px;
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
      margin-left: -58px;
      color: #333333;
    }
  }
  & li span {
    width: 980px;
    height: 240px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: #333333;
  }
`;
const PARAGR = styled("p")`
  width: 980px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-size: 15px;
  line-height: 150%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 320px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    margin-left: -20px;
    color: #333333;
  }
`;
const Button = styled("button")`
  width: 675px;
  height: 86px;
  background: #73c371;
  border-radius: 1111px;
  border: none;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  color: #ffffff;
  margin-top: 20px;

  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 90px;
    background: #73c371;
    border-radius: 100px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    /* or 27px */
    text-align: center;
    color: #ffffff;
    margin-left: -40px;
  }
`;
export default HeaderBackg;
