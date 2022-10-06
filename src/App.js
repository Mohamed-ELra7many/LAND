import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/common/Navbar';
import Home from './components/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/common/Footer';
import { useEffect } from 'react';
import AOS from "aos"
import "aos/dist/aos.css"


function App() {
  useEffect(() => {     // to animation items page
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;