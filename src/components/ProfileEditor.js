import { useState, useContext } from "react"
import { UserContext } from "../App"

export const ProfileEditor = () => {
  const { user, setUser } = useContext(UserContext)
  const [newUser, setNewUser] = useState(user)

  const handleUserChange = (e) => {
    const { name, value } = e.target
    setNewUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const updateUser = () => {
    setUser(newUser)
  }

  return (
    <div className="user-form">
      <div className="form-group">
        <label htmlFor="fName">First Name</label>
        <input type="text" name="forename" value={newUser.forename} onChange={(e) => { handleUserChange(e) }} />
      </div>
      <div className="form-group">
        <label htmlFor="sName">Last Name</label>
        <input type="text" name="surname" value={newUser.surname} onChange={(e) => { handleUserChange(e) }} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="text" name="email" value={newUser.email} onChange={(e) => { handleUserChange(e) }} />
      </div>
      <button onClick={updateUser}>Submit</button>
    </div>
  )
}