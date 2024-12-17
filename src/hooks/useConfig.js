"use client"
import { useEffect, useState } from "react";

const  useConfig = () => {
    const [basePath, setBasePath] = useState('')

    useEffect(() => {
        if(process.env.NODE_ENV === "production") {
            setBasePath('/my-portfolio')
        }
        setBasePath('')
    }, [])

    return {basePath}
}

export default useConfig;