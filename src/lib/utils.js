import {clsx} from "clsx";
import { twMerge } from "tailwind-merge";
import {useRef, useEffect} from "react";

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));  
};

export function useFadeInOnView(){
    const ref = useRef();
    useEffect(() => {
        const el = ref.current;
        if(!el) return;
        const observer = new window.IntersectionObserver(
            ([entry]) =>{
                if(entry.isIntersecting){
                    el.classList.add("animate-fade-in");
                }
            }, {threshold:0.1}
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return ref;
}