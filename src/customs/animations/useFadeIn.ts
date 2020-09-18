import {useRef, useEffect} from "react"

interface FadeInProps {
    delay: number
}

function useFadeIn<T extends { style: any }>({ delay } : FadeInProps){
    const ref = useRef<T>(null)
    const style = {
        opacity: 0
    }
    
    useEffect(() => {
        const { current } = ref
        if(current){
           current.style.transition = `opacity .4s ${delay}s ease-in` 
           current.style.opacity = "1" 
        }
    })

    return { ref, style}
}

export default useFadeIn