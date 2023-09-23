import { useEffect, useState } from "react";

import {getDatabase, orderByKey, query, ref, get} from "firebase/database"

export default function useQuizList () {
  const [loading ,setLoading] = useState(true);
  const [quizList, setQuizList] = useState([])


  useEffect(() => {
    async function fatchQuizList () {
      const db = getDatabase()
      const quizRef = ref(db ,"quiz_categories" )
      const quizQuery = query (
        quizRef,
        orderByKey(),
      )
      
      try {
        setLoading(true)
        let res = await get(quizQuery);
        if (res.exists()) {
          setQuizList(Object.values(res.val()))
        }
        setLoading(false)
      }catch(err) {
        console.log(err);
        setLoading(false)
        
        console.log(loading);
      }
    }

    fatchQuizList();
  },[])

  return {
    quizList,
    loading
  }

}

