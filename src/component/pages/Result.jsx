import ResultCheackBox from "../pages/ResultCheackBox";
import SuccessImage from "../../assets/images/success.png";
import QuastionImage from "../../assets/images/question-mark.png";
export default function Result() {
  return (
    <div className="main">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 content-center p-10">
          <h2 className="text-2xl font-bold p-20 mt-5">Your score is<br /> 5  out of 10</h2>
          <img src={SuccessImage} className="w-96" alt="" />
        </div>
        <div className="">
          <h2 className="text-2xl mb-3 text-sky-800 font-bold">Question Analysis</h2>
          <p className="text-xl  font-bold text-gray-600">You answerd 5 out of 10 questions correctly</p>
          <hr className="mt-1 bg-black-600" />
        </div>
        <div className=" w-100 bg-gray-100 p-5 rounded-lg mt-10 justify-items-center">
          <div className="flex m-5 gap-2">
            <div className="quastion-img">
              <img src={QuastionImage} className="w-6 h-6  object-center" alt="" />
            </div>
            <div className="quastion">
              <h3 className="font-bold">Here goes the question from Learn with Sumit?</h3>
            </div>
          </div>
          <div className="mt-5 grid gap-4 grid-cols-2 justify-items-center">
            <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400  bg-gray-300 " text="A New Hope 1" />
            <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400  bg-gray-300 " text="A New Hope 1" />
            <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400  bg-gray-300 " text="A New Hope 1" />
            <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400  bg-gray-300 " text="A New Hope 1" />
            <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400  bg-gray-300 " text="A New Hope 1" />
            <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400  bg-gray-300 " text="A New Hope 1" />
          </div>
        </div>
        <div className=" w-100 bg-gray-100 p-5 rounded-lg mt-10 justify-items-center mb-20">
          <div className="flex m-5 gap-2">
            <div className="quastion-img">
              <img src={QuastionImage} className="w-6 h-6  object-center" alt="" />
            </div>
            <div className="quastion">
              <h3 className="font-bold">Here goes the question from Learn with Sumit?</h3>
            </div>
          </div>
          <div className="mt-5 grid gap-4 grid-cols-2 justify-items-center">
            <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400  bg-gray-300 " text="A New Hope 1" />
            <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400  bg-gray-300 " text="A New Hope 1" />
            <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400  bg-gray-300 " text="A New Hope 1" />
            <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400  bg-gray-300 " text="A New Hope 1" />
            <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400  bg-gray-300 " text="A New Hope 1" />
            <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400  bg-gray-300 " text="A New Hope 1" />
          </div>
        </div>
      </div>
    </div>
  )
}