import { useState, useContext } from "react";
import { TContext } from "../../../App";
import { Link, useParams } from "react-router-dom";
import style from "./Transactions.module.scss";

const AddPlates = () => {
    const { tstate } = useContext(TContext);
    let item = {};
    let type = new Boolean;

    item = tstate.map(({title, price, id, sign, time}) => {
    
    type = true ? sign === "true" : type = false;

        return (
            <div className={style.elementContainer}>
                <Link to={`/transactions/:${id}`}>
                    <div className={style.elementWrapper}>
                        <h2 className={style.title}>{title}</h2>
                        <p className={style.date}>{time}</p> 
                    </div>
                        <div className={style.price}>
                            {type ? '+' : '-'}$ {price}
                        </div>
                </Link>
                
            </div>
        )
    })
    console.log(item);
    return item; 
}

export default AddPlates;

