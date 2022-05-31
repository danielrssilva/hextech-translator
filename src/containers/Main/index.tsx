import { ChangeEvent, useEffect, useState } from 'react'
import Button from '../../components/Button'
import { Container, HelpButton, RadioContainer, Section } from './styles'
import langs from '../../constants/langs'
import regions from '../../constants/regions'
import Loader from '../../components/Loader'
import InputRadio from '../../components/InputRadio'
import InputFile from '../../components/InputFile'
import SectionTitle from '../../components/SectionTitle'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Instructions from '../../components/Instructions'
import { useBoolean } from '../../hooks/useBoolean'
import { IoMdHelp } from 'react-icons/io'

const empty = ''

interface ILog {
  message: string
  type: string
}

const emptyLog = {
  message: empty,
  type: empty,
}

const Main = () => {
  const [filePath, setFilePath] = useState<string>(empty)
  const [region, setRegion] = useState<string>(empty)
  const [language, setLanguage] = useState<string>(empty)
  const [log, setLog] = useState<ILog>(emptyLog)
  const [loading, setLoading] = useState<boolean>(false)
  const [renderInstructions, toggleInstructions] = useBoolean(false)

  function handleChange() {
    if (
      filePath === empty ||
      !filePath.includes('system.yaml') ||
      region === empty ||
      language === empty
    ) {
      setFilePath(empty)
      setLog({ type: 'error', message: 'You must select a system.yaml file' })
      return
    }
    setLoading(true)
    window.Main.changeLanguage(filePath, region, language, setLog, setLoading)
  }
  const onFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    setLog(emptyLog)
    if (event.target.files) setFilePath(event.target.files[0].path)
  }

  const handleRegionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLog(emptyLog)
    setRegion(event.target.value)
  }

  const handleLanguageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLog(emptyLog)
    setLanguage(event.target.value)
  }

  useEffect(() => {
    if (log.type === 'success') {
      setRegion(empty)
      setLanguage(empty)
    }
  }, [log])

  return (
    <Container>
      {renderInstructions && (
        <Instructions toggleInstructions={toggleInstructions} />
      )}
      <HelpButton onClick={toggleInstructions}>
        <IoMdHelp />
      </HelpButton>
      <Header />
      <Section>
        <SectionTitle> File path </SectionTitle>
        <InputFile
          filePath={filePath}
          active={!!filePath}
          onChange={onFileUpload}
        />
      </Section>
      <Section>
        <SectionTitle> Regions </SectionTitle>
        <RadioContainer>
          {regions.map(({ code }) => (
            <InputRadio
              id={code}
              value={code}
              active={region === code}
              onChange={handleRegionChange}
            />
          ))}
        </RadioContainer>
      </Section>
      <Section>
        <SectionTitle> Language </SectionTitle>
        <RadioContainer>
          {langs.map(({ code, name }) => (
            <InputRadio
              id={code}
              value={name}
              active={language === code}
              onChange={handleLanguageChange}
            />
          ))}
        </RadioContainer>
      </Section>
      <Button
        onClick={handleChange}
        disabled={
          filePath === empty ||
          region === empty ||
          language === empty ||
          loading
        }
      >
        Save and launch game
      </Button>
      {log.type === 'success' && log.message}
      {loading && <Loader message={log.message} />}
      <Footer />
    </Container>
  )
}

export default Main
