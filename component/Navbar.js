import Link from "next/link";
import styles from "../src/styles/Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.navbar_con}>
      <ul className={styles.navbar}>
        <li>
          <Link className={styles.nav_link} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.nav_link} href="/posts">
            Posts
          </Link>
        </li>{" "}
        <li>
          <Link className={styles.nav_link} href="/about">
            About
          </Link>
        </li>{" "}
        <li>
          <Link className={styles.nav_link} href="/products">
            Product
          </Link>
        </li>{" "}
        <li>
          <Link className={styles.nav_link} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
