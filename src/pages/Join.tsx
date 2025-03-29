import JoinPageText from '../components/JoinPageText';
import LandingPage from '../components/Landing';
import SocialsPage from '../components/Socials';
import { motion } from 'framer-motion';

function JoinPage() {
  const socials = [
    {
      name: "GroupMe",
      link: "https://groupme.com/join_group/89333971/J5NIJU3x",
      text: "Chat with our members on group me to stay tuned for new events!",
      joinimg: "./join-groupMe.png",
      logoimg: "./GroupMe.png",
      textColor: "text-blue-500",
      bgColor: "bg-zinc-100",
      border: "border-blue-500",
    },
    {
      name: "Discord",
      link: "https://discord.gg/ukaT34ykq3",
      text: "Chat with our members and join the community of INgineering! Just press the button and you will get an invite.",
      joinimg: "./join-discord.png",
      logoimg: "./discord.png",
      textColor: "text-purple-600",
      bgColor: "bg-white",
      border: "border-purple-500",
    },
    {
      name: "BeInvolved",
      link: "https://beinvolved.indiana.edu/organization/ingineering",
      text: "Check our page out on BeINvolved where all our events are!",
      joinimg: "./join-beinvolved.png",
      logoimg: "./beINvolved.png",
      textColor: "text-[#910300]",
      bgColor: "bg-zinc-100",
      border: "border-[#910300]",
    },
  ];

  return (
    <div>
      <LandingPage isHomePage={false} InitialText={<JoinPageText />} />

      {socials.map((social) => (
        <div className="w-screen h-screen shadow-lg" key={social.name}>
          <section
            className={`relative h-screen flex flex-col md:flex-row items-center justify-center ${social.bgColor} snap-start px-6 md:px-10`}
          >
            {/* Background logo image */}
            <div
              className={`absolute inset-0 w-full h-1/2 bg-[url(${social.logoimg})] bg-bottom filter grayscale opacity-30 bg-no-repeat`}
            ></div>

            {/* Text content */}
            <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left md:pl-20">
              <h1 className={`text-3xl md:text-5xl font-bold ${social.textColor}`}>
                Join the {social.name}
              </h1>
              <p className={`mt-4 text-base md:text-lg ${social.textColor}`}>
                {social.text}
              </p>
              <motion.a
                style={{ all: "unset" }}
                href={social.link}
                target="_blank"
              >
                <motion.button
                  className={`mt-6 px-6 py-3 border-solid border-2 ${social.border} text-white font-semibold rounded-lg shadow-md`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Now
                </motion.button>
              </motion.a>
            </div>

            {/* Preview image (hide on sm) */}
            <div className="relative z-10 w-full md:w-1/2 flex justify-center mt-6 md:mt-0 ">
              <img
                width={320}
                height={320}
                src={social.joinimg}
                alt={`${social.name} preview`}
                className="rounded-lg shadow-lg md:block hidden"
              />
            </div>
          </section>
        </div>
      ))}

      <SocialsPage />
    </div>
  );
}

export default JoinPage;
