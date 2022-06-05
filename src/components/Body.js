import React from 'react'
import Clients from './home/Clients'
import Experts from './home/Experts'
import FirstSection from './home/FirstSection'
import NosSecteurs from './home/NosSecteurs'
import Nouvelles from './home/Nouvelles'
import Parcours from './home/Parcours'
import RetoursClients from './home/RetoursClients'
import Stats from './home/Stats'
import Valeurs from './home/Valeurs'

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
    <Valeurs />
    <Nouvelles />
    </>
  )
}

export default Body