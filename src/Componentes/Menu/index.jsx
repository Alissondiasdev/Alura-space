import React from 'react'
import Home from '../../assets/icones/home-ativo.png'
import MaisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import MaisVistas from '../../assets/icones/mais-vistas-inativo.png'
import Novas from '../../assets/icones/novas-inativo.png'
import Surpreenda from '../../assets/icones/surpreenda-me-inativo.png'
import styles from '../Menu/Menu.module.scss'


 function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={Home} alt="" />
                <a href="">Inicio</a>
            </li>
            <li className={styles.menu__item}>
                <img src={MaisCurtidas} alt="" />
                <a href="">Mais Curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={MaisVistas} alt="" />
                <a href="">Mais Vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={Novas} alt="" />
                <a href="">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={Surpreenda} alt="" />
                <a href="">Surpreenda</a>
            </li>
        </ul>
    </nav>
  )
}
export default Menu
