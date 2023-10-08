import { useEffect, useState } from "react";

import {getDatabase, orderByKey, query, ref, get} from "firebase/database"

export default function useQuizQuestion (quizCategoryId) {
  const [loading, setLoading] = useState(true);
  const [quizQuestion, setQuizQuestion] = useState([])

  useEffect(() => {
    async function fatchQuizList () {

      const db = getDatabase();
      const questionRef = ref(db ,"quiz_questions/" + quizCategoryId)
      const questionQuery = query (
        questionRef,
        orderByKey(),
      )
      try {
        let res = await get(questionQuery);
        if (res.exists()) {
          setQuizQuestion(Object.values(res.val()))
        }
        setLoading(false)
      }catch(err) {
        console.log(err);
        setLoading(false)
        console.log(loading);
      }
    }
    fatchQuizList();
  },[quizCategoryId])

  return {
    quizQuestion,
    loading,
 }

}

