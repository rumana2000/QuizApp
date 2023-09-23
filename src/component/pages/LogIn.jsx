import LogImage from "../../assets/images/login.png";
import LogForm from "../pages/LogForm";

export default function LogIn() {
  return (
    <div className="main">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 content-center p-20">
          <div className="signup-img ml-20">
            <img src={LogImage} alt="" />
          </div>
          <div className="">
            <p className="font-bold  text-2xl">Login to your account</p>
            <LogForm />
          </div>
        </div>
      </div>
    </div>
  )
}