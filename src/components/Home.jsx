import React from 'react'
import "./index.css"
import Hero from './common/Hero'
import Featured from './common/Featured'
import About from '../pages/About'
import Progress from '../pages/Progress'
import Counter from './Counter'
import Clients from './Clients'
import Services from '../pages/Services'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'

const Home = () => {
    return (
        <>
            <Hero />
            <Featured />
            <About />
            <Progress />
            <Counter />
            <Clients />
            <Services />
            <Portfolio />
            <Contact />
        </>
    )
}

export default Home