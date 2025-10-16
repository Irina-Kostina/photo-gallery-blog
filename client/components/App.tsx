import React from "react"
import "../styles/App.css"
import Navbar from "./NavBar"
import Hero from "./Hero"
import Featured from "./Featured"
import Gallery from "./Gallery"
import About from "./About"
import Journal from "./Journal"
import Contact from "./Contact"
import Footer from "./Footer"
import { usePortfolioEffects } from "../hooks/usePortfolio"

export default function App() {
  usePortfolioEffects()

  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Gallery />
      <About />
      <Journal />
      <Contact />
      <Footer />
    </>
  )
}
