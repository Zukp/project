import React from "react";
import styled from "styled-components";
const End = () => {
  return (
    <DIV>
      <DIVC>
        <div>
          <h1>SACRILL</h1>
          <P>
            At Sacrill, expert practitioners in their fields share their
            expertise in online video courses at reasonable prices.
          </P>
          <PP>visa strip</PP>
          <PPP>
            © 2022 Bon Digital Pte. Ltd. 68 Circular Road, #02-01, 049422,
            Singapore.
          </PPP>
        </div>
        <div>
          <H1>Collections</H1>
          <PF>Featured on Sacrill</PF>
          <PF>New courses</PF>
          <PF>Editor's Choice</PF>
        </div>
        <div>
          <HH1>Sacrill</HH1>
          <PF>Get access to all courses</PF>
          <PF>Become a Sacrill Author</PF>
          <PF>Referral program</PF>
        </div>
        <div>
          <h5>Support service</h5>
          <H>hello@sacrill.com</H>
          <DIB>
            <Button>Signing in</Button>
            <Button2>Sign In for Authors</Button2>
          </DIB>
          <PPPP>Contract Offer · Privacy Policy · User Agreement</PPPP>
        </div>
      </DIVC>
    </DIV>
  );
};
const DIV = styled("div")`
  margin-left: 200px;
`;

const DIVC = styled("div")`
  display: flex;
  justify-content: space-between;
`;
const P = styled("p")`
  width: 200px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #808080;
`;
const PP = styled("p")`
  color: #808080;
`;
const PPP = styled("p")`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #808080;
`;
const H1 = styled("h1")`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
`;
const PF = styled("p")`
  width: 124px;
  height: 24px;
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #808080;
`;
const HH1 = styled("h1")`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: #333333;
`;
const H = styled("h1")`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 110%;
  text-align: right;
  color: #333333;
`;
const DIB = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 280px;
`;
const Button = styled("button")`
  padding: 10px 20px;
  color: #ffffff;
  background: #333333;
  border-radius: 100px;
  cursor: pointer;
  border: none;
`;
const Button2 = styled("button")`
  width: 159px;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  background: white;
  border-radius: 100px;
  color: #333333;
  cursor: pointer;
  border: none;
`;
const PPPP = styled("p")`
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: start;
  text-decoration-line: underline;
  color: #808080;
`;
export default End;
