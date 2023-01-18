import { useContext } from "react"
import { UserContext } from "../App"

export const Home = () => {
  const { user } = useContext(UserContext)
  return (
    <h1>Welcome to the app {user.forename} {user.surname}!</h1>
  )
}