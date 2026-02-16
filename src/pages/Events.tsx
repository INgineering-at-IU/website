import SocialsPage from '../components/Socials'
import HeroPage from '../components/Landing'
import EventTextPage from '../components/EventText'
import Event from '../components/Event';

function EventPage() {
    const events = [
        { eventName: "Databricks Information Session", eventDescription: "Come learn about DataBricks and their company with Ingeneering!", date: "February 19", color: "bg-red-500", img:"./image0 (2).jpeg" }
    ];

    return (
        <div>
            <HeroPage isHomePage={false} InitialText={<EventTextPage />} />
            <div className='flex w-screen justify-center'>
            <div className="gap-6 gap-x-10 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 grid md:h-auto p-5">
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
