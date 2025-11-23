import { useState } from 'react';
import './ItemCount.css';
import { FaPlus , FaMinus } from "react-icons/fa";
import useCount from '../../hooks/useCount';


const ItemCount = ( { stock} ) => {
    
    const { count, increment, decrement } = useCount({initialState: 1, stock });

    return (
        <div className="item-count">
            <button className="item-count-btn" onClick={decrement}><FaMinus /></button>
            <span className="item-count-number">{count}</span>
            <button className="item-count-btn" onClick={increment}><FaPlus /></button>
        </div>
    )
}

export default ItemCount;