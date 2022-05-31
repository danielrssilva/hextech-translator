import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 2;
  background-color: #1c2229bb;
  height: 100vh;
  width: 100vw;
  padding: 5rem;
  margin-top: -2.5rem;
  > div {
    width: 100%;
    padding-block: 1rem 4rem;
    background: #1C2229;
    position: relative;
    border: 0.2rem solid #60491F;
    box-sizing: border-box;
  }
  .content { 
    padding-inline: 5rem;
  }
  .title {
    margin-block: 1rem;
  }
  .note {
    margin-block: 3rem 1rem;
    span {
      color: #B89038;
      font-weight: bold;
    }
  }
  .subtitle {
    margin-bottom: 2rem;
  }
  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 1rem;
  }
  ol li::before, 
  ul li::before {
    margin-right: 1rem;
    color: #B89038;
  }
  ol li::before {
    content: '◇';
  }
  ul li::before {
    content: '◆';
  }
`

export const CloseButton = styled.button`
  position: absolute;
  right: -2.1rem;
  top: -4.1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  border: 0.2rem solid #60491F;
  background-color: #1c2229;
  box-shadow: 0 0 0 0.4rem #1c2229;
  
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #A8A8A8;
  margin: 0.5rem;
  transition: 0.3s background-color;
  transition: 0.3s border-color;
  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: #B89038;
    transition: 0.3s color;
  }
  &:hover{
    background: linear-gradient(180deg, #1c2229, #B89038);
    border-color: #B89038;
    color: white;
    svg {
      color: #E3CF51;
    }
  } 
  `