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

import CommonModal from "@modal/CommonModal";
import UserProfile from "@modal/UserProfile";
import { useCallback } from "react";

const GlobalNavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sidebar } = useSelector((state: RootState) => state.layout);
  const [openSidebar, setOpenSidebar] = useState(sidebar);
  const [openModal, setOpenModal] = useState(false);

  // 사이드바 토글 함수
  const onChangeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setOpenSidebar(checked);

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

  const onToggleUserModal = useCallback(() => {
    setOpenModal((prev) => !prev);
  }, []);

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
        <input
          type="checkbox"
          id="sidebar"
          style={{ display: "none" }}
          checked={openSidebar}
          onChange={onChangeToggle}
        />
        <BurgerIcon toggle={openSidebar} htmlFor="sidebar">
          <span />
          <span />
          <span />
        </BurgerIcon>
        <Title onClick={() => navigate("/")}>타이틀</Title>
      </div>

      <UserDiv onClick={onToggleUserModal}>
        <ElProfileImage
          src={gravatar.url("gksdnf586@gmail.com", { s: "28px", d: "retro" })}
          size={28}
          onClick={() => console.log("gd")}
        />
        <span>???님</span>
        {/* <img src="/svg/logout.svg" alt="logout" onClick={handleClickLogout} /> */}
      </UserDiv>

      <UserProfile
        show={openModal}
        style={{ right: 0, top: 40 }}
        onLogout={handleClickLogout}
        onCloseModal={(e) => {
          e.stopPropagation();
          onToggleUserModal();
        }}
      >
        <img src={gravatar.url("gksdnf586@gmail.com", { s: "36px", d: "retro" })} alt={"asdf"} />
        <div>
          <span id="profile-name">??? 님</span>
          <span id="profile-active">Active</span>
        </div>
      </UserProfile>
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
  padding: 0 12px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.personalLight1};
  }
`;
