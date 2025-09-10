import {clsx} from "clsx";
import { twMerge } from "tailwind-merge";
import {useRef, useEffect} from "react";

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));  
};

