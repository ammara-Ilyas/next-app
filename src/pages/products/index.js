// "use client";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
export default function index({ products }) {
  return (
    <div className={styles.products_con}>
      {products.map((post, i) => (
        <div key={i} className={styles.products}>
          <Image src={post.image} alt="prouct" height="70%" width="40%" />
          <div className={styles.pro_detail}>
            <h3>
              <Link href="/products/[productItem]" as={`/products/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </h3>
            <h2>{post.price}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
