import { useContext, useState, useEffect,useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { TContext } from "../../../App";
import style from "./Transaction.module.scss";
import edit from "../../../img/icon1.svg";
import remove from "../../../img/icon2.svg";



const Transaction = () => {
    //const [ data, setData ] = useState({});
    const { tstate, setTstate } = useContext(TContext);

    let {id} = useParams();

    let editBtn = useRef();
    let transactionMain = useRef();
    let titleEdited = useRef();
    let categoryEdited = useRef();
    let descEdited = useRef();
    let priceEdited = useRef();
    
    let type = new Boolean;
    console.log(tstate);
    let item = tstate.find(item => item.id === +id.slice(1));

    const {
        time,
        category,
        title,
        description,
        sign,
        price
    } = item;  

    item.sign === "true" ? type = true  : type = false;

    const removeItem = () => {
        if (window.confirm('Delete the transaction?')){
            let index = tstate.indexOf(item);
            if (~index){
                tstate.splice(index, 1);
                console.log(tstate);
                setTstate(tstate);
            }
        }
        return  
    }
    const editItem = () => {
        if(editBtn.current.innerHTML === 'Edit'){
            editBtn.current.innerHTML = 'Save';
            transactionMain.current.contentEditable = 'true';
        }else{
            let index = tstate.indexOf(item);
            if (~index){
                console.log(item);
                item.title = titleEdited.current.innerHTML;
                item.category = categoryEdited.current.innerText.split(' ');
                item.description = descEdited.current.innerHTML;
                item.price = priceEdited.current.innerHTML.slice(1, -1);
                item.sign = priceEdited.current.innerHTML[0];
                priceEdited.current.innerHTML[0] === '+' ? item.sign = 'true' : item.sign = 'false';
                tstate[index] = item;
                setTstate(tstate);
            }
            editBtn.current.innerHTML = 'Edit';
            transactionMain.current.contentEditable = 'false';  
        }       
    }
    
    return (
        <div className={style.transaction}>
            <div className={style.title}>
                <Link to={'/transactions'}>{'<'}</Link>
                <div className={style.time}>{time}</div>
            </div>
            <div ref={transactionMain} className={style.main}>
                <div ref={categoryEdited} className={style.cat}>
                    {category.map(cat => <span key={cat}> {cat}</span>)}
                </div>
                <h2 ref={titleEdited} className={style.title}>{title}</h2>
                <p ref={descEdited} className={style.desc}>{description}</p>
                <p ref={priceEdited} className={style.price}>
                    {type ? '+' : '-'}{price}$ 
                </p>
                <div className={style.buttons}>
                    <button onClick={editItem} ref={editBtn} className={style.edit}><img src={edit} alt="edit" /></button>
                    <button onClick={removeItem} className={style.remove}><img src={remove} alt="delete" /></button>
                </div>
            </div>
        </div>
    )
}
export default Transaction;