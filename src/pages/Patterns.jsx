import React, {useState} from "react";
import ApiService from "../services/ApiService";
import AnswersTable from "../components/AnswersTable";
import Important_information from "../components/Important_information";
import Menu from "../components/Menu";


function Patterns() {

  const [statusMesageP, setStatusMesageP] = useState(null)
  const [statusP, setStatusP] = useState(null)

  const [pattern, setPattern] = useState('')
  const [text, setText] = useState('')


  const onChacgeType = (e)=>{
    console.log(e.target.value)
    setPattern(e.target.value)
  }
  const onChacgeText = (e)=>{
    console.log(e.target.value)
    setText(e.target.value)
  }


  const sendPattern = async ()=>{
    const data = {
      "type": pattern,
      "text": text
    }
    const res = await ApiService.template_text(data)
    console.log(res)
    if (res.status===200){
      setStatusP(200)
    } else{
      setStatusMesageP(res?.data?.error_text)
    }
  }

  return (
  <>
    <div className="container">
    <Menu/>
    <div className="add_patterns">
      <h1>Создать шаблон</h1>
      <input name="type" placeholder="Тип шаблона" list="type" onChange={onChacgeType}/>
      <datalist id="type">
        <option value="welcome" />
        <option value="goodbye" />
      </datalist>
      <br/>
      <input name="text" placeholder="Сообщение" onChange={onChacgeText}/>
      <br/>
      <button onClick={sendPattern}>Отправить</button>
      {statusP===200 ? <h1 style={{color: "green"}}>Успешно!</h1> :
        <h1 style={{color: "red"}}>{statusMesageP}</h1>}
      <AnswersTable/>
    </div>
    <Important_information/>
    </div>
  </>
  )
}

export default Patterns