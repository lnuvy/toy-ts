import React from "react";
import styled from "@emotion/styled";
import { MemberType, ProjectType } from "@typing/DB";
import ElFont from "@components/ElFont";
import ElProfileImage from "@components/ElProfileImage";
import gravatar from "gravatar";

interface Props {
  project: ProjectType;
}

const MainProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <Wrapper>
      <div className="name-space">
        <ElFont size={20} weight={600}>
          {project.projectName}
        </ElFont>
        <ElFont size={12} weight={400} margin="20px 0 0 0">
          {project.projectDetail}
        </ElFont>
      </div>

      <div className="member-space">
        <ImageBox>
          {project?.memberList?.map((member: MemberType) => (
            <ElProfileImage
              key={member.userId}
              size={28}
              src={gravatar.url(`${member.email}`, { s: "28px", d: "retro" })}
            />
          ))}
        </ImageBox>
      </div>
    </Wrapper>
  );
};

export default MainProjectCard;

const Wrapper = styled.div`
  height: 500px;
  padding: 2rem;

  & > .name-space {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: ${({ theme }) => theme.palette.personalLight2};
    height: 300px;
  }

  & > .member-space {
    background-color: ${({ theme }) => theme.palette.gray4};
  }
`;

const ImageBox = styled.div`
  padding: 1rem;
`;
