import { Container } from './styles'
import piltoverCrest from '../../assets/piltover_crest_icon.png'
import divider from '../../assets/divider.png'

const Header = () => {
  return (
    <Container>
      <img src={piltoverCrest} alt="HT-Logo" />
      <h1>Hextech Translator</h1>
      <img src={divider} alt="divider" style={{ maxWidth: '100%' }} />
    </Container>
  )
}

export default Header
