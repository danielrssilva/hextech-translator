import { ChangeEventHandler } from 'react'
import { Container } from './styles'
import { playAudio, generalHover, generalClick } from '../../constants/sounds'

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
      onMouseEnter={() => playAudio(generalHover)}
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
        onChange={e => {
          playAudio(generalClick)
          onChange(e)
        }}
      />
    </Container>
  )
}

export default InputRadio
