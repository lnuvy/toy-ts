import styled from "@emotion/styled";
import React, { useState } from "react";
import { BurgerIcon, SidebarBtn } from "./Styles";

const GlobalNavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onChangeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    console.log(checked);

    setIsOpen(checked);
  };

  return (
    <NavigationBarWarp>
      {/* <SidebarBtn>
        <input type="checkbox" id="sidebar" style={{ display: "none" }} checked={isOpen} onChange={onChangeToggle} />
        <BurgerIcon toggle={isOpen} htmlFor="sidebar">
          <span />
          <span />
          <span />
        </BurgerIcon>
      </SidebarBtn> */}
      <div>
        <Title>타이틀</Title>
      </div>

      <span>???님</span>
    </NavigationBarWarp>
  );
};

export default GlobalNavBar;

const NavigationBarWarp = styled.header`
  height: 44px;
  background: #1abc9d;
  color: #ffffff;
  /* box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1); */
  display: flex;
  align-items: center;
  justify-content: space-between;
  // position: relative;
  z-index: 99;
  text-align: center;
  padding: 0 1rem;
`;

const Title = styled.button`
  text-align: left;
  border: none;
  /* border-top: 1px solid rgb(82, 38, 83); */
  /* border-bottom: 1px solid rgb(82, 38, 83); */
  font-weight: 500;
  font-size: 18px;
  background: transparent;
  overflow: hidden;
  padding: 0 16px;
  margin: 0;
  color: white;
  cursor: pointer;
`;
