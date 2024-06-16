import { Link } from "react-router-dom";
import logo from './Logo-cinetag-branco 1.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho () {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do cinetag"></img> 
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home 
                    {/* children */}
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                    {/* children */}
                </CabecalhoLink>
            </nav>    
        </header>
    )
}

export default Cabecalho;