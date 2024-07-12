import Banner from 'components/Banner';
import styles from './Favorito.module.css'
import Titulo from 'components/Titulo';
import Card from 'components/Card';

function Favoritos() {
    return (
        <>
        <Banner imagem='favoritos' />
        <Titulo>
            <h1>Meus Favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            <Card id='1' titulo='Gato' capa='https://thecatapi.com/api/images/get?format=src&type=png' />
        </section>
        </>
    )
}

export default Favoritos;