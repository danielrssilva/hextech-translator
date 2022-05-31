import { ChangeEventHandler } from 'react'
import { RiFileUploadLine } from 'react-icons/ri'
import { Container } from './styles'

type ButtonProps = {
  filePath: string
  active: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}

const InputFile = ({ filePath, active, onChange }: ButtonProps) => {
  return (
    <Container className={active ? 'active' : ''}>
      <label htmlFor="fileSelector" className={filePath ? 'active' : ''}>
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
