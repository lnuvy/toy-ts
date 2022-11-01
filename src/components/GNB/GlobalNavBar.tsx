import ElProfileImage from "@components/ElProfileImage";
import styled from "@emotion/styled";
import { closeSidebar, toggleSidebar } from "@redux/modules/layout";
import { RootState } from "@redux/store";
import { removeStorage } from "@utils/storage";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BurgerIcon } from "./Styles";

import gravatar from "gravatar";

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

  const handleClickLogout = () => {
    const result = window.confirm("로그아웃 하시겠습니까?");
    if (result) {
      removeStorage();
      navigate("/login");
    } else return;
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

      <UserDiv>
        <ElProfileImage
          src={gravatar.url("gksdnf586@gmail.com", { s: "28px", d: "retro" })}
          size={28}
          onClick={() => console.log("gd")}
        />
        <span>???님</span>
        {/* <img src="/svg/logout.svg" alt="logout" onClick={handleClickLogout} /> */}
      </UserDiv>
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
  padding: 0 0 0 1rem;
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

const UserDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 44px;
  padding: 0 10px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.personalLight1};
  }
`;
