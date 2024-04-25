import { IProject } from "@/types/project";
import React from "react";
import Card from "./Card";
import styles from "../styles/components/projectlist.module.scss";

interface ProjectListProps {
    projects: IProject[]
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
    return (
        <div className={styles.Main__Projects}>
            {projects
                .reverse()
                .map((project) => (
                    <Card key={project.project_id} project={project} />
                ))}
        </div>
    );
};

export default ProjectList;
