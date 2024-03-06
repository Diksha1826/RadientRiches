import styles from './footer.module.scss';
export const Footer = ()=>{
    return(
        <div className={styles.footer}>
            <div className={styles.footerone}>
                <ul>
                    <li className={styles.blod}>CATEGORIES</li>
                    <li>Web Builder</li>
                    <li>Hosting</li>
                    <li>Data Center</li>
                    <li>Robotic-Automation</li>
                </ul>
            </div>
            <div className={styles.footertwo}>
            <ul>
                    <li className={styles.blod}>CONTACT</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                    <li>Terms Of Service</li>
                    <li>Categories</li>
                    <li>About</li>
                </ul>
            </div>
            <div className={styles.footerthree}>
                <p>United States</p> 
                <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              ></path>
            </svg>

            </div>


        </div>
    )
}