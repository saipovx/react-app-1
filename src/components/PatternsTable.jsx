import {useEffect, useState} from "react";
import ApiService from "../services/ApiService";


function PatternsTable() {
  const [data, setData] = useState([])
  async function getData(){
    const res = await ApiService.all_template_message()
    console.log(res.data)
    setData(res.data)
  }
  useEffect(()=>{

    getData()
  }, [])

  const pattern_delete = async (el)=>{
    console.log(el.el.id)
    const res = await ApiService.delete_template_message(el.el.id)
    console.log(res)
    getData()
  }
  if (!data) return 'Loading...'

  return (<>
    <div style={{height: '200px', overflow: 'overlay'}}>
      <table>
        <thead>
        <tr>
          <th colSpan="2">ID</th>
          <th colSpan="2">Дата Добавления</th>
          <th colSpan="2">Ответ</th>
          <th colSpan="2">Звёзд</th>
          <th colSpan="2">Статус</th>
        </tr>
        </thead>
        <tbody>
        {data.map((el, num) => (
          <tr key={num}>
            <td>{el.id}</td>
            <td>{el.createdAt}</td>
            <td>{el.answer}</td>
            <td>{el.stars}</td>
            <td>{el.active ? "Активно" : "OFF"}</td>
            <td>
              <button style={{color: "red"}} onClick={()=>pattern_delete({el})}>
                Удалить
              </button>
            </td>
          </tr>
        )) }
        </tbody>
      </table>
    </div>
  </>)
}


export default PatternsTable