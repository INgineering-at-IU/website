import SocialsPage from '../components/Socials'
import HeroPage from '../components/Landing'
import SponsorsTextPage from '../components/SponsorsText'
import Sponsor from '../components/Sponsor';

function SponsorsPage() {
    const sponsors = [
        {
            sponsorName: "Polymarket",
            sponsorDescription: "Polymarket is a prediction market platform where users trade on the outcomes of real-world events. Instead of betting against a house, you trade shares with other users in an open, peer-to-peer market. Prices reflect the market's collective belief in the probability of an event occurring.",
            img: "./Company_Logo_Polymarket.png"
        },
    ];

    return (
        <div>
            <HeroPage isHomePage={false} InitialText={<SponsorsTextPage />} />
            <div className='flex w-screen justify-center'>
            <div className="gap-6 gap-x-10 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 grid md:h-auto p-5">
                {sponsors.map((sponsor, index) =>
                    <Sponsor
                        key={index}
                        sponsorName={sponsor.sponsorName}
                        sponsorDescription={sponsor.sponsorDescription}
                        img={sponsor.img}
                    />
                )}
            </div>
            </div>
            <SocialsPage />
        </div>
    );
}

export default SponsorsPage;
