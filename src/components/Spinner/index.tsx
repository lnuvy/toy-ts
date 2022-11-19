import styled from "@emotion/styled";

interface Props {
  color?: string;
}

const Spinner = (props: Props) => {
  const { color } = props;

  return (
    <Wrapper>
      <SvgTag className="spinner" viewBox="0 0 50 50" color={color}>
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
      </SvgTag>
    </Wrapper>
  );
};

export default Spinner;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SvgTag = styled.svg<{ color?: string }>`
  width: 100%;
  height: 100%;
  margin: auto;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  @keyframes colors {
    0% {
      stroke: ${({ theme, color }) => (color ? color : theme.palette.personalLight3)};
    }
    50% {
      stroke: ${({ theme, color }) => (color ? color : theme.palette.personalLight2)};
    }
    100% {
      stroke: ${({ theme, color }) => (color ? color : theme.palette.personalDefault)};
    }
  }

  &.spinner {
    animation: rotate 1.2s linear infinite;
    width: 50px;
    height: 50px;
  }

  .path {
    stroke: #0004f3;
    stroke-linecap: round;
    animation: dash 1.2s ease-in-out infinite, colors 2.4s ease-in-out infinite;
  }
`;
