import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonDetail from './pages/PokemonDetail'
import PokemonSearch from './pages/PokemonSearch'

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=':idOrName' element={<PokemonDetail />} />
        <Route path='/' element={<PokemonSearch />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesComponent
