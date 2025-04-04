export default function About(){
    return(
        <div className="items-center">  
            <div className="flex justify-center items-center ">
                <img src="https://static.thenounproject.com/png/3462789-200.png" className="w-16 h-16"></img>
                <p className="font-bold text-3xl">About <span className="text-orange-700">Me</span></p>
            </div>
            
            <div className="flex justify-center mt-16 ml-24 mb-24">
                <div >
                    <img src="./img.jpg" className="w-72 h-80 rounded-lg"></img>
                </div>
                <div className="w-1/2 ml-28">
                    <p className="font-bold text-xl">I'm Dipak</p>
                    <p className="font-semibold text-indigo-950">Full Stack Developer</p>
                    <p className="mt-3 ">I am a Full-Stack developer based in Pune, India. I am an Information Technology undergraduate from SPPU. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.</p>
                    <p className="mt-3"><span className="text-blue-600">Email : </span>dipakghuge65@gmail.com</p>
                    <p className="mt-3"><span className="text-blue-600">Place : </span>Pune , India-411035</p>
                    <button className="bg-blue-800 text-white text-center py-1 px-4 rounded-md mt-4 shadow-xl">Resume <i className="ri-arrow-drop-right-line"></i></button>

                </div>
            </div>
        </div>
    )
}