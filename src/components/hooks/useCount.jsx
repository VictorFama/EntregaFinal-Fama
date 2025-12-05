import { useState, useEffect } from "react";


const useCount = ({initialState=1, stock}) => {
    const [count, setCount] = useState(initialState);

    useEffect(() => {
        if (stock <= 0) {
            setCount(0);
            return;
            }
            if (count > stock) {
                setCount(stock);
            }

            if (count < 1) {
                setCount(1);
            }
        }, [stock]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const reset = () => {
        if (stock > 0) {
            setCount(1);
        } else {
            setCount(0);
        }
        };
    return {count, increment, decrement, reset};
}

export default useCount;