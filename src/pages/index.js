import React from "react"
import HomeSlider from "../components/home-slider/home-slider"
import Layout from "../components/layout/layout"
import InfoBoxList from "../components/info-box/info-box-list"
import InfoBox from "../components/info-box/info-box"
import PageHeading from "../components/page-heading/page-heading"
import LoremIpsum from 'react-lorem-ipsum'

export default function Home() {
  return (
    <Layout>
      <HomeSlider />
      <PageHeading
        heading="JMAL Chat App"
        desc="A customer service chat application built with the latest technology"
        mobileOnly={true}
      />
      <InfoBoxList infoBoxListHeading="What is the JMAL Chat App?">
        <InfoBox 
          infoBoxHeading="Chat With Site Visitors"
          infoBoxDesc={<LoremIpsum p={1} />} />
        <InfoBox 
          infoBoxHeading="Advanced Admin Area"
          infoBoxDesc={<LoremIpsum p={1} />} />
        <InfoBox 
          infoBoxHeading="Built with the Latest Tech"
          infoBoxDesc={<LoremIpsum p={1} />} />
      </InfoBoxList>
    </Layout>
  )
}
