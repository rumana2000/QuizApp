
export default function QuizCard({quizData}) {
  return(
    <>
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-6">
          <a href="#">
            <img className="rounded-t-lg object-cover h-48 w-96" src ={`./quiz_images/${quizData.quizCategoryId}.png`} alt="" />
          </a>
          <div className='h-6 flex m-5 justify-between'>
          <div className=' font-bold'>NOQ: {quizData.noq}</div>
          <div  className=' font-bold'>Language: {quizData.quizCategoryId}</div>
          </div>
          <div className="h-48 min-h-full text-start m-5">
            <a href="#">
              <h5 className="text-2xl font-bold  text-gray-900 dark:text-white">{quizData.title}</h5>
            </a>
            <div className='mt-5 font-bold'>Total Point : {quizData.noq * 5}</div>
          </div>
        </div>
    </>
  )
}