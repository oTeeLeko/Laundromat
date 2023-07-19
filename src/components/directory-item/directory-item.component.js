import { Fragment, useRef, useState } from "react";
import {
  DirectoryItemContainer,
  Container,
  Button,
} from "./directory-item.styles";
import axios from "axios";
import { toast } from "react-toastify";

const baseURL = "http://notify-api.line.me/api/notify";

const tokenLine = "xeW1DTDyx7JhHHtUYXNA1x8RSUNsTY1ZhgB7FXVYcmp";

const DirectoryItem = function ({ machine }) {
  // Declare variable
  let { title, status } = machine;
  const [statusFeild, setStatusFeild] = useState(status);
  const [remainTime, setRemainTime] = useState("");
  const increment = useRef(null);

  // Sending msg to line funnction
  const notifyLine = async (token, msg) => {
    const response = await axios({
      method: "POST",
      url: baseURL,
      maxBodyLength: Infinity,
      withCredentials: false,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
        "Access-Control-Allow-Origin": "*",
      },
      data: `message=${msg}`,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // insertCoin function to countdown and sending message to line group
  const startHandler = (e) => {
    e.preventDefault();
    let time = 120;

    let statusString = "inProgress";
    setStatusFeild(statusString);

    const tick = async () => {
      const min = String(Math.trunc(time / 60)).padStart(2, 0);
      const sec = String(time % 60).padStart(2, 0);

      const timer = `${min}:${sec}`;

      // Set machine to avaiable status when countdown time to 0
      if (time === 0) {
        clearInterval(increment.current);
        statusString = "available";
        setStatusFeild(statusString);
      }

      time--;
      setRemainTime(timer);

      // Sending msg to line group when reamin time is less than 1 min
      if (time === 59) {
        const msg = `${title} remaining time is less than 1 min`;
        notifyLine(tokenLine, msg);
        //
        toast.success("Message is already send to line group");
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
