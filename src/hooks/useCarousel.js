import { useEffect, useState, useRef } from "react"; 

export function useCarousel(totalItems) {
    const i = useRef(0); 
    const j = useRef(1); 
    const [rotate, setRotate] = useState(0); 
    const [isPaused, setIsPaused] = useState(false); 
    const rotationAngle = parseInt(360 / totalItems)

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log(totalItems)
            console.log(isPaused)
            if (!isPaused) {
                i.current += 1
                setRotate(i.current * rotationAngle);
                j.current = (j.current === totalItems ? 1 : j.current + 1);

                console.log(`i: ${i.current}, rotate: ${rotate}, j: ${j.current}`);
            }
            else {
                clearInterval(intervalId)
                console.log(`i: ${i.current}, rotate: ${rotate}, j: ${j.current}`);

            }

        }, 5000);

        return () => clearInterval(intervalId); 
    }, [isPaused, rotate, j.current]); 

    const handleMauseEnter = () => {
        setIsPaused(true)
    }

    const handleMauseLeave = () => {
        setIsPaused(false)
    }

    const handleControlClick = (index) => {
        setIsPaused(true)
        j.current = index
        i.current = index - 1
        setRotate((i.current - j.current + index) * 45)
    }

    return {
        rotate,
        j,
        handleMauseEnter,
        handleMauseLeave,
        handleControlClick
    };
}
