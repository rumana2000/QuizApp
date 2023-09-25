import QuizCard from "./QuizCard";
import { NavLink } from "react-router-dom";
import useQuizList from '../../Hook/useQuizList';

import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from "react";

export default function QuizHome() {
  const [page, setPage] = useState(1)
  const { quizList, hasMore } = useQuizList(page)

  return (
    <>
      <div className="main">
        <div className="container mx-auto">

          {quizList.length > 0 && <InfiniteScroll dataLength={quizList.length} hasMore={hasMore} next={() => setPage(page + 8)}>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4  place-items-center">
              {quizList.map((quizCategory, key) => (
                <NavLink to="/"><QuizCard quizData={quizCategory} /></NavLink>
              ))}
            </div>
          </InfiniteScroll>}

          {quizList.length == 0 &&
            <div className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
              <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Info alert!</span> No Data Found!
              </div>
            </div>}
        </div>
      </div>
    </>
  )
}