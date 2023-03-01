import { useNavigate } from "react-router";
import { useContext } from "react";
import { TContext } from "../../App";
import style from "./Main.module.scss";
import img from "../../img/illus.svg"
import ellipse from "../../img/Ellipsemain.svg";


const Main = () => {
    const  {tstate, setTstate } = useContext(TContext);
    const navigate = useNavigate();
    let balance = null;

    const getBalance = () => {
        if (tstate.length <= 0){
            balance = 0;
        }else{
            let incomeItems = tstate.filter((item) => item.sign === 'true');
            let income = incomeItems.reduce((acc, item) => acc + +item.price, 0);

            let expenseItems = tstate.filter((item) => item.sign === 'false');
            let expense = expenseItems.reduce((acc, item) => acc + +item.price, 0);

            balance = income - expense;
        }
        return balance;
    }
    balance = getBalance();
    console.log(balance);


    const toTransactions = () => {
        navigate('/transactions');
    }

    return (
        <div className={style.main}>
            <img className={style.ellipse} src={ellipse} alt="ellipse" />
            <div className={style.img}><img src={img} alt="balance" /></div>
            <div className={style.balanceText}>
                <p>Your balance</p>
                <h2 className={style.balance}><span>$ </span>{balance}</h2>
            </div>
            <button onClick={toTransactions} className={style.getTransaction}>All transactions</button>
        </div>
    )
}

export default Main;