"use client";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../../styles/Home.module.css";
export default function Index() {
  const [product, setProduct] = useState();
  const { query } = useRouter();
  console.log(query.id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${query.id}`
        );
        const product = await res.json();
        console.log(product);
        setProduct(product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {product && (
        <div className={styles.product}>
          <img src={product.image} alt="prouct" className={styles.img} />
          <div className={styles.pro_detail}>
            <h2 className={styles.heading}>{product.title}</h2>
            <p>{product.description}</p>
            <h3>{product.category}</h3>
            <h2>{product.price} Price</h2>
            <button class={styles.button} role="button">
              {product.rating.rate}
            </button>
            <button class={styles.button} role="button">
              {product.rating.count}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
