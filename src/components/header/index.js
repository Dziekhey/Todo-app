import styles from './index.module.css';

function Header () {
    return (
        <header className = {styles.headerImage}>
            <h1 className= {styles.headerH1}>TODO</h1>
        </header>
    );
}

export default Header;