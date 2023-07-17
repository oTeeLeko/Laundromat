import { Fragment, useContext } from "react";

import {
  DirectoryItemContainer,
  Container,
  Button,
} from "./directory-item.styles";

const DirectoryItem = function ({ machine }) {
  const { title, status } = machine;
  const operateHandler = () => {
    machine.status = false;
    console.log(machine.status);
  };

  return (
    <DirectoryItemContainer>
      {status ? (
        <Fragment>
          <h1>AVAILABLE</h1>
          <Container>
            <div className="available"></div>
          </Container>
          <h3>{title}</h3>
          <p>Timer: 00:00 </p>
          <Button onClick={operateHandler}>Insert Coin</Button>
        </Fragment>
      ) : (
        <Fragment>
          <h1>IN PROGRESS</h1>
          <Container>
            <div className="water_wave"></div>
          </Container>
          <h3>{title}</h3>
          <p>Timer: 59:00 </p>
        </Fragment>
      )}
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
