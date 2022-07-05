import { Container } from './styles'

interface LoaderProps {
  message?: string
}

const Loader = ({ message }: LoaderProps) => {
  return (
    <Container>
      <div className="loader__container">
        <div className="loading">
          <div>
            <svg
              className="loading__circle"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="60"
                cy="60"
                r="57.5"
                stroke="#C2A365"
                stroke-width="5"
              />
            </svg>
          </div>
          <svg
            className="loading__left-inner-square"
            width="59"
            height="58"
            viewBox="0 0 59 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.5 2.5L56 29L29.5 55.5L3 29L29.5 2.5Z"
              stroke="#C2A365"
              stroke-width="3"
            />
          </svg>
          <svg
            className="loading__right-inner-square"
            width="59"
            height="58"
            viewBox="0 0 59 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.5 2.5L56 29L29.5 55.5L3 29L29.5 2.5Z"
              stroke="#C2A365"
              stroke-width="3"
            />
          </svg>
          <div>
            <svg
              className="loading__rotating-square width= 97"
              height="97"
              viewBox="0 0 97 97"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="48.2549"
                y="3"
                width="64"
                height="64"
                transform="rotate(45 48.2549 3)"
                stroke="#C2A365"
                stroke-width="4"
              />
            </svg>
          </div>
          <svg
            className="loading__left-outer-square"
            width="139"
            height="139"
            viewBox="0 0 139 139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M69.5 1L138 69.5L69.5 138L1 69.5L69.5 1Z"
              stroke="#C2A365"
            />
          </svg>
          <svg
            className="loading__right-outer-square"
            width="139"
            height="139"
            viewBox="0 0 139 139"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M69.5 1L1 69.5L69.5 138L138 69.5L69.5 1Z"
              stroke="#C2A365"
            />
          </svg>
        </div>
      </div>
      <h1>{message || 'Working on it...'}</h1>
    </Container>
  )
}

export default Loader
