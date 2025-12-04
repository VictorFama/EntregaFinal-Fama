import { useState } from "react";


const useCount = ({initialState=1, stock}) => {
    const [count, setCount] = useState(initialState);

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
    return {count, increment, decrement};
}

export default useCount;