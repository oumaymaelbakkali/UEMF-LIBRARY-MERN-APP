
import'../App.css'
import Header from './Header'
import Footer from './Footer'
import Carousel from './Carousel'
import Accordion from './Accordion'
import CardNewReleases from './CardNewRealeases'
import Testimonial from './testimonial'
import BarSearch from './BarSearch'


import React from 'react'


const home = () => {
  return (
    <>
    <Header/>
    <Carousel/>
    <BarSearch/>
    <Accordion/>
    <CardNewReleases/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default home