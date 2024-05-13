import './App.css'
import { Hero, About, Portfolio, PortfolioNavbar, Contact, Resume } from './components'

function App() {
  return (
    <div className="App">
      <PortfolioNavbar />
      <Hero />
      <About/>
      <Portfolio/>
      <Contact/>
      <Resume/>
    </div>
  );
}

export default App
