export interface Stack {
    id: number
    color: string
    name: string
}

export interface ProjectLink {
    id: number
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

