import styles from './Footer.module.css'


function Footer(params) {

    return(
        
        
        <ul className = {styles.container}>
            <li className={styles.item}>
                <img 
                src='/logo-uninassau.ico' 
                alt='Logo UniNassau'
                style={{width: '40px', heigth: '40px'}} 
             /> UniNassau</li>

            
        </ul>
        
        
        


        
    )
    
}
export default Footer