import { useEffect, useState } from "react";

const  useConfig = () => {
    const [basePath, setBasePath] = useState('')

    useEffect(() => {
        if(process.env.NODE_ENV === "production") {
            setBasePath('/my-portfolio')
        }
    }, [])

    return {basePath}
}

export default useConfig;