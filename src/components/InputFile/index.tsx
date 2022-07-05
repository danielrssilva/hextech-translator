import { ChangeEventHandler } from 'react'
import { RiFileUploadLine } from 'react-icons/ri'
import { Container } from './styles'

type ButtonProps = {
  filePath: string
  active: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}

const InputFile = ({ filePath, active, onChange }: ButtonProps) => {
  const clickSound = new Audio(
    'https://raw.communitydragon.org/pbe/plugins/rcp-fe-lol-static-assets/global/default/sounds/npe-ft-sfx-pip-forward-click.ogg'
  )
  const hoverSound = new Audio(
    'https://raw.communitydragon.org/pbe/plugins/rcp-fe-lol-static-assets/global/default/sounds/sfx-summoner-icons-grid-hover.ogg'
  )
  return (
    <Container
      className={active ? 'active' : ''}
      onClick={() => clickSound.play()}
      onMouseEnter={() => hoverSound.play()}
    >
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
