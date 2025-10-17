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
import { Route, Routes } from "react-router-dom"
import JournalPage from "./JournalPage"

export default function App() {
  usePortfolioEffects()

  return (
    <>
      <Navbar />
      <Routes>
        {/* ✅ Main homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Featured />
              <Gallery />
              <About />
              <Journal />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/journal" element={<JournalPage />} />
      </Routes>
    </>
  )
}
