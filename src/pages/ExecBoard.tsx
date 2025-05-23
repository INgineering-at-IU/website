
import SocialsPage from '../components/Socials'
import HeroPage from '../components/Landing'
import ExecTextPage from '../components/ExecText'
import ExecMemberPage from '../components/ExecMember'

function ExecPage() {
    const execMembers = [
        
        {
            name: "Emilio",
            position: "Director of Technology",
            grade: "Freshman",
            href: "./EmilioINHeadshot.jpg",
            color: "bg-white"
        },
            {
            name: "Natalie",
            position: "Director of Marketing",
            grade: "Sophomore",
            href: "./Natalie.png",
            color: "bg-white"        
        },

        {
            name: "Thomas",
            position: "Director of Membership",
            grade: "Freshman",
            href: "./ThomasINHeadshot.png",
            color: "bg-white"        
        },
        {
            name: "Joshua",
            position: "Director of Operations",
            grade: "Freshman",
            href: "./JoshuaINHeadshot.png",
            color: "bg-zinc-100"
        },
        {
            name: "Aidan",
            position: "Vice President",
            grade: "Senior",
            href: "./AidanINHeadshot.png",
            color: "bg-zinc-100"        
        },
        {
            name: "Rabia",
            position: "President",
            grade: "Senior",
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
