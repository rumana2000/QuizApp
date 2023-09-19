import ResultCheackBox from "./ResultCheackBox";
import puasImage from "../assets/images/play.png";
import { NavLink } from "react-router-dom";
export default function Quiz() {
  return (
    <div className="main">
      <div className="container mx-auto">
        <div className="mt-10">
          <h2 className="font-bold text-2xl">Pick three of your favorite Star Wars Flims</h2>
          <p className="font-medium text-lg mt-5  mb-2">Question can have multiple answers</p>
          <hr className="mt-5"/>
        </div>
        <div className="grid gap-4 grid-cols-2 mt-10">
          <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400 bg-gray-300 " text="A New Hope 1"/>
          <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400 bg-gray-300 " text="A New Hope 1"/>
          <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400 bg-gray-300 " text="A New Hope 1"/>
          <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400 bg-gray-300 " text="A New Hope 1"/>
          <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400 bg-gray-300 " text="A New Hope 1"/>
          <ResultCheackBox className="w-11/12 p-5 rounded-lg hover:bg-gray-400 bg-gray-300 " text="A New Hope 1"/>
      </div>
        <div>
        <div className="flex  flex-row-reverse m-20 mt-5">
          <div className="relative w-24 h-24 bg-gray-300 rounded-full">
            <div className="absolute w-16 h-16 rounded-full m-4"><img className="bg-green-700 hover:bg-green-400 rounded-full" src={puasImage} alt="" /></div>
          </div>
        </div>
        <div className="">
          <div className="rounded-lg h-20 w-11/12 shadow-lg">
            <div className="flex justify-between">
              <button className="w-24 h-12 bg-green-300 m-5 cursor-pointer rounded-lg p-3 font-bold">Previous</button>
              <div className="w-8/12 bg-gray-200 h-6 mt-8 round">
                <div className="w-6/12 h-6 bg-blue-600"></div>
              </div>
              <NavLink to="/result">
              <button className="w-24 h-12 bg-green-300 m-5 cursor-pointer rounded-lg p-3 font-bold">NextPage</button>
              </NavLink>
            </div>  
          </div>
        </div>
      </div>
      </div>  
    </div>
  )
}