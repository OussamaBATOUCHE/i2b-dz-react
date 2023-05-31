import React from 'react'
import Clients from './Clients'
import Experts from './Experts'
import FirstSection from './FirstSection'
import NosSecteurs from './NosSecteurs'
import QuiSommesNous from './QuiSommesNous'
import RetoursClients from './RetoursClients'
import Stats from './Stats'
import Valeurs from './Valeurs'

function HomeBody() {
  return (
    <>
    <FirstSection />
    <QuiSommesNous />
    <NosSecteurs />
    <Valeurs />
    <Experts />
    <Stats />
    <RetoursClients />
    <Clients />
    </>
  )
}

export default HomeBody