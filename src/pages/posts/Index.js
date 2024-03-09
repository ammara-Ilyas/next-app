// "use client";
import Head from "next/head";
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
            <h3>{post.title.toUpperCase()}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;

export async function getStaticProps() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
