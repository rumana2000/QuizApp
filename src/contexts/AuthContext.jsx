import react, { useContext, useEffect, useState } from "react";
import"../firebase"
import{ createUserWithEmailAndPassword, getAuth, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged} from"firebase/auth"

const AuthContext = react.createContext();

export function useAuth() {
  return useContext(AuthContext)
}
// const
export function AuthProvider({children}) {
  const [loading, setLoading] = useState(true)
  const [authUser, setAuthUser] = useState()

  useEffect(()=> {
    const auth = getAuth()
    const signinuser =  onAuthStateChanged(auth, (user)=> {
      setAuthUser(user)
      setLoading(false)
    })
    return signinuser;
  },[])

  async function signup(email,password,username) {
    const auth = getAuth()
    await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(auth.currentUser, {
      displayName : username
    })
    let user = auth.currentUser;
    setAuthUser({
      ...user
    })
    return user
  }

  function login (email, password) {
    const auth = getAuth()
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    const auth = getAuth()
    return signOut(auth)
  }


  const value = {
    authUser,
    signup,
    login,
    logout
  }

  return (
    <AuthContext.Provider value = {value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}