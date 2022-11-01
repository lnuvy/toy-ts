import styled from "@emotion/styled";

export const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  & > div {
    position: absolute;
    display: inline-block;
    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
    box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
    background-color: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);
    border-radius: 6px;
    user-select: none;
    min-width: 360px;
    z-index: 512;
    max-height: calc(100vh - 20px);
    color: rgb(29, 28, 29);
  }
`;

export const CloseModalButton = styled.button`
  position: absolute;
  right: 10px;
  top: 6px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
`;

export const ProfileModal = styled.div`
  display: flex;
  padding: 20px;

  & img {
    display: flex;
  }

  & > div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  & #profile-name {
    font-weight: 600;
    display: inline-flex;
  }

  & #profile-active {
    font-size: 13px;
    display: inline-flex;
  }
`;

export const LogOutButton = styled.button`
  border: none;
  width: 100%;
  border-top: 1px solid rgb(29, 28, 29);
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 5px 20px 5px;
  outline: none;
  cursor: pointer;

  & > img {
    width: 24px;
    height: 24px;
  }
`;
