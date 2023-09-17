import Nav from "./Nav"


export default function Layout({children}) {
  return (
    <>
    <Nav/>
    <div className="main">
      <div className="container mx-auto">
       {children}
      </div>
    </div>
    </>

  )
}