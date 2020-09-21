import { useRef, useEffect } from "react"

interface FadeInProps {
    delay: number
    duration: number
}

function useIntersection<T extends { style: any }>({ delay, duration }: FadeInProps){
    const ref = useRef<T>(null)

    const observer = new IntersectionObserver(( entries ) => {
        entries.forEach((entry:IntersectionObserverEntry) =>{
            const { current } = ref
            if(current && entry.intersectionRatio > 0){ // entry.isIntersecting
               current.style.transition=`opacity ${duration}s ${delay}s ease` 
               current.style.opacity="1"
            observer.disconnect()
            }
        })
    })

    const style = {
        opacity: 0
    }

    useEffect(() => {
        const { current } = ref as any 
        if(current){
            observer.observe(current) 
        }
        return () => {
            observer.disconnect()
        }
    })
    return { ref, style }
}

export default useIntersection