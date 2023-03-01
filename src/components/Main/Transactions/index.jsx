import React from 'react';
import { useContext, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddTransaction from '../../AddTransaction';
import { TContext } from '../../../App';
import AddPlates from './addPlates';
import style from "./Transactions.module.scss";
import ellipse from "../../../img/Ellipse2.svg";

const Transactions = () => {
    const [ form, setForm ] = useState(false);
    const tContainer = useRef(null);
    const { tstate, setTstate } = useContext(TContext);

    return (
        <div className={style.transactions}>
            <img className={style.ellipse} src={ellipse} alt="ellipse" />
            <div className={style.header}>
                <Link to={'/'}>{'<'}</Link>
                <h2>Transactions</h2>
            </div>
            <div ref={tContainer} className={style.tContainer}>
                {tstate.length > 0 ? <AddPlates/> : null}
            </div>
            <button onClick={ () => setForm(!form) } className={style.add}>+</button>
            { form ? 
                <AddTransaction/>
             : null } 
        </div>
    )
}

export default Transactions;