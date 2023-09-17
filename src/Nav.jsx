import Account from "./account"
import logo from "./assets/images/idea.png";

export default function nav() {
  return (
    <>
    <header>    
      <div className="container mx-auto">
        <div className = 'flex justify-between py-2 '>
          <div className = 'topHeader flex items-center'>
              <img className='w-10 h-10' src={logo} alt=""/>
              <h2 className="font-bold text-xl ml-2 ">QuizApp</h2>
            </div>
          <Account/>
        </div>
      </div>
    </header> 
    </>
  );
}