import React from 'react'
import styled from 'styled-components'
import BarStats from './BarStats'

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`

const Stats = ({ datas }) => {
  return (
    <StatsContainer>
      {datas.stats.map((elt, i) => (
        <BarStats key={i} value={elt.base_stat} name={elt.stat.name} />
      ))}
    </StatsContainer>
  )
}

export default Stats
