import { Link } from "react-router-dom"

const UserProfileModal = ({ userProfileModalRef, user }) => {
  return (
    <dialog ref={userProfileModalRef} id="my_modal_2" className="modal">
      <div className="modal-box">
        <div className="space-x-2 card card-side bg-base-100">
          <div className="border border-black card-body rounded-2xl">
            <h2 className="pb-4 text-3xl border-b border-black card-title">Hey {user.partnerName + "!"}</h2>
            <section className="flex justify-between mb-2">
              <div className="text-gray-500">UserName :</div>
              <div className="font-semibold">{user.partnerName}</div>
            </section>
            <section className="flex justify-between mb-2">
              <div className="text-gray-500">UserId :</div>
              <div className="font-semibold">{user._id}</div>
            </section>
            <div className="border-b border-black"></div>
            <section className="flex justify-between mb-2">
              <div className="text-gray-500">Phone Number :</div>
              <div className="font-semibold">{user.phoneNumber}</div>
            </section>
            <section className="flex justify-between mb-2">
              <div className="text-gray-500">Email :</div>
              <div className="font-semibold">{user.email}</div>
            </section>
            <section className="flex justify-between mb-2">
              <div className="text-gray-500">Website Url :</div>
              <div className="font-semibold">{user.websiteUrl}</div>
            </section>

            <div className="justify-end card-actions">
              <button className="text-white btn btn-neutral">
                <Link to="/settings/profile" onClick={() => userProfileModalRef.current.close()}>
                  Edit Profile
                </Link>
              </button>
              <button className="text-white btn btn-error">
                <Link
                  to="/login"
                  onClick={() => {
                    localStorage.removeItem("userId")
                    localStorage.removeItem("token")
                  }}
                >
                  Logout
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}

export default UserProfileModal
