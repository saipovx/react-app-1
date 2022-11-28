import React, {useState} from "react";
// import ApiService from "../services/ApiService";
import Menu from "../components/Menu";
import Important_information from "../components/Important_information";
// import AnswersTable from "../components/AnswersTable";
// import PatternsTable from "../components/PatternsTable";
import { useLocation } from 'react-router';
import { useParams } from "react-router-dom";

function AnswersPerId() {
  const params = useParams();
  console.log('params', params.id)
  const data = [
    {id: 1, type: 'input', title: 'Название товара', data: 'Тут старое название товара'},
    {id: 2, type: 'textarea', title: 'Название товара', data: 'Тут старое название товара'},
  ]
  return (
    <>
      <div className="container">
        <Menu/>
        <div>
          <form >
          {data && data.map((el, num)=>{
            // console.log(el)
            if (el.type === 'input'){
              return (<>
                <div key={Math.random()}>
                  <h2 key={Math.random()}>{el.title}</h2>
                  <input key={Math.random()} defaultValue={el.data} style={{color: 'white'}}/>
                </div>
              </>)
            }
            else if (el.type === 'textarea'){
              return (<>
              <div key={el.id}>
                <h2 key={el.id+el.title}>{el.title}</h2>
                <textarea key={el.id+el.data} defaultValue={el.data}></textarea>
              </div>
              </>)
            }

          })}
          </form>
        </div>
        <Important_information/>
      </div>
    </>
  )
}


export default AnswersPerId