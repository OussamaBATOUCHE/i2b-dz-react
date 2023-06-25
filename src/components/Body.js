import React from 'react'
import HomeBody from './home/HomeBody'
import Header from './Header.tsx'
import Footer from './Footer'
import '../i18n'

function Body({content}) {
  return (
    <>
      <Header />
        {content}
      <Footer />
    </>
  )
}

Body.defaultProps = {
  content: <HomeBody />
}

export default Body