import { useEffect, useState } from "react";

const AnimatedCounter = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(target.replace("+", "")); // removes + sign
        if (start === end) return;

        let totalMilSec = duration;
        let incrementTime = Math.floor(totalMilSec / end);

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [target, duration]);

    return (
        <span>{count}+</span>
    );
};

export default AnimatedCounter;
