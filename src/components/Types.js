import React from 'react'
import styled from 'styled-components'
import Type from './Type'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-bottom: 47px;
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-width: 370px;
`

const TypesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`

const Types = ({ datas }) => {
  return (
    <Container>
      <Image
        src={datas.sprites.other['official-artwork'].front_default}
        alt={datas.name}
      />
      <TypesContainer>
        {datas.types.map(({ type }, i) => (
          <Type key={i} value={type.name} />
        ))}
      </TypesContainer>
    </Container>
  )
}

export default Types
