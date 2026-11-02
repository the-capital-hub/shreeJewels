import React from 'react'
import Hero from '../components/HomePage/HeroSection/Hero'
import Category from '../components/HomePage/Category/Category'
import FeaturedProducts from '../components/HomePage/FeaturedProducts/FeaturedProducts'
import BrandStory from '../components/HomePage/BrandStory/BrandStory'
import WhyChoose from '../components/HomePage/WhyChoose/WhyChoose'
import CustomerReviews from '../components/HomePage/CustomerReviews/CustomerReviews'
import VisitOurStore from '../components/HomePage/VisitOurStore/VisitOurStore'
import Newsletter from '../components/HomePage/Newsletter/Newsletter'

export const Home = () => {
  return (
    <>
     <Hero/>
        <Category/>
        <FeaturedProducts/>
        <BrandStory/>
        <WhyChoose/>
        <CustomerReviews/>
        <VisitOurStore/>
        <Newsletter/>

    </>
  )
}
