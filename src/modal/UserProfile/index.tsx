import Portal from "@modal/Portal";
import React, { useCallback } from "react";
import { LogOutButton, Menu, ProfileModal } from "./Styles";

interface Props {
  children: JSX.Element | JSX.Element[] | String;
  style?: React.CSSProperties;
  onLogout: () => void;
  show: boolean;
  onCloseModal?: (e: any) => void;
}

const UserProfile: React.FC<Props> = ({ children, style, show, onLogout, onCloseModal }) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;

  return (
    <Portal>
      <Menu onClick={onCloseModal}>
        <div style={style} onClick={stopPropagation}>
          <ProfileModal>{children}</ProfileModal>
          <LogOutButton onClick={onLogout}>
            <img src="/svg/logout.svg" alt="logout" />
            로그아웃
          </LogOutButton>
        </div>
      </Menu>
    </Portal>
  );
};

export default UserProfile;
