import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    position: relative;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    h1 {
      margin-inline: 2rem;
      white-space: nowrap;
    }
    .left::before, .right::before {
      content: "";
      position: absolute;
      width: 0.5rem;
      height: 0.5rem;
      border: 0.15rem solid #373121;
      transform: rotate(45deg);
    }
    .right {
      position: relative; 
      ::before {
        left: -0.5rem;
      }
    }
    .left {
      transform: rotate(180deg);
      ::before {
        left: -0.5rem;
      }
    }
`;