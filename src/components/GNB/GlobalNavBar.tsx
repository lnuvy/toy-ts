import styled from "@emotion/styled";
import { closeSidebar, toggleSidebar } from "@redux/modules/layout";
import { RootState } from "@redux/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BurgerIcon } from "./Styles";

const GlobalNavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sidebar } = useSelector((state: RootState) => state.layout);
  const [isOpen, setIsOpen] = useState(sidebar);

  const onChangeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    setIsOpen(checked);

    if (checked) {
      dispatch(toggleSidebar(checked));
      dispatch(closeSidebar(false));
    } else {
      dispatch(closeSidebar(true));
      setTimeout(() => {
        dispatch(toggleSidebar(checked));
      }, 300);
    }
  };

  return (
    <NavigationBarWarp>
      <div style={{ display: "flex" }}>
        <input type="checkbox" id="sidebar" style={{ display: "none" }} checked={isOpen} onChange={onChangeToggle} />
        <BurgerIcon toggle={isOpen} htmlFor="sidebar">
          <span />
          <span />
          <span />
        </BurgerIcon>
        <Title onClick={() => navigate("/")}>타이틀</Title>
      </div>

      <span>???님</span>
    </NavigationBarWarp>
  );
};

export default GlobalNavBar;

const NavigationBarWarp = styled.header`
  height: 44px;

  background-color: ${({ theme }) => theme.palette.personalDefault};
  color: #fff;
  /* border-bottom: 1px solid #000; */

  /* box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.2); */
  display: flex;
  align-items: center;
  justify-content: space-between;
  // position: relative;
  z-index: 99;
  text-align: center;
  padding: 0 1rem;

  & > span {
    font-size: 2rem 600;
  }
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
  padding: 0 2rem;
  margin: 0;
  color: #fff;
  cursor: pointer;
`;
