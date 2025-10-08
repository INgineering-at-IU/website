
import SocialsPage from '../components/Socials'
import HomeHeroText from '../components/HomeHeroText'
import AboutUsPage from '../components/AboutUs'
import WhatWeDoPage from '../components/WhatWeDo'
import HeroPage from '../components/Landing'

function HomePage() {


  return (
    <div>
    <HeroPage isHomePage={true} InitialText={<HomeHeroText isOpen={true} />} />
      <AboutUsPage/>
      <WhatWeDoPage />
      <SocialsPage />
    </div>
  )
}

export default HomePage
