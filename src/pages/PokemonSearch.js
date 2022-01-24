import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { generateRandomIntegerInRange } from '../utils'

const Card = styled.form`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 69px 62px;
`
const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
`

const Label = styled.label`
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Poppins';
  font-size: 14px;
  color: rgba(143, 143, 143, 0.87);
  margin-top: 28px;
`
const Input = styled.input`
  width: 280px;
  border: none;
  padding: 6px 8px;
  font-family: 'Roboto';
  font-size: 24px;
  margin-top: 15px;
  border-radius: 4px;
  height: 43px;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
`

const ButtonSearch = styled.button`
  background: #f4a261;
  border-radius: 80px;
  color: white;
  font-family: 'Roboto';
  font-size: 16px;
  padding: 24px 44px;
  text-decoration: none;
  border: none;
  cursor: pointer;
`
const ButtonRandom = styled.button`
  background: #f4a261;
  border-radius: 75px;
  padding: 20px 18px;
  border: none;
  cursor: pointer;
`

const PokemonSearch = () => {
  const [nameOrId, setNameOrId] = useState('')
  let navigate = useNavigate()

  const handleRandom = () => {
    navigate(`/${generateRandomIntegerInRange(1, 150)}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (nameOrId === '') return
    navigate(`/${nameOrId}`)
  }
  return (
    <Card onSubmit={handleSubmit}>
      <Image src='/pokeball.png' alt='pokeball' width={75} height={75} />
      <Label htmlFor='search-input'>Pokemon name or ID</Label>
      <Input
        id='search-input'
        placeholder='Name or Id'
        value={nameOrId}
        onChange={(e) => setNameOrId(e.target.value)}
      />
      <Buttons>
        <ButtonSearch disabled={nameOrId === ''} type='submit'>
          Search !
        </ButtonSearch>
        <ButtonRandom data-testid='random-button' onClick={handleRandom}>
          <img src='/random.svg' alt='random' width={30} height={25} />
        </ButtonRandom>
      </Buttons>
    </Card>
  )
}

export default PokemonSearch
