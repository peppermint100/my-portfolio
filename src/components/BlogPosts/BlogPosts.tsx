import React from 'react'
import useQuote from '../../customs/quote/useQuote'
import { BlogPostProps } from '../../customs/types/BlogPostType'
import styles from "./BlogPosts.module.css"
import Post from './Post'

const blog_post_1:BlogPostProps = {
    img: "https://miro.medium.com/max/474/0*S4jNS07-b7wsHx83",
    title: "[TS]타입스크립트를 통해 여러 개의 클래스로 확장하기",
    link: "https://medium.com/@krpeppermint100/ts-%EC%97%AC%EB%9F%AC-%EA%B0%9C%EC%9D%98-%ED%81%B4%EB%9E%98%EC%8A%A4%EB%A1%9C-%ED%99%95%EC%9E%A5%ED%95%98%EA%B8%B0-extends-to-multiple-classes-mixin-class-fe6cf212881b"
}
const blog_post_2:BlogPostProps = {
    img: "https://miro.medium.com/max/335/0*1CTtz3jK2YZ-Bb9k",
    title: "[JS]Cafe24에 NodeJS 어플리케이션 배포하기",
    link: "https://medium.com/@krpeppermint100/js-cafe24%EC%97%90-nodejs-%EC%96%B4%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0-f376daeae425"
}
const blog_post_3:BlogPostProps = {
    img: "https://miro.medium.com/max/474/0*WaiLXj4RBC_JIbPM",
    title: "[TS]Apollo Client에서 Reactive Variables로 상태 관리하기",
    link: "https://medium.com/@krpeppermint100/ts-react-apollo-client%EC%97%90%EC%84%9C-reactive-variables%EB%A1%9C-%EC%83%81%ED%83%9C-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0-d204130fea69"
}
const blog_post_4:BlogPostProps = {
    img: "https://miro.medium.com/max/474/0*TPHl8_mPiAM8Ose_",
    title: "[TS]useRef 자세히 알아보기(Typescript, useLayoutEffect)",
    link: "https://medium.com/@krpeppermint100/ts-useref-%EC%9E%90%EC%84%B8%ED%9E%88-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0-typescript-uselayouteffect-c9f1cf02ca5a"
}
const blog_post_5:BlogPostProps = {
    img: "https://miro.medium.com/max/700/0*sGUby4m6PRYfCIPO.jpg",
    title: "[JS]디바운스와 쓰로틀",
    link: "https://medium.com/@krpeppermint100/js-%EB%94%94%EB%B0%94%EC%9A%B4%EC%8A%A4%EC%99%80-%EC%93%B0%EB%A1%9C%ED%8B%80-2b83314ed7c6"
}
const blog_post_6:BlogPostProps = {
    img: "https://miro.medium.com/max/700/0*iupD8x5q54eBL5Lc.jpg",
    title: "[JS]React Hooks로 Carousel Slider 만들기",
    link: "https://medium.com/@krpeppermint100/js-react-hooks%EB%A1%9C-carousel-slider-%EB%A7%8C%EB%93%A4%EA%B8%B0-2e558151bbee"
}


const BlogPosts = () => {
    const heading = useQuote<string>({
        korean: "저의 최근 블로그 글도 확인해보세요.",
        english: "Check out my recent posts"
    })
    const description = useQuote<string>({
        korean: "저는 제가 배운 것들 중 유용하면서 잊어버리고 싶지 않은 부분들을 정리해놓습니다. 예를 들면 정규 표현식 같은 부분은 가끔 사용되지만 중요하고 잊어버리기 쉬운 부분 중 하나입니다. 그래서 저는 잊어버리기 위해 작성하는 블로그라는 이름으로 글을 씁니다. 언젠가 영어 작문능력이 괜찮아진다면 영어로도 글을 써보고 싶습니다.",
        english: "I write useful things that I learn but easy to forget, like Regular expression, always google how to write regex code everytime we use them. so my blog writing's slogan is \"write to forget\". In anytime that get better at writing english, I would definately write some english post.",
    })

    return (
        <div className={styles.container}>
            <section className={styles.blogPostsIntro}>
                <div className={styles.heading}>{heading}</div>
                <p className={styles.description}>{description}</p>
            </section>
            <section className={styles.postContainer}>
               <Post {...blog_post_1} /> 
               <Post {...blog_post_4} /> 
               <Post {...blog_post_3} /> 
               <Post {...blog_post_2} /> 
               <Post {...blog_post_5} /> 
               <Post {...blog_post_6} /> 
            </section>
        </div>
    )
}

export default BlogPosts
