import styles from "./nav.module.scss";
export const Nav = () => {
  return (
    <div className={styles.nav}>
      <div>
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          ></path>
        </svg>
        <input type="text" />
      </div>

      <ul>
        <li>Categories</li>
        <li>Website Builders</li>
        <li>Today's deals</li>
      </ul>
    </div>
  );
};