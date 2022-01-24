import axios from './axiosInstance'

const getDatas = async (idOrName) => {
  if (!idOrName) return

  try {
    const param = idOrName.toLowerCase()
    const promises = [
      axios.get(`/pokemon/${param}/`),
      axios.get(`/pokemon-species/${param}/`),
    ]

    const [{ data: dataPokemon }, { data: dataSpecies }] = await Promise.all(
      promises
    )

    const { data: dataEvolution } = await axios.get(
      dataSpecies.evolution_chain.url
    )

    let evolutions = [dataEvolution.chain.species]
    if (dataEvolution.chain.evolves_to && dataEvolution.chain.evolves_to[0]) {
      evolutions.push(dataEvolution.chain.evolves_to[0].species)
      if (
        dataEvolution.chain.evolves_to[0].evolves_to &&
        dataEvolution.chain.evolves_to[0].evolves_to[0]
      )
        evolutions.push(dataEvolution.chain.evolves_to[0].evolves_to[0].species)
    }

    const evolutionsPromises = await Promise.all(
      evolutions.map((ev) => axios.get(`/pokemon/${ev.name}`))
    )
    const dataEvolutions = await Promise.all(
      evolutionsPromises.map((ev) => ev.data)
    )

    return { dataPokemon, dataSpecies, dataEvolutions }
  } catch (error) {
    console.error(error)
    throw error
  }
}

export { getDatas }
