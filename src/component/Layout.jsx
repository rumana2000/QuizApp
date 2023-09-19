import Nav from "./Nav";
import { Outlet } from "react-router-dom";


export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Outlet>{children}</Outlet>
    </>

  )
}