import ResultCheckBox from "../pages/ResultCheckBox";
import SuccessImage from "../../assets/images/success.png";
import happyImage from "../../assets/images/happy.jpg";
import failImage from "../../assets/images/fail.png";
import QuastionImage from "../../assets/images/question-mark.png";
import { NavLink, useLocation, useParams } from "react-router-dom";
import _ from "lodash"
import { useEffect, useState,} from "react";

export default function Result() {
  const { id } = useParams()
  const location = useLocation();
  const { state } = location;
  const { questionAnswer } = state;
  const [totalCorrectAnwser, setTotalCorrectAnwser] = useState(0)
  const [totalQuestion, setTotalQuestion] = useState(questionAnswer.length)
  const [image, setImage] = useState(failImage)

  useEffect(() => {
    let count = 0
    for (let index = 0; index < questionAnswer.length; index++) {
      let answerOptions = questionAnswer[index].options
      let userCheckedAnser = []
      let correctAnswer = []
      for (let j = 0; j < answerOptions.length; j++) {
        correctAnswer.push(answerOptions[j].correct)
        userCheckedAnser.push(answerOptions[j].checked)
      }
      if (_.isEqual(correctAnswer, userCheckedAnser)) {
        count += 1
      }
    }
    setTotalCorrectAnwser(count)
  }, [questionAnswer])

  function answerStatusBG(option) {
    let bg_class = 'bg-gray-300'
    if (option.correct == true) {
      if (option.checked == true) {
        bg_class = 'bg-green-300'
      } else {
        bg_class = 'bg-red-300'
      }
    } else {
      if (option.checked == true) {
        bg_class = 'bg-red-300'
      }
    }
    return bg_class
  }

useEffect (() => {
    let  correctParcentage = ((totalCorrectAnwser) / ( totalQuestion) * 100)
    console.log(correctParcentage);
    if (correctParcentage >= 80) {
      setImage(happyImage)
    }else if (correctParcentage < 80 && correctParcentage >= 40) {
      setImage(SuccessImage)
    }else {
      setImage(failImage)
    }
  }, [totalCorrectAnwser])
  
  return (
    <div className="main">
     <NavLink to="/">
     <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 content-center p-10">
          <h2 className="text-2xl font-bold p-20 mt-10">Your score is<br /> {totalCorrectAnwser * 5}  out of {totalQuestion * 5} </h2>
          <img src = {image} className="w-96" alt="" />
        </div>
        <div className="">
          <h2 className="text-2xl mb-3 text-sky-800 font-bold">Question Analysis</h2>
          <p className="text-xl  font-bold text-gray-600">You answerd {totalCorrectAnwser} out of {totalQuestion} questions correctly</p>
          <hr className="mt-1 bg-black-600" />
        </div>
        {questionAnswer && questionAnswer.map((data, idx) => (
          <div className="w-100 bg-gray-100 mb-10 p-5 rounded-lg mt-10 justify-items-center">
            <div className="flex m-5 gap-2">
              <div className="quastion-img">
                <img src={QuastionImage} className="w-6 h-6  object-center" alt="" />
              </div>
              <div className="quastion">
                <h3 className="font-bold">{data.question}</h3>
              </div>
            </div>
            <div className="mt-5 grid gap-4 grid-cols-2 justify-items-center">
              {data.options.map((option,idx) => (
               <ResultCheckBox className={`w-11/12 p-5 rounded-lg ${answerStatusBG(option)}`} checked = {option.checked} disabled = "true" text = {option.text}/>
              ))}
          </div>
          </div>
        ))}
      </div>
     </NavLink>
    </div>
  )
}