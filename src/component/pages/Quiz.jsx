import ResultCheckBox from "../pages/ResultCheckBox";
import puseImage from "../../assets/images/play.png";
import { useNavigate, useParams } from "react-router-dom";
import useQuizQuestion from "../../Hook/useQuizQuestion";
import { useEffect, useReducer, useState } from "react";
import _ from "lodash";
import { useAuth } from "../../contexts/AuthContext";
import { getDatabase, ref, set } from "firebase/database";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false
        })
      })
      return action.value;

    case "answerSheet":
      let answerSheet = _.cloneDeep(state)
      answerSheet[action.questionIdx].options[action.optionIdx].checked = action.checkValue;
      return answerSheet;

    default:
      return state
  }

}


export default function Quiz() {
  const { id } = useParams()
  // this quizQuestion came from database
  const { quizQuestion, loading } = useQuizQuestion(id);
  const [questionAnswer, dispatch] = useReducer(reducer, initialState);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { authUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: quizQuestion
    })
  }, [quizQuestion])

  function handelChange(e, idx) {
    dispatch({
      type: "answerSheet",
      questionIdx: currentQuestion,
      optionIdx: idx,
      checkValue: e.target.checked
    })
  }

  function handleNext() {
    if (currentQuestion < questionAnswer.length - 1) {
      setCurrentQuestion((prevQuestionIdx) => prevQuestionIdx + 1)
    }
  }

  function handlePrevious() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevQuestionIdx) => prevQuestionIdx - 1)
    }
  }

  const percentage = questionAnswer.length > 0 ? ((currentQuestion + 1) / (questionAnswer.length) * 100) : 0;

  async function submit() {
    const { uid } = authUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: questionAnswer
    })
    navigate(`/result/${id}`, {
      state: {
        questionAnswer,
        quizQuestion
      }
    });
  }

  return (
    <>
      {questionAnswer.length > 0 &&
        <div className="main">
          <div className="container mx-auto">
            <div className="mt-10">
              <h2 className="font-bold text-2xl">{questionAnswer[currentQuestion]?.question}</h2>
              <p className="font-medium text-lg mt-5  mb-2">Question can have multiple answers</p>
              <hr className="mt-5" />
            </div>
            <div className="grid gap-4 grid-cols-2 mt-10">
              {questionAnswer[currentQuestion].options.map((option, index) => (
                <ResultCheckBox className="w-11/12 p-5  rounded-lg text-2xl hover:bg-gray-400 bg-gray-300 " value={index} checked={option.checked} text={option.text} onChange={(e) => handelChange(e, index)} />
              ))}
            </div>
            <div>
              <div className="flex  flex-row-reverse m-20 mt-5">
                <div className="relative w-24 h-24 bg-gray-300 rounded-full">
                  <div className="absolute w-16 h-16 rounded-full m-4"><img className="bg-green-700 hover:bg-green-400 rounded-full" src={puseImage} alt="" /></div>
                </div>
              </div>
              <div className="">
                <div className="rounded-lg h-20 w-11/12 shadow-lg">
                  <div className="flex justify-between">
                    <button className="w-44 h-16 bg-green-300 m-2 cursor-pointer rounded-lg p-5 font-bold" onClick={handlePrevious}>PreviousQuestion</button>
                    <div className="w-8/12 bg-gray-200 h-6 mt-8 round">
                      <div className={`{h-${percentage}% bg-red-300 w-${percentage}%}`}> </div>
                      <>Completed {percentage}%!</>
                    </div>
                    <button className="w-36 h-16 bg-green-300 m-2 cursor-pointer rounded-lg p-5 font-bold" onClick={percentage === 100 ? submit : handleNext}>{percentage === 100 ? "SubmitQuiz" : "NextQuestion"}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>    
      }
  
    </>
  )}