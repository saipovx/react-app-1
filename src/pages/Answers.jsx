import React, {useState} from "react";
import ApiService from "../services/ApiService";
import Menu from "../components/Menu";
import Important_information from "../components/Important_information";
// import AnswersTable from "../components/AnswersTable";
import PatternsTable from "../components/PatternsTable";


function Answers() {
  const [words, setWords] = useState('')
  const [star, setStar] = useState('')
  const [answers, setAnswers] = useState('')
  const [status, setStatus] = useState(null)
  const [statusMesage, setStatusMesage] = useState(null)

  const sendAnswer = async ()=>{
    console.log(star.length, words.split(','))
    const data = {
      "filter_words": words.split(','),
      "stars": star.length,
      "answer": answers
    }
    const res = await ApiService.template_message(data)
    console.log(res)
    if (res.status===200){
      setStatus(200)
    } else{
      // setStatus(400)
      setStatusMesage(res?.data?.error_text)
    }
  }

  const onChacgeWords = (e)=>{
    console.log(e.target.value)
    setWords(e.target.value)
  }
  const onChacgeAnswers = (e)=>{
    console.log(e.target.value)
    setAnswers(e.target.value)
  }
  const onChacgeStars = (e)=>{
    console.log(e.target.value)
    setStar(e.target.value)
  }


  return (
    <>
      <div className="container">
        <Menu/>
        <div>
          <div className="add_answers">
            <h1>Создать ответ</h1>
            <input name="words" placeholder="Слова через запятую" onChange={onChacgeWords}/>
            <br/>
            <input name="star" list="stars" onChange={onChacgeStars}/>
            <datalist id="stars">
              <option value="★" />
              <option value="★★" />
              <option value="★★★" />
              <option value="★★★★" />
              <option value="★★★★★" />
            </datalist>
            <br/>
            <input name="answer" placeholder="Ответ" onChange={onChacgeAnswers}/>
            <button onClick={sendAnswer}>Отправить</button>
            {status===200 ? <h1 style={{color: "green"}}>Успешно!</h1> :
              <h1 style={{color: "red"}}>{statusMesage}</h1>}
            <PatternsTable/>

          </div>
          <br/>

        </div>
        <Important_information/>
      </div>
    </>
  )
}


export default Answers