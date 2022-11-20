import styled from "@emotion/styled";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <div className="content-container">{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .content-container {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    justify-content: space-around;
    align-items: center;
  }
  .Box {
    max-width: 500px;
    max-height: 700px;
    border: 1px solid ${({ theme }) => theme.palette.personalDark};
    border-radius: 10px;
    padding: 20px 30px;
  }
  h1 {
    font-size: 50px;
    color: ${({ theme }) => theme.palette.personalDark};
    text-align: left;
  }
  h3 {
    border-radius: 10px;
    font-weight: 600;
    background-color: ${({ theme }) => theme.palette.personalDark};
    color: #fff;
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
    background: ${({ theme }) => theme.palette.personalDefault};
    color: black;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
  }
  .userId {
    display: flex;
  }
  .password {
    display: flex;
  }
  img {
    margin-right: 10px;
    padding-bottom: 10px;
  }
`;

export default PageLayout;
