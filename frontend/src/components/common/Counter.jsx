import { useEffect, useState } from "react";

function Counter({ end }) {

    const [count, setCount] = useState(0);

    useEffect(() => {

        let current = 0;

        const increment = Math.ceil(end / 100);

        const timer = setInterval(() => {

            current += increment;

            if (current >= end) {

                current = end;

                clearInterval(timer);

            }

            setCount(current);

        }, 20);

        return () => clearInterval(timer);

    }, [end]);

    return count;

}

export default Counter;