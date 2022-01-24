import { render, screen } from '@testing-library/react'
import { getDatas } from '../api'
import Types from './Types'

test('It renders types to contain Fire', async () => {
  const { dataPokemon } = await getDatas('charizard')
  render(<Types datas={dataPokemon} />)

  expect(screen.getByText('Fire')).toBeInTheDocument()
})

test('It renders types to contain Flight', async () => {
  const { dataPokemon } = await getDatas('charizard')
  render(<Types datas={dataPokemon} />)

  expect(screen.getByText('Flight')).toBeInTheDocument()
})
