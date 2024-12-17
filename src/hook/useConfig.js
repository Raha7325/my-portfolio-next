import { useEffect, useState } from "react";

const  useConfig = () => {
    const [basePath, setBasePath] = useState('')

    useEffect(() => {
        setBasePath(process.env.NEXT_PUBLIC_BASE_PATH || '')
    }, [])

    return {basePath}
}

export default useConfig;