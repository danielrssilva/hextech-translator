import { ChangeEventHandler } from 'react'
import { Container } from './styles'
import { generalHover, generalClick } from '../../constants/sounds'

type ButtonProps = {
  id: string
  value: string | number
  active: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}

const InputRadio = ({ id, value, active, onChange }: ButtonProps) => {
  return (
    <Container
      className={active ? 'active' : ''}
      onClick={() => generalClick.play()}
      onMouseEnter={() => generalHover.play()}
    >
      <label htmlFor={id} className={`rhombus ${active ? 'active' : ''}`} />
      <label htmlFor={id} className={active ? 'active' : ''} key={id}>
        {value}
      </label>
      <input
        type="radio"
        id={id}
        name="region"
        value={id}
        onChange={onChange}
      />
    </Container>
  )
}

export default InputRadio
