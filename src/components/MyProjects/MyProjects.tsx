import React from 'react'
import useQuote from '../../customs/quote/useQuote'
import styles from "./MyProjects.module.css"
import ProjectDetail from './ProjectDetail'
import projectImg from "./../../../assets/img/2.jpg"
import { ProjectDetailProps } from '../../customs/types/StackType'

const MyProjects = () => {
    const detail_test:ProjectDetailProps = {
       img: projectImg,
       title: "My First Project",
       description: "It was my first project with html, css, javascript I had lots of fun making this",
       stacks: [{id:1, name: "HTML", color: "red"}, { id:2, name: "CSS", color: "green"}], 
       links: [ { id: 1, content: "Code in Github", link: "https://www.naver.com"}, { id:2, content: "Code in Github", link: "https://www.naver.com"}]
    }    

    const projectsHelperText = useQuote<string>({
        korean: "Ipsum velit elit non minim amet enim sint incididunt sint et ad aute. Est sunt reprehenderit incididunt laboris ex laboris cupidatat. Tempor sunt velit officia ad. Minim ullamco in sint est pariatur anim ad quis nulla adipisicing velit cillum. Duis excepteur esse occaecat nulla cillum sunt enim ipsum. Ipsum reprehenderit tempor officia laboris ad cillum ex dolore do tempor fugiat occaecat ad. Occaecat anim ad enim tempor. Non ullamco aute et nulla ipsum culpa.",
        english: "Id quis ea enim est est excepteur reprehenderit. Commodo eu sint adipisicing laborum minim deserunt amet enim duis sunt duis ipsum irure. Elit sint enim eiusmod sit. Sint consequat commodo in enim enim. Exercitation velit tempor commodo ullamco exercitation incididunt voluptate irure est duis sint labore. Minim est nostrud ullamco excepteur non dolor veniam. Eu deserunt irure id anim incididunt duis tempor deserunt ad duis fugiat proident quis ut. Sunt cupidatat minim non incididunt id laboris duis ad amet exercitation nulla. Incididunt esse esse sint officia ut minim velit cupidatat dolor aliquip ex excepteur elit. Cupidatat adipisicing Lorem labore consequat pariatur do consequat consectetur."
    })

    return (
        <div className={styles.container}>
            <section className={styles.projectsIntro}>
                <div className={styles.projectsHeading}>My Side Projects</div>
                <div className={styles.projectsHelperText}>{projectsHelperText}</div>
            </section>
            <section className={styles.projectsContainer}>
                <ProjectDetail {...detail_test} />
                <ProjectDetail {...detail_test}/>
                <ProjectDetail {...detail_test}/>
            </section>
        </div>
    )
}

export default MyProjects
