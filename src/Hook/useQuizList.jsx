import { useEffect, useState } from "react";

import {getDatabase, orderByKey, query, ref, get, startAt, limitToFirst} from "firebase/database"

export default function useQuizList (page) {
  const [loading ,setLoading] = useState(true);
  const [quizList, setQuizList] = useState([])
  const [hasMore, setHasMore] = useState(true)

  async function fatchQuizList () {
      const db = getDatabase()
      const quizRef = ref(db ,"quiz_categories" )
      const quizQuery = query (
        quizRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      )
      try {
        setLoading(true)
        let res = await get(quizQuery);
        if (res.exists()) {
          setQuizList((prevQuizList) => {
            return [...prevQuizList,...Object.values(res.val())]
          })
        }else {
          setHasMore(false)
        }
      }catch(err) {
        console.log(err);
        setLoading(false);
        console.log(loading);
      }
    }
  useEffect(() => {
    fatchQuizList()
  },[page])

  return {
    quizList,
    hasMore,
  }

}

