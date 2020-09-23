export interface Stack {
    color: string
    name: string
}

export interface ProjectLink {
    content: string
    link: string
}

export interface ProjectDetailProps {
    img: any
    title: string
    description: string
    stacks: Stack[] 
    links: ProjectLink[]
}

