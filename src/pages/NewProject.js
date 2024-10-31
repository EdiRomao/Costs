
import styles from './NewProject.module.css'
import ProjectForm from '../components/project/ProjectForm';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function NewProject() {

    const history = useHistory();
    
    function creatPost(project) {

        //initialize cost and services

        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects',{


            method: 'POST',
            headers:{

            'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
            
        })
        .then((resp) => resp.json() )
        .then((data) => {

            console.log(data);
            history.push('/projects', {message: 'Project sucess create!'})
            //redirect para fazer depois
        }) 
        .catch((err) => console.log(err));

        
    }

    return(
        
        <div className={styles.newproject_container}>
           
            <h1>Criar projecto</h1>
            <p>Crie o seu projecto para 
               depois adicionar os serviços
            </p>
            <ProjectForm 
            handleSubmit={creatPost} 
            btnText="criar projecto"
            
            />
            
        </div>    

    )
    
}

export default NewProject;
