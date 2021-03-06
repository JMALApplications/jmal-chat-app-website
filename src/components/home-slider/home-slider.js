import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

const slides = [
  <StaticImage
    src="../../assets/images/purple_bg_1.jpg"
    alt="Purple Background"
    style={{ height: "500px" }}
  />
]

const HomeSlider = () => {
  return (
    <div className="hidden md:block">
      <AliceCarousel
        autoPlay
        disableButtonsControls
        disableDotsControls
        items={slides}
      />
    </div>
  )
}

export default HomeSlider
