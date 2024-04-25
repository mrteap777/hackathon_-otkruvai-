import axios from "axios"
import { Dispatch } from "react"
import { Projects, SkillsSprav } from "../../server/dist/project/project.model"
import { Company } from "../../server/dist/project/project.model"

export const fetchProjects = () => {
    return async (dispatch: Dispatch<Projects>) => {
        try {
            const response = await axios.get('http://localhost:5000/projects')
        } catch (e) {
            
        }
    }
}
export const fetchCompany = () => {
    return async (dispatch: Dispatch<Company>) => {
        try {
            const response = await axios.get('http://localhost:5000/company')
        } catch (e) {
            
        }
    }
}
export const fetchSkills = () => {
    return async (dispatch: Dispatch<SkillsSprav>) => {
        try {
            const response = await axios.get('http://localhost:5000/skills')
        } catch (e) {
            
        }
    }
}