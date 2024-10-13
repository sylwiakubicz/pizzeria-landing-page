import { useEffect, useState } from "react";

export function useCheckOrderAvailability() {
    const [availabilityMessage, setAvailabilityMessage] = useState("");

    useEffect(() => {
        const now = new Date();
        const minutes = now.getMinutes();

        const checkAvailability = () => {
            const dayOfWeek = now.getDay();
            const currentHour = now.getHours();
            
            if (dayOfWeek === 0) {
                if (currentHour >= 12 && currentHour < 19) {
                    setAvailabilityMessage("Order Now");
                } else {
                    setAvailabilityMessage("We're closed. See you tomorrow!");
                }
            } else if (dayOfWeek >= 1 && dayOfWeek <= 4) {
                if (currentHour >= 11 && currentHour < 22) {
                    setAvailabilityMessage("Order Now");
                } else {
                    setAvailabilityMessage("We're closed. See you tomorrow!");
                }
            } else {
                if (currentHour >= 11 && currentHour < 23) {
                    setAvailabilityMessage("Order Now");
                } else {
                    setAvailabilityMessage("We're closed. See you tomorrow!");
                }
            }
        };

        checkAvailability();

        const intervalId = setInterval(checkAvailability, (60 - minutes) * 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);

    return availabilityMessage;
}
