import React, { useState } from 'react';
import "./CounterStyle.css";
const Counter = () => {
    //stale state
    const [count, setCount] = useState(0);
    const handleIncreasement = () => {
        setTimeout(function delay() {
            setCount((count) => count + 1);
        }, 1000)
    }
    return (
        <div className="handle" onClick={handleIncreasement}>
            Increasement {count}
        </div>
    );
};

export default Counter;