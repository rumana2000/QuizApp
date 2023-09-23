import classes from "../../style/Account.module.css";
import { NavLink } from "react-router-dom";
import logoutImg from "../../assets/images/logout-svgrepo-com.svg";
import { useAuth } from "../../contexts/AuthContext";

export default function Account() {
  const { authUser, logout } = useAuth();
  return (
    <>
      <div className={classes.account}>
        {authUser ?
          <>
            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="w-6 h-6 flex">
              <path strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            </span>
              <span>{authUser.displayName}</span>
              <span><img src={logoutImg} className="w-6 h-6 flex" alt="logout" onClick={logout} /><NavLink to="/logIn"></NavLink></span>
          </> :
          <>
            <NavLink to="/logIn"><a href="">Login</a></NavLink>
          </>
        }
      </div>
    </>
  );
}