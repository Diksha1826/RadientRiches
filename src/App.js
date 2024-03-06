import { Nav } from "./components/navbar/Nav";
import styles from "./app.module.scss";
import { Footer } from "./components/footer/Footer";
import { Dealprdt } from "./components/dealprdt/Dealprdt";
import { Card } from "./components/card/card";

function App() {
  return (
    <div className={styles.App}>
      <Nav />
      <div className={styles.mainbody}>
        <div className={styles.body}>
          <h1>Best Website builders in the US</h1>
          <div className={styles.subbarone}>
            <div className={styles.subbaronefront}>
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
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                ></path>
              </svg>
              <p>Last Updated - February 22, 2020</p>
              <svg
                className={styles.iicon}
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
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                ></path>
              </svg>
              <p>Advertising Disclosure</p>
            </div>
            <div className={styles.subbaroneback}>
              <p>Top Relevant</p>
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
          <div className={styles.subbartwo}>
            <ul>
              <li>Tools</li>
              <li>AWS Builder</li>
              <li>Start Build</li>
              <li>Build Supplies</li>
              <li>Tooling</li>
              <li>BlueHoisting</li>
            </ul>
          </div>
          <div className={styles.subbarthree}>
            <p>Home</p>
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              ></path>
            </svg>
            <p>Hosting for all</p>
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              ></path>
            </svg>
            <p>Hosting</p>
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              ></path>
            </svg>
            <p>Hosting6</p>
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
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              ></path>
            </svg>
            <p>Hosting5</p>
          </div>

          <Card />

          <div className={styles.relateddeals}>
            <p className={styles.relateddealshead}>
              Related deals you might like for
            </p>
            <div className={styles.dealproducts}>
              <Dealprdt />
              <Dealprdt />
              <Dealprdt />
            </div>
          </div>

          <div className={styles.signup}>
            <p>Sign up and get exclusive special deals</p>
            <div>
              <input type="text"></input>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
