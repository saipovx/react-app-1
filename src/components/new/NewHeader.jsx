
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react'
import style from '../../styles/new/header.module.css'
import './_header.scss'
import Tippy from '@tippyjs/react';
import { followCursor } from 'tippy.js';



const MENU_1 = () => (

  <Tippy interactive={true} duration={0} delay={0} interactiveBorder={5} placement={'bottom'} theme={'nav1'}
    content={
      <li id="tovar">
        <div id="nav1" className="navbar__pos">
          <div className="navbar__drow">

            <ul className="navbar__drow-ul">
              <h2 href="" className="title">Список таваров</h2>
              <li><Link href="" className="navbar__drow-ul-link active">Список таваров</Link></li>
              <li><Link href="" className="navbar__drow-ul-link">Список таваров</Link></li>
              <li><Link href="" className="navbar__drow-ul-link">Список таваров</Link></li>
              <li><Link href="" className="navbar__drow-ul-link">Списоктаваров</Link></li>
              <li><Link href="" className="navbar__drow-ul-link">Список таваров</Link></li>
            </ul>

            <ul className="navbar__drow-ul navbar__drow-ul2">

              <li><Link href="" className="navbar__drow-ul-link">Список таваров</Link></li>
              <li><Link href="" className="navbar__drow-ul-link">Список таваров</Link></li>
              <li><Link href="" className="navbar__drow-ul-link">Список таваров</Link></li>
              <li><Link href="" className="navbar__drow-ul-link">Список таваров</Link></li>
              <li><Link href="" className="navbar__drow-ul-link">Список таваров</Link></li>
            </ul>

            <ul className="navbar__drow-ul">
              <h2 href="" className="title">Список таваров</h2>
              <li><Link href="" className="navbar__drow-ul-link">Список таваров</Link></li>
              <li><Link href="" className="navbar__drow-ul-link">Список таваров</Link></li>
              <li><Link href="" className="navbar__drow-ul-link">Список таваров</Link></li>
              <li><Link href="" className="navbar__drow-ul-link">Список таваров</Link></li>
              <li><Link href="" className="navbar__drow-ul-link">Список таваров</Link></li>
              
  
            </ul>

          </div>
        </div>
      </li>
    }>
    <Link href="#" className="navbar__link">Товары и цены</Link>
    {/* <button>asd</button> */}
  </Tippy>
)

const MENU_2 = () => (
  <Tippy placement={'bottom'} duration={0}  delay={0} interactiveBorder={5} interactive={true} theme={'nav1'}
    content={
      <li id="tovar4">
        <div id="nav4" className="navbar__pos">
          <div className="navbar__drow  navbar__drow2">
            <ul className="navbar__drow-ul">
              <h2 href="" className="title">Список таваров</h2>
              <li><Link to={'/'} className="navbar__drow-ul-link">Популярные товары</Link></li>
              <li><Link to={'/'} className="navbar__drow-ul-link">Популярные товары</Link></li> <li><Link to={'/'} className="navbar__drow-ul-link">Популярные товары</Link></li>
            </ul>
            <ul className="navbar__drow-ul">
              <h2 href="" className="title">Список таваров</h2>
              <li><Link to={'/'} className="navbar__drow-ul-link">Популярные товары</Link></li>
              <li><Link to={'/'} className="navbar__drow-ul-link">Популярные товары</Link></li>
              <li><Link to={'/'} className="navbar__drow-ul-link">Популярные товары</Link></li>
              <li><Link to={'/'} className="navbar__drow-ul-link">Популярные товары</Link></li>
            </ul>

          </div>
        </div>

      </li>
    }>
    <Link to={'/'} className='navbar__link'>Продвижение</Link>
    {/* <Link href="#" className="navbar__link">Аналитика</Link> */}
  </Tippy>
)


const MENU_6 = () => (
  <Tippy placement={'bottom'} duration={0} delay={0} interactiveBorder={5} interactive={true} theme={'nav1'}  
    content={
      
        <div id="nav6" className="navbar__pos navbar__pos3">
          <div className="navbar__drow navbar__drow3">

            <ul className="navbar__drow-ul">
              <li><Link href="" className="navbar__drow-ul-link">отзывы покупателей</Link></li>
              <li><Link href="" className="navbar__drow-ul-link">отзывы покупателей</Link></li>   
              <li><Link href="" className="navbar__drow-ul-link">отзывы покупателей</Link></li>  
              <li><Link href="" className="navbar__drow-ul-link">отзывы покупателей</Link></li>  
              <li><Link href="" className="navbar__drow-ul-link">отзывы покупателей</Link></li>  
              <li><Link href="" className="navbar__drow-ul-link">отзывы покупателей</Link></li>  
               
            </ul>




          </div>
        </div>
      // </li>
    }>
    <Link to={'/'} className="navbar__link">Отзывы</Link>
    {/* <Link to={'/'} className='navbar__link'>Продвижение</Link> */}
    {/* <Link href="#" className="navbar__link">Аналитика</Link> */}
  </Tippy>
)


