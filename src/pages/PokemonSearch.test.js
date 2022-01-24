import { fireEvent, render, screen } from '@testing-library/react'
import PokemonSearch from './PokemonSearch'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

const setup = () => {
  const history = createMemoryHistory()
  render(
    <Router location={history.location} navigator={history}>
      <PokemonSearch />
    </Router>
  )

  const searchInput = screen.getByLabelText('Pokemon name or ID')
  const searchButton = screen.getByText('Search !')
  const randomButton = screen.getByTestId('random-button')
  return { searchInput, searchButton, randomButton, history }
}

test('landing on search page and find input', () => {
  const { searchInput } = setup()
  expect(searchInput).toBeInTheDocument()
})

test('landing on search page and find search button', () => {
  const { searchButton } = setup()
  expect(searchButton).toBeInTheDocument()
})

test('It should not allowed to navigate with empty input', () => {
  const { searchInput, searchButton } = setup()
  fireEvent.change(searchInput, { target: { value: '' } })
  expect(searchButton).toBeDisabled()
})

test('It should navigate if input is filled', async () => {
  const { searchInput, searchButton, history } = setup()
  fireEvent.change(searchInput, { target: { value: 'Charizard' } })
  fireEvent.click(searchButton)
  expect(history.location.pathname).toEqual('/Charizard')
})

test('Random button should navigate with a number between 1 and 150', () => {
  const { randomButton, history } = setup()
  fireEvent.click(randomButton)

  const id = parseInt(history.location.pathname.replace('/', ''))
  expect(id).toBeGreaterThan(1)
  expect(id).toBeLessThan(151)
})
