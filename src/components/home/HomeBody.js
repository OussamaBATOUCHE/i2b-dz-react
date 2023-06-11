import React from 'react'
import Clients from './Clients'
import Experts from './Experts'
import FirstSection from './FirstSection'
import LargeClients from './LargeClients'
import NosSecteurs from './NosSecteurs'
import QuiSommesNous from './QuiSommesNous'
import RetoursClients from './RetoursClients'
import Stats from './Stats'
import Valeurs from './Valeurs'
import Vision from './Vision'

function HomeBody() {
  return (
    <>
    <FirstSection />
    <QuiSommesNous />
    <NosSecteurs />
    <Valeurs />
    <Vision />
    <Experts />
    <Stats />
    {/* <RetoursClients /> */}
    <LargeClients />
    </>
  )
}

export default HomeBody