function NewHeader() {

  return (<>
    <header>
      <nav className="nav">
        <Link to={'/'}>
          <img src="https://seller.ozon.ru/app/img/logo.072e375a.svg" className="nav__logo" alt="svg" />
        </Link>
        {/* Link */}
        <div className="nav__admin">
          <div className="nav__admin-chel" id="myChel">
            test_api
            <svg className="nav__admin-chel-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <path fill="currentColor"
                d="M7.293 11.707a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L8 9.586 4.707 6.293a1 1 0 0 0-1.414 1.414l4 4Z"></path>
            </svg>
            <div className="okno" id="template" style={{ display: 'none' }}>
              <Link to={'/'} className="okno__btn">
                Добавить
              </Link>
            </div>

          </div>

          <div className="akk" id="akk">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" size="400"
              data-onboarding-target="headerSettings" className="index_iconButton_9ZdWq">
              <path fill="currentColor"
                d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7Zm1.638 8a3 3 0 0 0-2.758 1.818l-1.96 4.576a1 1 0 0 1-1.84-.788l1.962-4.576A5 5 0 0 1 8.638 13h6.724a5 5 0 0 1 4.596 3.03l1.961 4.576a1 1 0 0 1-1.838.788l-1.961-4.576A3 3 0 0 0 15.362 15H8.638Z"></path>
            </svg>
            <div className="akk__drop" id="template2" style={{ display: 'none' }}>
              <div className="akaunt">
                <Link to={'/'} className="akaunt__title">Saipov Roma</Link>

                <Link to={'/'} className="akaunt__subtitle">gdoshgf-4e3dhjosghfd</Link>
                <Link to={'/'} className="akaunt__link">Управляющий</Link>
                <ul className="akaunt__ul">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                      <path fill="currentColor"
                        d="M8.325 3.701A3 3 0 0 1 11.31 1h1.38a3 3 0 0 1 2.985 2.701l.026.264a1 1 0 0 0 1.407.812l.241-.109a3 3 0 0 1 3.832 1.234l.69 1.196a3 3 0 0 1-.847 3.936l-.215.154a1 1 0 0 0 0 1.624l.215.155a3 3 0 0 1 .847 3.935l-.69 1.196a3 3 0 0 1-3.832 1.234l-.241-.109a1 1 0 0 0-1.407.812l-.026.264A3 3 0 0 1 12.69 23h-1.38a3 3 0 0 1-2.985-2.701l-.027-.264a1 1 0 0 0-1.406-.812l-.241.11a3 3 0 0 1-3.832-1.235l-.69-1.195a3 3 0 0 1 .847-3.936l.215-.155a1 1 0 0 0 0-1.624l-.215-.155a3 3 0 0 1-.847-3.935l.69-1.196A3 3 0 0 1 6.65 4.668l.241.109a1 1 0 0 0 1.406-.812l.027-.264ZM11.31 3a1 1 0 0 0-.995.9l-.026.264A3 3 0 0 1 6.069 6.6l-.24-.109a1 1 0 0 0-1.278.411l-.69 1.196a1 1 0 0 0 .282 1.312l.215.154a3 3 0 0 1 0 4.872l-.215.155a1 1 0 0 0-.282 1.312l.69 1.195a1 1 0 0 0 1.277.411l.241-.109a3 3 0 0 1 4.22 2.436l.026.264a1 1 0 0 0 .995.9h1.38a1 1 0 0 0 .995-.9l.026-.264a3 3 0 0 1 4.22-2.436l.24.11a1 1 0 0 0 1.278-.412l.69-1.195a1 1 0 0 0-.282-1.313l-.215-.154a3 3 0 0 1 0-4.872l.215-.154a1 1 0 0 0 .282-1.312l-.69-1.196a1 1 0 0 0-1.277-.411l-.242.109a3 3 0 0 1-4.219-2.436l-.026-.263A1 1 0 0 0 12.69 3h-1.38Z"></path>
                      <path fill="currentColor"
                        d="M9.726 12a2 2 0 1 1 1.666 1.972 1 1 0 1 0-.331 1.973 4 4 0 1 0-3.28-3.28 1 1 0 0 0 1.973-.33A2.019 2.019 0 0 1 9.726 12Z"></path>
                    </svg>
                    {/*<Link to={'/'} className="akaunt__ul-link">настройки</Link>*/}
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                      <path fill="currentColor"
                        d="M4.211 4.233A10.965 10.965 0 0 0 1 12c0 1.353.245 2.65.693 3.85a1 1 0 1 0 1.873-.7A8.98 8.98 0 0 1 3 12c0-1.281.268-2.5.75-3.603.104.318.228.642.37.966.739 1.697 2.024 3.593 3.702 5.401l-3.6 3.6a1 1 0 0 0 0 1.414A10.969 10.969 0 0 0 12 23c6.075 0 11-4.925 11-11 0-1.353-.245-2.65-.693-3.85a1 1 0 1 0-1.873.7c.365.98.566 2.04.566 3.15 0 1.281-.268 2.5-.75 3.603a10.645 10.645 0 0 0-.37-.967c-.739-1.696-2.024-3.592-3.702-5.4l3.6-3.6a1 1 0 0 0 0-1.414A10.969 10.969 0 0 0 12 1a10.965 10.965 0 0 0-7.789 3.233Zm1.42 1.407.01-.008c.122-.12.373-.248.888-.23.522.02 1.212.192 2.035.55 1.433.626 3.123 1.753 4.785 3.285l-4.112 4.112c-1.532-1.662-2.66-3.352-3.284-4.785-.36-.823-.53-1.513-.55-2.035-.02-.515.109-.766.229-.889Zm3.605 10.538c1.808 1.678 3.704 2.963 5.4 3.703.325.141.649.265.967.369A8.97 8.97 0 0 1 12 21a8.958 8.958 0 0 1-5.618-1.968l2.854-2.854Zm1.415-1.415 4.112-4.112c1.532 1.662 2.66 3.352 3.284 4.785.36.823.53 1.513.55 2.035.02.52-.112.771-.233.893-.122.121-.372.252-.893.233-.522-.02-1.212-.19-2.035-.55-1.433-.625-3.123-1.752-4.785-3.284Zm4.113-6.941c-1.808-1.678-3.704-2.963-5.4-3.703a10.667 10.667 0 0 0-.967-.369A8.97 8.97 0 0 1 12 3c2.125 0 4.078.736 5.618 1.968l-2.854 2.854Z"></path>
                    </svg>
                    {/*<Link to={'/'} className="akaunt__ul-link">Язык</Link>*/}
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                      <path fill="currentColor"
                        d="M17.447 2.106A1 1 0 0 0 16 3.001v18.003a1 1 0 0 0 1.447.895L22 19.622V4.382l-4.553-2.276ZM18 19.386V4.619l2 1v12.767l-2 1Zm-9-8.388h4a1 1 0 0 1 0 2H8.066A1.017 1.017 0 0 1 8 13H3.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L3.414 11H7V5.997c0-1.104.994-2 2-2h4a1 1 0 0 1 1 1c0 .552-.448 1.005-1 1.005H9v4.996ZM13 20H9c-1.006 0-2-.903-2-2.006v-1.996a1 1 0 1 1 2 0v1.996l4 .005a1 1 0 0 1 0 2Z"></path>
                    </svg>
                    {/*<Link to={'/'} className="akaunt__ul-link">Выход</Link>*/}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link to={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-onboarding-target="headerDialog"
           >
              <path fill="currentColor"
                d="M8 2a7 7 0 0 0-7 7v4a6.002 6.002 0 0 0 5 5.917V22a1 1 0 0 0 1.707.707l4-4a1 1 0 0 0-1.414-1.414L8 19.586V18a1 1 0 0 0-1-1 4 4 0 0 1-4-4V9a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v3a5 5 0 0 1-5 5h-1a1 1 0 1 0 0 2h1.5a1 1 0 0 0 .297-.045A7.001 7.001 0 0 0 23 12V9a7 7 0 0 0-7-7H8Z"></path>
              <path fill="currentColor"
                d="M9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
            </svg>
          </Link>

          <Link to={'/'}>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-onboarding-target="headerHelp"
              >
              <path fill="currentColor"
                d="M12 8c-1.114 0-1.86.57-2.03 1.244a1 1 0 0 1-1.94-.488C8.496 6.909 10.298 6 12 6c1.139 0 2.137.344 2.865.984A3.315 3.315 0 0 1 16 9.5c0 1.232-.53 2.07-1.14 2.663-.178.172-.415.332-.66.499-.536.363-1.113.753-1.198 1.349-.077.535-.41.989-1.002.989-.552 0-1-.45-1-1.002.014-1.202.88-1.92 1.728-2.625.255-.212.51-.423.738-.645.32-.31.534-.66.534-1.228 0-.402-.159-.752-.456-1.014C13.24 8.22 12.74 8 12 8Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
              <path fill="currentColor"
                d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"></path>
            </svg>

          </Link>

          <Link to={'/'} id="shlypa">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-onboarding-target="headerLearning"
             >
              <path fill="currentColor"
                d="M11.586 3.09a1 1 0 0 1 .828 0l11 5A1 1 0 0 1 24 9v4a1 1 0 1 1-2 0v-2.447l-2 .91V18c0 .257-.1.506-.278.692-.155.16-.332.3-.512.43a7.828 7.828 0 0 1-1.39.79C16.572 20.472 14.682 21 12 21c-2.682 0-4.572-.527-5.82-1.088a7.826 7.826 0 0 1-1.39-.79c-.18-.13-.359-.27-.513-.431A1.003 1.003 0 0 1 4 18v-3a1 1 0 1 1 2 0v2.528a5.9 5.9 0 0 0 1 .56c.978.44 2.588.912 5 .912s4.022-.473 5-.912a5.93 5.93 0 0 0 1-.56v-5.157l-5.586 2.54a1 1 0 0 1-.828 0l-11-5a1 1 0 0 1 0-1.821l11-5Zm7.02 6.808L20.584 9 12 5.098 3.417 9 12 12.902l6.567-2.985a1.02 1.02 0 0 1 .04-.019ZM23 16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Z"></path>
            </svg>
          </Link>

          <div className="akk2" id="template3" style={{ display: 'none' }}>
            <div className="akaunt1">
              <ul className="akaunt1__ul">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path fill="currentColor"
                      d="M13 12a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm-1-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path>
                    <path fill="currentColor"
                      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"></path>
                  </svg>
                  <Link href="#" className="akaunt1__ul-link">О курсах для продавцов</Link>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path fill="currentColor"
                      d="M14 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.414l-7.293 7.293a1 1 0 0 1-1.414-1.414L18.586 4H15a1 1 0 0 1-1-1Z"></path>
                    <path fill="currentColor"
                      d="M2 7a5 5 0 0 1 5-5h4a1 1 0 1 1 0 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-4a1 1 0 1 1 2 0v4a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7Z"></path>
                  </svg>
                  <Link href="#" className="akaunt1__ul-link">Перейти к обучению</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <nav className="navbar">
        <ul className="navbar__ul">
          <li><Link href="#" className="navbar__link">Главная</Link></li>

          <MENU_1 />
          {/* </li> */}
          {/* </li> */}
          <li id="tovar2">
            <Link href="#" className="navbar__link">Финансы</Link>
            <div id="nav2" className="navbar__pos" style={{ display: 'none' }}>
              <div className="navbar__drow">
                <ul className="navbar__drow-ul">
                  <li><Link href="" className="navbar__drow-ul-li">Список таваров</Link></li>
                  <li><Link href="" className="navbar__drow-ul-link">таваров</Link></li>
                  <li><Link href="" className="navbar__drow-ul-link">таваров</Link></li>
                  <li><Link href="" className="navbar__drow-ul-link">таваров</Link></li>
                </ul>
                <ul className="navbar__drow-ul">
                  <li><Link href="" className="navbar__drow-ul-li">Список таваров</Link></li>
                  <li><Link href="" className="navbar__drow-ul-link">таваров</Link></li>
                  <li><Link href="" className="navbar__drow-ul-link">таваров</Link></li>
                  <li><Link href="" className="navbar__drow-ul-link">таваров</Link></li>
                </ul>

              </div>
            </div>
          </li>
          <MENU_2 />
          <li id="tovar4">
            {/* <JSXContent /> */}
            <Link href="#" className="navbar__link">Продвижение</Link>
            {/* <div id="nav4" className="navbar__pos" style={{display:'none'}}>
              <div className="navbar__drow">
                <ul className="navbar__drow-ul">
                  <li><Link href="" className="navbar__drow-ul-li">Список таваров</Link></li>
                  <li><Link href="" className="navbar__drow-ul-link">таваров</Link></li>
                </ul>
                <ul className="navbar__drow-ul">
                  <li><Link href="" className="navbar__drow-ul-li">Список таваров</Link></li>
                  <li><Link href="" className="navbar__drow-ul-link">таваров</Link></li>
                  <li><Link href="" className="navbar__drow-ul-link">таваров</Link></li>
                </ul>

              </div>
            </div> */}

          </li>
          <li id="tovar5">
            <Link href="#" className="navbar__link">Рейтинги</Link>
            {/* <JSXContent /> */}
            <div id="nav5" className="navbar__pos" style={{ display: 'none' }}>
              <div className="navbar__drow">
                <ul className="navbar__drow-ul">
                  <li><Link href="" className="navbar__drow-ul-link">таваров</Link></li>
                  <li><Link href="" className="navbar__drow-ul-link">таваров</Link></li>
                  <li><Link href="" className="navbar__drow-ul-link">таваров</Link></li>
                </ul>
              </div>
            </div>


          </li>
          <li id="tovar6">
            <MENU_6 />
          </li>
        </ul>
        <hr className="navbar__hr" />
      </nav>
    </header>

  </>)

}

export default NewHeader

