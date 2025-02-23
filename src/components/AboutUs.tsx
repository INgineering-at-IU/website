export default function AboutUsPage(){
    return(
        <div className="h-screen w-screen flex flex-col align-center p-10 bg-white relative overflow-y-hidden" >
             <div className="flex justify-around items-center relative z-10 my-auto">
                <div className="text-black w-[50vw] px-20 text-start flex justify-start flex-col">
                <h2 className="font-bold text-6xl text-black mb-3">
                        Who We Are
                    </h2>
                    <p className="font-semibold text-xl">
                    INgineering at IU is a student-led professional development organization that provides opportunities to students to further their experience in the domain of Engineering and Technology. We supplement students' knowledge through projects, professional development, networking opportunities, and community engagement. Overall, we provides opportunities to Hoosiers who seek to further develop their knowledge of the industries beyond the classroom, and equip themselves to become the tech leaders of tommorrow.
                    </p>
                </div>
                <div className="w-[50vw] p-5 ">
                    <img src={"./FriendsGiving1.jpg"}
                    className="shadow-lg rounded-xl"/>
                </div>
             </div>
        </div>
    )
}