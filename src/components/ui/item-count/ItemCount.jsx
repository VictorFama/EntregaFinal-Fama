import './ItemCount.css';
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { FaPlus , FaMinus } from "react-icons/fa";

const ItemCount = ( { count, increment, decrement} ) => {
    const { dark } = useContext(ThemeContext);

    return (
        <div className={`item-count ${dark ? "dark" : "light"}`}>
            <button className="item-count-btn" onClick={decrement}><FaMinus /></button>
            <span className="item-count-number">{count}</span>
            <button className="item-count-btn" onClick={increment}><FaPlus /></button>
        </div>
    )
}

export default ItemCount;