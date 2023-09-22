import cardImageLaravel from '../../assets/images/card-laravel.png';
import { NavLink } from 'react-router-dom';
export default function QuizCard() {
  return(
    <>
    <NavLink to="/quiz"> 
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-6">
          <a href="#">
            <img className="rounded-t-lg object-cover h-48 w-96" src ={cardImageLaravel} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                acquisitions 2021</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
              acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </div>
    </NavLink>
   
    </>
    
  )
}