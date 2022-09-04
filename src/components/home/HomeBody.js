import React from 'react'
import Clients from './Clients'
import Experts from './Experts'
import FirstSection from './FirstSection'
import NosSecteurs from './NosSecteurs'
import Nouvelles from './Nouvelles'
import Parcours from './Parcours'
import RetoursClients from './RetoursClients'
import Stats from './Stats'
import Valeurs from './Valeurs'

function HomeBody() {
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

export default HomeBody