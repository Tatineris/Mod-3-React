import React from 'react'
import styles from './SobrePage.module.css';

const SobrePage = () => {
    return(
         <div className={styles.SobrePage}>
            <main>
                <section>
                    <article className={`${styles.subcontainerPrincipal} ${styles.container}`}>
                        <div>
                            <img src="./imagens/minhaft.jpg" alt='Foto de Perfil' />
                        </div>
                        <div className={styles.informacoes}>
                            <h1 className={styles.nomeCompleto}>Tatiane Neris</h1>
                            <h2 className={styles.profissao}>Estudante de T.I</h2>
                            <p>
                                Sou uma estudante de Tecnologia da Informação, em busca de novos conhecimentos. No momento, em transcrição de carreira, me apaixonei pelos códigos e pretendo ingressar na carreira de Back-End ou FullStack. 
                            </p>
                        </div>
                    </article>
                </section>
            </main>
         </div>
    )

};

export default SobrePage;