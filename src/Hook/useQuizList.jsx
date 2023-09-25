import { useEffect, useState } from "react";

import {getDatabase, orderByKey, query, ref, get, startAt, limitToFirst} from "firebase/database"

export default function useQuizList (page) {
  const [loading ,setLoading] = useState(true);
  const [quizList, setQuizList] = useState([])
  const [hasMore, setHasMore] = useState(true)


  useEffect(() => {
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
          console.log('Current state of quizList' , quizList);
          console.log('Incoming value from api' , Object.values(res.val()));
          setQuizList((prevState) =>[...prevState,...Object.values(res.val())])

          console.log('Current state of quizList after update' , quizList);
        } else {
          setHasMore(false)
        }
      }catch(err) {
        console.log(err);
        setLoading(false)
        
        console.log(loading);
      }
    }

    setTimeout(() => {
      fatchQuizList();
    }, 3000)

  },[page])

  return {
    quizList,
    hasMore,
  }

}

