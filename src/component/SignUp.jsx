import SignImage from "./pages/SignImage";
import SignForm from "./pages/SignForm";

export default function SignUp() {
  return (
    <>
      <div className="main">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  mt-6 justify-items-center p-10 ">
           <SignForm/>  
           <SignImage/>
          </div>
        </div>
      </div>
    </>
  );
}