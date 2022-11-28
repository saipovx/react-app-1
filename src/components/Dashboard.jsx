import React from 'react'
import style from '../styles/dashboard.module.css'

function Dashboard() {

  return (
    <main>
      <h1>Панель управления</h1>

      {/*<div className="date">*/}
      {/*  <input type="date"/>*/}
      {/*</div>*/}

      <div className={style.insights}>
        <div className={style.sales}>
          <span className="material-icons-sharp">analytics</span>
          <div className={style.middle}>
            <div className="left">
              <h3>Total Sales</h3>
              <h1>$25,024</h1>
            </div>
            <div className={style.progress}>
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className={style.number}>
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        <div className={style.expenses}>
          <span className="material-icons-sharp">bar_chart</span>
          <div className={style.middle}>
            <div className="left">
              <h3>Total Expenses</h3>
              <h1>$14,160</h1>
            </div>
            <div className={style.progress}>
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className={style.number}>
                <p>62%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        <div className={style.income}>
          <span className="material-icons-sharp">stacked_line_chart</span>
          <div className={style.middle}>
            <div className="left">
              <h3>Total Income</h3>
              <h1>$10,864</h1>
            </div>
            <div className={style.progress}>
              <svg>
                <circle cx="38" cy="38" r="36"></circle>
              </svg>
              <div className={style.number}>
                <p>44%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>

      </div>

      <div className={style.recentOrders}>
        <h2>Recent Orders</h2>
        <table>
          <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Number</th>
            <th>Payment</th>
            <th>Status</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          </tbody>
        </table>

        <a href="">Show All</a>
      </div>
    </main>
  )
}

export default Dashboard