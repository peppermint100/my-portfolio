import React from 'react'
import useIntersection from '../../customs/animations/useIntersection'
import { BlogPostProps } from '../../customs/types/BlogPostType'
import styles from "./Post.module.css"

const formatString = (target: string, limit: number) => target.substring(0, limit) + "..."

const Post: React.FC<BlogPostProps> = ({ link, title, content, img}) => {
    const fadeIn = useIntersection<HTMLDivElement>({ delay: .5, duration: .8 })
    return (
        <div className={styles.container} {...fadeIn}>
            <section className={styles.imgSection}>
                <img src={img} alt="blogpostimg" />
            </section>
            <section className={styles.postDetailSection}>
                <div className={styles.title}>
                    <a target="_blank" href={link}>{title}</a>
                </div> 
                <p className={styles.content}>{formatString(content, 100)}</p> 
            </section>
        </div>
    )
}

export default Post
