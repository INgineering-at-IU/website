import { motion } from "motion/react"

export default function SocialsPage(){
    const date =  new Date().getFullYear().toString()
    const socials = [
        {
            name: "instagram",
            image: "./INInsta.png",
            href: "https://www.instagram.com/iu_ingineering_club/"
        },
        {
            name: "beINvolved",
            image: "./beINvolved.png",
            href: "https://beinvolved.indiana.edu/organization/ingineering"

        },
        {
            name: "discord",
            image: "./discord.png",
            href: "https://discord.gg/ukaT34ykq3"
        },
        {
            name: "GroupMe",
            image: "./GroupMe.png",
            href: "https://groupme.com/join_group/89333971/ghCpcuYF"

        },
        {
            name: "X",
            image: "./X.png",
            href: "https://x.com/iu_ingineering?s=21"

        }
    ];
    return (
        <div className="flex flex-col justify-center h-30vh items-center py-5 bg-[#5C658E]">
        <div className="flex justify-center align-center w-screen gap-x-6">
        {socials.map((social, index) => (
            <motion.div key={index}
            whileHover={{ 
                scale: 1.1 ,
            translateY: -5}} className="">
            <a href={social.href} rel="noopener" target="__blank">
                <img 
                src={social.image} 
                alt={social.name} 
                width={40} 
                height={40} 
                />
            </a>
            </motion.div>
        ))}
        </div>
        <p className="mx-auto pt-5"> &copy; INgineering Club at Indiana University {date}</p>
        </div>

        )
}