import { Fragment, useRef, useState } from "react";
import {
  DirectoryItemContainer,
  Container,
  Button,
} from "./directory-item.styles";

const baseURL = "https://notify-api.line.me/api/notify";

const tokenLine = "xeW1DTDyx7JhHHtUYXNA1x8RSUNsTY1ZhgB7FXVYcmp";

const DirectoryItem = function ({ machine }) {
  let { title, status } = machine;
  const [message, setMessage] = useState("");
  const [statusFeild, setStatusFeild] = useState(status);
  const [remainTime, setRemainTime] = useState("");
  const increment = useRef(null);

  const startHandler = (e) => {
    e.preventDefault();
    let time = 120;

    let statusString = "inProgress";
    setStatusFeild(statusString);

    const tick = async () => {
      const min = String(Math.trunc(time / 60)).padStart(2, 0);
      const sec = String(time % 60).padStart(2, 0);

      const timer = `${min}:${sec}`;
      if (time === 0) {
        clearInterval(increment.current);
        statusString = "available";
        setStatusFeild(statusString);
      }

      time--;
      setRemainTime(timer);

      if (time === 59) {
        const msg = `${title} remaining time is less than 1 min`;
        setMessage(msg);
        console.log(`Bearer ${tokenLine}`);
        console.log(tokenLine);
        await fetch(baseURL, {
          method: "POST",

          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + tokenLine,
            "Access-Control-Allow-Origin": "*",
          },
          body: message,
        })
          .then((res) => {
            console.log("test" + res);
          })
          .catch((err) => console.log("err" + err));
      }
    };
    tick();
    increment.current = setInterval(tick, 1000);
  };

  return (
    <DirectoryItemContainer>
      {(() => {
        switch (statusFeild) {
          case "available":
            return (
              <Fragment>
                <h1>AVAILABLE</h1>
                <Container>
                  <div className="available"></div>
                </Container>
                <h3>{title}</h3>
                <p>Timer: 00:00 </p>
                <Button onClick={startHandler}>Insert Coin</Button>
              </Fragment>
            );
          case "inProgress":
            return (
              <Fragment>
                <h1>IN PROGRESS</h1>
                <Container>
                  <div className="water_wave"></div>
                </Container>
                <h3>{title}</h3>
                <p>Remaining: {remainTime}</p>
              </Fragment>
            );
          case "broken":
            return (
              <Fragment>
                <h1>BROKEN</h1>
                <Container>
                  <div className="broken"></div>
                </Container>
                <h3>{title}</h3>
                <p>Timer: 00:00 </p>
              </Fragment>
            );
          default:
            return null;
        }
      })()}
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
