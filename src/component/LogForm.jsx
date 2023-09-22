import { useState } from "react";
import InputText from "./InputText";
import SubmitButton from "./SubmitButton";
import LogIn from "./LogIn";
import { NavLink,useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function LogForm() {
  const[email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const {login} = useAuth();
  const navigate = useNavigate()
  function handleEmail (e) {
    setEmail(e.target.value)
  }

  function hanndlePassword(e) {
    setPassword(e.target.value)
  }



  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    setError('')

    try {
     await login(email, password)
     navigate("/")
    }catch(err) {
      setError('Dose not match credentials')
    }
    setLoading(false)
    


    console.log(email);
    console.log(password);
  }



 return (
      <>
      <form  onSubmit={handleSubmit}>
          <InputText type='email' value={email} placeholder="Enter E-mail" required={true} onChangeHandel={handleEmail} />
          <InputText type='password' value={password} placeholder="Enter Password" required={true} onChangeHandel = {hanndlePassword} />
          <SubmitButton type="submit">{loading ?'Loading...' : 'LogIn'}</SubmitButton> 
           {error && <p className="text-lg bg-red-400 text-white outline-red-400 mt-5  md:w-96 w-full p-2 hover:bg-red-600 gap-0 rounded">{error}</p>}
          <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-5"> 
            don't have any account? <NavLink to="/signUp"><a href="#" className="font-medium text-primary-800 underline font-bold dark:text-primary-500">SignUp here</a></NavLink>
          </p>
      </form>
      </>
  )
}