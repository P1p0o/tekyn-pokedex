import { getDatas } from '../api'

test('It renders correct title', async () => {
  const { dataPokemon } = await getDatas('charizard')
  expect(`${dataPokemon.name} #${dataPokemon.id}`).toEqual('charizard #6')
})
