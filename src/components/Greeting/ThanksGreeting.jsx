import ActivPassImage from "../../assets/images/ActivPass.png"
import { useNavigate } from "react-router-dom"

const ThanksGreeting = () => {
  const navigate = useNavigate()
  setTimeout(() => {
    navigate("/login")
  }, 1500)
  return (
    <div>
      <div className="fixed inset-0 bg-blue-200 z-50 flex items-center justify-center">
        <div className="absolute  bg-white p-10 md:p-20  space-y-4 md:space-y-6">
          <p className="text-center font-medium text-2xl">Thank You For Choosing</p>
          <div className="flex justify-center">
            <p className="border-blue-500 w-[30%] border-b-2"></p>
          </div>
          <img src={ActivPassImage} className="w-[15rem]" alt="activpass" />
        </div>
      </div>
    </div>
  )
}

export default ThanksGreeting
