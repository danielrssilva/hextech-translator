import styled from 'styled-components'

export const Container = styled.div`
  label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    color: #A8A8A8;
    padding: 1rem;
    margin: 0.5rem;
    transition: 0.3s background-color;

    svg {
      width: 2rem;
      height: 2rem;
      margin: 1rem;
    }

    &.active { 
      background: linear-gradient(180deg, #453F2D00 50%, #453F2D88 98%, #E5DBC2 100%);
      color: #F0E6D2;
      padding: 1rem;
      
      ::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        height: 0.0001rem;
      }
    }

    &.error {
      background: linear-gradient(180deg, #453F2D00 50%, #9C321355 98%, #9C3213 100%);
      color: #9C3213;
    }
    
    &:hover{
      box-shadow: none;
      background: linear-gradient(180deg, #453F2D00 50%, #453F2D88 99%, #E5DBC2);
      color: white;
    } 
  }
`