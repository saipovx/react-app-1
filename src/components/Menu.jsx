

import React, {useContext, useEffect} from 'react'
import logo from '../images/logo.png'
import {useNavigate, Link} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import style from '../styles/menu.module.css'
// import MenuService from '../services/MenuService';


function Menu() {
  const path = window.location.pathname
  // console.log(window.location.pathname)
  const {store} = useContext(Context)
  const navigate = useNavigate();
  // useEffect(() => {
  //   async function getData() {
      
  //   }
  //   getData()
  // }, [])
  return (
    <aside>
      <div className={style.top}>
        <div className={style.logo}>
          <img alt="лого" src={logo}/>
          <h2>X<span className="danger">COMPANY</span></h2>
        </div>
        <div className={style.close} id="close-btn">
          <span className="material-icons-sharp">close</span>
        </div>
      </div>

      <div className={style.sidebar}>
        <Link to={"/"} className={path === '/' ? 'active' : ''}>
          <span className="material-icons-sharp">grid_view</span>
          <h3>Панель управления</h3>
        </Link>
        <Link to={"/"} className={path === '/comm' ? 'active' : ''}>
          <span className="material-icons-sharp">person_outline</span>
          <h3>Комментарии</h3>
        </Link>
        <Link to={"/charts"} className={path === '/charts' ? 'active' : ''}>
            <span className="material-icons-sharp">person_outline</span>
            <h3>Графики</h3>
        </Link>
        <Link to={"/patterns"} className={path === '/patterns' ? 'active' : ''}>
            <span className="material-icons-sharp">person_outline</span>
            <h3>Шаблоны</h3>
        </Link>
        <Link to={"/answers"} className={path === '/answers' ? 'active' : ''}>
            <span className="material-icons-sharp">person_outline</span>
            <h3>Ответы</h3>
        </Link>
        <Link to={"/template_text"} className={path === '/template_text' ? 'active' : ''}>
            <span className="material-icons-sharp">person_outline</span>
            <h3>Приветствие/Прощание</h3>
        </Link>
        <Link to={"/template_message"} className={path === '/template_message' ? 'active' : ''}>
            <span className="material-icons-sharp">person_outline</span>
            <h3>Тело Отзыва</h3>
        </Link>
        <button onClick={()=>{store.logout();navigate("/login", { replace: true })}} style={{width: '100px'}}>
          <span className="material-icons-sharp" >logout</span>
          <h3>logout</h3>
        </button>
        {/*</Link>*/}

      </div>
    </aside>
  )
}

export default observer(Menu)