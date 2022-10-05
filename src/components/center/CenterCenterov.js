import React from "react";
import styled from "styled-components";
const CenterCenterov = () => {
  return (
    <DIV>
      <DIVC>
        <div>
          <H1>Faq</H1>
        </div>
        <div>
          <H2>Why choose a subscription?</H2>
          <P>
            The Sacrill subscription allows you to participate in all the
            courses you want at reasonable prices. In addition, as the number of
            courses increases monthly, new topics and areas of study are added,
            the price of the subscription remains the same.
          </P>
          <H3>How do I access the courses?</H3>
          <H4>How do I pay for a subscription?</H4>
          <PP>How can I cancel my monthly subscription payments?</PP>
        </div>
      </DIVC>
    </DIV>
  );
};
const DIV = styled("div")`
  margin-left: 200px;
  margin-bottom: 120px;
  @media only screen and (max-width: 414px) {
    margin-left: 10px;
    margin-bottom: 40px;
  }
`;
const DIVC = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 1180px;
  @media only screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 400px;
  }
`;
const H1 = styled("h1")`
  width: 77px;
  height: 51px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 110%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 26px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 110%;
    color: #333333;
  }
`;
const H2 = styled("h2")`
  border-top: 1px solid #e5e5e5;
  width: 657px;
  height: 30px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 24px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
  }
`;
const P = styled("p")`
  border-top: 1px solid #e5e5e5;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 657px;
  height: 48px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 144px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
  }
`;
const H3 = styled("h3")`
  border-top: 1px solid #e5e5e5;
  padding-top: 20px;
  width: 657px;
  height: 30px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 24px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
  }
`;
const H4 = styled("h4")`
  border-top: 1px solid #e5e5e5;
  padding-top: 20px;
  width: 657px;
  height: 30px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 24px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
  }
`;
const PP = styled("p")`
  border-top: 1px solid #e5e5e5;
  padding-top: 20px;
  width: 657px;
  height: 30px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: #333333;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 20px;
  @media only screen and (max-width: 414px) {
    width: 320px;
    height: 48px;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
  }
`;
export default CenterCenterov;
