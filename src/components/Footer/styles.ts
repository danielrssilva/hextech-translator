import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  bottom: 0.8rem;
  right: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  :hover {
    .latest {
      display: flex;
    }
  }
  .outdated::after{
    content: '';
    position: absolute;
    top: 0.3rem;
    right: -0.2rem;
    width: 0.8rem;
    height: 0.8rem;
    background: #F3E97B;
    border-radius: 100%;
    animation: shine 2s 2s infinite alternate;
  }
  @keyframes shine {
    0% { box-shadow:  0px 0px .3rem .3rem #B18A37; }
    100% { box-shadow:  0px 0px 0 0 #B18A37; }
  }
`
