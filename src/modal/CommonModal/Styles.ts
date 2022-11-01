import styled from "@emotion/styled";

export const Menu = styled.div``;

export const Background = styled.div`
  justify-content: center;
  align-items: center;
  z-index: 205;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  z-index: 204;
  height: min(85vh, 820px);
  max-width: 580px;
  width: 80%;
  border-radius: 8px;
  background-color: #fff;
  position: relative;
  overflow: scroll;
`;
