// "use client";
import Head from "next/head";
import Link from "next/link";
const Index = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Post Page</title>
      </Head>
      <h1 style={{ textAlign: "center" }}>Blog Page</h1>
      <div
        style={{
          width: "600px",
          margin: "0 auto",
          backgroundColor: "yellowgreen",
          color: "white",
          padding: "10px",
          textAlign: "center",
        }}
      >
        {posts.map((post) => (
          <div key={post.id}>
            <h1>Id : {post.id}</h1>
            <Link href={`/posts/${[post.id]}`}>
              <h3 style={{ textDecoration: "none", color: "black" }}>
                {post.title.toUpperCase()}
              </h3>
            </Link>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
