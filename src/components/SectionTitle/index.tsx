import { ReactNode } from 'react'
import { Container } from './styles'
import line from '../../assets/line.png'

type SectionTitleProps = {
  children: ReactNode | string
}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <Container className="title">
    <span className="left line">
      <img src={line} alt="divider" />
    </span>
    <h1>
      <span className="title">{children}</span>
    </h1>
    <span className="right line">
      <img src={line} alt="divider" />
    </span>
  </Container>
)

export default SectionTitle
