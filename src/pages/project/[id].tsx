import { IProject,ISkills,ICompany } from "@/types/project";
import { useEffect, useState } from "react";
import UIButton from "@/components/UIButton";
import { MdOutlineAccountCircle } from "react-icons/md";
import classes from "../../styles/components/project.module.scss";
import { IoNotificationsOutline } from "react-icons/io5";
import router, { useRouter } from "next/router";
import axios from "axios";
import Redact from "../../components/Redact";

const ProjectPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [project, setProject] = useState<IProject | null>(null);


    const router = useRouter();
    const { id } = router.query;


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      const handleLogout = () => {
        // Логика выхода из аккаунта
        console.log('Logout');
      };

      const handlePortfolio = () => {
        // Логика перехода на страницу портфолио
        console.log('Go to portfolio');
      };

    const openModal = () => {
        setIsModalOpen(true);
      };

      const closeModal = () => {
        setIsModalOpen(false);
      };

      useEffect(() => {
        if (id) {
          axios.get(`http://localhost:5000/projects/` + id)
            .then(response => setProject(response.data))
            .catch(error => console.error('Error:', error));
        }
      }, [id]);




    return(
        <div className={classes['Project']}>
          
            <header className={classes["Project__Header"]}>
            <img onClick={() => router.push("/")} src="/images/Full_coat_of_arms_of_Primorsky_Krai.svg" alt="" style={{cursor:"pointer",width:"70px"}}/>




              <UIButton onClick={() => router.push("/")} type="string" children='Витрина проектов'/>
              <UIButton onClick={() => router.push("/company")} type="string" children='Компании'/>
              
              <UIButton onClick={openModal} type="string" children='Инвесторам'/>

            </header>
            <div className={classes['Project__Main']}>
                <div className={classes['Project__Main-name']}>
                      <h1>{project?.p_name}</h1>
                      
                </div>
                
                <div className={classes['Project__Main__Discription']}>
                  <p>{project?.description}</p>
                </div>
                <div className={classes['Project__Main__Skills']}>
                  <p className={classes['Project__Main__Skills-list']}>
                      {project?.skills}
                  </p>
                </div>
                <div className={classes['Project__Buttons']}>
                <UIButton onClick={openModal} type="string" children='Стать участником'/>
                
                </div>

            </div>
            <Redact isOpen={isModalOpen} onClose={closeModal}
             initialValues={{
              name: project?.p_name ?? "",
              description: project?.description ?? "",
              skills: project?.skills ?? ""
            }}
            >

            </Redact>
        </div>
    )
}

export default ProjectPage;
