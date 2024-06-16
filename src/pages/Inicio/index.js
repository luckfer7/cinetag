import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Cards";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";
import videos from 'json/db.json'
import styles from './Inicio.module.css'

function Inicio () {
    return (
        <>
            <Cabecalho />
            <Banner imagem="Home"/>
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id}/>
                })}
            </section>
            <Rodape />
        </>
        //sem esse fragment, não é possivel colocar mais que um elemento no mesmo pai.
        
    )
}

export default Inicio;