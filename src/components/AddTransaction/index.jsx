import { useContext, useRef, useState } from "react";
import { TContext } from "../../App";
import { MONTH } from "../../utiles/constants";
import style from "../Main/Transactions/Transactions.module.scss";

const AddTransaction = () => {
    const { tstate, 
            setTstate, 
            count, 
            setCount 
            } = useContext(TContext);

    const forms = useRef(null);
    const boolTrue = true;
    const boolFalse = false;

    const [form, setForm ] = useState();

    const formHandler = (e) => {
        e.preventDefault();
        let inputs = forms.current.children;
        console.log([...inputs]);
        let date = new Date;
        let data = [...inputs].reduce((d, item) => {
            if (item.tagName !== "BUTTON"){
                if (item.name === 'category'){
                    return {
                        ...d,
                        [item.name]: item.value.split(' '), 
                    }
                }
                return {
                    ...d,
                    [item.name]: item.value,
                }
            }
            return d;
        }, {});

        data = {  
            ...data,
            id: count,
            time: `${date.getDate()} ${MONTH[date.getMonth()]} ${date.getHours()}:${date.getMinutes()}`,
        }
        setCount(count + 1);
        console.log(tstate);
        if(data.price != '' || data.title != ''){
            setTstate([...tstate, data]);
        }
         

        [...inputs].forEach((item) => {
            item.value = '';
        });

    }

    return (
        <div className={style.main}>
            <div className={style.close}>
                <div className={style.background}>
                    <div className={style.form}>
                        <form ref={forms} action="" onSubmit={formHandler}>
                            <input type="text" name="title" id="" placeholder="Title" className={style.title}/>
                            <input type="text" name="category" placeholder="Categories" id="" className={style.cat}/>
                            <select name="sign" id="">
                                <option defaultValue value={String(boolTrue)}>Доход</option>
                                <option value={String(boolFalse)}>Расход</option>
                            </select>
                            <textarea name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>
                            <input type="number" name="price" id="" placeholder="Price" />
                            <button type="submit">Add</button>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
        
        
    )
}

export default AddTransaction;