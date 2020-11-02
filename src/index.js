import styled from "styled-components";

import "./style.css";

const Pulsator = styled.div`
  position: relative;
  width: ${(props) => props.width || "100px"};
  height: ${(props) => props.height || "100px"};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 150%;
    height: 150%;
    box-sizing: border-box;
    margin-left: -25%;
    margin-top: -25%;
    border-radius: 100%;
    background-color: ${(props) => props.outerColor || "blue"};
    animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 0.5) infinite;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 125%;
    height: 125%;
    margin-left: -12.5%;
    margin-top: -12.5%;
    background-color: ${(props) => props.innerColor || "blue"};
    border-radius: 100%;
    /* animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite; */
    animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 0.1) infinite;
    z-index: 1;
  }
`;

export default Pulsator;
