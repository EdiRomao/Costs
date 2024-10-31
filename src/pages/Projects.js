
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Message from "../components/form/Message";
import styles from './Projects.module.css';
import Container from '../components/layout/Container';
import Loading from "../components/layout/Loading";
import not_found from '../img/not_found.png';
import LinkButton from '../components/layout/LinkButton';
import ProjectCard from "../components/project/ProfectCard";
import { useState, useEffect } from "react";

//aplicando a função

function Projects() {
    
    const [projects, setprojects] = useState([])
    const [removeloading, setRemoveloading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')
    const location = useLocation()
    let message = ''

    if (location.state) {
        
        message = location.state.message
    }

    //aplicando useEffect para consumir a base de dados 
    //aplicando GET puxar os projects

    useEffect(() =>{

        setTimeout (() =>{

            fetch('http://localhost:5000/projects', {

            method: 'GET',
            headers: {

                'Content-Type': 'application/json',
            },

            })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                setprojects(data)
                setRemoveloading(true)
            })
            .catch((err) => console.log(err))

        }, 300)
        
    }, [])
    
    // function remove os projects de acordo o id

    function removeproject(id){

        fetch(`http://localhost:5000/projects/${id}`,{

                method: 'DELETE',
                headers: {

                    'Content-Type': 'application/json'
                },

            })
            .then(resp => resp.json())
            .then(data => {

                setprojects(projects.filter((project) => project.id !== id))
                setProjectMessage('projecto apagado com sucesso')

            } )
            .catch(err => console.log(err))


    }

    return(
        <div className={styles.projects_container}>
            <div className={styles.title}>
                <h1> Meus Projectos</h1>
                <LinkButton to='/newprojects' text='Criar projecto' />
            </div>
            
            {message && <Message  msg = {message} type="success" /> }
            {projectMessage && <Message  msg = {projectMessage} type="success" /> }
            <Container customClass="start">
                {projects.length > 0 &&

                    projects.map((project) => (

                        <ProjectCard  
                            id={project.id}
                            name={project.name}
                            badget = {project.badget}
                            category={project.categories.name}
                            key={project.id}
                            handleRemove={removeproject}
                            
                        />
                    ))}

                    {!removeloading && <Loading />}    
                    {removeloading && projects.length === 0 && (

                        <img className={styles.not_found} src={not_found} alt="Not Found" />
                        
                    )} 

            </Container>

        </div>
    )
}

export default Projects;