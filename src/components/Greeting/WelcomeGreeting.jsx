import React from 'react'
import { IoClose } from "react-icons/io5"
import ActivPassLogo from "../../assets/images/ActivPass.png"

const WelcomeGreeting = ({showWelcomePopup,closeWelcomePopup}) => {
  return (
    <>
     {showWelcomePopup && (
          <div className="fixed bottom-4 right-4 bg-white p-4 border border-gray-300 shadow-lg z-50 md:w-[25%] w-[80%] h-auto rounded-md">
            {/* Close icon */}
            <button className="absolute top-0 right-1 text-gray-500 hover:text-gray-700" onClick={closeWelcomePopup}>
              <IoClose className="text-2xl" />
            </button>

            <div className="flex flex-col items-center ">
              {/* Logo */}
              <img src={ActivPassLogo} alt="ActivPass Logo" className="mb-2 w-32 h-11" />
              {/* Welcome Message */}
              <img src="https://readme-typing-svg.herokuapp.com?font=sans&weight=800&size=28&duration=2000&pause=1000&color=000000&background=2585FD00&random=false&width=520&lines=Hi+there%F0%9F%91%8B%2C+Welcome+to+activpass.in!" 
            alt="Typing SVG" 
            width="100%"/>
              {/* <p className="mb-4 text-lg font-semibold"> Hi there👋, Welcome to activpass.in </p> */}
              <p className="text-center text-xs md:text-base font-sans">Feel free to explore and enjoy your experience with activpass.in.</p>
            </div>
          </div>
        )}
    </>
  )
}

export default WelcomeGreeting