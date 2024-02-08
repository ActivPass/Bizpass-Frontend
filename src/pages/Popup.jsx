const Popup = ({ showModal, setShowModal, children }) => {
  if (showModal) {
    return (
      <>
        <div className="fixed w-[100%] md:w-[50%] h-auto mx-auto   inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-3/4 mx-auto my-6 overflow-hidden overflow-y-scroll h-5/6 scrollbar-hide">
            <div className="relative p-10 flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              {children}
            </div>
          </div>
          <button
            className="btn btn-square fixed top-3 right-2  sm:top-[5%] sm:right-[25%]"
            onClick={() => setShowModal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </>
    )
  }
}
export default Popup
