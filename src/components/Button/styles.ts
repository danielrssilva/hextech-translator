import styled from 'styled-components'

export const Container = styled.button`
  height: 4.2rem;
  padding-inline: 2rem;
  border: 0.3rem solid #C8AA6D;
  border-radius: 0;
  background: #1E2328; 
  color: #CDBE91;
  transition: 0.3s background-color;
  transition: 0.3s box-shadow;
  font-weight: 800;
  &:not(:disabled):hover,
  &:not([disabled]):hover {
    cursor: pointer;
    box-shadow: inset 0 -10px 30px 1px #453F2D;
    border-color: #E2CB9B;
    color: #F0E6D2;
  }

  &:disabled,
  &[disabled]{
    color: #CDBE9144;
    border-color: #C8AA6D44;

    cursor: not-allowed;
  }
`
