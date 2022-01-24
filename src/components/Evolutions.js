import React from 'react'
import styled from 'styled-components'
import Evolution from './Evolution'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Evolutions = ({ evolution }) => {
  return (
    <Container>
      {evolution.map((ev, i) => (
        <Evolution
          key={ev.id}
          data={ev}
          separator={i !== evolution.length - 1}
        />
      ))}
    </Container>
  )
}

export default Evolutions
