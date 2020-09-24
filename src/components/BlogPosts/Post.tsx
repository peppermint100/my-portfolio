import React from 'react'
import useIntersection from '../../customs/animations/useIntersection'
import { BlogPostProps } from '../../customs/types/BlogPostType'
import styles from "./Post.module.css"

const formatString = (target: string, limit: number) => target.substring(0, limit) + "..."

const Post: React.FC<BlogPostProps> = ({ link, title, content, img}) => {
    const fadeIn = useIntersection<HTMLDivElement>({ delay: .5, duration: .8 })

    const toPage = () => {
        window.open(link, "_blank")
    }

    return (
        <div className={styles.container} {...fadeIn}>
            <section onClick={toPage} className={styles.imgSection}>
                <div className={styles.curtain}></div>
                <img src={img} alt="blogpostimg" />
                <div className={styles.title}>
                    <a target="_blank" href={link}>{title}</a>
                </div>
            </section>
        </div>
    )
}

export default Post
