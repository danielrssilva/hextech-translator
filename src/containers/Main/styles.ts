import styled from 'styled-components'
import bg from '../../assets/bg.jpg'

export const Container = styled.div`
  background: url(${bg}) no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  color: #F0E6D2;
  align-items: center;
  overflow: auto;

  > .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }

  input {
    display: none;
  }

  button {
    margin-top: 2.4rem;
  }
`

export const HelpButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 0;
  height: 4rem;
  width: 4rem;
  color: #B89038;
  background-color: transparent;
  border: none;
  transition: 0.3s color;
  :hover{
    cursor: pointer;
    color: #E3CF51;
  }
  svg {
    height: 2.5rem;
    width: 2.5rem;
  }
`

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-block: 1rem;

  div {
    margin-inline: 3rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`