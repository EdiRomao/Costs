import styles from './Home.module.css';
import savings from '../img/savings.svg';
import LinkButton from '../components/layout/LinkButton';
import Footer from '../components/layout/Footer';
import Chatbot from '../components/form/Chatbot';


function Home() {

    return(
 
        <section className={styles.home_container}>
           
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comoce a gerenciar os seus projectos agora mesmo!</p>

            <LinkButton to='/newprojects' text='Criar um projecto' />
            
            <img src={savings} alt='Costs'/>

            <Chatbot />
        </section>  
         

    )
    
}

export default Home;
