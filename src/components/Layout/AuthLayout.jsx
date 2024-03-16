import React from "react"
import BusinessManIMG from "../../assets/images/businessman.png"

const AuthLayout = ({ titleTag, children }) => {
  return (
    <section className="sm:h-screen flex flex-row">
      <img className=" absolute bottom-0 md:left-[15%] 3xl:left-[18%]" src={BusinessManIMG} alt="Business Man" />
      <div className="bg-[#3C6EFD] h-[100vh] w-[25vw]"></div>
      <div className="flex items-center justify-center w-[75vw]">
        <div className="flex flex-row w-full justify-center">
          <div className="bg-white">
            <div className="m-6 space-y-4 md:space-y-6">
              <div className="w-full flex justify-center items-center"></div>
              <div className="space-y-2 pb-5">
                <h1 className="text-xl font-bold  text-gray-900 md:text-2xl">Welcome to BizPass</h1>
                <p className="text-xs opacity-60">{titleTag}</p>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuthLayout
