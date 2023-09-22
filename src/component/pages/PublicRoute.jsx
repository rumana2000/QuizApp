import {Navigate} from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

export default function PublicRoute({children}) {
  const {authUser} = useAuth()
  return !authUser ? children : <Navigate to="/"/>
}