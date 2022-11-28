import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Store from "./store";
import Charts from "./pages/Charts";
import Answers from "./pages/Answers";
import Patterns from "./pages/Patterns";
import Tables from "./pages/Tables";
import TableMiddleAnswer from "./pages/TableMiddleAnswer";
import Test from "./pages/Test";
import AnswersPerId from "./pages/AnswersPerId";
import New from "./pages/New";

const store = new Store()
export const Context = createContext({
  store
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/new",
    element: <New />,
  },
  {
    path: "/charts",
    element: <Charts />,
  },
  {
    path: "/patterns",
    element: <Patterns />,
  },
  {
    path: "/answers",
    element: <Answers />,
  },
  {
    path: "/response_manager/:id",
    element: <AnswersPerId />,
  },
  {
    path: "/template_text",
    element: <Tables />,
  },
  {
    path: "/template_message",
    element: <TableMiddleAnswer />,
  },
  {
    path: "/test",
    element: <Test />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{store}}>
      <RouterProvider router={router} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
