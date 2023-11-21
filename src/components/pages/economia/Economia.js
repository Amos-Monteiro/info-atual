// imports para conexão 
import {useEffect, useState} from "react";
import axios from 'axios';

// import de estilos
import styles from './economia.module.css'


function Economia(params) {
    
    // conexão com a api de noticias do google

    const  [news, setNews] = useState([]);

    useEffect(()=> {
        const apiUrl = 'https://newsapi.org/v2/top-headlines?'
        const apiKey ='3ba42d5484964184aed69fefe75e86a9 ';
        const country = 'br'
        const category = 'business'
        const language = 'en'
        
        axios.get(`${apiUrl}?country=${country}&category=${category}&language=${language}&apiKey=${apiKey}`)

        .then(response => {
            setNews(response.data.articles);
        })

        .catch(error => {
        
            console.error('Erro inesperado ao buscar noticias:', error);
        });

    }, []);
    

    return(
        
        <div className = {styles.conteiner}>
            
            <h1 className={styles.titulo}> Economia </h1>
            <ul className={styles.list}>
                {news.map((article, index) => (
                    <li className={styles.item} key={index}>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <p>Saiba mais: <a href={article.url} target="blank">{article.url}</a> </p>
                        <p>Autor: {article.author}</p>
                        <p>Publicado em: {article.publishedAt}</p>
                    </li>

                ))}
            
                    
        
            </ul>

            

        </div>
    );
    
};

export default Economia