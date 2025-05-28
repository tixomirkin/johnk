import { useEffect } from "react";

const useLockScroll = (isLocked: boolean) => {
    useEffect(() => {
        if (isLocked) {
            document.body.classList.add("body-lock");
        } else {
            document.body.classList.remove("body-lock");
        }

        return () => {
            document.body.classList.remove("body-lock");
        };
    }, [isLocked]);
};

export default useLockScroll;