import React from 'react'
import Card from './assets/Components/Card'
import Footer from './assets/Components/footer'
import Banner from './assets/Components/Banner';
import SubmitForm from './assets/Components/submitForm'
import Navbar from './assets/Components/Navbar'
import PricingPlans from './assets/Components/PricingPlans';



function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
     <div className="flex flex-wrap items-center justify-center bg-[#F8F9FA] pb-10" >
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
      <SubmitForm/>
      <PricingPlans/>
      <Footer/>
    </>
  )
}

export default App