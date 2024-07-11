import type { PendingProject, ProjectProgress } from "@/interfaces/ComponentsProps";

export const pendingProjects: PendingProject[] = [
    {
        projectId: "bolsadetrabajo",
        name: "Bolsa de trabajo",
        problems: 0,
        isActive: true
    },
    {
        projectId: "teach",
        name: "TEACH",
        problems: 2,
        isActive: true
    },
    {
        projectId: "becas",
        name: "Becas",
        problems: 5,
        isActive: false
    },
    {
        projectId: "technova",
        name: "Tech nova",
        problems: 0,
        isActive: true
    }
];

export const projectsProgress: ProjectProgress[] = [
    {
        projectId: "bolsadetrabajo",
        name: "Bolsa de trabajo",
        advance: 40
    },
    {
        projectId: "teach",
        name: "TEACH",
        advance: 50
    },
    {
        projectId: "becas",
        name: "Becas",
        advance: 20
    },
    {
        projectId: "technova",
        name: "Tech nova",
        advance: 30
    }
]