import {useState, useEffect} from "react"

interface SizeProps {
    width: number
    height: number
}

function useWindowSize(){
    const [size, setSize] = useState<SizeProps>({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    const handleResize = () =>{
        setSize({
                width: window.innerWidth,
                height: window.innerHeight,
        })
    }

    useEffect(() => {
       window.addEventListener("resize", handleResize) 
       return () => window.removeEventListener("resize", handleResize) 
    }, [])

    return size
}


export default useWindowSize