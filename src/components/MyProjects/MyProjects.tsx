import React from 'react'
import useQuote from '../../customs/quote/useQuote'
import styles from "./MyProjects.module.css"
import ProjectDetail from './ProjectDetail'
import { ProjectDetailProps } from '../../customs/types/StackType'


import covidProjectImg from "./../../../assets/img/covid19.PNG"
import thisProjectImg from "./../../../assets/img/thisproject.PNG"
import YTTImg from "./../../../assets/img/youtubetogether.PNG"
import projectWantedImg from "./../../../assets/img/projectwanted.PNG"

const Color = {
    html: "#c0392b",
    css: "#27ae60",
    react: "#2980b9",
    typescript: "#3498db",
    redux: "#8e44ad",
    formik: "#273c75",
    nodejs: "#6ab04c",
    socketio: "#95afc0",
    styledcomponents: "#be2edd",
    typeorm: "#1B1464",
    webpack: "#009432",
    chartjs: "#B53471",
    mysql: "#227093"
}

const MyProjects = () => {
    const project_1_description = useQuote<string>({
        korean: "지금 보시는 이 포트폴리오 페이지입니다. 실제 배포를 하고 보여주기 위한 프로젝트로서 전에 했던 프로젝트보다 UI/UX부터 코드 퀄리티를 많이 신경 썼습니다.CRA가 아닌  Webpack으로 바닥부터 빌드하였고 React와 Typescript로 이루어져 있으며 자주 사용하는 애니메이션들을 Custom Hook으로 직접 만들어서 사용하였습니다.",
        english : "This web portfolio page that you're seeing right now. All the other project that have made are not for real users. but since this project is for other recruiters and companies I cared about code quaility and UI UX(but with design still not that great though).This Project, I build from the very bottom with webpack and used react and typescript. and also I made a couple of custom hooks that commonly used animations."
    })

   const project_2_description = useQuote<string>({
        korean: "전 세계 코로나 감염 수, 회복 수, 사망 수의 현황판입니다. http://covid19.mathdro.id/api 에서 API를 가져왔고 ChartJS를 통해 데이터를 시각화하였습니다. 이 프로젝트는 타입스크립트를 배우면서 익숙해지기 위하여 Javasciprt로 제작된 튜토리얼을 따라가며 타입스크립트로 바꾸었습니다.",
        english : "Corona virus dashboard shows the infected, recovered and dead. I brought API data from covid19.mathdro.id/api and visualized data with ChartJS. I followed tutorial building this project and switched all javascript to typescript to get familiar with typescript. "
    })
    const project_3_description = useQuote<string>({
        korean: "기획자, 디자이너, 개발자들의 사이드 프로젝트를 위한 구인 어플리케이션입니다. MySQL와 TypeORM을 이용하여 CRUD 시스템을 구현하였습니다. 프론트에는 React를 사용하였고 Formik이라는 React의 폼 라이브러리를 사용하여 로그인 및 회원가입 양식을 작성하였습니다.",
        english : "Web site to advertise for a side project. especially for a junior developers, designers and project managers who rarely have chances to work with other people. I built CRUD system with MySQL and TypeORM. and also used React Form Library called Formik."
    })
       const project_4_description = useQuote<string>({
        korean: "친구들과 함께 채팅을 하여 싱크가 맞추어진 하나의 유튜브 영상을 볼 수 있는 어플리케이션 입니다. . SocketIO를 이용하여 채팅을 구현하고 채팅 방 마다 유튜브 API와 SocketIO를 활용한 재생, 정지 및 재생 시간 동기화를 구현했습니다. 디자인은 styled-components를 사용하였습니다.",
        english : "Real time chat and real time synchronize youtube video application. Chat system and synchronized youtube video is built with SocketIO, and put styles with styled-components"
    })

    const project_1:ProjectDetailProps = {
       img: thisProjectImg,
       title: "My Portfolio",
       description: project_1_description,
       stacks: [{id:1, name: "React", color: Color.react}, { id:2, name: "Redux", color: Color.redux}, { id: 3, name: "Typescript", color: Color.typescript}, { id: 4, name: "Webpack", color: Color.webpack}], 
       links: [ { id: 1, content: "Code in Github", link: "https://github.com/peppermint100/my-portfolio"}]
    }    
    const project_2:ProjectDetailProps = {
       img: covidProjectImg,
       title: "Covid19 Tracker",
       description: project_2_description,
       stacks: [{id:1, name: "React", color: Color.react}, { id:2, name: "Typescript", color: Color.typescript} , {id: 3, name: "ChartJS", color: Color.chartjs}], 
       links: [ { id: 1, content: "Code in Github", link: "https://github.com/peppermint100/covid-tracker"}, { id:2, content: "Deployed", link: "https://peppercovid.netlify.app/"}]
    }    
    const project_3:ProjectDetailProps = {
       img: projectWantedImg,
       title: "Side Projecter",
       description: project_3_description,
       stacks: [{ id: 4, name: "NodeJs", color: Color.nodejs}, { id: 5, name: "TypeORM", color: Color.typeorm}, {id: 6, name: "Formik", color: Color.formik}, { id: 7, name: "MySQL", color: Color.mysql}], 
       links: [ { id: 1, content: "Code in Github", link: "https://github.com/peppermint100/project-wanted"}]
    }    
    const project_4:ProjectDetailProps = {
       img: YTTImg,
       title: "Youtube Together",
       description: project_4_description,
       stacks: [{ id: 4, name: "NodeJs", color: Color.nodejs}, { id: 5, name: "SocketIO", color: Color.socketio}, {id: 6, name: "Styled-Components", color: Color.styledcomponents}], 
       links: [ { id: 1, content: "Code in Github", link: "https://github.com/peppermint100/youtubetogether"}]
    }    

    const projectsHelperText = useQuote<string>({
        korean: "웹 개발을 배우며 조금씩 혼자서 만들어왔던 프로젝트들입니다. 소프트웨어 개발에 있어서 기술을 익히기에 가장 좋은 방법은 간단한 사이드 프로젝트를 진행하는 것이라고 생각합니다. 인터넷에 널린 튜토리얼을 그대로 따라한 프로젝트 보다는 완벽하지 않더라도 직접 고민하고 트러블 슈팅에 몇 시간을 쏟아부으며 많이 배우는 것을 중심으로 진행해 왔습니다.",
        english: "These are my side project that I have made. In software development world, the best way to learn new technology is build a side project with it. rather than just following some online tutorial projects, I tried to code by myself(even though it's not perfect or best practice). I spend hours and hours fixing errors and trouble shooting." 
    })

    return (
        <div className={styles.container}>
            <section className={styles.projectsIntro}>
                <div className={styles.projectsHeading}>My Side Projects</div>
                <div className={styles.projectsHelperText}>{projectsHelperText}</div>
            </section>
            <section className={styles.projectsContainer}>
                <ProjectDetail {...project_1} />
                <ProjectDetail {...project_2}/>
                <ProjectDetail {...project_3}/>
                <ProjectDetail {...project_4}/>
            </section>
        </div>
    )
}

export default MyProjects
