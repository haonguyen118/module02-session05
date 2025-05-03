import React, { useState, useEffect } from 'react';

export default function Ex02() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Số hiện tại là:` +count);
    }, [count]);

    const handleLoggerNumber = () => {
        setCount(count + 1);
        console.log(`Component da duoc tao`);
        
    };

    return (
        <div>
            <p style={{color: `blue`}}>{count}</p>
            <button style={{backgroundColor: `blue`}} onClick={handleLoggerNumber}>Tăng</button>
        </div>
    );
}
