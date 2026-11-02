import './App.css'
import AIAssistant from './components/AIAssistant/AIAssistant'
import Footer from './components/Footer/Footer'
import BrandStory from './components/HomePage/BrandStory/BrandStory'
import Category from './components/HomePage/Category/Category'
import CustomerReviews from './components/HomePage/CustomerReviews/CustomerReviews'
import FeaturedProducts from './components/HomePage/FeaturedProducts/FeaturedProducts'
import Hero from './components/HomePage/HeroSection/Hero'
import Newsletter from './components/HomePage/Newsletter/Newsletter'
import VisitOurStore from './components/HomePage/VisitOurStore/VisitOurStore'
import WhyChoose from './components/HomePage/WhyChoose/WhyChoose'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero/>
        <Category/>
        <FeaturedProducts/>
        <BrandStory/>
        <WhyChoose/>
        <CustomerReviews/>
        <VisitOurStore/>
        <Newsletter/>
        
        {/* Yahan homepage ke sections add karenge */}
      </main>
      <AIAssistant/>
      <Footer/>
    </>
  )
}

export default App