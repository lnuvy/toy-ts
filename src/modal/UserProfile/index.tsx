import Portal from "@modal/Portal";
import React, { useCallback } from "react";
import { TwoButton, EditButton, LogOutButton, Menu, ProfileModal } from "./Styles";

interface Props {
  children: JSX.Element | JSX.Element[] | String;
  style?: React.CSSProperties;
  onEdit: () => void;
  onLogout: () => void;
  show: boolean;
  onCloseModal?: (e: any) => void;
}

const UserProfile: React.FC<Props> = ({ children, style, show, onEdit, onLogout, onCloseModal }) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;

  return (
    <Portal>
      <Menu onClick={onCloseModal}>
        <div style={style} onClick={stopPropagation}>
          <ProfileModal>{children}</ProfileModal>
          <TwoButton>
            <EditButton onClick={onEdit}>
              <img src="/svg/edit.svg" alt="edit" />
              수정하기
            </EditButton>

            <LogOutButton onClick={onLogout}>
              <img src="/svg/logout.svg" alt="logout" />
              로그아웃
            </LogOutButton>
          </TwoButton>
        </div>
      </Menu>
    </Portal>
  );
};

export default UserProfile;
