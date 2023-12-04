// imports para conexão 
import {useEffect, useState} from "react";
import axios from 'axios';

<<<<<<< HEAD
// import de formatação de data
import { format } from 'date-fns';

=======
>>>>>>> feature1
// import de estilos
import styles from './Inicio.module.css'


function Inicio(params) {
    
    // conexão com a api de noticias do google

    const  [news, setNews] = useState([]);

    useEffect(()=> {
        const apiUrl ='https://newsapi.org/v2/top-headlines?'
        const apiKey ='3ba42d5484964184aed69fefe75e86a9';
        const country = 'br'
        const category = 'general'
        const language = 'en'
        
        axios.get(`${apiUrl}?country=${country}&category=${category}&language=${language}&apiKey=${apiKey}`)

        .then(response => {
            setNews(response.data.articles);
        })

        .catch(error => {
        
            console.error('Erro inesperado ao buscar noticias:', error);
        });

    }, []);
    
<<<<<<< HEAD
    // função para formatar data

    const formatarData = (data) => {

        return format(new Date(data), 'dd/MM/yyyy HH:mm');
    };
   
=======
>>>>>>> feature1
    

    return(
        
        <div className = {styles.conteiner}>

            
            
            <h1 className={styles.titulo}> Principais Noticias </h1>
<<<<<<< HEAD

=======
>>>>>>> feature1
            <ul className={styles.list}>
                {news.map((article, index) => (
                    <li className={styles.item} key={index}>
                        <h3>{article.title}</h3>
<<<<<<< HEAD

                        <p>{article.description}</p>

                        <p>
                            <a href={article.url} target="blank">Saiba mais</a> 
                        </p>

                        <p>Autor: {article.author}</p>

                        <p>Publicado em: {formatarData(article.publishedAt)}</p>
=======
                        <p>{article.description}</p>
                        <p>Saiba mais: <a href={article.url} target="blank">{article.url}</a> </p>
                        <p>Autor: {article.author}</p>
                        <p>Publicado em: {article.publishedAt}</p>
>>>>>>> feature1
                        
                        
                        
                    </li>

                ))}


            
                    
        
            </ul>

            

        </div>
    );
    
};

export default Inicio