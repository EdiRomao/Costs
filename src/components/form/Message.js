import styles from './Message.module.css'
import { useEffect, useState } from 'react'

function Message({type,msg}) {
    
    const [visible, setvisible] = useState(false)

    useEffect (() => {

        if(!msg){

            setvisible(false)
            return
        }

        setvisible(true)

        const time = setTimeout(() =>{


            setvisible(false)
        }, 3000)

        return () => clearTimeout(time)
     }, [msg])


    return(

       
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`} >{msg}</div>
            )}
        
        </>
        
        

    )
}

export default Message