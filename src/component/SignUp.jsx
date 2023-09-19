import SignUpImage from "../assets/images/signup.png";
import InputText from "./InputText";
import CheackBox from "./CheackBox";
import SubmitButton from "./SubmitButton";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="main">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  mt-6 justify-items-center p-10 ">
            
              <form className="mt-10" action="#">
              <h2 className="font-bold text-2xl text-center">Create an account</h2>

                <InputText  type='text' placeholder="Enter Name"/>
                <InputText type='text' placeholder="Enter E-mail"/>
                <InputText type='text' placeholder="Enter Password"/>
                <InputText type='text' placeholder="Confirm Password"/>
                <CheackBox text = "I agree to the Terms & Conditions" className="mt-5"/>
                 <br />
                <SubmitButton/>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400 mt-5">
                  Already have an account? <NavLink to="/logIn"><a href="#" class="font-medium text-primary-800 underline font-bold dark:text-primary-500">Login here</a></NavLink>
                </p>
              </form>
              <div className="signup-img">
                <img className="h-auto max-w-lg" src={SignUpImage} alt="" />
              </div>
          </div>


        </div>
      </div>
    </>
  );
}