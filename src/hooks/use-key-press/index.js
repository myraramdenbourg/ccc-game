import { useEffect } from "react";


// react hooks
export default function useKeyPress(fn) {
    useEffect(() => {
        window.addEventListener("keydown", fn)
        return () => window.removeEventListener("keydown", fn);
    }, [fn])
}