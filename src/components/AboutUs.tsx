export default function AboutUsPage(){
    return(
        <div className="h-screen w-screen flex flex-col align-center p-10 bg-white relative overflow-y-hidden" >
             <div className="md:flex justify-around items-center relative z-10 md:my-auto">
                <div className="text-black md:w-[50vw] md:px-20 text-start flex justify-start flex-col">
                <h2 className="font-bold md:text-6xl text-black text-2xl mb-3 text-center md:text-start">
                        Who We Are
                    </h2>
                    <p className="font-semibold md:text-xl text-center md:text-start">
                    <span className="block md:hidden">
                    INgineering at IU is a student-led professional development organization that provides opportunities to students to further their experience in the domain of Engineering and Technology. We supplement students' knowledge through projects, professional development, networking opportunities, and community engagement.                    </span>

                    <span className="hidden md:block">
                        INgineering at IU is a student-led professional development organization that provides opportunities to students to further their experience in the domain of Engineering and Technology. We supplement students' knowledge through projects, professional development, networking opportunities, and community engagement. Overall, we provide opportunities to Hoosiers who seek to further develop their knowledge of the industries beyond the classroom, and equip themselves to become the tech leaders of tomorrow.
                    </span>
                    </p>
                </div>
                <div className="md:w-[50vw] p-5 py-auto">
                    <img src={"./FriendsGiving1.jpg"}
                    className="shadow-lg rounded-xl"/>
                </div>
             </div>
        </div>
    )
}