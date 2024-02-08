import React, { useState } from "react"
import { MdQrCodeScanner } from "react-icons/md"
import QRscanner from "./QRscanner"
import Popup from "./Popup"

const MobileQRscanner = () => {
  const [showModal, setShowModal] = useState(false)

  const handleIconClick = () => {
    setShowModal(true)
  }

  return (
    <>
      <div className="group relative sm:block md:hidden lg:hidden">
        <div className="fixed bottom-12 right-6 z-50 bg-[#1976d2] text-white p-4 rounded-full group-hover:bg-[#4287f5] cursor-pointer">
          <div className="flex items-center">
            <div className="">
              <div onClick={handleIconClick} className="cursor-pointer">
                <MdQrCodeScanner className="text-2xl" />
              </div>
            </div>

            <Popup showModal={showModal} setShowModal={setShowModal}>
              <QRscanner />
            </Popup>
          </div>
        </div>
        <div className="hidden group-hover:block fixed bottom-[105px] right-16 z-50 bg-blue-200 p-4 rounded-md shadow-md">
          Hello there 👋, Scan here
        </div>
      </div>
    </>
  )
}

export default MobileQRscanner
