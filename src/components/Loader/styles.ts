import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c2229bb;
  margin: -2.5rem;
  height: 100vh;
  width: 100vw;
  h1 {
    position: absolute;
    top: 50%;
  }
  .loader__container {
      top: 30%;
      transform: translateY(-50%); 
      background-color: #1c2229;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
  .loading {
    position: relative;

  & > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &__circle {
    stroke-dasharray: 2, 17;
    animation: rotate-circle 10s linear infinite;
  }

  &__rotating-square {
    fill: #1c2229;
    animation: rotate-square 4s infinite;
    animation-delay: 1s;
  }

  &__left-inner-square {
    position: absolute;
    right: -1px;
    top: calc(50% - 3px);
    transform: translateY(-50%) rotate(90deg);

    path {
      stroke-dasharray: 150;
      stroke-dashoffset: 150;
      animation: draw-inner 2s linear infinite;
      animation-direction: reverse;
      animation-delay: 1s;
    }
  }

  &__right-inner-square {
    position: absolute;
    left: 0;
    top: calc(50% - 3px);
    transform: translateY(-50%) rotate(-90deg);

    path {
      stroke-dasharray: 150;
      stroke-dashoffset: 150;
      animation: draw-inner 2s linear infinite;
      animation-direction: reverse;
      animation-delay: 1s;
    }
  }

  &__left-outer-square {
    position: absolute;
    right: -1px;
    top: 50%;
    transform: translateY(-50%) rotate(90deg);

    path {
      stroke-dasharray: 387.5;
      stroke-dashoffset: 387.5;
      animation: draw-outer 2s linear infinite;
      animation-direction: reverse;
      animation-delay: 1s;
    }
  }

  &__right-outer-square {
    position: absolute;
    left: -1px;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);

    path {
      stroke-dasharray: 387.5;
      stroke-dashoffset: 387.5;
      animation: draw-outer 2s linear infinite;
      animation-delay: 1s;
    }
  }
}

@keyframes rotate-circle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotate-square {
  0% {
    transform: rotate(0deg);
  }
  8.33%,
  25% {
    transform: rotate(90deg);
  }
  33.33%,
  50% {
    transform: rotate(180deg);
  }
  58.33%,
  75% {
    transform: rotate(270deg);
  }
  83.33%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes draw-outer {
  0% {
    stroke-dashoffset: 387.5;
  }

  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -387.5;
  }
}

@keyframes draw-inner {
  0% {
    stroke-dashoffset: 150;
  }

  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -150;
  }
}

  }
`

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-block: 1rem;

  input {
    margin-right: 0.3rem;
  }

  div {
    margin-inline: 3rem;
  }
`;