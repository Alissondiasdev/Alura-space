import Logo from '../Cabecalho/logo.png'
import Search from '../Cabecalho/search.png'
import styles from '../Cabecalho/Cabecalho.module.scss'
const Cabecalho = () => {
return(
    <header className={styles.cabecalho}>
        <img src={Logo} alt=""/>
        <div className={styles.cabecalho__container}>
            <input className={styles.cabecalho__input} type='text'/>
            <img src={Search} alt="" />
        </div>
    </header>

)
}
export default Cabecalho

