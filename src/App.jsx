
import './App.css'
import Header from './components/Header'
import MiniContact from './components/MiniContact'
import About from './pages/About'
import Advertisememt from './pages/Advertisememt'
import Contact from './pages/Contact'
import Feature from './pages/Feature'
import Hero from './pages/hero'
import Footer from './pages/Footer'
import Agriculture from './services/Agriculture'






function App() {
  

  return (
    <div >
      <Header/>
      <Hero/>
      <Feature/>
      <Advertisememt/>
      <MiniContact/>
      <Contact/>
      <About/>
      <Agriculture/>
      <Footer/>
      
    </div>
  )
}

export default App
