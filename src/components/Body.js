import React from 'react'
import Clients from './home/Clients'
import Experts from './home/Experts'
import FirstSection from './home/FirstSection'
import NosSecteurs from './home/NosSecteurs'
import Parcours from './home/Parcours'
import RetoursClients from './home/RetoursClients'
import Stats from './home/Stats'

function Body() {
  return (
    <>
    <FirstSection />
    <NosSecteurs />
    <Clients />
    <Parcours />
    <Experts />
    <Stats />
    <RetoursClients />
    </>
  )
}

export default Body