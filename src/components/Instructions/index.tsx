import SectionTitle from '../SectionTitle'
import { CloseButton, Container } from './styles'
import { IoMdClose } from 'react-icons/io'
import { generalHover, generalClick } from '../../constants/sounds'

export type IntructionsProps = {
  toggleInstructions: () => void
}

const Instructions = ({ toggleInstructions }: IntructionsProps) => {
  return (
    <Container>
      <div>
        <CloseButton
          onClick={() => {
            generalClick.play()
            toggleInstructions()
          }}
          onMouseEnter={() => generalHover.play()}
        >
          <IoMdClose />
        </CloseButton>
        <SectionTitle> Instructions </SectionTitle>
        <div className="content">
          <div className="subtitle">
            You need to follow these steps before using the app:
          </div>
          <ol>
            <li>
              <strong>Logout</strong> (you need to logout, not just close the
              League Client) from your Riot account.
            </li>
            <li>Close the Riot Client before applying the language.</li>
            <li>
              Select the file <em>system.yaml</em> on your League folder.
            </li>
            <li>Select the server you currently play.</li>
            <li>
              Select the language you want the game to be on (this will be
              applied to the game text and audio).
            </li>
          </ol>
          <div className="note">
            <span className="span">NOTE:</span> This change will only work once.
            If you want to change the language again, you will need to do one of
            the following:
          </div>
          <div>
            <ul>
              <li>
                <strong>PBE solution:</strong> change your region to PBE, login,
                and go back to your current region. Try forcing the Riot Client
                to change to the original language. Then proceed with the
                language changing process above.
              </li>
              <li>
                <strong>General solution:</strong> reinstall the game (this can
                take some time).
              </li>
              <li>
                <strong>Best solution:</strong> burn your computer.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Instructions
