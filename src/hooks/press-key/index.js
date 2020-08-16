import { useEffect } from "react";

// react hooks
export default function PressKey(fn) {
    useEffect(() => {
        window.addEventListener("keydown", fn)
        return () => window.removeEventListener("keydown", fn);
    }, [fn])
}