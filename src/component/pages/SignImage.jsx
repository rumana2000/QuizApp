import SignUpImg from "../../assets/images/signup.png";

export default function SignImage () {
  return (
    <>
     <div className="signup-img">
        <img className="h-auto max-w-lg" src={SignUpImg} alt="" />
     </div>
    </>
  )
}