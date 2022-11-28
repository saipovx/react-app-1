import React, {useContext, useState} from 'react'
import style from '../styles/login.module.css'
// import {Link} from "react-router-dom";
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
function Login(){
  const [login, setLogin] = useState()
  const [pass, setPass] = useState()
  const [message, setMessage] = useState()
  const {store} = useContext(Context)
  const navigate = useNavigate();
  const auth = async ()=>{
    const res = await store.auth(login, pass)
    console.log('res', res)
    if (store.isAuth){
      navigate("/", { replace: false })
      console.log('qwe')
    }
    if (!res){
      setMessage('Неправильный логин или пароль')
    }
    // var settings = {
    //   "url": "localhost:80/api/v2/auth",
    //   "method": "POST",
    //   "timeout": 0,
    //   "headers": {
    //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2JjMzQ0NDJjMTRkZGIyZGNmYjczNSIsImlhdCI6MTY1NzUyMTA5OSwiZXhwIjoxNjU3NTI0Njk5fQ.jPdYrJ0JMGt7sCs-vzo94t_E4wAuSBmrVsLLgm2Koog",
    //     "Content-Type": "application/json"
    //   },
    //   "data": JSON.stringify({
    //     "login": "root",
    //     "password": "pass"
    //   }),
    // };
    //
    // $.ajax(settings).done(function (response) {
    //   console.log(response);
    // });
  }
    return (
      <>
        <div className={'loginpage'}>
          <div className={style.background}>
            <div className={style.shape}></div>
            <div className={style.shape}></div>
          </div>
          <form className={style.loginForm}>
            <h3>Login Here</h3>
            <div className='message'>
              {message &&
                <p style={{color: 'red'}}>{message}</p>
              }
            </div>
            <label htmlFor="username">Username</label>
            <input className={style.loginInput} type="text" placeholder="Email or Phone" id="username" autoсomplete="off" onChange={e => setLogin(e.target.value)}/>

            <label htmlFor="password">Password</label>
            <input className={style.loginInput} type="password" placeholder="Password" id="password" autoсomplete="off" onChange={e => setPass(e.target.value)}/>
            <button className={style.loginButton} type='button' onClick={auth}>Log In</button>
            </form>
          </div>
    </>
    )
  // }
}

export default observer(Login)