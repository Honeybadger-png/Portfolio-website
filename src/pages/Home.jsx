import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "../components";

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
      </div>
      <About />
      <div className="relative">
        <Experience />
        <Tech />
        <Works />
      </div>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}

export default Home