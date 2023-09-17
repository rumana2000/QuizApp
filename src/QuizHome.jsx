import QuizCard from "./QuizCard";

export default function QuizHome() {
  return (
    <>
      <div className="main">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-6 place-items-center">
            <QuizCard />
            <QuizCard />
          </div>
        </div>
      </div>
    </>

  )
}