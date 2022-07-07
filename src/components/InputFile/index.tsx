import { ChangeEventHandler } from 'react'
import { RiFileUploadLine } from 'react-icons/ri'
import { Container } from './styles'
import { playAudio, generalClick, generalHover } from '../../constants/sounds'

type ButtonProps = {
  filePath: string
  active: boolean
  error: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}

const InputFile = ({ filePath, active, onChange, error }: ButtonProps) => {
  return (
    <Container
      className={`${active && 'active'}`}
      onClick={() => playAudio(generalClick)}
      onMouseEnter={() => playAudio(generalHover)}
    >
      <label
        htmlFor="fileSelector"
        className={`${filePath && 'active'} ${error && 'error'}`}
      >
        <RiFileUploadLine />
        {filePath || 'Select the system.yaml file'}
        <input
          id="fileSelector"
          type="file"
          onChange={onChange}
          accept=".yaml"
          className="fileSelector"
        />
      </label>
    </Container>
  )
}

export default InputFile
