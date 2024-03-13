import { useRouter } from "next/navigation";
import styles from "../../styles/Home.module.css";
export default function Index() {
  const route = useRouter();
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <h1>Page is not found</h1>
      <button className={styles.button} onClick={() => route.push("/")}>
        Back to home
      </button>
    </div>
  );
}
