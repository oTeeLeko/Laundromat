import styled from "styled-components";

export const MachineList = styled.div`
  width: 70vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 751px) and (max-width: 999px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
