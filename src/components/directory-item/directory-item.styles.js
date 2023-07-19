import styled from "styled-components";

export const DirectoryItemContainer = styled.div`
  border: none;
  border-radius: 5px;
  padding: 25px;
  background-color: #faf9f6;
  width: auto;
  margin-bottom: 25px;
`;

export const Container = styled.div`
  display: flex;
  max-width: max-content;
  flex-direction: column;
  margin: auto;

  .available {
    width: 200px;
    height: 200px;
    background: #f4fafc;
    border-radius: 50%;
    box-shadow: inset 0 0 20px 0 rgba(0, 0, 0, 0.8),
      0 0 20px 0 rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
  }
  .water_wave {
    width: 200px;
    height: 200px;
    background: #35b3e7;
    border-radius: 50%;
    box-shadow: inset 0 0 20px 0 rgba(0, 0, 0, 0.8),
      0 0 20px 0 rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
    animation: spin-cycle 12s ease 1s infinite;
  }
  .broken {
    width: 200px;
    height: 200px;
    background: #d22b2b;
    border-radius: 50%;
    box-shadow: inset 0 0 20px 0 rgba(0, 0, 0, 0.8),
      0 0 20px 0 rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
  }
  .water_wave:after,
  .water_wave:before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: 50%;
    background: #fff;
  }
  .water_wave:after {
    border-radius: 45%;
    animation: water_wave 5s linear infinite;
  }
  .water_wave:before {
    border-radius: 35%;
    background: rgba(255, 255, 255, 0.3);
    animation: water_wave 5s linear infinite;
  }
  @keyframes water_wave {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
      top: -30%;
    }
    50% {
      top: -50%;
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
      top: -30%;
    }
  }
  @keyframes spin-cycle {
    0% {
      transform: rotate(4320deg);
    }
    66% {
      transform: rotate(0deg);
    }
  }
`;

export const Caption = styled.div`
  margin-top: 10px;
  color: black;
`;

export const Button = styled.button`
  background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;

  &:active {
    opacity: 0.8;
  }

  &:hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }
`;
