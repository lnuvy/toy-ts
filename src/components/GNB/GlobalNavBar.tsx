import ElProfileImage from "@components/ElProfileImage";
import styled from "@emotion/styled";
import { closeSidebar, toggleSidebar } from "@redux/modules/layout";
import { RootState } from "@redux/store";
import { removeStorage, getStorage } from "@utils/storage";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BurgerIcon } from "./Styles";
import gravatar from "gravatar";
import UserProfile from "@modal/UserProfile";
import { useCallback } from "react";
import { getUser } from "./api";
import { loginUser } from "@redux/modules/user";

const GlobalNavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sidebar } = useSelector((state: RootState) => state.layout);
  const { email, userName, userId } = useSelector((state: RootState) => state.user.currentUser);
  const [openSidebar, setOpenSidebar] = useState(sidebar);
  const [openModal, setOpenModal] = useState(false);

  const isLogin = getStorage();
  useEffect(() => {
    if (isLogin) {
      getUserInfo();
    }
    async function getUserInfo() {
      if (isLogin) {
        const { id, email, name } = await getUser(isLogin);

        const userData = {
          userId: id,
          email: email,
          userName: name,
        };
        dispatch(loginUser(userData));
      }
    }
  }, [isLogin]);

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
      window.location.href = "/";
      //navigate("/");
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

      <UserDiv onClick={onToggleUserModal} isActive={openModal}>
        <ElProfileImage
          src={gravatar.url(`${email}`, { s: "28px", d: "retro" })}
          size={28}
          onClick={() => console.log("gd")}
        />
        <span>{userName}님</span>
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
        <img src={gravatar.url(`${email}`, { s: "36px", d: "retro" })} alt={"asdf"} />
        <div>
          <span id="profile-name">{userName}님</span>
          <span id="profile-active">진행중인 프로젝트: ?개</span>
          <Link to="edituser">
            <button>프로필 수정</button>
          </Link>
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

interface StyleProps {
  isActive: boolean;
}

const UserDiv = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 44px;
  padding: 0 16px;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.palette.personalLight1 : theme.palette.personalDefault};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.personalLight1};
  }
`;
