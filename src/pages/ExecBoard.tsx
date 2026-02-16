
import SocialsPage from '../components/Socials'
import HeroPage from '../components/Landing'
import ExecTextPage from '../components/ExecText'
import ExecMemberPage from '../components/ExecMember'

function ExecPage() {
    const execMembers = [
        
        {
            name: "Alex",
            position: "Director of Technology",
            href: "/VP-Tech-new.jpeg",
            color: "bg-white"
        },
            {
            name: "Benian",
            position: "Director of Marketing",
            href: "/VP-Marketing-new.jpeg",
            color: "bg-white"        
        },

        {
            name: "Shashank",
            position: "Director of Operations",
            href: "/VP-OPS-new.jpeg",
            color: "bg-zinc-100"
        },
        {
            name: "Rabia",
            position: "President",
            href: "/President-new.jpeg",
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
