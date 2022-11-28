

import React from 'react'
import profile_one from '../images/profile-1.jpg'
import profile_two from '../images/profile-2.jpg'
import profile_three from '../images/profile-3.jpg'
import profile_four from '../images/profile-4.jpg'
import style from '../styles/Important_information.module.css'
import Top from "./Top";

function Important_information() {


  return (
    <div className={style.right}>
      <Top/>
      <div className={style.recentUpdates}>
        <h2>Recent Updates</h2>
        <div className={style.updates}>
          <div className={style.update}>
            <div className={style.profilePhoto}>
              <img alt="профиль" src={profile_two}/>
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of Night lion tech GPS
                drone.
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div className={style.update}>
            <div className={style.profilePhoto}>
              <img alt="профиль" src={profile_three}/>
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of Night lion tech GPS
                drone.
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div className={style.update}>
            <div className={style.profilePhoto}>
              <img alt="профиль" src={profile_four}/>
            </div>
            <div className="message">
              <p>
                <b>Mike Tyson</b> received his order of Night lion tech GPS
                drone.
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Important_information


// <div className={style.salesAnalytics}>
//   <h2>Sales Analytics</h2>
// <div className={`${style.item} ${style.online}`}>
//   <div className={style.icon}>
//     <span className="material-icons-sharp">shopping_cart</span>
//   </div>
//   <div className="right">
//     <div className="info">
//       <h3>ONLINE ORDERS</h3>
//       <small className="text-muted">Last 24 Hours</small>
//     </div>
//     <h5 className="success">+39%</h5>
//     <h3>3849</h3>
//   </div>
// </div>
// <div className="item offline">
//   <div className="icon">
//     <span className="material-icons-sharp">local_mall</span>
//   </div>
//   <div className="right">
//     <div className="info">
//       <h3>OFFLINE ORDERS</h3>
//       <small className="text-muted">Last 24 Hours</small>
//     </div>
//     <h5 className="danger">-17%</h5>
//     <h3>1100</h3>
//   </div>
// </div>
// <div className="item customers">
//   <div className="icon">
//     <span className="material-icons-sharp">person</span>
//   </div>
//   <div className="right">
//     <div className="info">
//       <h3>NEW CUSTOMERS</h3>
//       <small className="text-muted">Last 24 Hours</small>
//     </div>
//     <h5 className="success">+25%</h5>
//     <h3>849</h3>
//   </div>
// </div>
// <div className="item add-product">
//   <div>
//     <span className="material-icons-sharp">add</span>
//     <h3>Add Product</h3>
//   </div>
// </div>
// </div>