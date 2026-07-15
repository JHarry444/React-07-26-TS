import { useState } from "react";

function Counter() {
    // useState is a react hook, hooks are functions that let you "hook into" react features
    const [count, setCount] = useState(0);


    return (
        <>
            <h3>Counter</h3>
            <input type="number" readOnly value={count} />
            <button onClick={() => setCount(count + 1)}>+</button>
        </>

    );
}

export default Counter;