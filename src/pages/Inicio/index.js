import Banner from "components/Banner";

import Card from "components/Cards";

import Titulo from "components/Titulo";
import styles from './Inicio.module.css'
import { useEffect, useState } from "react";

function Inicio () {
    const [videos, setVideos] = useState([]);

    useEffect (() => {
        fetch('https://my-json-server.typicode.com/luckfer7/cinetag-api/videos')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    }, [])
    return (
        <>
            <Banner imagem="Home"/>
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id}/>
                })}
            </section>
        </>
        //sem esse fragment, não é possivel colocar mais que um elemento no mesmo pai.
        
    )
}

export default Inicio;