export interface PageHeader {
    title: string
}

export interface DropMenu {
    isOpen: boolean
}

export interface PendingProject {
    projectId: string
    name: string
    isActive: boolean
    problems: number
}

export interface ProjectProgress {
    projectId: string
    name: string
    advance: number
}