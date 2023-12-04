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



    return(
        
        
        <ul className = {styles.container}>
            <li className={`${styles.item} ${styles.container}`}>
                <img 
                src='/logo-uninassau.ico' 
                alt='Logo UniNassau'
                style={{width: '40px', heigth: '40px'}} 
             /> 
              
             UniNassau
             

             {mostrarScroll && (
        <button onClick={scrollTop} className={styles.botaoRolagem}>
          Subir
        </button>
      )}
             </li>
            

            
        </ul>
        
        
        


        
    )
    
}
export default Footer