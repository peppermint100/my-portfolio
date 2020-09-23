import { useRef, useEffect } from "react"

interface FadeInProps {
    delay: number
    duration: number
    direction? : boolean
}

function useIntersection<T extends { style: any }>({ delay, duration, direction }: FadeInProps){
    const ref = useRef<T>(null)

    const observer = new IntersectionObserver(( entries ) => {
        entries.forEach((entry:IntersectionObserverEntry) =>{
            const { current } = ref
            if(current && entry.intersectionRatio > 0){ // entry.isIntersecting
               current.style.transition=`all ${duration}s ${delay}s ease` 
               current.style.opacity="1"
               if(direction){
                   current.style.transform = "translate(0, 0)"
               }
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