import Account from "./Account"
import logo from "../assets/images/idea.png";
import classes from "../style/Nav.module.css";
import { NavLink } from "react-router-dom";

export default function nav() {
  return (
    <>
      <header className={classes.header}>
        <div className="container mx-auto">
          <div className='flex justify-between py-2 '>
          <NavLink to ="/">
            <div className='topHeader flex items-center'>
              <img className='w-10 h-10' src={logo} alt="" />
              <h2 className="font-bold text-xl ml-2 ">QuizApp</h2>
            </div>
          </NavLink>  

            <Account />
          </div>
        </div>
      </header>
    </>
  );
}