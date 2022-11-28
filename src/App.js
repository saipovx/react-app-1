
import React, {useContext, useEffect, useState} from "react";
import { Zoom } from 'react-preloaders2';
import {Context} from "./index";
// import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
// const queryClient = new QueryClient()
import {observer} from "mobx-react-lite";
// import Admin from "./pages/Admin";
import './scss/style.scss'
// import './styles/new/style.css'
// import Login from "./pages/Login";
import {redirect, useNavigate, Navigate} from "react-router-dom";
// import {useNavigate} from "react-router-dom";

function App() {

  const [load, setLoad] = useState(false)
  const [windowLoad, setWindowLoad] = useState(false)
  const {store} = useContext(Context)
  const navigate = useNavigate();
  // Меняем тему
  useEffect(() => {
    try {
      // const Toggler = document.querySelector(".theme-toggler");
      let data = localStorage.getItem('theme');
      if (data === 'dark') {
        // console.log(Toggler.querySelector('span:nth-child(0)'))
        // Toggler.querySelector('span:nth-child(1)').classList.toggle('active');
        // Toggler.querySelector('span:nth-child(2)').classList.toggle('active');
        document.body.classList.add('dark-theme-variables');
      }
    } catch (e) {
      console.log(e)
    }

  }, [])
  useEffect(() => {
    try {
      const menuBtn = document.querySelector("#menu-btn");
      const closeBtn = document.querySelector("#close-btn");
      const sideMenu = document.querySelector("aside");
      menuBtn.addEventListener('click', () => {
        sideMenu.style.display = 'block';
      })
      closeBtn.addEventListener('click', () => {
        sideMenu.style.display = 'none';
      })
    } catch {
    }
  }, [])
  // Проверка аунтификации
  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      console.log('проверяем')
      store.checkAuth(setLoad).then(()=> {
        if (!store.isAuth && window.location.pathname !== '/login'){
          console.log('Возвращаем Login')
          window.location.pathname = '/login'
        }
      })
    } else {
      if (!store.isAuth && window.location.pathname !== '/login'){
        console.log('1111111Возвращаем Login')
        window.location.pathname = '/login'
        // return navigate("/login", {replace: true});

      }
    }
    console.log('Авторизован ли', store.isAuth)
  }, [])
  // Ждём загрузки всей страницы
  useEffect(()=>{
    window.onload = function() {
      console.log('Страница загрузилась')
      setWindowLoad(true)
    }
  },[])
  const Allload = load && windowLoad

  // if (!Allload){
  //   return (<Zoom
  //     color="white"
  //     background="linear-gradient(rgba(135, 60, 255, 1), rgba(135, 60, 255, 0.0) 80%), linear-gradient(-45deg, rgba(120, 155, 255, 1) 25%, rgba(255, 160, 65, 1) 75%);"
  //     customLoading={Allload}
  //   />)
  // }


  return (
    <React.Fragment>

      {/*<h1>qweqwe</h1>*/}
      {/*<h1>{store.isAuth ? store.user : 'Вы не авторизованы'}</h1>*/}
      <Zoom
        color="white"
        background="linear-gradient(rgba(135, 60, 255, 1), rgba(135, 60, 255, 0.0) 80%), linear-gradient(-45deg, rgba(120, 155, 255, 1) 25%, rgba(255, 160, 65, 1) 75%);"
        customLoading={Allload}
      />
      
    </React.Fragment>
  )
}
//   return (<>
//     <React.Fragment>
//     {/*<BrowserRouter>*/}
//       {/*<Admin/>*/}
//       <Routes>
//         <Route exact path="/" element={<Admin/>} />
//         <Route exact path="/login" element={<Login/>} />
//       </Routes>
//       {/*<RouterProvider router={router} />*/}
//     {/*</BrowserRouter>*/}
//     {/*<h1>qwe</h1>*/}
//     </React.Fragment>
//   </>);
// }

export default observer(App);
