import React, {useEffect, useState} from 'react'
import style from '../styles/chartDashboard.module.css'
import { Line, Pie, Bar } from "react-chartjs-2";
import 'chart.js/auto';
// import Top from "./Top";
// import Important_information from "./Important_information";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      lineTension: 0.3
    },
    {
      label: "test",
      data: [133, 153, 185, 141, 144, 165],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      lineTension: 0.3
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
      lineTension: 0.3
    }
  ]
};

const legend = {
  display: true,
  position: "top",
  labels: {
    fontColor: "#323130",
    fontSize: 14
  },
  // tooltips: {
  //   mode: 'x-axis'
  // },
};

const options = {
  // showAllTooltips: true,
  title: {
    display: true,
    text: "Chart Title"
  },
  interaction: {
    mode: 'index'
  },
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    ],
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    tooltip: {
      intersect: false
    }
  }
};
function ChartDashboard() {
  // const [data, setData] = useState()
  useEffect(()=>{
    console.log('chart')
  }, [])
  const pieChartData = {
    labels: ["Без ответа", "Отвечены"],
    datasets: [{
      data: [212, 532],
      // label: "Infected People",
      backgroundColor: ["rgba(103,72,178,0.51)", "rgb(57,57,206)"],
      hoverBackgroundColor: ["rgba(23,80,0,0.66)", "rgba(0,51,80,0.62)"]
    }]
  };
  const barChartData = {
    labels: ["Без ответа", "Отвечены"],
    datasets: [
      {
        data: [123, 0],
        label: "Без ответа",
        borderColor: "#3333ff",
        backgroundColor: ["rgba(56,38,98,0.51)", "rgb(57,57,206)"],
        hoverBackgroundColor: ["rgba(23,80,0,0.66)", "rgba(0,51,80,0.62)"],
        fill: true
      },
      {
        data: [0, 421],
        label: "Отвечены",
        borderColor: "#515fff",
        backgroundColor: ["rgba(56,38,98,0.51)", "rgb(70,170,241)"],
        hoverBackgroundColor: ["rgba(23,80,0,0.66)", "rgba(0,51,80,0.62)"],
        fill: true
      }
    ]
  };
  const barChartData2 = {
    labels: ["Когда...", "Почему...", "Другое"],
    datasets: [{
      data: [212, 532, 30],
      // label: "Infected People",
      backgroundColor: ["rgba(72,178,130,0.51)", "rgb(169,206,57)", "rgb(112,112,112)"],
      hoverBackgroundColor: ["rgba(23,80,0,0.66)", "rgba(0,51,80,0.62)", "rgb(112,112,112)"]
    }]
  };
  return (<>

    <div className={style.chartDashboard}>
      <div>
        <h1>Графики</h1>
        <h2>Аналитика</h2>
      </div>
      <div className={style.filter}>
        <button>Сегодня</button>
        <button>Вчера</button>
        <button>Неделя</button>
        <button>Месяц</button>
        <button>Год</button>
      </div>
      <div style={{
        // height: 300,
        width: 900,
        // maxHeight: 700,
        // maxWidth: 900
      }}>
        <Line data={data}
              legend={legend}
              options={options}
              height={100} width={300}
        />
      </div>
      <div className="ansversStats" style={{display: 'flex'}}>
        <div className="pie" style={{ marginTop: 50, width: 300}}>
          <Pie
            type="pie"
            width={50}
            height={50}
            options={{
              title: {
                display: true,
                text: "Data",
                fontSize: 15
              },
              legend: {
                display: true, //Is the legend shown?
                position: "top" //Position of the legend.
              }
            }}
            data={pieChartData}
          />
        </div>
        <div className="pie2" style={{ marginTop: 50 , width: 300}}>
          <Pie
            type="pie"
            width={50}
            height={50}
            options={{
              title: {
                display: true,
                text: "Data",
                fontSize: 15
              },
              legend: {
                display: true, //Is the legend shown?
                position: "top" //Position of the legend.
              }
            }}
            data={barChartData2}
          />
        </div>
        <div>
          <Bar
            type="bar"
            width={300}
            // height={150}
            options={{
              title: {
                display: true,
                text: "Самый популярный вопрос",
                fontSize: 15
              },
              legend: {
                display: false, //Is the legend shown?
                position: "bottom" //Position of the legend.
              }
            }}
            data={barChartData}
          />
        </div>
      </div>

    </div>

  </>)
}
export default ChartDashboard