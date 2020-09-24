import React from 'react'
import useQuote from '../../customs/quote/useQuote'
import styles from "./BlogPosts.module.css"
import Post from './Post'

const BlogPosts = () => {
    const heading = useQuote<string>({
        korean: "저의 최근 블로그 글도 확인해보세요.",
        english: "Check out my recent posts"
    })
    const description = useQuote<string>({
        korean: "Proident officia commodo commodo nisi eiusmod quis nisi ea elit velit aliquip. Velit ullamco deserunt sint nisi duis nisi ut velit id minim velit. Excepteur incididunt labore tempor ut veniam velit ad excepteur anim sit. Ea dolore est nostrud ullamco cillum. Eu proident nostrud qui ea aute dolore qui. In velit minim culpa enim sunt dolor ipsum excepteur laborum. Et sint est ad consequat aute ea mollit sunt commodo sunt eu dolor culpa.",
        english: "Proident officia commodo commodo nisi eiusmod quis nisi ea elit velit aliquip. Velit ullamco deserunt sint nisi duis nisi ut velit id minim velit. Excepteur incididunt labore tempor ut veniam velit ad excepteur anim sit. Ea dolore est nostrud ullamco cillum. Eu proident nostrud qui ea aute dolore qui. In velit minim culpa enim sunt dolor ipsum excepteur laborum. Et sint est ad consequat aute ea mollit sunt commodo sunt eu dolor culpa.",
    })

    return (
        <div className={styles.container}>
            <section className={styles.blogPostsIntro}>
                <div className={styles.heading}>{heading}</div>
                <p className={styles.description}>{description}</p>
            </section>
            <section className={styles.postContainer}>
               <Post /> 
               <Post /> 
               <Post /> 
               <Post /> 
               <Post /> 
               <Post /> 
            </section>
        </div>
    )
}

export default BlogPosts
