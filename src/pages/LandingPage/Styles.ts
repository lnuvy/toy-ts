import styled from "@emotion/styled";

export const ProjectContainer = styled.div`
  margin-top: 80px;
  flex-wrap: wrap;
  padding: 30px;
  /* width: 1000px; */

  display: grid;
  align-items: center;
  justify-content: start;
  grid-template-columns: repeat(3, 30%);
  column-gap: 20px;
`;
