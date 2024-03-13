export default function id({ post }) {
  console.log(post);

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          width: "50%",
          margin: "0 auto",
          padding: "20px",
          paddingBottom: "30px",
          cursor: "pointer",
          marginTop: "20px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <h1>Id : {post.id}</h1>
        <h3 style={{ fontSize: "28px", color: "black" }}>
          {post.title.toUpperCase()}
        </h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
export async function getServerSidePaths() {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  let posts = await res.json();
  const allIds = posts.map((post) => ({
    params: { id: String(post.id) },
  }));
  return {
    paths: allIds,
    fallback: false,
  };
}

export async function getServerSideProps(context) {
  console.log(context.params.id);
  const { id } = context.params;
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  let post = await res.json();
  return {
    props: {
      post,
    },
  };
}
