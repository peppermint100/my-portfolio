import { useRef, useEffect, useLayoutEffect } from "react"

interface FadeInProps {
    slide?: boolean
    delay: number
    duration: number
}

function useIntersection<T extends { style: any }>({ slide, delay, duration }: FadeInProps){
    const ref = useRef<T>(null)
    const style = { opacity: "0"}

    useEffect(() => {
        const { current } = ref as any 
        const observer = new IntersectionObserver(( entries ) => {
            console.log(entries)
            entries.forEach((entry:IntersectionObserverEntry) =>{
            if(current && (entry.isIntersecting || entry.intersectionRatio > 0) && !slide){ // entry.isIntersecting
               current.style.transition=`opacity ${duration}s ${delay}s ease`    
               current.style.opacity="1"
            }else if(current && (entry.isIntersecting || entry.intersectionRatio > 0) && slide){
               current.style.transition=`opacity ${duration}s ${delay}s ease, transform ${duration}s ${delay}s ease`    
               current.style.opacity="1"
               current.style.transform="translateY(0)"
            }
        })
    })

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