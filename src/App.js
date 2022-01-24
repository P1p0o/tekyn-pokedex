import styled from 'styled-components'
import Routes from './Routes'

const Container = styled.div`
  background: linear-gradient(180deg, #f4a261 0%, #141a2b 100%);
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <Container>
      <Routes />
    </Container>
  )
}

export default App
