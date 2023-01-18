import { useContext } from "react"
import { UserContext } from "../App"
import { ProfileEditor } from "../components/ProfileEditor"

export const Profile = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="profile">
      <div className="profile-head">
        <h1>Profile: {user.forename} {user.surname} </h1>
      </div>
      <ProfileEditor />
    </div>


   )
}