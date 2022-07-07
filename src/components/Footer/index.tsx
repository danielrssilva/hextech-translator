import { useEffect, useState } from 'react'
import { Container } from './styles'

const currentVersion = '1.0.3'

const Footer = () => {
  const [latestVersion, setLatestVersion] = useState(currentVersion)

  const areVersionsDifferent = currentVersion !== latestVersion

  useEffect(() => {
    ;(async function getLatestVersion() {
      try {
        const url =
          'https://raw.githubusercontent.com/danielrssilva/hextech-translator/main/package.json'
        const obj = await (await fetch(url)).json()
        setLatestVersion(obj.version)
      } catch {
        setLatestVersion(currentVersion)
      }
    })()
  })

  return (
    <Container
      onClick={() => {
        window.Main.openExternalPage(
          `http://github.com/danielrssilva/hextech-translator/releases/tag/v${latestVersion}`
        )
      }}
      title={
        areVersionsDifferent
          ? `Client outdated. Latest version: V${latestVersion}`
          : 'View release on Github'
      }
    >
      <span className={`${areVersionsDifferent && 'outdated'}`}>
        V{currentVersion}
      </span>
    </Container>
  )
}

export default Footer
