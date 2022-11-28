import style from "../styles/Important_information.module.css";
import profile_one from "../images/profile-1.jpg";
import React from "react";


function Top() {
  const gg = ()=>{
    const themeToggler = document.querySelector(".theme-toggler");
    console.log(document.body.classList.contains('dark-theme-variables'))
    document.body.classList.toggle('dark-theme-variables');
    // установить локал сторадж для темы
    if (document.body.classList.contains('dark-theme-variables')) {
      localStorage.setItem('theme', 'dark');
    }
    else {
      localStorage.setItem('theme', 'light');
    }
    // themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    // themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
  }
  return (
    <>
      <div className={style.top}>
        <button id="menu-btn">
          <span className="material-icons-sharp">menu</span>
        </button>
        <div className={style.themeToggler} onClick={gg}>
          <span className="material-icons-sharp active">light_mode</span>
          <span className="material-icons-sharp">dark_mode</span>
        </div>
        <div className={style.profile}>
          <div className={style.info}>
            <p>Hey, <b>Daniel</b></p>
            <small className="text-muted">Admin</small>
          </div>
          <div className={style.profilePhoto}>
            <img alt="профиль" src={profile_one}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Top