import InputText from "./InputText";
import CheackBox from "./CheackBox";
import SubmitButton from "./SubmitButton";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function SignForm() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState('');
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  const { signup } = useAuth();
  const navigate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmpassword) {
      return setError("Password do'nt match")
    }

    console.log(username);
    console.log(email);
    console.log(password);
    console.log(confirmpassword);

    try {
      setError("")
      setLoading(true)
      await signup(email, password, username)
      navigate("/");
    }
    catch (err) {
      setLoading(false)
      setError("create a account")
      console.log(err);
    }

  }


  return (
    <>
      <form className="mt-10" onSubmit={handleSubmit}>
        <h2 className="font-bold text-2xl text-center">Create an account</h2>
        <InputText type='text' placeholder="Enter Name" required={true} value={username} onChangeHandeler={(e) => setUserName(e.target.value)} />
        <InputText type='text' placeholder="Enter E-mail" required={true} value={email} onChangeHandeler={(e) => setEmail(e.target.value)} />
        <InputText type='password' placeholder="Enter Password" required={true} value={password} onChangeHandeler={(e) => setPassword(e.target.value)} />
        <InputText type='password' placeholder="Confirm Password" required={true} value={confirmpassword} onChangeHandeler={(e) => setConfirmPassword(e.target.value)} />
        <CheackBox text="I agree to the Terms & Conditions" className="mt-5" required={true} value={agree} onChangeHandeler={(e) => setAgree(e.target.value)} />
        <br />
        <SubmitButton disabled={loading} type="submit">Submit Now</SubmitButton>

        {/* <button onClick={handleSubmit} disabled = {loading}  type="button" className="text-lg bg-emerald-400 text-white outline-emerald-400 mt-5  md:w-96 w-full p-2 hover:bg-emerald-600 gap-0 rounded">Submit Now</button> */}

        {error && <p className="text-lg bg-red-400 text-white outline-red-400 mt-5  md:w-96 w-full p-2 hover:bg-red-600 gap-0 rounded">{error}</p>}
        <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-5">
          Already have an account? <NavLink to="/logIn"><a href="#" className="font-medium text-primary-800 underline font-bold dark:text-primary-500">Login here</a></NavLink>
        </p>
      </form>
    </>
  )
}