import QuizCard from "./QuizCard";
import { NavLink } from "react-router-dom";

export default function QuizHome() {
  return (
    <>
      <div className="main">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4  place-items-center">
           <NavLink to ="/signUp"><QuizCard /></NavLink>  
           <NavLink to ="/signUp"><QuizCard /></NavLink>  
           <NavLink to ="/signUp"><QuizCard /></NavLink>  
           <NavLink to ="/signUp"><QuizCard /></NavLink>  
           <NavLink to ="/signUp"><QuizCard /></NavLink>  
           <NavLink to ="/signUp"><QuizCard /></NavLink>  
           <NavLink to ="/signUp"><QuizCard /></NavLink>  
           <NavLink to ="/signUp"><QuizCard /></NavLink>  
          </div>
        </div>
      </div>
    </>

  )
}