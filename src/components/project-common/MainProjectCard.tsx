import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { MemberType, ProjectType } from "@typing/DB";
import ElFont from "@components/el-font";
import ElProfileImage from "@components/el-profile-image";
import gravatar from "gravatar";
import { useDeleteProject } from "@pages/project-page/queries";

interface Props {
  project: ProjectType;
}

const test = {
  projectId: 1,
  projectName: "프로젝트 이름",
  projectDetail: "상세입니다",
  projectLeader: 2,
  memberList: [
    {
      userId: 2,
      name: "한울",
      email: "gksdnf586@naver.com",
    },
    {
      userId: 3,
      name: "나",
      email: "fdasffdsa@gamil.com",
    },
    {
      userId: 4,
      name: "너",
      email: "asdfasdf@naver.com",
    },
  ],
};

const MainProjectCard: React.FC<Props> = ({ project }) => {
  const { mutate: deleteProjectMutate } = useDeleteProject();

  const onClickSetting = useCallback(() => {
    const confirm = window.confirm("이 프로젝트를 삭제할까요?");

    if (confirm) {
      const { projectId } = project;
      deleteProjectMutate({ projectId });
    }
  }, []);
  return (
    <Wrapper>
      <div className="icon-space">
        <img src="/svg/setting.svg" alt="setting" onClick={onClickSetting} />
        &nbsp;
        <ElFont size={12} color="gray1">
          (생성일이나 최근업데이트날짜 보여야할듯)
        </ElFont>
      </div>
      <div className="name-space">
        <ElFont size={20} weight={600}>
          {project.projectName}
        </ElFont>
        <ElFont size={12} weight={400} margin="20px 0 0 0">
          {project.projectDetail}
        </ElFont>
      </div>

      <div className="member-space">
        <div>
          {test?.memberList?.map((member: MemberType, i: number) => (
            <ImageRelative key={member.userId} index={i}>
              <ElProfileImage size={28} src={gravatar.url(`${member.email}`, { s: "28px", d: "retro" })} />
            </ImageRelative>
          ))}
        </div>
        <div>안녕</div>
      </div>
    </Wrapper>
  );
};

export default MainProjectCard;

const Wrapper = styled.div`
  max-height: 500px;
  padding: 2rem;

  .icon-space {
    width: inherit;
    position: fixed;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 1rem;

    & > img {
      cursor: pointer;
    }
  }

  .name-space {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    min-height: 250px;
    background-color: ${({ theme }) => theme.palette.personalLight2};
  }

  .member-space {
    background-color: ${({ theme }) => theme.palette.gray4};
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    & > div {
      display: flex;
      align-items: center;
    }
  }
`;

const ImageRelative = styled.div<{ index: number }>`
  position: relative;
  right: ${({ index }) => index * 12}px;
  z-index: ${({ index }) => 100 - index};
`;
