import React from 'react'
import styled from 'styled-components'
import Separator from './Separator'

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-decoration: none;
`

const Image = styled.img`
  display: block;
  width: 150px;
  height: auto;
  z-index: 10;
`

const Pokeball = styled.img`
  position: absolute;
  display: block;
  width: 90px;
  top: 30px;
  left: 30px;
  height: auto;
  z-index: 5;
`
const Text = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: #264653;
`

const Evolution = ({ data, separator }) => {
  return (
    <Line>
      <Link href={`/${data.name}`}>
        <Pokeball src='/pokeball.png' alt='pokeball' />
        <Image
          src={data.sprites.other['official-artwork'].front_default}
          alt={data.name}
        />

        <Text>
          #{data.id}
          <br />
          {data.name}
        </Text>
      </Link>
      {separator && <Separator />}
    </Line>
  )
}

export default Evolution
