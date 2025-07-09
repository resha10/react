import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Banner from './Components/Banner'
import Category from './Components/Categories'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Banner />
      <Category />
      <Footer/>

    </>
  )
}

export default App
