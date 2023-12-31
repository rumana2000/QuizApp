import Layout from "./component/Layout";
import Quiz from "./component/pages/Quiz";
import Result from "./component/pages/Result";
import LogIn from "./component/LogIn";
import SignUp from "./component/SignUp";
import QuizHome from "./component/QuizHome";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./component/pages/PrivateRoute";
import PublicRoute from "./component/pages/PublicRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<QuizHome />} />
          <Route path="signUp" element={<PublicRoute><SignUp /></PublicRoute>} />
          <Route path="logIn" element={<LogIn />} />
          <Route path="result/:id" element={<PrivateRoute><Result /></PrivateRoute>} />
          <Route path="quiz/:id" element={<PrivateRoute><Quiz /></PrivateRoute>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
