import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { financeRouters } from "./routes";
import style from "./App.module.scss"

export const TContext = createContext(null);


function App() {

  const [ tstate, setTstate ] = useState([]); //Общее хранилище для всех транзакций
  const [ count, setCount ] = useState(0);      //в виде id (или в иде генератора черещ рекрсию)

  return (
    <TContext.Provider value={{
        tstate,
        setTstate,
        count,
        setCount
      }}>
        <div className="App">
        <Routes>
        {financeRouters.map(({path, Element}) =>{  //деструктуризация
          return (<Route key={path} path={path} element={<Element/>}/>)
        })};
      </Routes>
    </div>
    </TContext.Provider>
  );
}

export default App;
