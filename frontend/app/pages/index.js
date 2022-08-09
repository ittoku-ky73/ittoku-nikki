const Home = (props) => {
  return (
    <div>
      <h2>Post list</h2>
      <table>
        <tr>
          <th>id</th>
          <th>title</th>
        </tr>
        {props.posts.map((post) =>
          <tr>
            <td>{post.id}</td>
            <td>{post.title}</td>
          </tr>
        )}
      </table>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("http://api:3000/posts", { method: "GET" });
  const json = await response.json();

  return {
    props: {
      posts: json
    },
  };
}

export default Home;
