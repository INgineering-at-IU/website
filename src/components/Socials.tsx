import { motion } from "motion/react"

export default function SocialsPage(){
    const date =  new Date().getFullYear().toString()
    const socials = [
        {
            name: "instagram",
            image: "../public/INInsta.png",
            href: "https://www.instagram.com/iu_ingineering_club/"
        },
        {
            name: "beINvolved",
            image: "../public/beINvolved.png",
            href: "https://beinvolved.indiana.edu/organization/ingineering"

        },
        {
            name: "discord",
            image: "../public/discord.png",
            href: "https://discord.gg/ukaT34ykq3"
        },
        {
            name: "GroupMe",
            image: "../public/GroupMe.png",
            href: "https://groupme.com/join_group/89333971/NHDkWaZg"

        },
        {
            name: "X",
            image: "../public/X.png",
            href: "https://discord.gg/ukaT34ykq3"

        }
    ];
    return (
        <div className="flex flex-col justify-center h-30vh items-center py-5 bg-stone-800">
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