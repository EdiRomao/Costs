import styles from './ProjectCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function ProjectCard({id, name,badget, category, handleRemove}) {
    

    const remove = (e) =>{

        e.preventDefault()
        handleRemove(id)
    }
    
    return(

        <div className={styles.project_card}>
            <h4>{name}</h4>

            <p>
                <span> Orçamento:</span> Kz{badget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}>...</span> {category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to={`/project/${id}`}>

                    <BsPencil /> Editar
                </Link>
                <button type="button" onClick={remove}>
                <BsFillTrashFill /> Excluir    
                </button>
               

                    
               
                
            </div>
        </div>
    )
}

export default ProjectCard;