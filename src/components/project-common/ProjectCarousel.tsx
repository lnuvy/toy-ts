import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainProjectCard from "./MainProjectCard";
import { ProjectType } from "@typing/DB";
import NoContent from "./NoContent";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  centerPadding: "0",
  appendDots: (dots: any) => (
    <div
      style={{
        position: "absolute",
        bottom: "-36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ul>{dots}</ul>
    </div>
  ),
};

interface Props {
  projectList: ProjectType[];
}

const ProjectCarousel: React.FC<Props> = ({ projectList }) => {
  // 등록된 프로젝트 없을때 유도하기
  if (!projectList || projectList?.length === 0) return <NoContent />;
  else
    return (
      <Wrapper>
        <StyledSlider {...settings}>
          {projectList.map((project: ProjectType, i: number) => {
            return <MainProjectCard key={project.projectId} project={project} />;
          })}
        </StyledSlider>
      </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    /* width: 100%; */
  }
  .slick-dots li button:before {
    width: 10px;
    height: 10px;
  }
`;

export default ProjectCarousel;
