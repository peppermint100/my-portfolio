import React from 'react'
import useQuote from '../../customs/quote/useQuote'
import { BlogPostProps } from '../../customs/types/BlogPostType'
import styles from "./BlogPosts.module.css"
import Post from './Post'

const blog_post_1:BlogPostProps = {
    img: "https://miro.medium.com/max/474/0*S4jNS07-b7wsHx83",
    title: "[TS]타입스크립트를 통해 여러 개의 클래스로 확장하기",
    content: "객체지향 프로그래밍에서 가장 중심이 되는 것은 클래스입니다. 그리고 클래스의 핵심 기능 중 하나는 상속 입니다. 상속을 통해 코드의 재사용성을 끌어올림으로서 효율적이고 보수가 편해지는 코드 작성이 가능합니다. 하지만 때때로 우리는 여러개의 클래스로 상속을 통한 확장을 할 필요가 있습니다. 아래 예시를 잘 읽고 타입스크립트를 통해 여러개의 클래스로 확장하는 방법에 대해 알아보겠습니다.",
    link: "https://medium.com/@krpeppermint100/ts-%EC%97%AC%EB%9F%AC-%EA%B0%9C%EC%9D%98-%ED%81%B4%EB%9E%98%EC%8A%A4%EB%A1%9C-%ED%99%95%EC%9E%A5%ED%95%98%EA%B8%B0-extends-to-multiple-classes-mixin-class-fe6cf212881b"
}

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
               <Post {...blog_post_1} /> 
               <Post {...blog_post_1} /> 
               <Post {...blog_post_1} /> 
               <Post {...blog_post_1} /> 
               <Post {...blog_post_1} /> 
               <Post {...blog_post_1} /> 
            </section>
        </div>
    )
}

export default BlogPosts
