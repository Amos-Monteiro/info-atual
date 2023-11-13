/* aqui cada um da equipe vai linkar seu contato, msm não sendo algo comum em sites de noticia, porém como é um trabalho pra faculdade já serve de ata kkk */

import { FaInstagram, FaLinkedin}from 'react-icons/fa'

function Equipe(params) {
/* vou por uma div com o nome decada um nas Classes ai vcs estilizam e colocam oq quiserem */
    return (
        <div className='Conteiner'>

        <div className="Amos">
            <p>Ola, eu sou Amós e desenvolvemos este projeto para a diciplina de Front-End Frameworks do 2° período de ADS da UniNassau.</p>

            <h3> Contatos: </h3>
            <ul>
                
                <li> <FaInstagram/></li>
                <li><FaLinkedin /></li> 
            </ul>
    
        </div>

         {/* Div de Cardoso */}
        <div className ="Cardoso">

        </div>
      {/* fim da Cardoso's Div */} 

    
        {/* Div de Jemerson */}
        <div className ="Jemerson">

        </div>
        {/* fim da Jemerson's Div */} 


        {/* Div de Ivan */}  
        <div className = 'Ivan'>

        </div> 
        {/* fim da Ivan's Div */}


        </div>
    )
    
} 
export default Equipe