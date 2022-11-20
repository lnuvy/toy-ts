import React from "react";
import styled from "@emotion/styled";
import ElButton from "@components/ElButton";
import ElFont from "@components/ElFont";
import { useNavigate } from "react-router-dom";

const NoContent = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ElFont padding="16px">아직 진행중인 프로젝트가 없습니다.</ElFont>

      <ElButton
        onClick={() => {
          navigate("/projectPage");
        }}
      >
        <ElFont size={16} color="white">
          + 프로젝트 등록하기
        </ElFont>
      </ElButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

export default NoContent;
