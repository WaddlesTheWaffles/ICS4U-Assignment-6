import styles from './FooterSection.module.css';

function FooterSection() {

    return (
        <div className={styles.footerSec}>
            <div className={styles.infoBox}>
                <h1 className={styles.inFooter}>Github</h1>
                <a className={styles.inFooter} href="https://github.com/WaddlesTheWaffles">My Github</a>
                <a className={styles.inFooter} href="https://github.com/WaddlesTheWaffles/ICS4U-Assignment-6">Website repository</a>
            </div>
            <div className={styles.infoBox}>
                <h1 className={styles.inFooter} >Contact Info</h1>
                <p class="inFooter">Name: Jayden <br /> Phone Number: 647-XXXX-XXXX</p>
            </div>
        </div>
    )
}

export default FooterSection