import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import MobileMenu from "../mobile-menu/mobile-menu"

const Header = ({ siteTitle }) => {

  const [menuOpen, setMenuOpen] = useState("false")
  const [mobileMenuClassName, setMobileMenuClassName] = useState("mobile-menu transform -translate-x-full")
  const [darkOverlayClassName, setDarkOverlayClassName] = useState("hidden")

  useEffect(() => {}, [menuOpen, mobileMenuClassName, darkOverlayClassName])

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
    let mobileMenuCss = (menuOpen) ? "mobile-menu transform translate-x-0" : "mobile-menu transform -translate-x-full"
    setMobileMenuClassName(mobileMenuCss)
  } 

  const handleDarkOverlayToggle = () => {
    let darkOverlayCss = (menuOpen) ? "mobile-menu--dark-overlay" : "hidden"
    setDarkOverlayClassName(darkOverlayCss)
  }

  return (
    <header className="sticky top-0 bg-purple-900 text-white z-40">
      <nav className="container md:inline-block pt-5 pb-5 px-8 mx-auto">
        <div className="grid grid-cols-8 md:inline-block">
          <button onClick={() => {handleMenuToggle(); handleDarkOverlayToggle()}}>
            <StaticImage 
              src="../../assets/images/menu-icon.svg" 
              alt="menu icon"
              className="md:hidden"
              style={{maxWidth: "30px"}}
            />
          </button>
          <div className="text-center mx-auto md:m-auto col-span-6 md:inline-block">
            <Link to="/" className="md:text-left md:pr-10 text-xl font-bold">
              {siteTitle}
            </Link>
          </div>
          <div className="hidden text-center col-span-6 md:inline-block md:m-auto text-lg">
            <Link to="/" activeClassName="border-b-2 border-white" className="mr-5">Home</Link>
            
            <Link to="/about" activeClassName="border-b-2 border-white">About</Link>
            
          </div>
        </div>
      </nav>
      <MobileMenu 
        onClick={() => {handleMenuToggle(); handleDarkOverlayToggle()}}
        menuClassName={mobileMenuClassName}
        darkOverlayClassName={darkOverlayClassName}
      />
    </header>
  )
}

export default Header
