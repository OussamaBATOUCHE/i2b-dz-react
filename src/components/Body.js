import React from 'react'
import HomeBody from './home/HomeBody'
import Header from './Header'
import Footer from './Footer'


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
  content: <HomeBody/>
}

export default Body