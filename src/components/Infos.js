import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: #ffffff;
  border: 1px solid #dedede;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  max-width: 290px;
`

const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 18px 0;
`

const InfoName = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #264653;
`

const InfoValue = styled.span`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #e76f51;
`

const Description = styled.p`
  font-family: Roboto;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #e76f51;
  margin-bottom: 22px;
`

const Infos = ({ datas, characteristic }) => {
  return (
    <Container>
      <InfoLine>
        <InfoName>Weight</InfoName>
        <InfoValue>{datas.weight / 10} kg</InfoValue>
      </InfoLine>
      <InfoLine>
        <InfoName>Height</InfoName>
        <InfoValue>{datas.height / 10} m</InfoValue>
      </InfoLine>
      <InfoLine>
        <InfoName>Abilities</InfoName>
        <InfoValue>
          {datas.abilities.map(({ ability }) => ability.name).join(', ')}
        </InfoValue>
      </InfoLine>
      <InfoLine>
        <InfoName>Description</InfoName>
      </InfoLine>
      <Description>
        {
          characteristic.flavor_text_entries.find(
            (text) => text.language.name === 'en' && text.version.name === 'red'
          ).flavor_text
        }
      </Description>
    </Container>
  )
}

export default Infos
