import styled from "@emotion/styled";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <div className=".content-tainer">{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > .content-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
  }
  h1 {
    font-weight: 100;
    color: white;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(79, 98, 148);
  }
  h3 {
    font-weight: 100;
    color: red;
    text-align: center;
  }
  form {
    width: 375px;
    margin: 0 auto;
  }
  .form {
    background: #0e101c;
    max-width: 400px;
    margin: 0 auto;
  }
  p {
    color: #bf1650;
  }
  p::before {
    display: inline;
    content: "⚠ ";
  }
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid black;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
    color: black;
    font-size: 14px;
    font-weight: 200;
  }
  select {
    width: 200px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 12px 13px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
  button {
    display: block;
    appearance: none;
    margin-top: 40px;
    border: 1px solid #333;
    margin-bottom: 20px;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 4px;
  }
  button[type="submit"],
  input[type="submit"] {
    background: #ec5990;
    color: black;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
  }
  button[type="submit"]:hover,
  input[type="submit"] :hover {
    background: #bf1650;
  }
`;

export default PageLayout;
