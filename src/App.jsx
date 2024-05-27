import './App.css'
import { Hero, About, Portfolio, PortfolioNavbar, Contact, Resume, Footer } from './components'

function App() {
  return (
    <div className="App">
      <PortfolioNavbar />
      <Hero />
      <About/>
      <Portfolio/>
      <Contact/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App
