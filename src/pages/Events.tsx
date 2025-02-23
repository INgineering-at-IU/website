import SocialsPage from '../components/Socials'
import HeroPage from '../components/Landing'
import EventTextPage from '../components/EventText'
import Event from '../components/Event';

function EventPage() {
    const events = [
        { eventName: "Luddy Hackathon - 4th Edition", eventDescription: "Join hundreds of Luddy students for the biggest coding event of the year!", date: "April 4-6", color: "bg-red-500", img:"./luddy-hall-exterior.jpg" },
        { eventName: "Black History Month Trivia Night", eventDescription: "Join INgineering for a fun night of trivia celebrating black history!", date: "February 25, 6:30 pm", color: "bg-blue-500", img:"./BHM.png" },
        { eventName: "MSIS Professional Development Event", eventDescription: "Looking to level up your resume and connect with student orgs? Join us for an MSIS Info Session + Resume Blitz!", date: "February 18", color: "bg-green-500", img:"./msispd.jpg" },
        { eventName: "Build and Chill Night", eventDescription: "Escape and chill and join us for a build and chill night!", date: "December 3", color: "bg-yellow-500", img:"./buildnchill.jpg" },
        { eventName: "Luddy Friendsgiving", eventDescription: "Kick off Thanksgiving break with delicious free food at the Luddy Lobby!", date: "December 3", color: "bg-yellow-500", img:"./friendsgivingicon.jpg" },
        { eventName: "Luddy Hackathon - 3rd Edition", eventDescription: "Join hundreds of Luddy students for the biggest coding event of the year!", date: "November 15-17", color: "bg-red-500", img:"./hack-exec.jpg" },
    ];

    return (
        <div>
            <HeroPage isHomePage={false} InitialText={<EventTextPage />} />
            <div className='flex w-screen justify-center'>
            <div className="gap-6 gap-x-10 grid-cols-3 grid h-screen p-5">
                {events.map((event, index) => 
                    <Event
                        key={index} 
                        eventName={event.eventName} 
                        eventDescription={event.eventDescription} 
                        date={event.date} 
                        img={event.img}
                    />
                )}
            </div>
            </div>
            <SocialsPage />
        </div>
    );
}

export default EventPage;
