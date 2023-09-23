
import { NavLink } from 'react-router-dom';
export default function QuizCard({quizData}) {
  return(
    <>
    <NavLink to="/quiz"> 
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-6">
          <a href="#">
            <img className="rounded-t-lg object-cover h-48 w-96" src ={`./quiz_images/${quizData.quizCategoryId}.png`} alt="" />
          </a>
          <div className="p-5 h-48 min-h-full">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{quizData.title}</h5>
            </a>
          </div>
        </div>
    </NavLink>
    </>
  )
}