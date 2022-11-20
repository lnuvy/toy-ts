import styled from "@emotion/styled";

export const Wrap = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownBtn = styled.button`
  cursor: pointer;
  width: 120px;
  height: 44px;
  background: #fff;
  font-weight: 700;
  line-height: 15px;
  padding: 0;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.gray2};

  & > .flex-row {
    padding-right: 10px;
  }
  & .text {
    padding: 9px 0 6px 12px;
  }
`;

export const Items = styled.div`
  margin-top: 4px;
  position: absolute;
  width: 120px;
  background: ${({ theme }) => theme.palette.gray5};
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px 0;
  z-index: 2;
  & > div {
    width: 120px;
    height: 32px;
    font-weight: 500;
    padding: 8px 14px;
    border-radius: 4px;
    &:hover {
      cursor: default;
      background-color: ${({ theme }) => theme.palette.gray4};
    }
  }
`;
