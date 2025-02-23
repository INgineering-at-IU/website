
import SocialsPage from '../components/Socials'
import AboutUsPage from '../components/AboutUs'
import WhatWeDoPage from '../components/WhatWeDo'
import HeroPage from '../components/Landing'
import ExecTextPage from '../components/ExecText'
import ExecMemberPage from '../components/ExecMember'

function ExecPage() {
    const execMembers = [
        {
            name: "Rabia",
            position: "President",
            grade: "Senior",
            href: "../Headshots/RabiaINHeadshot.jpg",
            color: "bg-white"        
        },
        {
            name: "Aidan",
            position: "Vice President",
            grade: "Senior",
            href: "../Headshots/AidanINHeadshot.png",
            color: "bg-zinc-100"        
        },
        {
            name: "Emilio",
            position: "Director of Technology",
            grade: "Freshman",
            href: "../Headshots/EmilioINHeadshot.jpg",
            color: "bg-white"
        },
        {
            name: "Sope",
            position: "Director of Marketing",
            grade: "Freshman",
            href: "../Headshots/SopeINHeadshot.jpg",
            color: "bg-zinc-100"
        },
        {
            name: "Thomas",
            position: "Vice President",
            grade: "Freshman",
            href: "../Headshots/ThomasINHeadshot.png",
            color: "bg-white"        
        },
        {
            name: "Joshua",
            position: "Director of Operations",
            grade: "Freshman",
            href: "../Headshots/JoshuaINHeadshot.png",
            color: "bg-zinc-100"
        },
    ]

  return (
    <div>
    <HeroPage isHomePage={false} InitialText={<ExecTextPage/>} />
      {execMembers.map((member)=> 
      <ExecMemberPage
      name={member.name}
      position={member.position}
      grade={member.grade}
      href={member.href}
      color={member.color}
      />
      )}
      <SocialsPage />
    </div>
  )
}

export default ExecPage
