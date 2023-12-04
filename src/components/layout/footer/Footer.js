<<<<<<< HEAD
import { useEffect, useState } from 'react';

import styles from './Footer.module.css'

function Footer(params) {

    const [mostrarScroll, setShowScroll] = useState(false);
    useEffect(() => {
        
        window.addEventListener('scroll', checkScrollTop);
        return function  RemoverEvento() {
          
          window.removeEventListener('scroll', checkScrollTop);
        };
      });

     
  const checkScrollTop = () => {
    if (!mostrarScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (mostrarScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

 
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



=======
import styles from './Footer.module.css'


function Footer(params) {

>>>>>>> feature1
    return(
        
        
        <ul className = {styles.container}>
<<<<<<< HEAD
            <li className={`${styles.item} ${styles.container}`}>
=======
            <li className={styles.item}>
>>>>>>> feature1
                <img 
                src='/logo-uninassau.ico' 
                alt='Logo UniNassau'
                style={{width: '40px', heigth: '40px'}} 
<<<<<<< HEAD
             /> 
              
             UniNassau
             

             {mostrarScroll && (
        <button onClick={scrollTop} className={styles.botaoRolagem}>
          Subir
        </button>
      )}
             </li>
            
=======
             /> UniNassau</li>
>>>>>>> feature1

            
        </ul>
        
        
        


        
    )
    
}
export default Footer