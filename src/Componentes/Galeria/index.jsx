import React from 'react'
import Tags from '../tags'
import Fotos from '../Galeria/Fotos.json'
import Styles from '../Galeria/galeria.module.scss'

import Cards from './Cards'

export default function Galeria() {
  return (
    <section className={Styles.galeria}>
        <h2 className={Styles.galeria__h2}>Navegue pela galeria</h2>
        <Tags/>
        <Cards itens={Fotos} Styles={Styles}/>
        
    </section>
  )
}
