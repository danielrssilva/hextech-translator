import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  color: #928E81;
  transition: 0.3s color;
  margin: 0.7rem;

  &.active {
    color: #E4DBC8;
    .rhombus{
      background-color: #C8AA6D;
      border-color: #C8AA6D;
      box-shadow: inset 0 0 0 3px #1C2229;
    }
  }
  &:hover {
    color: #E4DBC8;
    .rhombus{
      background-color: #C8AA6D;
      border-color: #C8AA6D;
      box-shadow: inset 0 0 0 3px #1C2229;
      transition: 0.3s box-shadow;
    }
  }

  .rhombus{
    position: absolute;
    top: 0.3rem;
    left: -2.3rem;
    width: 1.5rem;
    height: 1.5rem;
    border: 0.15rem solid;
    border-color: #7B6129;
    box-shadow: inset 0 0 0 10px #1C2229;
    transition: 0.3s box-shadow;
    transition: 0.3s background-color;
    transform: rotate(45deg);
  }
`