import styles from './Container.module.css';

function Container ({children}) {
    return (
        <section className={styles.container}>
            {children}
            {/* irá receber trechos de código como filho do container */}
        </section>
    )
}

export default Container;