import Layout from "./component/Layout";
import Quiz from "./component/Quiz";
import Result from "./component/Result";
import LogIn from "./component/LogIn";
import SignUp from "./component/SignUp";
import QuizHome from "./component/QuizHome";
import { Route,Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  return (
    <AuthProvider>
      <Routes>
      <Route element={<Layout />}>
          <Route path="/"  element= {<QuizHome/>}/>
          <Route path="signUp" element= {<SignUp/>}/>
          <Route path="logIn" element= {<LogIn/>}/>
          <Route path="result" element= {<Result/>}/>
          <Route path="quiz" element= {<Quiz/>}/>
      </Route>
      </Routes>
    </AuthProvider>
 
  );
}

export default App;
