import InputText from "./InputText";
import SubmitButton from "./SubmitButton";
import LogImage from "../assets/images/login.png";

export default function LogIn() {
  return (
    <div class="main">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 content-center p-20">
          <div class="mt-20">
          <p class="font-bold  text-2xl">Login to your account</p>
          <InputText type='text' placeholder="Enter E-mail"/>
          <InputText type='text' placeholder="Enter Password"/>
          <SubmitButton/>
          </div>
          <div class="signup-img">
            <img src={LogImage} alt=""/>
          </div>
        </div>     
      </div>     
    </div>     
  )
}