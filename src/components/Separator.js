import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: -40px;
  margin: -80px 50px 0 50px;
`

const Image = styled.img`
  display: block;
  width: 53px;
  height: auto;
`

const Separator = () => {
  return (
    <Container>
      <Image src='/separator.svg' alt='separator' />
      <Image src='/separator.svg' alt='separator' />
    </Container>
  )
}

export default Separator
