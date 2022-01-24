import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Stats from '../components/Stats'
import Infos from '../components/Infos'
import Types from '../components/Types'
import Evolutions from '../components/Evolutions'
import { getDatas } from '../api'

const Container = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  padding: 42px;
  border-bottom: 1px solid #f4a261;
  justify-content: center;
  position: relative;
`

const BackButton = styled.a`
  position: absolute;
  left: 42px;
  top: 50%;
  transform: translateY(-50%);
`

const Title = styled.h1`
  text-transform: capitalize;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 700;
  margin: 0;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 42px;
`

const PokemonDetail = () => {
  const { idOrName } = useParams()
  const [datas, setDatas] = useState(null)
  const [characteristic, setCharacteristic] = useState(null)
  const [evolution, setEvolution] = useState(null)

  const getPokemonDatas = async (param) => {
    const { dataPokemon, dataSpecies, dataEvolutions } = await getDatas(param)
    setDatas(dataPokemon)
    setCharacteristic(dataSpecies)
    setEvolution(dataEvolutions)
  }

  useEffect(() => {
    getPokemonDatas(idOrName)
  }, [idOrName])

  if (!datas || !characteristic || !evolution) return null
  return (
    <Container>
      <Header>
        <BackButton href='/'>
          <img src='/back.svg' alt='back' width={24} height={40} />
        </BackButton>
        <Title data-testid='title'>
          {datas.name} #{datas.id}
        </Title>
      </Header>

      <Content>
        <Stats datas={datas} />
        <Types datas={datas} />
        <Infos datas={datas} characteristic={characteristic} />
      </Content>

      <Evolutions evolution={evolution} />
    </Container>
  )
}

export default PokemonDetail
