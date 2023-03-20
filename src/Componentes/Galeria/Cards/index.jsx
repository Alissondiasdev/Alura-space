import React from 'react'
import Open from '../Cards/open.png'
import Favorito from './favorito.png'

export default function Cards({itens, Styles}) {
    return (
        <ul className={Styles.galeria__cards}>
            {itens.map((foto) => {
                return (

                    <li key={itens.id} className={Styles.galeria__card}>
                        <img className={Styles.galeria__imagem} src={foto.imagem} alt={foto.titulo} />
                        <p className={Styles.galeria__descricao}>{foto.titulo}</p>
                        <div>
                            <p>{foto.creditos}</p>
                            <span>
                                <img src={Favorito} alt="ícone coração de curtir" />
                                <img src={Open} alt="ícone de abrir o modal" />
                            </span>
                        </div>
                    </li>
                )

            })}

        </ul>
    )
}
