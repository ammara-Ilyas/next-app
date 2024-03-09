export default function id() {
  return (
    <div>
      <h1>Posts id</h1>
    </div>
  );
}

// export async function getStaticPaths() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let posts = await res.json();

//   const path = posts.map((post) => {
//     return {
//       params: {
//         id: post.id.toString(),
//       },
//     };
//   });
//   return {
//     path,
//     fallback: false,
//   };
// }
