"use client";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import Head from "next/head";
export default function index() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
      setPosts(products);
    };
    fetchData();
  });
  return (
    <div className={styles.products_con}>
      <Head>
        <title>Product Page</title>
      </Head>
      {posts &&
        posts.map((post, i) => (
          <div key={i} className={styles.products}>
            <img src={post.image} alt="prouct" height="200px" width="300px" />
            <div className={styles.pro_detail}>
              <h3>
                <Link href={`/products/${post.id}`}>
                  <h2 className={styles.heading}>{post.title}</h2>
                </Link>
              </h3>
              <button class={styles.button} role="button">
                {post.price} Price
              </button>{" "}
            </div>
          </div>
        ))}
    </div>
  );
}
