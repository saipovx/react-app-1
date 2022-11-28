import {useEffect, useState} from "react";
import ApiService from "../services/ApiService";


function AnswersTable() {
  const [data, setData] = useState([])
  async function getData(){
    const res = await ApiService.all_template_text()
    console.log(res.data.template_texts)
    setData(res.data.template_texts)
  }
  useEffect(()=>{

    getData()
  }, [])

  // const answer_delete = async (el)=>{
  //   console.log(el.el.id)
  //   const res = await ApiService.delete_template_message(el.el.id)
  //   console.log(res)
  //   getData()
  // }
  if (!data) return 'Loading...'
  return (<>
    <div style={{height: '200px', overflow: 'overlay'}}>
      <table>
        <thead>
        <tr>
          <th colSpan="2">ID</th>
          <th colSpan="2">Дата создания</th>
          <th colSpan="2">Тип</th>
          <th colSpan="2">Текст</th>
        </tr>
        </thead>
        <tbody>
        {data.map((el, num) => (
          <tr key={num}>
            <td>{el.id}</td>
            <td>{el.createdAt}</td>
            <td>{el.type}</td>
            <td>{el.text}</td>

            {/*<td>*/}
            {/*  <button style={{color: "red"}} onClick={()=>answer_delete({el})}>*/}
            {/*    Удалить*/}
            {/*  </button>*/}
            {/*</td>*/}
          </tr>
        )) }
        </tbody>
      </table>
    </div>
  </>)
}

export default AnswersTable