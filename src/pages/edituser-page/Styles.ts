import styled from "@emotion/styled";

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 150px;
  align-items: flex-start;
  border-radius: 70%;
  border: 2px solid #d0d7de;
  overflow: hidden;
  margin: 0 auto;

  img {
    width: 120%;
    height: 120%;
    object-fit: cover;
  }
`;
