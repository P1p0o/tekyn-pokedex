import React from 'react'
import styled from 'styled-components'

const getTypeDatas = (name) => {
  switch (name) {
    case 'fighting':
      return {
        name: 'Fight',
        color: '#BE322E',
      }
    case 'flying':
      return {
        name: 'Flight',
        color: '#A893ED',
      }
    case 'poison':
      return {
        name: 'Poison',
        color: '#9B4A99',
      }
    case 'ground':
      return {
        name: 'Ground',
        color: '#DFBF6E',
      }
    case 'rock':
      return {
        name: 'Rock',
        color: '#B89F41',
      }
    case 'bug':
      return {
        name: 'Bug',
        color: '#A8B732',
      }
    case 'ghost':
      return {
        name: 'Ghost',
        color: '#705A97',
      }
    case 'steel':
      return {
        name: 'Steel',
        color: '#B8B9CF',
      }
    case 'fire':
      return {
        name: 'Fire',
        color: '#EE803B',
      }
    case 'water':
      return {
        name: 'Water',
        color: '#6A92ED',
      }
    case 'grass':
      return {
        name: 'Grass',
        color: '#7BC757',
      }
    case 'electric':
      return {
        name: 'Electrique',
        color: '#F7CF43',
      }
    case 'psychic':
      return {
        name: 'Psychic',
        color: '#EC5B89',
      }
    case 'ice':
      return {
        name: 'Ice',
        color: '#9AD8D8',
      }
    case 'dragon':
      return {
        name: 'Dragon',
        color: '#7043F4',
      }
    case 'dark':
      return {
        name: 'Dark',
        color: '#705849',
      }
    case 'fairy':
      return {
        name: 'Fairy',
        color: '#EFB7BD',
      }
    case 'unknown':
      return {
        name: 'Fight',
        color: '#BE322E',
      }
    case 'shadow':
      return {
        name: 'Dark',
        color: '#705849',
      }
    default:
      return {
        name: 'Normal',
        color: '#A8A87B',
      }
  }
}

const TypeElt = styled.div`
  border-radius: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  padding: 21px 39px;
  margin: 0 18px;
`

const Type = ({ value }) => {
  return (
    <TypeElt style={{ backgroundColor: getTypeDatas(value).color }}>
      {getTypeDatas(value).name}
    </TypeElt>
  )
}

export default Type
