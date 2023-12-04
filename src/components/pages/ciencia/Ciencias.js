// imports para conexão 
import {useEffect, useState} from "react";
import axios from 'axios';

// import de formatação de data
import { format } from 'date-fns';


// import de estilos
import styles from './Ciencias.module.css'


function Ciencias(params) {
    
    // conexão com a api de noticias do google

    const  [news, setNews] = useState([]);

    useEffect(()=> {
        const apiUrl = 'https://newsapi.org/v2/top-headlines?'
        const apiKey ='3ba42d5484964184aed69fefe75e86a9 ';
        const country = 'br'
        const category = 'science'
        const language = 'en'
        
        axios.get(`${apiUrl}?country=${country}&category=${category}&language=${language}&apiKey=${apiKey}`)

        .then(response => {
            setNews(response.data.articles);
        })

        .catch(error => {
        
            console.error('Erro inesperado ao buscar noticias:', error);
        });

    }, []);

    // função para formatar data

    const formatarData = (data) => {

        return format(new Date(data), 'dd/MM/yyyy HH:mm');
    };
    

    return(
        
        <div className = {styles.conteiner}>
            
            <h1 className={styles.titulo}> Ciências </h1>
            <ul className={styles.list}>
                {news.map((article, index) => (
                    <li className={styles.item} key={index}>
                        <h3>{article.title}</h3>

                        <p>{article.description}</p>

                        <p>
                            <a 
                            href={article.url} target="blank">
                                Saiba mais
                            </a> 
                        </p>

                        <p>Autor: {article.author}</p>

                        <p>Publicado em: {formatarData(article.publishedAt)}</p>
                        
                    </li>

                ))}
            
                    
        
            </ul>

            

        </div>
    );
    
};

export default Ciencias