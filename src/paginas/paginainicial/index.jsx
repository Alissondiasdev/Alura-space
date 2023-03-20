import Cabecalho from "../../Componentes/Cabecalho"
import Menu from "../../Componentes/Menu"
import Banner from '../../assets/banner.png'
import styles from '../paginainicial/Paginainicial.module.scss'

import '../../styles/estilosGlobais.scss'
import Galeria from "../../Componentes/Galeria"
import Populares from "../../Componentes/populares"

const PaginaInicial =() => {
    return(
        <>
        <Cabecalho/>
        <main>
            <section className={styles.principal}>
        <Menu/>
        <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={Banner} alt="a imagem da terra vista do espaço" />
        </div>

            </section>
            <div className={styles.galeria}>
            <Galeria/>
            <Populares/>
        </div>

        </main>
        
        
        </>
        
        
        
        ) 


    
}
export default PaginaInicial