import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: stretch;
`

const WhiteBox = styled.div`
  background: white;
  width: 55px;
  height: 12px;
  border: 1px solid #dedede;
`
const BlueBox = styled.div`
  background: #38a8d5;
  width: 55px;
  height: 12px;
  border: 1px solid #dedede;
`
const StatName = styled.div`
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 700;
  text-align: center;
`

const getShortname = (name) => {
  switch (name) {
    case 'hp':
      return 'HP'
    case 'attack':
      return 'Attack'
    case 'defense':
      return 'Defense'
    case 'special-attack':
      return 'Spe A'
    case 'special-defense':
      return 'Spe D'
    default:
      return 'Speed'
  }
}

const BarStats = ({ value, name }) => {
  return (
    <Bar>
      <StatName>{getShortname(name)}</StatName>
      {Array(15)
        .fill(0)
        .map((_elt, i) => {
          if (i * 10 < value) return <BlueBox key={i} />
          else return <WhiteBox key={i} />
        })}
    </Bar>
  )
}

export default BarStats
