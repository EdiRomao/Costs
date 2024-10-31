import { useEffect, useState } from 'react';

import styles from './ProjectForm.module.css'
import Input from '../form/Input';
import Select from '../form/Select';
import Submit from '../form/Submit';

function ProjectForm({handleSubmit, btnText,projectData}) {

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {})


    useEffect(() => {

        // aplicando a forma assincrona
        
        const fetchCategories = async () => {
            try {
              const response = await fetch("http://localhost:5000/categories", {
                method: "GET",
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              const data = await response.json();
              setCategories(data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchCategories();
        }, []);

        // codigo anterior

        /*fetch("http://localhost:5000/categories", {

        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
        })

        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))

    }, [])
    */


    const submit= (e) =>{

        e.preventDefault(); //n deixa o form executar como pag reload
        handleSubmit(project) 
        
    }

    function handleChange(e) {

        setProject({...project, [e.target.name]: e.target.value})
    }
    function handleSelect(e) {

        setProject({...project, categories:{

                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
        }
    })

    }
   
    return(

        <form onSubmit={submit} className={styles.form}>

            <div>
                <Input 
                 type="text"
                 text="Nome do projecto"
                 name="name"
                 placeholder="Insira o nome do projecto"   
                 handleOnChange={handleChange}
                 value={project.name ? project.name : ''}
                />
            </div>
            <div>
            <Input 
                 type="number"
                 text="Orçamento do projecto"
                 name="badget"
                 placeholder="Insira o orçamento total" 
                 handleOnChange={handleChange}  
                 value={project.badget ? project.badget : ''}
                />
            </div>
            <div>
                <Select  
                name="categoria_id" 
                text="seleciona a categoria"
                options={categories}
                handleOnChange={handleSelect}
                value={project.categories ? project.categories.id : ''}
                />                
            </div>
            <div>
                <Submit  text={btnText}/>
            </div>
            
        </form>
    )
    
}
export default ProjectForm;