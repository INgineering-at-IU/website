
import SocialsPage from '../components/Socials'
import HeroPage from '../components/Landing'
import ExecTextPage from '../components/ExecText'
import ExecMemberPage from '../components/ExecMember'

function ExecPage() {
    const execMembers = [
        
        {
            name: "Emilio",
            position: "Director of Technology",
            href: "./EmilioINHeadshot.jpg",
            color: "bg-white"
        },
            {
            name: "Natalie",
            position: "Director of Marketing",
            href: "./Natalie.png",
            color: "bg-white"        
        },

        {
            name: "Thomas",
            position: "Director of Membership",
            href: "./ThomasINHeadshot.png",
            color: "bg-white"        
        },
        {
            name: "Joshua",
            position: "Director of Operations",
            href: "./JoshuaINHeadshot.png",
            color: "bg-zinc-100"
        },
        {
            name: "Aidan",
            position: "Vice President",
            href: "./AidanINHeadshot.png",
            color: "bg-zinc-100"        
        },
        {
            name: "Rabia",
            position: "President",
            href: "./RabiaINHeadshot.jpg",
            color: "bg-white"        
        },
    ]

  return (
    <div>
    <HeroPage isHomePage={false} InitialText={<ExecTextPage/>} />
      {execMembers.map((member)=> 
      <ExecMemberPage
      name={member.name}
      position={member.position}
      href={member.href}
      color={member.color}
      />
      )}
      <SocialsPage />
    </div>
  )
}

export default ExecPage
