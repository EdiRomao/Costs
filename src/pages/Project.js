import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import Loading from '../components/layout/Loading'
import Container from '../components/layout/Container'
import styles from './Project.module.css'
import ProjectForm from '../components/project/ProjectForm'
import { type } from '@testing-library/user-event/dist/type'
import Message from '../components/form/Message'
function Project() {
        
        const {id} = useParams()
        const [project,  setProject] = useState([])
        const [showtoggleForm, setShowtoggleForm] = useState(false)
        useEffect(() =>{

            setTimeout(() =>{


                fetch(`http://localhost:5000/projects/${id}`,{

                method: 'GET',
                headers: {

                    'Content-Type': 'application/json',
                },

                })
                .then((resp) => resp.json())
                .then( (data) => {

                    setProject(data)
                })
                .catch((err) => console.log(err))   

            }, 300)
        }, [id])

        const message = ''
        function toggleProjectForm() {

            setShowtoggleForm(!showtoggleForm)
            
        }
        function editPost(project){
            
            //badget validation

            if (project.badget < project.costs) {

                //message                
            }
            fetch(`http://localhost:5000/projects/${project.id}`,{

            method: 'PATH', //alterar pela pasta
            headers: {
                'Contant-Type': 'application/json',
            },
            body: JSON.stringify(project), //mandando o projecto como texto
            })
            .then(resp => resp.json())
            .then((data) =>{

                setProject(data)
                setShowtoggleForm(false)
                //mensagem
            })
           
            .catch(err => console.log(err))

        }

        return (
        
            <>   
                {project.name ? (

                    <div className={styles.project_details}>
                        <Container customClass="column">

                                <div className={styles.details_container}>
                                    <h1> Projecto: {project.name}</h1>

                                    <button className={styles.btn} type='button' onClick={toggleProjectForm}>

                                        {!showtoggleForm ? 'Editar Projecto' : 'Fechar'}
                                    </button>

                                    {!showtoggleForm ? (
                                        
                                        <div className={styles.project_info}>
                                            <p><span>Categoria:</span>  {project.categories.name}</p>
                                            <p><span>Total de orçamento: </span> Kz {project.badget}</p>
                                            <p><span>Total utilizado:</span> Kz {project.cost}  </p>    
                                        </div>
                                    ): (

                                        <div  className={styles.project_info}>
                                            <ProjectForm 
                                            
                                                handleSubmit = {editPost}
                                                btnText = "Concluir a Edição"
                                                projectData = {project}
                                            
                                            />
                                        </div>
                                    )}

                                </div>
                        </Container>
                    </div>
                    
                ): (

                    <Loading />

                )}   
            </>
        ) 
                  
}

export default Project