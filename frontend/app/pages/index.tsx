import React, { FC } from 'react';
import { GetStaticProps } from 'next';

type Post = {
  id: number;
  title: String;
}

type Props = {
  posts: Post[];
}

const Home: FC<Props> = (props) => {
  return (
    <div>
      <h2>Post list</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
          </tr>
        </thead>
        <tbody>
          {props.posts.map((post) =>
            <tr key={post.id}>
              <th scope="row">{post.id}</th>
              <td>{post.title}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const response = await fetch("http://api:3000/posts", { method: "GET" });
  const json = await response.json();

  return {
    props: {
      posts: json
    },
  };
}

export default Home;
